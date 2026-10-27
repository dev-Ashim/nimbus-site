import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { StackCards } from "@/components/StackCards";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { contact, serviceGroups } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceGroups.map((group) => ({ slug: group.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const group = serviceGroups.find((g) => g.slug === slug);
  return group ? { title: group.title, description: group.short } : {};
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const index = serviceGroups.findIndex((g) => g.slug === slug);
  if (index === -1) notFound();

  const group = serviceGroups[index];
  const prev = serviceGroups[(index - 1 + serviceGroups.length) % serviceGroups.length];
  const next = serviceGroups[(index + 1) % serviceGroups.length];

  return (
    <StackCards>
      <PageHero
        eyebrow={`Service ${group.number}`}
        title={group.title}
        text={group.tagline}
        image={group.cover ?? group.image}
        crumbs={[{ label: "Services", href: "/services" }, { label: group.title }]}
      />

      <section className="section">
        <div className="container detail">
          <aside className="detail-sidebar">
            <Reveal from="right" className="sidebar-box">
              <span className="sidebar-title">All services</span>
              <ul>
                {serviceGroups.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/services/${g.slug}`} className={g.slug === slug ? "is-current" : undefined}>
                      <span>{g.title}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal from="right" delay={0.1} className="sidebar-call">
              <span>Need this service?</span>
              <a href={contact.phones[0].href}>{contact.phones[0].label}</a>
              <Link className="button button-light" href="/contact">
                <span>Request a quote</span>
              </Link>
            </Reveal>
          </aside>

          <div className="detail-main">
            <Reveal>
              <span className="eyebrow">Overview</span>
              <h2>{group.tagline}</h2>
              {group.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>

            <Stagger className="highlight-row">
              {group.highlights.map((h) => (
                <StaggerItem key={h} className="highlight">
                  {h}
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal>
              <h3 className="detail-subtitle">What’s included</h3>
            </Reveal>
            <Stagger className="item-grid">
              {group.items.map((item, i) => (
                <StaggerItem key={item.title} className="item-card" lift>
                  <span className="item-num">{String(i + 1).padStart(2, "0")}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <ProcessSteps />

      <nav className="container pager" aria-label="More services">
        <Link href={`/services/${prev.slug}`} className="pager-link">
          <span>← Previous</span>
          <strong>{prev.title}</strong>
        </Link>
        <Link href={`/services/${next.slug}`} className="pager-link is-next">
          <span>Next →</span>
          <strong>{next.title}</strong>
        </Link>
      </nav>

      <CtaBand title={`Let’s talk about ${group.title.toLowerCase()} for your site.`} />
    </StackCards>
  );
}
