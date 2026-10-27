import type { Metadata } from "next";
import { SmartImage as Image } from "@/components/SmartImage";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { StackCards } from "@/components/StackCards";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Services } from "@/components/Services";
import { Reveal } from "@/components/motion";
import { photos, serviceGroups } from "@/lib/content";

export const metadata: Metadata = { title: "Our Services" };

export default function ServicesPage() {
  return (
    <StackCards>
      <PageHero
        eyebrow="What we do"
        title="Our services"
        text="Hard, soft, security, premium, and Jal Jeevan Mission water services, all managed by one dedicated partner."
        image={photos.siteWorkers}
        crumbs={[{ label: "Services" }]}
      />

      <section className="section">
        <div className="container group-rows">
          {serviceGroups.map((group, i) => (
            <article key={group.slug} className={`group-row${i % 2 ? " is-reversed" : ""}`}>
              <Reveal from={i % 2 ? "left" : "right"} className="group-media">
                <Image src={group.image} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
                <span className="group-number">{group.number}</span>
              </Reveal>
              <Reveal from={i % 2 ? "right" : "left"} delay={0.1} className="group-copy">
                <span className="eyebrow">{group.title}</span>
                <h2>{group.tagline}</h2>
                <p>{group.short}</p>
                <ul className="tag-list">
                  {group.items.slice(0, 4).map((item) => (
                    <li key={item.title}>{item.title}</li>
                  ))}
                </ul>
                <Link className="button" href={`/services/${group.slug}`}>
                  <span>Explore {group.title.toLowerCase()}</span> <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <Services />
      <ProcessSteps />
      <CtaBand />
    </StackCards>
  );
}
