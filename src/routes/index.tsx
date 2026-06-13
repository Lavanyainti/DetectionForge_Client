import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  Problem,
  Pillars,
  Capabilities,
  HowItWorks,
  Why,
  UseCases,
  Metrics,
  Integrations,
  CTA,

} from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";
import { BookDemoDialog } from "@/components/site/BookDemoDialog";
import { Toaster } from "@/components/ui/sonner";
import { FloatingIcons } from "@/components/site/FloatingIcons";
import { SignInDialog } from "@/components/site/SignInDialog";
import { UpdatePasswordDialog } from "@/components/site/UpdatePasswordDialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Detection Forge — Detection engineering platform for modern SOCs" },
      {
        name: "description",
        content:
          "Build, validate, and scale detections with confidence. Detection Forge brings rule lifecycle management, replay validation, coverage efficacy, and identity threat analytics into one engineering workflow — without moving your raw logs.",
      },
      { property: "og:title", content: "Detection Forge — The control plane for detection engineering" },
      {
        property: "og:description",
        content:
          "Rule lifecycle, replay validation, MITRE ATT&CK coverage, and identity threat analytics — built for SOC and MDR teams.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Pillars />
        <Capabilities />
        <HowItWorks />
        <Why />
        <UseCases />
        <Metrics />
        <Integrations />
        <CTA />
      </main>
      <Footer />
      <FloatingIcons/>
      <BookDemoDialog />
      <SignInDialog/>
      <UpdatePasswordDialog/>
      <Toaster />
    </div>
  );
}
