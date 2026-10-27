import Link from "next/link";
import { serviceGroups } from "@/lib/content";
import { Stagger, StaggerItem } from "./motion";

export function ServiceTeasers() {
  return (
    <section className="teasers" aria-label="Our service divisions">
      <Stagger className="container teaser-grid">
        {serviceGroups.map((group) => (
          <StaggerItem key={group.slug} className="teaser" lift>
            <Link href={`/services/${group.slug}`} className="teaser-link">
              <span className="teaser-number">{group.number}</span>
              <h3>{group.title}</h3>
              <p>{group.short}</p>
              <span className="teaser-more">
                Read more <span aria-hidden="true">→</span>
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
