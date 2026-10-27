import Link from "next/link";
import { Reveal } from "./motion";

export function Chairman() {
  return (
    <section className="quote-section" aria-label="A message from our chairman">
      <div className="container">
        <Reveal className="quote-box">
          <span className="eyebrow">A message from the chairman</span>
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <blockquote>
            At Nimbus Facility Management, we believe that achieving quality solutions and building
            life-long relationships requires us all to share the same high standards.
          </blockquote>
          <div className="quote-footer">
            <div className="quote-author">
              <strong>Chairman</strong>
              Nimbus Facility Management
            </div>
            <Link className="service-link" href="/chairman-message">
              Read the full message <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
