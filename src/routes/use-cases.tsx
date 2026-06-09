import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { openBookDemo } from "@/components/site/BookDemoDialog";
import {
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  Target,
  GitBranch,
  Database,
  ShieldCheck,
  Workflow,
  Fingerprint,
  BarChart3,
  TerminalSquare,
  Users,
  Boxes,
  Building2,
  Briefcase,
} from "lucide-react";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use Cases — Detection Forge" },
      {
        name: "description",
        content:
          "Detection Forge use cases: validation, coverage visibility, lifecycle management, telemetry assurance, governance, multi-SIEM coordination, identity detection, and risk-based prioritization.",
      },
      { property: "og:title", content: "Use Cases — Detection Forge" },
      {
        property: "og:description",
        content:
          "Where Detection Forge creates operational clarity for security teams.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: UseCasesPage,
});

function UseCasesPage() {
  return (
    <PageShell>
      <Hero />
      <Intro />
      <CoreUseCases />
      <TeamSection />
      <WhyMatters />
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
            Operational use cases
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Where Detection Forge creates{" "}
            <span className="text-teal">operational clarity.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            Detection Forge helps security teams move from scattered detections
            and partial visibility to a structured, measurable detection
            program. Whether the challenge is validation, coverage gaps,
            telemetry confidence, or detection governance, the platform gives
            teams a clearer way to understand what is working, what is missing,
            and what to improve next.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={openBookDemo}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/platform"
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

/* ---------------- Intro ---------------- */
function Intro() {
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <SectionLabel icon={Briefcase}>Use case intro</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Built for the moments where detection maturity breaks down.
            </h2>
          </div>
          <div className="space-y-5 text-pretty text-muted-foreground">
            <p>
              Security teams do not buy detection engineering platforms because
              they need more dashboards. They buy them because they need clearer
              answers, less operational ambiguity, and more confidence in the
              detections they already depend on.
            </p>
            <p>
              Detection Forge is built for the moments where detection maturity
              breaks down: when rules exist but are not validated, when coverage
              looks better on paper than in reality, when telemetry gaps quietly
              weaken detections, and when teams cannot clearly explain what is
              protecting the business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Core Use Cases ---------------- */
function CoreUseCases() {
  const cases = [
    {
      icon: PlayCircle,
      title: "Detection Validation",
      body: "Replay historical telemetry, inspect validation evidence, compare runs, and verify that rule logic still behaves as expected.",
      bullets: [
        "validate new rules before production rollout",
        "confirm updated logic still performs correctly",
        "reduce silent failures caused by stale or broken detections",
        "give engineers evidence instead of intuition",
      ],
    },
    {
      icon: Target,
      title: "ATT&CK and Coverage Visibility",
      body: "Go beyond ATT&CK mapping alone by measuring coverage quality, identifying gaps, and separating nominal coverage from real coverage.",
      bullets: [
        "identify uncovered tactics and techniques",
        "highlight weak, stale, or low-confidence detections",
        "understand where coverage looks complete but quality is poor",
        "prioritize coverage improvements by relevance",
      ],
    },
    {
      icon: GitBranch,
      title: "Detection Lifecycle Management",
      body: "Bring structure to the lifecycle from draft and review through validation, approval, deployment, tuning, and retirement.",
      bullets: [
        "introduce repeatable workflow to detection engineering",
        "improve ownership and change accountability",
        "reduce confusion around rule status and readiness",
        "create a system of record for detection operations",
      ],
    },
    {
      icon: Database,
      title: "Telemetry and Log-Source Assurance",
      body: "See which detections depend on which telemetry sources, what is healthy, what is missing, and what degrades when a source becomes weak or unavailable.",
      bullets: [
        "expose hidden telemetry dependencies",
        "find missing or stale log sources",
        "understand blast radius when a source goes dark",
        "tie telemetry health to detection quality",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Detection Program Governance",
      body: "Track versions, approvals, evidence, validation history, confidence, and ownership in one operational system.",
      bullets: [
        "improve auditability and control",
        "make approvals and changes visible",
        "reduce knowledge loss across teams",
        "help managers understand operational health",
      ],
    },
    {
      icon: Workflow,
      title: "Multi-SIEM and Multi-Environment Coordination",
      body: "Manage detections across multiple environments while keeping validation, governance, and lifecycle visibility consistent.",
      bullets: [
        "standardize workflow across SIEMs",
        "reduce operational fragmentation",
        "improve consistency across teams and environments",
        "keep oversight centralized while execution stays distributed",
      ],
    },
    {
      icon: Fingerprint,
      title: "Identity-Focused Detection Assurance",
      body: "Understand whether identity attack paths are truly covered and whether the supporting telemetry is healthy enough to trust.",
      bullets: [
        "measure privileged identity coverage",
        "identify gaps in identity-related detections",
        "track telemetry health for identity use cases",
        "improve confidence in identity threat monitoring",
      ],
    },
    {
      icon: BarChart3,
      title: "Risk-Based Detection Prioritization",
      body: "Map coverage and detection quality to business-critical assets, attack paths, and operational priorities so teams can focus effort where it matters.",
      bullets: [
        "prioritize work by business risk",
        "improve executive communication",
        "show where critical areas are under-protected",
        "align engineering effort to meaningful outcomes",
      ],
    },
  ];

  return (
    <section className="border-b border-border">
      <span id="mdr-mssp" className="block scroll-mt-24" aria-hidden />
      <span id="forensics" className="block scroll-mt-24" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Core use cases"
          title="Eight operational situations. One clearer answer."
          sub="Detection Forge connects platform capabilities to the real problems security teams face every day."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {cases.map((c, i) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-6 transition-colors hover:border-teal/40"
            >
              <div className="absolute right-4 top-4 font-mono text-[10px] text-muted-foreground">
                0{i + 1}
              </div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-teal/30 bg-teal/10 text-teal">
                <c.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              <ul className="mt-4 space-y-2">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Team Section ---------------- */
function TeamSection() {
  const roles = [
    {
      icon: TerminalSquare,
      slug: "detection-engineers",
      role: "Detection Engineers",
      value:
        "Validate logic, inspect evidence, and improve detection quality with a structured engineering workflow instead of ad hoc testing.",
    },
    {
      icon: Users,
      slug: "soc-teams",
      role: "SOC Managers",
      value:
        "See what is covered, weak, stale, or needs attention — across teams, SIEMs, and environments — in one operational view.",
    },
    {
      icon: Boxes,
      slug: "security-architects",
      role: "Security Architects",
      value:
        "Understand telemetry dependencies, architecture-level gaps, and whether the detection stack holds up as the environment changes.",
    },
    {
      icon: Building2,
      slug: "security-leaders",
      role: "Security Leaders (CISOs)",
      value:
        "Understand confidence, coverage, and risk exposure clearly — with defensible evidence instead of status reports and rule counts.",
    },
  ];

  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Teams"
          title="Different teams. Shared operational questions."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <article
              key={r.role}
              id={r.slug}
              className="scroll-mt-24 rounded-xl border border-border bg-background p-6"
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

/* ---------------- Why It Matters ---------------- */
function WhyMatters() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <SectionLabel icon={ShieldCheck}>Why this matters</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Detection maturity is not measured by rule count.
            </h2>
          </div>
          <div className="space-y-5 text-pretty text-muted-foreground">
            <p>
              A mature detection program is not defined by how many rules it
              has. It is defined by whether the team can explain what those
              detections cover, whether they are validated, what telemetry they
              depend on, and how confidently they protect the business.
            </p>
            <p>
              Detection Forge is designed for the operational reality behind
              those questions.
            </p>
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
            <SectionLabel icon={Briefcase}>See Detection Forge</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              See the use cases in a working product.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Detection Forge helps teams validate detections, improve coverage,
              strengthen telemetry confidence, and bring discipline to detection
              engineering at scale.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button
                onClick={openBookDemo}
                className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/platform"
                className="inline-flex h-11 items-center rounded-md border border-border bg-background px-5 text-sm font-medium hover:bg-surface-elevated"
              >
                See the Platform
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
  icon: typeof PlayCircle;
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
