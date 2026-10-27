import Image from "next/image";
import Link from "next/link";

// Horizontal logo lockup. `light` is the white-text version for dark backgrounds.
export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Nimbus Facility Management home">
      <Image
        src={light ? "/brand/logo-horizontal-light.png" : "/brand/logo-horizontal.png"}
        alt="Nimbus Facility Management"
        width={1396}
        height={297}
        priority={!light}
        className="brand-logo"
      />
    </Link>
  );
}
