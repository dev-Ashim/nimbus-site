import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { StackCards } from "@/components/StackCards";
import { Values } from "@/components/Values";
import { Reveal } from "@/components/motion";
import { photos } from "@/lib/content";

export const metadata: Metadata = { title: "A Message from the Chairman" };

const paragraphs = [
  "One of the keys to success in the facilities management industry is earning the confidence, respect, and trust of both customers and employees. At Nimbus Facility Management, we believe that achieving quality solutions and building life-long relationships requires us all to share the same high standards.",
  "We understand the value and importance of your assets, which is why we are committed to delivering a comprehensive range of integrated facility management services that meet international standards.",
  "With the rapid growth of infrastructure, commercial spaces, and high-rise developments, the need for professional facility management has never been greater. Nimbus is dedicated to providing reliable, efficient, and world-class services tailored to our clients’ needs.",
  "Backed by years of experience and expertise, we apply the latest facility management practices and technologies to create safe, sustainable, and well-maintained environments.",
  "Welcome to Nimbus Facility Management, where your assets are in good hands and your spaces are managed with excellence. We look forward to serving you with the highest level of expertise and customer care.",
];

export default function ChairmanPage() {
  return (
    <StackCards>
      <PageHero
        eyebrow="About us"
        title="A message from the chairman"
        image={photos.teamTalk}
        crumbs={[{ label: "About us", href: "/about" }, { label: "Chairman’s message" }]}
      />

      <section className="section">
        <div className="container letter">
          <Reveal from="right" className="letter-side">
            <div className="letter-badge" aria-hidden="true">
              “
            </div>
            <p className="letter-pull">Your assets, our responsibility.</p>
          </Reveal>
          <div className="letter-body">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className={i === 0 ? "letter-lead" : undefined}>{p}</p>
              </Reveal>
            ))}
            <Reveal className="letter-sign">
              <strong>Chairman</strong>
              <span>Nimbus Facility Management</span>
            </Reveal>
          </div>
        </div>
      </section>

      <Values />
      <CtaBand />
    </StackCards>
  );
}
