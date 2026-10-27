"use client";

import { useState } from "react";
import { contact } from "@/lib/content";

export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="map">
      {!loaded && (
        <div className="map-skeleton" aria-hidden="true">
          <span className="map-pin" />
          <span className="skeleton-line" style={{ width: 180 }} />
        </div>
      )}
      <iframe
        title="Nimbus Facility Management location"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setLoaded(true)}
        className={loaded ? "is-loaded" : undefined}
      />
    </div>
  );
}
