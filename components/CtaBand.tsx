import Link from "next/link";
import { contact } from "@/lib/content";
import { Reveal } from "./motion";

export function CtaBand({
  title = "Ready to put your facility in good hands?",
  text = "Tell us about your site and we’ll design a service plan that fits your needs and budget.",
  href = "/contact",
  label = "Get a free quote",
}: {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <Reveal from="right">
          <span className="eyebrow">Let’s work together</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </Reveal>
        <Reveal from="left" delay={0.15} className="cta-actions">
          <Link className="button button-light" href={href}>
            <span>{label}</span> <span aria-hidden="true">↗</span>
          </Link>
          <a className="button button-ghost" href={contact.phones[0].href}>
            <span>Call {contact.phones[0].label}</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
