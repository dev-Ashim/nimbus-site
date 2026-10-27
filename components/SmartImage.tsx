"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * A fill-mode next/image that shows a shimmering skeleton until the photo has loaded,
 * then fades and sharpens it into view.
 */
export function SmartImage({ onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <span className={`img-skeleton${loaded ? " is-loaded" : ""}`} aria-hidden="true" />
      <span className={`img-frame${loaded ? " is-loaded" : ""}`}>
        <Image
          {...props}
          onLoad={(event) => {
            setLoaded(true);
            onLoad?.(event);
          }}
        />
      </span>
    </>
  );
}
