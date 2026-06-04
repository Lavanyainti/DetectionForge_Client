import { ArrowRight, ShieldCheck, Database, Building2 } from "lucide-react";
import { ProductMockup } from "./ProductMockup";
import { openBookDemo } from "./BookDemoDialog";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,color-mix(in_oklab,var(--teal)_18%,transparent),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Detection assurance for modern SOC teams
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Prove your detections{" "}
            <span className="text-teal">work.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            Validate detections against historical SIEM data, measure ATT&CK and log-source coverage, and
            govern rule changes without moving raw logs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={openBookDemo}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#how"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
            >
              See how it works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {[
              [ShieldCheck, "Works with Splunk and Sentinel"],
              [Database, "Uses historical logs already in your environment"],
              [Building2, "Built for enterprise SOC and MDR teams"],
            ].map(([Icon, label]) => {
              const I = Icon as typeof ShieldCheck;
              return (
                <span key={label as string} className="inline-flex items-center gap-1.5">
                  <I className="h-3.5 w-3.5 text-teal" /> {label as string}
                </span>
              );
            })}
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute -inset-x-8 -inset-y-8 -z-10 rounded-3xl bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,color-mix(in_oklab,var(--teal)_10%,transparent),transparent_70%)]" />
          <ProductMockup />
        </div>
      </div>
    </section>
  );
}
