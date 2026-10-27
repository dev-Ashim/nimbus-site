import type { Metadata } from "next";
import { SmartImage as Image } from "@/components/SmartImage";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { StackCards } from "@/components/StackCards";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { gallery, photos, realPhotos, workforce } from "@/lib/content";

export const metadata: Metadata = { title: "Our People" };

const commitments = [
  { title: "Continuous training", text: "Regular sessions on safety, hygiene, technical skills, and customer care." },
  { title: "Modern tools", text: "Every team member is equipped with the latest tools for the job." },
  { title: "Round-the-clock support", text: "Teams work in sync to provide dependable 24x7 coverage." },
  { title: "Safety first", text: "Clear procedures and protective equipment keep our people safe." },
];

export default function PeoplePage() {
  return (
    <StackCards>
      <PageHero
        eyebrow="About us"
        title="Our people"
        text="The trained professionals behind every clean, safe, and well-run Nimbus site."
        image={photos.highFive}
        crumbs={[{ label: "About us", href: "/about" }, { label: "Our people" }]}
      />

      <section className="section">
        <div className="container split">
          <Reveal from="right" className="split-media">
            <Image src={realPhotos.teamMeeting} alt="Nimbus managers in a planning meeting" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </Reveal>
          <Reveal from="left" className="split-copy">
            <span className="eyebrow">Our workforce</span>
            <h2>People who take pride in your spaces.</h2>
            <p>
              Our dedicated workforce includes trained housekeeping staff, professional security
              personnel, skilled technicians, and experienced supervisors who work in sync to provide
              24x7 support.
            </p>
            <p>
              We ensure every team member is equipped with the latest tools and training required to
              meet the evolving needs of modern infrastructure and client expectations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section paper">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Our teams</span>
            <h2>Four teams. One standard of excellence.</h2>
          </Reveal>
          <Stagger className="people-grid">
            {workforce.map((role, i) => (
              <StaggerItem key={role.title} className="people-card" lift>
                <span className="people-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{role.title}</h3>
                <p>{role.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Our commitment</span>
            <h2>How we support our people.</h2>
          </Reveal>
          <Stagger className="check-grid">
            {commitments.map((c) => (
              <StaggerItem key={c.title} className="check-card">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section paper">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">On site</span>
            <h2>Our teams at work.</h2>
            <p>Real Nimbus people, on real client sites, every day.</p>
          </Reveal>
          <Stagger className="gallery-grid">
            {gallery.map((photo) => (
              <StaggerItem key={photo.src} className="gallery-item">
                <div className="gallery-media" style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 680px) 50vw, 33vw" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand
        title="Want to be part of the Nimbus team?"
        text="We’re always looking for dedicated people who take pride in their work."
        href="/careers"
        label="See open roles"
      />
    </StackCards>
  );
}
