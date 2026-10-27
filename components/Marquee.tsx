export function Marquee({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <div className={`marquee${dark ? " is-dark" : ""}`}>
      {/* The list is rendered twice so the loop is seamless. */}
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item" aria-hidden={i >= items.length}>
            <span className="marquee-dot" aria-hidden="true">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
