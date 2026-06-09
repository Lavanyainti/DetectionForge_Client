import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { openBookDemo } from "@/components/site/BookDemoDialog";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  FileText,
  GraduationCap,
  Lightbulb,
  PlayCircle,
  ClipboardCheck,
  Library,
  Building2,
  Users,
  Boxes,
  TerminalSquare,
  Tag,
  Mail,
  Sparkles,
  Compass,
} from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Detection Forge" },
      {
        name: "description",
        content:
          "Whitepapers, guides, case studies, product explainers, and operational content for detection engineering teams.",
      },
      { property: "og:title", content: "Resources — Detection Forge" },
      {
        property: "og:description",
        content:
          "A curated knowledge hub for detection validation, coverage, telemetry assurance, and program maturity.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://detection-forge-forge.lovable.app/resources",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <PageShell>
      <Hero />
      <Intro />
      <Featured />
      <Categories />
      <Topics />
      <Audience />
      <WhyExists />
      <Newsletter />
      <ClosingCTA />
    </PageShell>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,color-mix(in_oklab,var(--teal)_18%,transparent),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Resources
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Practical thinking for modern{" "}
            <span className="text-teal">detection engineering.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            Explore guides, whitepapers, product explainers, and operational
            content built for teams improving detection quality, validation,
            coverage, telemetry confidence, and program maturity.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#featured"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Explore Resources <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={openBookDemo}
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
            >
              Book a Demo
            </button>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
            For detection engineers, SOC managers, security architects, and
            security leaders looking for clearer answers — not more noise.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Intro ---------------- */
function Intro() {
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <SectionLabel icon={Library}>Knowledge hub</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              A resource hub for teams improving detection confidence.
            </h2>
          </div>
          <div className="space-y-5 text-pretty text-muted-foreground">
            <p>
              Detection programs are difficult to improve when every important
              question requires piecing together scattered tools, fragmented
              reporting, and inconsistent workflows.
            </p>
            <p>
              The Detection Forge Resources hub is designed to help teams better
              understand the operational side of detection engineering: what
              good looks like, where programs break down, and how to build a
              more measurable, trustworthy detection practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Featured ---------------- */
function Featured() {
  const items = [
    {
      format: "Whitepaper",
      icon: FileText,
      title: "The Confidence Gap in Enterprise Detection Engineering",
      desc: "Why many organizations invest in SIEM and detection content but still cannot clearly prove what is working, what is missing, and what can be trusted.",
    },
    {
      format: "Guide",
      icon: BookOpen,
      title: "A Practical Framework for Detection Validation",
      desc: "How to move from rule deployment to evidence-based validation using replay testing, telemetry review, and structured tuning workflows.",
    },
    {
      format: "Guide",
      icon: BookOpen,
      title: "Coverage Efficacy Beyond ATT&CK Mapping",
      desc: "Why nominal ATT&CK coverage is not enough — and how to think about detection strength, staleness, dependency, and business relevance.",
    },
    {
      format: "Brief",
      icon: Lightbulb,
      title: "Why Telemetry Health Is a Detection Problem",
      desc: "How stale, weak, or missing log sources quietly degrade detection quality and create invisible coverage gaps.",
    },
  ];
  return (
    <section id="featured" className="border-b border-border scroll-mt-24">
      <span id="blog" className="block scroll-mt-24" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Featured"
          title="Start with the most relevant topics."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-background p-7 transition-colors hover:border-teal/40"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-teal">
                  <it.icon className="h-3 w-3" />
                  {it.format}
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                {it.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {it.desc}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-teal">
                Read
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Categories ---------------- */
type Category = {
  key: string;
  icon: typeof FileText;
  label: string;
  desc: string;
  items: string[];
};

function Categories() {
  const categories: Category[] = [
    {
      key: "whitepapers",
      icon: FileText,
      label: "Whitepapers",
      desc: "Long-form thinking on detection assurance, coverage, governance, and operational maturity.",
      items: [
        "The Confidence Gap in Enterprise Detection Engineering",
        "Detection Assurance as a Security Operating Model",
        "The Cost of Unvalidated Detections",
        "Why Detection Programs Drift Over Time",
      ],
    },
    {
      key: "guides",
      icon: BookOpen,
      label: "Guides",
      desc: "Practical operational content for teams building repeatable detection workflows.",
      items: [
        "A Practical Framework for Detection Validation",
        "Building a Detection Lifecycle That Scales",
        "How to Measure Coverage Quality",
        "How to Tie Detections to Business Risk",
      ],
    },
    {
      key: "case-studies",
      icon: GraduationCap,
      label: "Case Studies",
      desc: "Examples of how teams improve detection confidence, coverage visibility, and operational clarity.",
      items: [
        "Improving Detection Validation Across Multiple Environments",
        "Reducing Blind Spots from Weak Telemetry",
        "Bringing Governance to Detection Engineering",
        "Moving from Rule Count to Coverage Confidence",
      ],
    },
    {
      key: "product",
      icon: Lightbulb,
      label: "Product Explainers",
      desc: "Clear product education for evaluators, champions, and buying teams.",
      items: [
        "What Detection Forge Does",
        "How Replay Validation Works",
        "Understanding Coverage Efficacy",
        "Why Log Source Assurance Matters",
        "Detection Forge for SOC Managers",
        "Detection Forge for CISOs",
      ],
    },
    {
      key: "webinars",
      icon: PlayCircle,
      label: "Webinars & Demos",
      desc: "Recorded walkthroughs, product sessions, and operational discussions.",
      items: [
        "Product Walkthrough: Detection Forge in Practice",
        "How to Operationalize Detection Validation",
        "Coverage Gaps, Telemetry Gaps, and What to Fix First",
        "Detection Assurance for Enterprise Security Teams",
      ],
    },
    {
      key: "templates",
      icon: ClipboardCheck,
      label: "Templates & Checklists",
      desc: "Lightweight tools teams can use immediately.",
      items: [
        "Detection Validation Checklist",
        "Coverage Review Template",
        "Log Source Health Review Checklist",
        "Detection Lifecycle Governance Template",
        "Detection Program Maturity Scorecard",
      ],
    },
  ];

  const [active, setActive] = useState<string>(categories[0].key);
  const current = categories.find((c) => c.key === active)!;

  return (
    <section id="documentation" className="scroll-mt-24 border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead label="By format" title="Browse by format" />

        <div className="mt-10 grid gap-8 md:grid-cols-[280px_1fr] md:gap-12">
          {/* Tabs */}
          <div className="flex flex-row gap-2 overflow-x-auto md:flex-col md:overflow-visible">
            {categories.map((c) => {
              const isActive = c.key === active;
              return (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={[
                    "group flex w-full shrink-0 items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors",
                    isActive
                      ? "border-teal/40 bg-teal/10 text-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-teal/30 hover:text-foreground",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "inline-flex h-8 w-8 items-center justify-center rounded-md border",
                      isActive
                        ? "border-teal/40 bg-teal/10 text-teal"
                        : "border-border bg-surface text-muted-foreground group-hover:text-teal",
                    ].join(" ")}
                  >
                    <c.icon className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{c.label}</span>
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="rounded-xl border border-border bg-background p-7">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-teal">
                  <current.icon className="h-3 w-3" />
                  {current.label}
                </div>
                <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
                  {current.desc}
                </p>
              </div>
            </div>
            <ul className="mt-7 grid gap-px overflow-hidden rounded-lg border border-border bg-border">
              {current.items.map((item, i) => (
                <li
                  key={item}
                  className="group flex items-center justify-between bg-background p-4 transition-colors hover:bg-surface"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] tracking-wider text-teal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-teal" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Topics ---------------- */
function Topics() {
  const topics = [
    "Detection Validation",
    "Coverage Efficacy",
    "ATT&CK Mapping",
    "Detection Lifecycle",
    "Telemetry Health",
    "Log Source Assurance",
    "Identity Analytics",
    "Detection Governance",
    "Business Risk",
    "Multi-SIEM Operations",
  ];
  return (
    <section id="research" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead label="By topic" title="Browse by topic" />
        <div className="mt-10 flex flex-wrap gap-3">
          {topics.map((t) => (
            <button
              key={t}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-teal/40 hover:bg-surface-elevated hover:text-foreground"
            >
              <Tag className="h-3.5 w-3.5 text-teal" />
              {t}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Audience ---------------- */
function Audience() {
  const roles = [
    {
      icon: TerminalSquare,
      role: "Detection Engineers",
      value:
        "Deep operational content on rule validation, workflow, coverage quality, and telemetry dependency.",
    },
    {
      icon: Users,
      role: "SOC Managers",
      value:
        "Frameworks for prioritization, governance, reporting, and improving confidence across the detection program.",
    },
    {
      icon: Boxes,
      role: "Security Architects",
      value:
        "Resources that connect telemetry design, integration quality, and visibility architecture to detection performance.",
    },
    {
      icon: Building2,
      role: "CISOs",
      value:
        "Higher-level material on detection maturity, operational trust, risk visibility, and how to evaluate whether the program is improving.",
    },
  ];
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="By reader"
          title="Built for different readers."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <article
              key={r.role}
              className="rounded-xl border border-border bg-background p-6"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-teal/30 bg-teal/10 text-teal">
                <r.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{r.role}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why this library exists ---------------- */
function WhyExists() {
  return (
    <section id="security" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <SectionLabel icon={Compass}>Why this library exists</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Better detections come from better decisions.
            </h2>
          </div>
          <div className="space-y-5 text-pretty text-muted-foreground">
            <p>
              A strong detection program is not built through more alerts or
              more dashboards alone. It is built through better validation,
              clearer visibility, stronger telemetry understanding, and better
              operational decisions.
            </p>
            <p className="text-foreground">
              The Resources hub exists to help teams get there faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Newsletter ---------------- */
function Newsletter() {
  return (
    <section id="status" className="scroll-mt-24 border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-8 md:p-14">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <SectionLabel icon={Mail}>Newsletter</SectionLabel>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Get practical detection engineering insights.
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Subscribe for new whitepapers, guides, operational checklists,
                product explainers, and updates from the Detection Forge team.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="h-11 flex-1 rounded-md border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal/40 focus:outline-none focus:ring-1 focus:ring-teal/40"
                />
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
                >
                  Subscribe <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                No noise. Just useful material for teams improving detection
                confidence and operational maturity.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Closing CTA ---------------- */
function ClosingCTA() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-8 py-16 md:px-16">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-60" />
          <div className="relative mx-auto max-w-2xl text-center">
            <SectionLabel icon={Sparkles}>See it in product</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Want to see how these ideas work in product?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Explore how Detection Forge helps teams validate detections,
              understand coverage, track telemetry health, and improve detection
              operations with more confidence.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button
                onClick={openBookDemo}
                className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/platform"
                className="inline-flex h-11 items-center rounded-md border border-border bg-background px-5 text-sm font-medium hover:bg-surface-elevated"
              >
                Explore the Platform
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- helpers ---------------- */
function SectionLabel({
  icon: Icon,
  children,
}: {
  icon: typeof Library;
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
      <Icon className="h-3 w-3 text-teal" />
      {children}
    </div>
  );
}

function SectionHead({
  label,
  title,
  sub,
}: {
  label: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-3xl">
      <SectionLabel icon={Library}>{label}</SectionLabel>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-pretty text-muted-foreground">{sub}</p>}
    </div>
  );
}
