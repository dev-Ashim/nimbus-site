import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { StackCards } from "@/components/StackCards";
import { MapEmbed } from "@/components/MapEmbed";
import { Stagger, StaggerItem } from "@/components/motion";
import { contact, photos } from "@/lib/content";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <StackCards>
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        text="Tell us about your facility. We’ll get back to you with a plan that fits."
        image={photos.handshake}
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section">
        <Stagger className="container contact-cards">
          <StaggerItem className="contact-card" lift>
            <span className="contact-card-icon" aria-hidden="true">☎</span>
            <h3>Call us</h3>
            {contact.phones.map((phone) => (
              <a key={phone.href} href={phone.href}>
                {phone.label}
              </a>
            ))}
          </StaggerItem>
          <StaggerItem className="contact-card" lift>
            <span className="contact-card-icon" aria-hidden="true">✉</span>
            <h3>Email us</h3>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </StaggerItem>
          <StaggerItem className="contact-card" lift>
            <span className="contact-card-icon" aria-hidden="true">⌖</span>
            <h3>Visit us</h3>
            <address>{contact.address}</address>
          </StaggerItem>
        </Stagger>
      </section>

      <Contact />

      <MapEmbed />
    </StackCards>
  );
}
