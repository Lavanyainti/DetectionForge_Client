import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { openBookDemo } from "@/components/site/BookDemoDialog";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Eye,
  ShieldCheck,
  Building2,
  TerminalSquare,
  Users,
  Boxes,
  Briefcase,
  Compass,
  Target,
  FileCheck,
  Lightbulb,
} from "lucide-react";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — Detection Forge" },
      {
        name: "description",
        content:
          "About Detection Forge — the team building the engineering layer for modern detection programs.",
      },
      { property: "og:title", content: "Company — Detection Forge" },
      {
        property: "og:description",
        content: "Our mission, customers, careers, and contact.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://detection-forge-forge.lovable.app/company",
      },
    ],
  }),
  component: CompanyPage,
});

function CompanyPage() {
  return (
    <PageShell>
      <Hero />
      <WhyExist />
      <Beliefs />
      <WhatBuilding />
      <WhyNow />
      <WhoFor />
      <HowThink />
      <Direction />
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
            Company
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Built around one belief: detections should be{" "}
            <span className="text-teal">provable.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            Detection Forge exists to help security teams bring structure,
            confidence, and engineering discipline to detection operations. The
            company is focused on one core problem: organizations invest heavily
            in detections, SIEMs, and telemetry, but still struggle to prove what
            is working, what is missing, and what can be trusted.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={openBookDemo}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
            >
              Explore the Platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why we exist ---------------- */
function WhyExist() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <SectionLabel icon={Compass}>Why we exist</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Most security teams are not short on tools. They are short on
              clarity.
            </h2>
          </div>
          <div className="space-y-5 text-pretty text-muted-foreground">
            <p>
              They have rules across multiple systems, uneven validation
              practices, telemetry gaps that weaken detections silently, and
              limited ways to show whether the detection program is improving in
              a measurable way. Detection Forge was created to address that gap.
            </p>
            <p>
              The company’s mission is to help teams move from scattered
              detection operations to a more structured, evidence-based, and
              operationally mature model.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Beliefs ---------------- */
function Beliefs() {
  const beliefs = [
    {
      icon: FileCheck,
      title: "Detections should be validated, not assumed",
      desc: "A rule in production is not proof it works. Validation should be continuous, evidence-based, and tied to real telemetry.",
    },
    {
      icon: BarChart3,
      title: "Coverage should be measurable, not nominal",
      desc: "Mapping a detection to a technique is not the same as proving it defends against that technique. Coverage needs depth, not just labels.",
    },
    {
      icon: Eye,
      title: "Telemetry dependencies should be visible, not hidden",
      desc: "Every detection relies on specific data sources. When those sources change, degrade, or disappear, the detection weakens — often without warning.",
    },
    {
      icon: ShieldCheck,
      title: "Detection workflows should be governed, not improvised",
      desc: "Authoring, review, deployment, tuning, and retirement should follow a repeatable process — not ad hoc decisions and tribal knowledge.",
    },
    {
      icon: Building2,
      title: "Security leaders should understand detection posture",
      desc: "CISOs and SOC managers need clear, defensible answers about what is covered, what is validated, and what is at risk — not fragmented reports.",
    },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="What we believe"
          title="Detection engineering deserves the same rigor as software engineering."
          sub="A detection should not be treated as a one-time query that disappears into production. It should be built, reviewed, validated, measured, tuned, governed, and improved over time."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((b, i) => (
            <article
              key={b.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-6 transition-colors hover:border-teal/40"
            >
              <div className="absolute right-4 top-4 font-mono text-[10px] text-muted-foreground">
                0{i + 1}
              </div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-teal/30 bg-teal/10 text-teal">
                <b.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- What we are building ---------------- */
function WhatBuilding() {
  const themes = [
    "Structured detection lifecycle workflows",
    "Validation against telemetry and emulation workflows",
    "ATT&CK and coverage visibility",
    "Telemetry and log-source assurance",
    "Identity-focused detection assurance",
    "Risk-aware prioritization",
    "Multi-environment operational coordination",
  ];
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="What we are building"
          title="A control plane for detection assurance."
        />
        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div className="space-y-5 text-pretty text-muted-foreground">
            <p>
              Detection Forge is building a platform that helps security teams
              manage the full operational reality of detection engineering.
            </p>
            <p className="text-foreground">
              The aim is not to replace the SIEM. It is to make the detection
              program around it more explainable, measurable, and trustworthy.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border">
            {themes.map((t) => (
              <li key={t} className="bg-background p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <p className="text-sm text-foreground">{t}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why it matters now ---------------- */
function WhyNow() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <SectionLabel icon={Target}>Why it matters now</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Detection programs are getting harder to trust.
            </h2>
          </div>
          <div className="space-y-5 text-pretty text-muted-foreground">
            <p>
              Security teams are expected to manage larger rule sets, more
              telemetry sources, more detection formats, more environments, and
              higher expectations from leadership — often without the
              operational systems needed to keep that program understandable and
              reliable.
            </p>
            <p>
              That makes detection maturity harder to maintain at the exact
              moment when it matters more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Who we build for ---------------- */
function WhoFor() {
  const roles = [
    {
      icon: TerminalSquare,
      role: "Detection Engineers",
      value:
        "Need evidence, workflow, and control over rule quality and validation.",
    },
    {
      icon: Users,
      role: "SOC Managers",
      value:
        "Need a clearer view of what is covered, what is weak, and where the team should focus next.",
    },
    {
      icon: Boxes,
      role: "Security Architects",
      value:
        "Need to understand telemetry dependencies, visibility gaps, and how detection strategy maps to the environment.",
    },
    {
      icon: Building2,
      role: "CISOs",
      value:
        "Need to know whether the organization’s detection posture is trustworthy, improving, and aligned to business priorities.",
    },
  ];
  return (
    <section id="customers" className="scroll-mt-24 border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Who we build for"
          title="Built for the teams responsible for detection outcomes."
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

/* ---------------- How we think ---------------- */
function HowThink() {
  const points = [
    "Teams already have SIEMs, logs, and detection content",
    "The missing layer is assurance, structure, and operational clarity",
    "Good detection programs are not defined by rule count alone",
    "Confidence comes from validation, evidence, governance, and measurable coverage",
    "Security buyers do not need more noise; they need better answers",
  ];
  return (
    <section id="press" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <SectionLabel icon={Lightbulb}>How we think</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              How we think about the market.
            </h2>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border">
            {points.map((p, i) => (
              <li key={p} className="bg-background p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 font-mono text-[10px] tracking-wider text-teal">
                    0{i + 1}
                  </div>
                  <p className="text-sm text-foreground">{p}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Company direction ---------------- */
function Direction() {
  const questions = [
    "What is covered?",
    "What is missing?",
    "What is validated?",
    "What is degrading?",
    "What depends on which telemetry?",
    "What should be fixed first?",
  ];
  return (
    <section id="careers" className="scroll-mt-24 border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Company direction"
          title="The questions shaping the company."
          sub="Detection Forge is focused on helping organizations answer a simple but difficult set of questions:"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {questions.map((q, i) => (
            <div
              key={q}
              className="flex items-center gap-4 rounded-xl border border-border bg-background p-6"
            >
              <div className="font-mono text-xs tracking-wider text-teal">
                0{i + 1}
              </div>
              <div className="text-base font-semibold">{q}</div>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-pretty text-muted-foreground">
          That framing shapes the product, the workflow, and the company’s
          long-term direction.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Closing CTA ---------------- */
function ClosingCTA() {
  return (
    <section id="contact" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-8 py-16 md:px-16">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-60" />
          <div className="relative mx-auto max-w-2xl text-center">
            <SectionLabel icon={Briefcase}>Get in touch</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Building for teams that need confidence, not assumptions.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Detection Forge is creating a more structured way to build,
              validate, govern, and improve detections at scale.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button
                onClick={openBookDemo}
                className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="mailto:hello@detectionforge.com"
                className="inline-flex h-11 items-center rounded-md border border-border bg-background px-5 text-sm font-medium hover:bg-surface-elevated"
              >
                Contact Us
              </a>
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
  icon: typeof Briefcase;
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
    <div className="max-w-2xl">
      <div className="font-mono text-xs uppercase tracking-wider text-teal">
        {label}
      </div>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-pretty text-muted-foreground">{sub}</p>}
    </div>
  );
}
