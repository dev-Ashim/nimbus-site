import { values } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "./motion";

export function Values() {
  return (
    <section className="section values-section" id="values">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Our core values</span>
          <h2>Good service starts with good values.</h2>
          <p>
            One of the keys to success in facilities management is earning the confidence, respect,
            and trust of both customers and employees.
          </p>
        </Reveal>
        <Stagger className="values-grid">
          {values.map((value) => (
            <StaggerItem key={value.title} className="value-card" lift>
              <span className="value-icon" aria-hidden="true">
                {value.icon}
              </span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
