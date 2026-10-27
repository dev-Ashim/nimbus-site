import type { Metadata } from "next";
import { SmartImage as Image } from "@/components/SmartImage";
import { CtaBand } from "@/components/CtaBand";
import { Marquee } from "@/components/Marquee";
import { PageHero } from "@/components/PageHero";
import { StackCards } from "@/components/StackCards";
import { StatsBand } from "@/components/StatsBand";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { photos, sectors, whyPoints } from "@/lib/content";

export const metadata: Metadata = { title: "Our Clients" };

export default function ClientsPage() {
  return (
    <StackCards>
      <PageHero
        eyebrow="Portfolio"
        title="Our clients"
        text="Well-known multinational companies and organizations from every sector trust Nimbus with their spaces."
        image={photos.skyline}
        crumbs={[{ label: "Clients" }]}
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Sectors we serve</span>
            <h2>Trusted across every kind of facility.</h2>
            <p>
              Every sector has its own needs. We tailor our teams, schedules, and standards to fit
              yours.
            </p>
          </Reveal>
          <Stagger className="sector-grid">
            {sectors.map((sector, i) => (
              <StaggerItem key={sector.title} className="sector-tile">
                <Image src={sector.image} alt={sector.title} fill sizes="(max-width: 680px) 100vw, 33vw" />
                <div className="sector-overlay" />
                <div className="sector-text">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{sector.title}</h3>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Marquee items={sectors.map((s) => s.title)} />

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">What our clients get</span>
            <h2>Value you can measure.</h2>
          </Reveal>
          <Stagger className="check-grid">
            {whyPoints.map((point) => (
              <StaggerItem key={point.title} className="check-card">
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <StatsBand />
      <CtaBand title="Join the organizations that trust Nimbus." />
    </StackCards>
  );
}
