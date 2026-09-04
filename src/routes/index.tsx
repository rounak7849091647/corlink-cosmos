import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { VerticalNav } from "@/components/layout/VerticalNav";
import { Hero } from "@/components/sections/Hero";
import { TechRail } from "@/components/sections/TechRail";
import { AboutSplit } from "@/components/sections/AboutSplit";
import { StatsBand } from "@/components/sections/StatsBand";
import { ServiceCorridor } from "@/components/sections/ServiceCorridor";
import { HomeFeatures } from "@/components/sections/HomeFeatures";
import { WhyPillars } from "@/components/sections/WhyPillars";
import { FinalCta } from "@/components/sections/FinalCta";
import { MedicalTeaser } from "@/components/sections/MedicalTeaser";
import { OpportunitiesTeaser } from "@/components/sections/OpportunitiesTeaser";

const title = "CORLINK IT — Transform Your Digital Future";
const description =
  "Where Innovation Drives Excellence, and Your Success Is Our Mission. Mobile app development, AI, cloud and medical coding services from CORLINK IT.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <VerticalNav />
      <Hero />
      <TechRail />
      <AboutSplit />
      <StatsBand />
      <ServiceCorridor />
      <HomeFeatures />
      <WhyPillars />
      <MedicalTeaser />
      <OpportunitiesTeaser />
      <FinalCta />
    </SiteLayout>
  );
}
