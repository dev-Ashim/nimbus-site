import { About } from "@/components/About";
import { CallBand } from "@/components/CallBand";
import { Chairman } from "@/components/Chairman";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { SectorsCarousel } from "@/components/SectorsCarousel";
import { ServiceTeasers } from "@/components/ServiceTeasers";
import { StackCards } from "@/components/StackCards";
import { StatsBand } from "@/components/StatsBand";
import { Why } from "@/components/Why";

export default function Home() {
  return (
    <StackCards>
      <div>
        <Hero />
        <ServiceTeasers /> 
      </div>
      <About teaser />
      <StatsBand />
      <Why teaser />
      <SectorsCarousel />
      <div>
        <CallBand />
        <Chairman />
      </div>
      <CtaBand />
    </StackCards>
  );
}
