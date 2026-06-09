export type SubPage = {
  slug: string;
  label: string;
  title: string;
  description: string;
  items: { title: string; desc: string }[];
};

export type Section = {
  key: string;
  title: string;
  basePath: string;
  pages: SubPage[];
};

export const SECTIONS: Section[] = [
  {
    key: "platform",
    title: "Platform",
    basePath: "/platform",
    pages: [
      {
        slug: "detection-lifecycle",
        label: "Detection lifecycle",
        title: "Detection lifecycle management",
        description: "Author, version, review, approve, and retire every detection in a single engineering workflow.",
        items: [
          { title: "Author & import", desc: "Write Sigma, IOA, and correlation rules — or import from your SIEM." },
          { title: "Version control", desc: "Git-like history for every rule, with diffs and rollbacks." },
          { title: "Reviews & approvals", desc: "Structured approval gates before content reaches production." },
          { title: "Retirement", desc: "Track deprecated rules and the reasons they were retired." },
        ],
      },
      {
        slug: "replay-validation",
        label: "Replay validation",
        title: "Replay validation without log movement",
        description: "Test detections against historical SIEM data in-place — no costly re-ingestion or copies.",
        items: [
          { title: "In-place replay", desc: "Validate rules against historical data where it already lives." },
          { title: "Match inspection", desc: "Review matches, missed anomalies, and false positives." },
          { title: "Regression safety", desc: "Catch rule regressions before they hit production." },
        ],
      },
      {
        slug: "coverage-efficacy",
        label: "Coverage efficacy",
        title: "Coverage efficacy you can defend",
        description: "Quantify gaps across detections, log sources, and risk surfaces — and report them upward.",
        items: [
          { title: "ATT&CK heatmaps", desc: "Technique-level coverage with diffs over time." },
          { title: "Log-source coverage", desc: "Confirm the right log types are flowing per tenant." },
          { title: "Board-ready reporting", desc: "Coverage metrics aligned to business risk." },
        ],
      },
      {
        slug: "identity-analytics",
        label: "Identity analytics",
        title: "Identity threat analytics",
        description: "Behavioral context for users, sessions, and privilege paths across your environment.",
        items: [
          { title: "Privilege misuse", desc: "Detect suspicious privilege escalation and use." },
          { title: "Lateral movement", desc: "Surface session and access anomalies across identities." },
          { title: "Risk scoring", desc: "Identity-centric risk scores feed detection logic." },
        ],
      },
      {
        slug: "risk-based-detections",
        label: "Risk-based detections",
        title: "Risk-based detections",
        description: "Prioritize detections by business risk, adversary behavior, and exposure context — not rule count.",
        items: [
          { title: "Risk scoring", desc: "Score detections by impact and adversary alignment." },
          { title: "Coverage prioritization", desc: "Focus engineering effort where risk is highest." },
          { title: "Outcome tracking", desc: "Connect detection investment to risk reduction." },
        ],
      },
    ],
  },
  {
    key: "use-cases",
    title: "Use cases",
    basePath: "/use-cases",
    pages: [
      {
        slug: "soc-teams",
        label: "SOC teams",
        title: "Detection Forge for SOC teams",
        description: "Run detection as a measurable engineering function — not a backlog of tickets.",
        items: [
          { title: "Content quality", desc: "Reduce false positives and noise with structured tuning." },
          { title: "Coverage clarity", desc: "Know what you cover, what you don't, and what to prioritize." },
          { title: "Faster validation", desc: "Validate new detections in minutes, not weeks." },
        ],
      },
      {
        slug: "mdr-mssp",
        label: "MDR / MSSP",
        title: "Detection Forge for MDR & MSSP",
        description: "Standardize detection content across customers and tenants without losing per-customer context.",
        items: [
          { title: "Multi-tenant content", desc: "Manage shared and customer-specific detections in one place." },
          { title: "Quality at scale", desc: "Ship consistent detection quality across every tenant." },
          { title: "Customer reporting", desc: "Coverage and efficacy reports per customer, on demand." },
        ],
      },
      {
        slug: "detection-engineers",
        label: "Detection engineers",
        title: "Detection Forge for detection engineers",
        description: "The engineering surface you've been building in Jira, wikis, and notebooks — unified.",
        items: [
          { title: "Versioned content", desc: "Every change tracked, reviewed, and reversible." },
          { title: "Replay-first workflow", desc: "Validate ideas against real data before shipping." },
          { title: "Quality metrics", desc: "Track FP rates, drift, and rule health as KPIs." },
        ],
      },
      {
        slug: "security-leaders",
        label: "Security leaders",
        title: "Detection Forge for security leaders",
        description: "Answer the questions the board actually asks: what do we cover, and how do we know?",
        items: [
          { title: "Coverage you can defend", desc: "Quantified coverage tied to business risk." },
          { title: "Investment alignment", desc: "Connect detection spend to measurable outcomes." },
          { title: "Program maturity", desc: "Track detection maturity across teams over time." },
        ],
      },
      {
        slug: "forensics",
        label: "Forensics",
        title: "Forensic investigation support",
        description: "Pivot from a detection into log evidence when deeper analysis is required.",
        items: [
          { title: "Detection-to-evidence", desc: "One click from detection to underlying log data." },
          { title: "Timeline reconstruction", desc: "Build identity and host timelines across sources." },
          { title: "Case-ready exports", desc: "Export evidence packages aligned to incidents." },
        ],
      },
    ],
  },
  {
    key: "company",
    title: "Company",
    basePath: "/company",
    pages: [
      {
        slug: "about",
        label: "About",
        title: "About Detection Forge",
        description: "We're building the engineering layer for modern detection programs.",
        items: [
          { title: "Our mission", desc: "Make detection engineering measurable and defensible." },
          { title: "Our story", desc: "Founded by practitioners who ran detection programs at scale." },
          { title: "Our values", desc: "Engineering rigor, customer outcomes, security first." },
        ],
      },
      {
        slug: "customers",
        label: "Customers",
        title: "Customers",
        description: "Detection Forge is trusted by SOC, MDR, and MSSP teams operating at scale.",
        items: [
          { title: "Global SOCs", desc: "Used by enterprise security operations centers." },
          { title: "MDR providers", desc: "Powering detection content for managed services." },
          { title: "Regulated industries", desc: "Finance, healthcare, and critical infrastructure." },
        ],
      },
      {
        slug: "careers",
        label: "Careers",
        title: "Careers",
        description: "We're hiring across engineering, research, and customer teams.",
        items: [
          { title: "Engineering", desc: "Backend, frontend, and platform roles." },
          { title: "Detection research", desc: "Build the detections that power the platform." },
          { title: "Customer teams", desc: "Solutions engineering, success, and support." },
        ],
      },
      {
        slug: "press",
        label: "Press",
        title: "Press",
        description: "News, announcements, and brand assets for journalists and analysts.",
        items: [
          { title: "Announcements", desc: "Latest product and company news." },
          { title: "Brand assets", desc: "Logos, screenshots, and product imagery." },
          { title: "Media contact", desc: "press@detectionforge.com" },
        ],
      },
      {
        slug: "contact",
        label: "Contact",
        title: "Contact us",
        description: "Talk to our team about detection engineering, partnerships, or support.",
        items: [
          { title: "Sales", desc: "hello@detectionforge.com" },
          { title: "Support", desc: "support@detectionforge.com" },
          { title: "Partnerships", desc: "partners@detectionforge.com" },
        ],
      },
    ],
  },
  {
    key: "resources",
    title: "Resources",
    basePath: "/resources",
    pages: [
      {
        slug: "documentation",
        label: "Documentation",
        title: "Documentation",
        description: "Everything you need to deploy, configure, and operate Detection Forge.",
        items: [
          { title: "Getting started", desc: "Stand up Detection Forge in your environment." },
          { title: "Integrations", desc: "Connect SIEMs, identity providers, and data sources." },
          { title: "API reference", desc: "Programmatic access to detections and coverage data." },
        ],
      },
      {
        slug: "blog",
        label: "Blog",
        title: "Blog",
        description: "Field notes, product updates, and detection engineering perspectives.",
        items: [
          { title: "Product updates", desc: "What's new in Detection Forge." },
          { title: "Engineering deep-dives", desc: "How we build the platform." },
          { title: "Field notes", desc: "Lessons from real detection programs." },
        ],
      },
      {
        slug: "research",
        label: "Research",
        title: "Research",
        description: "Detection research, threat analysis, and ATT&CK coverage work from our team.",
        items: [
          { title: "Threat research", desc: "Original analysis of emerging threats." },
          { title: "Detection content", desc: "Reference detections you can adapt." },
          { title: "ATT&CK studies", desc: "Coverage research aligned to MITRE ATT&CK." },
        ],
      },
      {
        slug: "security",
        label: "Security",
        title: "Security",
        description: "How we secure Detection Forge — and how to report a vulnerability.",
        items: [
          { title: "Trust & compliance", desc: "Our certifications and security controls." },
          { title: "Data handling", desc: "Your raw logs stay where they live. We never move them." },
          { title: "Responsible disclosure", desc: "security@detectionforge.com" },
        ],
      },
      {
        slug: "status",
        label: "Status",
        title: "System status",
        description: "Real-time status of Detection Forge platform services.",
        items: [
          { title: "Platform", desc: "Core platform and dashboard availability." },
          { title: "Replay engine", desc: "Validation and replay subsystem status." },
          { title: "Integrations", desc: "SIEM and identity connector health." },
        ],
      },
    ],
  },
];

export function getSection(key: string) {
  return SECTIONS.find((s) => s.key === key);
}

export function getSubPage(key: string, slug: string) {
  return getSection(key)?.pages.find((p) => p.slug === slug);
}