import type { Metadata } from "next";
import Link from "next/link";
import { About } from "@/components/About";
import { CtaBand } from "@/components/CtaBand";
import { Mission } from "@/components/Mission";
import { PageHero } from "@/components/PageHero";
import { StackCards } from "@/components/StackCards";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Values } from "@/components/Values";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { photos, serviceGroups } from "@/lib/content";

export const metadata: Metadata = { title: "About Nimbus" };

export default function AboutPage() {
  return (
    <StackCards>
      <PageHero
        eyebrow="About us"
        title="About Nimbus"
        text="A dynamic, forward-thinking facility management company driven by a commitment to excellence."
        image={photos.meetingRoom}
        crumbs={[{ label: "About us" }]}
      />
      <About />
      <Mission />

      <section className="section paper">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">What we do</span>
            <h2>A comprehensive suite of services.</h2>
            <p>
              Five service divisions, one dedicated team, and a single point of contact for
              everything your facility needs.
            </p>
          </Reveal>
          <Stagger className="division-list">
            {serviceGroups.map((group) => (
              <StaggerItem key={group.slug}>
                <Link href={`/services/${group.slug}`} className="division-row">
                  <span className="division-num">{group.number}</span>
                  <span className="division-title">{group.title}</span>
                  <span className="division-text">{group.short}</span>
                  <span className="division-arrow" aria-hidden="true">→</span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <ProcessSteps />
      <Values />
      <CtaBand />
    </StackCards>
  );
}
