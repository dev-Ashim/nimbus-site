import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StackCards } from "@/components/StackCards";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { careerRoles, contact, photos } from "@/lib/content";

export const metadata: Metadata = { title: "Careers" };

const perks = [
  { icon: "✦", title: "Training that grows you", text: "Regular skill, safety, and customer-care training for every role." },
  { icon: "◎", title: "A team that has your back", text: "Supportive supervisors and colleagues who work in sync." },
  { icon: "◇", title: "Stable, steady work", text: "Long-term placements with respected organizations." },
  { icon: "❋", title: "Room to move up", text: "Clear paths from associate to supervisor and beyond." },
];

export default function CareersPage() {
  return (
    <StackCards>
      <PageHero
        eyebrow="Join us"
        title="Careers at Nimbus"
        text="Build a rewarding career with a team that takes pride in every space it cares for."
        image={photos.workspace}
        crumbs={[{ label: "Careers" }]}
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Why work with us</span>
            <h2>A place to learn, grow, and belong.</h2>
          </Reveal>
          <Stagger className="values-grid four">
            {perks.map((perk) => (
              <StaggerItem key={perk.title} className="value-card" lift>
                <span className="value-icon" aria-hidden="true">
                  {perk.icon}
                </span>
                <h3>{perk.title}</h3>
                <p>{perk.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section paper">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Roles we hire for</span>
            <h2>Find your place on the team.</h2>
            <p>
              We regularly hire for the roles below. Send your CV and the role you’re interested in,
              and our team will be in touch.
            </p>
          </Reveal>
          <Stagger className="role-list">
            {careerRoles.map((role) => (
              <StaggerItem key={role.title}>
                <a
                  className="role-row"
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
                >
                  <span className="role-title">{role.title}</span>
                  <span className="role-type">{role.type}</span>
                  <span className="role-apply">
                    Apply <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </StackCards>
  );
}
