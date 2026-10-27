import Image from "next/image";
import Link from "next/link";
import { contact, serviceGroups } from "@/lib/content";
import { Brand } from "./Brand";
import { Marquee } from "./Marquee";

const company = [
  { href: "/about", label: "About Nimbus" },
  { href: "/why-nimbus", label: "Why Nimbus" },
  { href: "/chairman-message", label: "Chairman’s message" },
  { href: "/our-people", label: "Our people" },
  { href: "/clients", label: "Clients" },
  { href: "/careers", label: "Careers" },
];

export function Footer() {
  return (
    <footer className="footer">
      <Marquee
        dark
        items={["Housekeeping", "Security", "MEP maintenance", "Pest control", "Landscaping", "Facility audits", "Front desk", "Green cleaning"]}
      />
      <div className="container footer-grid">
        <div>
          <Brand light />
          <p className="footer-tagline">
            Your assets, our responsibility. Integrated facility management services delivered with
            precision, professionalism, and passion.
          </p>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <ul>
            {company.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <ul>
            {serviceGroups.map((group) => (
              <li key={group.slug}>
                <Link href={`/services/${group.slug}`}>{group.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="footer-title">Get in touch</span>
          <ul>
            {contact.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href}>{phone.label}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
          </ul>
          <address>{contact.address}</address>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} Nimbus Facility Management. All rights reserved.{" "}
          <Link href="/contact">Contact us →</Link>
        </p>
        <a
          className="footer-credit"
          href="https://upgrate.in/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Powered by Upgrate (opens upgrate.in)"
        >
          <span className="footer-credit-label">Powered by</span>
          <span className="footer-credit-chip">
            <Image src="/brand/upgrate-logo.png" alt="Upgrate" width={461} height={176} />
            <span className="footer-credit-arrow" aria-hidden="true">↗</span>
          </span>
        </a>
      </div>
    </footer>
  );
}
