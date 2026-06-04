import { Check, AlertTriangle, Play, GitCommit, Fingerprint, Database, Activity } from "lucide-react";

const RULES = [
  { id: "DF-1042", name: "Suspicious OAuth consent grant", tech: "T1528", status: "validated", fp: "0.4%" },
  { id: "DF-1039", name: "Anomalous service principal sign-in", tech: "T1078.004", status: "tuning", fp: "2.1%" },
  { id: "DF-1035", name: "Lateral movement via SMB admin shares", tech: "T1021.002", status: "validated", fp: "0.9%" },
  { id: "DF-1028", name: "Kerberoasting attempt — high-value SPN", tech: "T1558.003", status: "review", fp: "1.3%" },
];

export function ProductMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/30 ring-1 ring-black/5">
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        </div>
        <div className="rounded-md bg-background px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
          forge.console / detections / validation
        </div>
        <div className="text-[11px] text-muted-foreground">v4.12.0</div>
      </div>

      <div className="grid grid-cols-12 gap-px bg-border">
        {/* Sidebar */}
        <aside className="col-span-2 hidden bg-surface px-3 py-4 md:block">
          <div className="mb-3 px-2 text-[10px] uppercase tracking-wider text-muted-foreground">Workspace</div>
          {[
            ["Detections", true],
            ["Validation", false],
            ["Coverage", false],
            ["Identity", false],
            ["Investigations", false],
            ["Approvals", false],
          ].map(([label, active]) => (
            <div
              key={label as string}
              className={`mb-0.5 rounded-md px-2 py-1.5 text-xs ${
                active ? "bg-accent text-foreground" : "text-muted-foreground"
              }`}
            >
              {label as string}
            </div>
          ))}
        </aside>

        {/* Main rules table */}
        <div className="col-span-12 bg-background px-4 py-4 md:col-span-7">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs text-muted-foreground">Detection content</div>
              <div className="text-sm font-medium">Replay validation · last 90 days</div>
            </div>
            <button className="inline-flex h-7 items-center gap-1.5 rounded-md border border-teal/40 bg-teal/10 px-2.5 text-xs font-medium text-teal">
              <Play className="h-3 w-3" /> Run replay
            </button>
          </div>

          <div className="overflow-hidden rounded-lg border border-border">
            <div className="grid grid-cols-[80px_1fr_90px_70px_80px] items-center gap-3 border-b border-border bg-surface px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground">
              <div>Rule</div>
              <div>Name</div>
              <div>ATT&CK</div>
              <div>FP rate</div>
              <div>Status</div>
            </div>
            {RULES.map((r) => (
              <div
                key={r.id}
                className="grid grid-cols-[80px_1fr_90px_70px_80px] items-center gap-3 border-b border-border/60 px-3 py-2.5 text-xs last:border-b-0"
              >
                <div className="font-mono text-muted-foreground">{r.id}</div>
                <div className="truncate text-foreground">{r.name}</div>
                <div className="font-mono text-teal">{r.tech}</div>
                <div className="font-mono text-muted-foreground">{r.fp}</div>
                <div>
                  <StatusPill status={r.status} />
                </div>
              </div>
            ))}
          </div>

          {/* Coverage chart */}
          <div className="mt-4 rounded-lg border border-border bg-surface p-3">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">MITRE ATT&CK coverage</span>
              <span className="font-mono text-foreground">71.4%</span>
            </div>
            <div className="grid grid-cols-[repeat(14,minmax(0,1fr))] gap-1">
              {Array.from({ length: 14 * 4 }).map((_, i) => {
                const v = (Math.sin(i * 1.7) + 1) / 2;
                const tone =
                  v > 0.7 ? "bg-teal" : v > 0.45 ? "bg-teal/60" : v > 0.25 ? "bg-teal/30" : "bg-border";
                return <div key={i} className={`h-3 rounded-sm ${tone}`} />;
              })}
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
              <span>Initial Access</span>
              <span>Execution</span>
              <span>Persistence</span>
              <span>Lateral</span>
              <span>Impact</span>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="col-span-12 bg-surface px-4 py-4 md:col-span-3">
          <div className="text-xs text-muted-foreground">Replay run · DF-1042</div>
          <div className="mt-1 text-sm font-medium">Validated against Sentinel</div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <Stat label="Matches" value="148" tone="teal" />
            <Stat label="True pos." value="139" />
            <Stat label="False pos." value="6" />
            <Stat label="Missed" value="3" tone="amber" />
          </div>

          <div className="mt-4 space-y-2 text-xs">
            <Row icon={Activity} label="Replay window" value="90d" />
            <Row icon={Database} label="Log sources" value="12 / 14" />
            <Row icon={Fingerprint} label="Identity signal" value="High" tone="teal" />
            <Row icon={GitCommit} label="Version" value="v7 · approved" />
          </div>

          <div className="mt-4 rounded-md border border-amber/30 bg-amber/10 p-2.5 text-[11px] text-foreground">
            <div className="flex items-center gap-1.5 font-medium">
              <AlertTriangle className="h-3 w-3 text-amber" /> Coverage gap
            </div>
            <p className="mt-1 text-muted-foreground">
              Azure AD sign-in logs missing for 2 tenants. Validate ingestion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const map: Record<string, { label: string; cls: string; Icon: typeof Check }> = {
    validated: { label: "Validated", cls: "bg-success/15 text-success border-success/30", Icon: Check },
    tuning: { label: "Tuning", cls: "bg-amber/15 text-amber border-amber/30", Icon: Activity },
    review: { label: "Review", cls: "bg-teal/15 text-teal border-teal/30", Icon: GitCommit },
  };
  const s = map[status] ?? map.review;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[10px] font-medium ${s.cls}`}
    >
      <s.Icon className="h-2.5 w-2.5" /> {s.label}
    </span>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "teal" | "amber" }) {
  return (
    <div className="rounded-md border border-border bg-background px-2.5 py-2">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`mt-0.5 font-mono text-base ${tone === "teal" ? "text-teal" : tone === "amber" ? "text-amber" : "text-foreground"}`}>
        {value}
      </div>
    </div>
  );
}

function Row({ icon: Icon, label, value, tone }: { icon: typeof Check; label: string; value: string; tone?: "teal" }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-border bg-background px-2.5 py-1.5">
      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
        <Icon className="h-3 w-3" /> {label}
      </span>
      <span className={`font-mono ${tone === "teal" ? "text-teal" : "text-foreground"}`}>{value}</span>
    </div>
  );
}
