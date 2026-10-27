import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { StackCards } from "@/components/StackCards";
import { StatsBand } from "@/components/StatsBand";
import { Why } from "@/components/Why";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { kpis, photos, pillars } from "@/lib/content";

export const metadata: Metadata = { title: "Why Nimbus" };

export default function WhyPage() {
  return (
    <StackCards>
      <PageHero
        eyebrow="About us"
        title="Why Nimbus"
        text="Smart. Strategic. Efficient. Reliable. Innovative."
        image={photos.officeHall}
        crumbs={[{ label: "About us", href: "/about" }, { label: "Why Nimbus" }]}
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Five reasons</span>
            <h2>What makes Nimbus different.</h2>
            <p>
              We help organizations stay competitive by turning facility management into a strategic
              advantage.
            </p>
          </Reveal>
          <Stagger className="pillar-list">
            {pillars.map((pillar, i) => (
              <StaggerItem key={pillar.word} className="pillar">
                <span className="pillar-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{pillar.word}.</h3>
                <p>{pillar.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Why />

      <section className="section">
        <div className="container kpi-grid">
          <Reveal from="right" className="section-heading">
            <span className="eyebrow">Measurable value</span>
            <h2>KPIs that matter to your business.</h2>
            <p>
              We collaborate with your HR, IT, and operations teams to develop strategically relevant
              KPIs that track the outcomes you care about most.
            </p>
          </Reveal>
          <Stagger className="kpi-list">
            {kpis.map((kpi, i) => (
              <StaggerItem key={kpi} className="kpi" lift>
                <span className="kpi-num">{String(i + 1).padStart(2, "0")}</span>
                <p>{kpi}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <StatsBand />
      <CtaBand title="See what Nimbus can do for your facility." />
    </StackCards>
  );
}
