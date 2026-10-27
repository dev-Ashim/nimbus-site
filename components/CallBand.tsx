import { contact } from "@/lib/content";
import { Reveal } from "./motion";

export function CallBand() {
  return (
    <section className="call-band">
      <Reveal className="container call-inner">
        <span className="call-icon" aria-hidden="true">
          ☎
        </span>
        <div>
          <span className="call-label">Need help with your facility? Call us anytime</span>
          <a className="call-number" href={contact.phones[0].href}>
            {contact.phones[0].label}
          </a>
        </div>
        <a className="button button-navy" href={`mailto:${contact.email}`}>
          <span>Email our team</span> <span aria-hidden="true">→</span>
        </a>
      </Reveal>
    </section>
  );
}
