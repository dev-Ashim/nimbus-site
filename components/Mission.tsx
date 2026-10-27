import { Reveal } from "./motion";

export function Mission() {
  return (
    <section className="mission-section" aria-label="Our mission and vision">
      <div className="container mission-grid">
        <Reveal from="right" className="mission-card">
          <span className="mission-index">01</span>
          <span className="eyebrow">Our mission</span>
          <p>
            To deliver reliable, cost-effective, and high-quality facility management services that
            exceed client expectations while ensuring the highest standards of safety, hygiene, and
            sustainability.
          </p>
        </Reveal>
        <Reveal from="left" delay={0.12} className="mission-card is-orange">
          <span className="mission-index">02</span>
          <span className="eyebrow">Our vision</span>
          <p>
            To be India’s most preferred facility management partner, recognized for our
            innovation, ethical practices, and commitment to operational excellence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
