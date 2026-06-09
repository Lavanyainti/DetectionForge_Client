import { Check, AlertTriangle, Play, GitCommit, Fingerprint, Database, Activity } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const RULES = [
  { id: "DF-1042", name: "Suspicious OAuth consent grant", tech: "T1528", status: "validated", fp: "0.4%" },
  { id: "DF-1039", name: "Anomalous service principal sign-in", tech: "T1078.004", status: "tuning", fp: "2.1%" },
  { id: "DF-1035", name: "Lateral movement via SMB admin shares", tech: "T1021.002", status: "validated", fp: "0.9%" },
  { id: "DF-1028", name: "Kerberoasting attempt — high-value SPN", tech: "T1558.003", status: "review", fp: "1.3%" },
];

export function ProductMockup() {
  const [activeTab, setActiveTab] = useState("detections");
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
          <div className="mb-3 px-2 text-[10px] uppercase tracking-wider font-bold text-teal">Workspace</div>
          {[
            ["detections", "Detections"],
            ["validation", "Validation"],
            ["coverage", "Coverage"],
            ["identity", "Identity"],
            ["investigations", "Investigations"],
            ["approvals", "Approvals"],
          ].map(([key, label]) => (
            <div
              key={key}
              onClick={() => setActiveTab(key)}
              className={`mb-0.5 cursor-pointer rounded-md px-2 py-1.5 text-xs ${
                activeTab === key
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {label}
            </div>
          ))}
        </aside>

          {activeTab === "detections" && <DetectionsView />}

        {activeTab === "validation" && <ValidationView />}

        {activeTab === "coverage" && <CoverageView />}

        {activeTab === "identity" && <IdentityView />}

        {activeTab === "investigations" && <InvestigationView />}

        {activeTab === "approvals" && <ApprovalView />}
        
        
      </div>
    </div>
  );
}

function DetectionsView(){
  return(
    <>
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
      </>
  )
}

function ValidationView() {
  return (
    <>
      {/* Main Section */}
      <div className="col-span-12 bg-background px-4 py-4 md:col-span-7">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">
              Detection Validation
            </div>
            <div className="text-sm font-medium">
              Pre-production rule testing
            </div>
          </div>

          <button className="inline-flex h-7 items-center gap-1.5 rounded-md border border-teal/40 bg-teal/10 px-2.5 text-xs font-medium text-teal">
            <Play className="h-3 w-3" />
            Run Validation
          </button>
        </div>

        <div className="rounded-lg border border-border bg-surface p-4">
          <h3 className="text-sm font-medium">
            Validate detection rules before deployment
          </h3>

          <p className="mt-2 text-sm text-muted-foreground leading-7">
            Replay historical telemetry against your Sigma rules to
            measure true positives, false positives, missed detections,
            and overall effectiveness before promoting content into
            production.
          </p>
        </div>

        {/* Validation Stats */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Stat label="Rules Tested" value="142" tone="teal" />
          <Stat label="Passed" value="131" />
          <Stat label="Needs Tuning" value="8" tone="amber" />
          <Stat label="Failed" value="3" />
        </div>

        {/* Progress */}
        <div className="mt-4 rounded-lg border border-border bg-surface p-3">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">
              Validation Success Rate
            </span>

            <span className="font-mono text-foreground">
              92.2%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-border">
            <div className="h-full w-[92%] bg-teal rounded-full"></div>
          </div>

          <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
      </div>

      {/* Right Side Panel */}
      <div className="col-span-12 bg-surface px-4 py-4 md:col-span-3">
        <div className="text-xs text-muted-foreground">
          Latest Validation Run
        </div>

        <div className="mt-1 text-sm font-medium">
          OAuth Consent Grant Detection
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <Stat label="Events" value="12.4K" />
          <Stat label="Matches" value="148" tone="teal" />
          <Stat label="FP Rate" value="0.4%" />
          <Stat label="Coverage" value="96%" tone="teal" />
        </div>

        <div className="mt-4 space-y-2 text-xs">
          <Row icon={Activity} label="Replay Window" value="90 Days" />
          <Row icon={Database} label="Log Sources" value="14" />
          <Row icon={GitCommit} label="Rule Version" value="v7" />
          <Row icon={Fingerprint} label="Confidence" value="High" tone="teal" />
        </div>

        <div className="mt-4 rounded-md border border-teal/30 bg-teal/10 p-2.5 text-[11px]">
          <div className="flex items-center gap-1.5 font-medium">
            <Check className="h-3 w-3 text-teal" />
            Validation Successful
          </div>

          <p className="mt-1 text-muted-foreground">
            Rule passed replay testing with minimal false positives and
            is ready for production approval.
          </p>
        </div>
      </div>
    </>
  );
}

function CoverageView() {
  return (
    <>
      {/* Main Section */}
      <div className="col-span-12 bg-background px-4 py-4 md:col-span-7">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">
              Detection Coverage
            </div>
            <div className="text-sm font-medium">
              ATT&CK & Log Source Visibility
            </div>
          </div>

          <button className="inline-flex h-7 items-center gap-1.5 rounded-md border border-teal/40 bg-teal/10 px-2.5 text-xs font-medium text-teal">
            <Activity className="h-3 w-3" />
            Analyze Coverage
          </button>
        </div>

        <div className="rounded-lg border border-border bg-surface p-4">
          <h3 className="text-sm font-medium">
            Understand your detection blind spots
          </h3>

          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            Visualize MITRE ATT&CK coverage across your entire
            environment and identify gaps in telemetry, detection
            content, and log ingestion before attackers exploit them.
          </p>
        </div>

        {/* Coverage Metrics */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Stat label="Coverage" value="71.4%" tone="teal" />
          <Stat label="Techniques" value="198" />
          <Stat label="Mapped Rules" value="356" tone="teal" />
          <Stat label="Coverage Gaps" value="27" tone="amber" />
        </div>

        {/* Heatmap */}
        <div className="mt-4 rounded-lg border border-border bg-surface p-3">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">
              MITRE ATT&CK Heatmap
            </span>

            <span className="font-mono text-foreground">
              71.4%
            </span>
          </div>

          <div className="grid grid-cols-[repeat(14,minmax(0,1fr))] gap-1">
            {Array.from({ length: 14 * 4 }).map((_, i) => {
              const v = (Math.sin(i * 1.7) + 1) / 2;
              const tone =
                v > 0.7
                  ? "bg-teal"
                  : v > 0.45
                  ? "bg-teal/60"
                  : v > 0.25
                  ? "bg-teal/30"
                  : "bg-border";

              return (
                <div
                  key={i}
                  className={`h-3 rounded-sm ${tone}`}
                />
              );
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

      {/* Right Side Panel */}
      <div className="col-span-12 bg-surface px-4 py-4 md:col-span-3">
        <div className="text-xs text-muted-foreground">
          Coverage Summary
        </div>

        <div className="mt-1 text-sm font-medium">
          Enterprise Environment
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <Stat label="Windows" value="92%" tone="teal" />
          <Stat label="Azure AD" value="87%" tone="teal" />
          <Stat label="AWS" value="63%" />
          <Stat label="Linux" value="58%" tone="amber" />
        </div>

        <div className="mt-4 space-y-2 text-xs">
          <Row
            icon={Database}
            label="Log Sources"
            value="12 / 14"
          />

          <Row
            icon={GitCommit}
            label="Mapped Rules"
            value="356"
          />

          <Row
            icon={Fingerprint}
            label="Identity Coverage"
            value="High"
            tone="teal"
          />

          <Row
            icon={Activity}
            label="Last Scan"
            value="Today"
          />
        </div>

        <div className="mt-4 rounded-md border border-amber/30 bg-amber/10 p-2.5 text-[11px]">
          <div className="flex items-center gap-1.5 font-medium">
            <AlertTriangle className="h-3 w-3 text-amber" />
            Coverage Gap
          </div>

          <p className="mt-1 text-muted-foreground">
            Linux authentication logs are missing from two production
            servers. ATT&CK techniques T1078 and T1021 are partially
            uncovered.
          </p>
        </div>
      </div>
    </>
  );
}

function IdentityView() {
  return (
    <>
      {/* Main Section */}
      <div className="col-span-12 bg-background px-4 py-4 md:col-span-7">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">
              Identity Detection
            </div>
            <div className="text-sm font-medium">
              Monitor users, service principals & OAuth apps
            </div>
          </div>

          <button className="inline-flex h-7 items-center gap-1.5 rounded-md border border-teal/40 bg-teal/10 px-2.5 text-xs font-medium text-teal">
            <Fingerprint className="h-3 w-3" />
            Analyze Identity
          </button>
        </div>

        <div className="rounded-lg border border-border bg-surface p-4">
          <h3 className="text-sm font-medium">
            Detect identity-based attacks early
          </h3>

          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            Correlate user activity, service principals, OAuth consent,
            and privileged account usage to uncover suspicious identity
            behavior before it turns into a compromise.
          </p>
        </div>

        {/* Identity Metrics */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Stat label="Identities" value="18.4K" />
          <Stat label="High Risk" value="27" tone="amber" />
          <Stat label="OAuth Apps" value="146" tone="teal" />
          <Stat label="Privileged" value="212" />
        </div>

        {/* Risk Distribution */}
        <div className="mt-4 rounded-lg border border-border bg-surface p-3">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">
              Identity Risk Distribution
            </span>

            <span className="font-mono text-foreground">
              Secure
            </span>
          </div>

          <div className="space-y-2">
            <div>
              <div className="mb-1 flex justify-between text-[10px]">
                <span>Low Risk</span>
                <span>81%</span>
              </div>
              <div className="h-2 rounded-full bg-border">
                <div className="h-full w-[81%] rounded-full bg-teal"></div>
              </div>
            </div>

            <div>
              <div className="mb-1 flex justify-between text-[10px]">
                <span>Medium Risk</span>
                <span>14%</span>
              </div>
              <div className="h-2 rounded-full bg-border">
                <div className="h-full w-[14%] rounded-full bg-amber"></div>
              </div>
            </div>

            <div>
              <div className="mb-1 flex justify-between text-[10px]">
                <span>High Risk</span>
                <span>5%</span>
              </div>
              <div className="h-2 rounded-full bg-border">
                <div className="h-full w-[5%] rounded-full bg-danger"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="col-span-12 bg-surface px-4 py-4 md:col-span-3">
        <div className="text-xs text-muted-foreground">
          Identity Overview
        </div>

        <div className="mt-1 text-sm font-medium">
          Azure AD Tenant
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <Stat label="Users" value="18.4K" />
          <Stat label="Admins" value="142" />
          <Stat label="OAuth Apps" value="146" tone="teal" />
          <Stat label="Alerts" value="9" tone="amber" />
        </div>

        <div className="mt-4 space-y-2 text-xs">
          <Row
            icon={Fingerprint}
            label="Risk Level"
            value="Medium"
            tone="teal"
          />

          <Row
            icon={Database}
            label="Identity Logs"
            value="Healthy"
          />

          <Row
            icon={GitCommit}
            label="Last Sync"
            value="5 min ago"
          />

          <Row
            icon={Activity}
            label="Active Sessions"
            value="1.2K"
          />
        </div>

        <div className="mt-4 rounded-md border border-amber/30 bg-amber/10 p-2.5 text-[11px]">
          <div className="flex items-center gap-1.5 font-medium">
            <AlertTriangle className="h-3 w-3 text-amber" />
            Suspicious OAuth Activity
          </div>

          <p className="mt-1 text-muted-foreground">
            Application <span className="font-mono">HR-Portal-Prod</span>
            requested high-privilege Graph API permissions from 12 users
            within the last hour.
          </p>
        </div>
      </div>
    </>
  );
}

function InvestigationView() {
  return (
    <>
      {/* Main Section */}
      <div className="col-span-12 bg-background px-4 py-4 md:col-span-7">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">
              Threat Investigation
            </div>
            <div className="text-sm font-medium">
              Correlate alerts and reconstruct attack paths
            </div>
          </div>

          <button className="inline-flex h-7 items-center gap-1.5 rounded-md border border-teal/40 bg-teal/10 px-2.5 text-xs font-medium text-teal">
            <Activity className="h-3 w-3" />
            Start Investigation
          </button>
        </div>

        <div className="rounded-lg border border-border bg-surface p-4">
          <h3 className="text-sm font-medium">
            Connect isolated alerts into a complete story
          </h3>

          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            Automatically correlate detections across users,
            endpoints, identities, and cloud services to help
            analysts understand the full attack chain.
          </p>
        </div>

        {/* Investigation Metrics */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Stat label="Open Cases" value="24" />
          <Stat label="Critical" value="3" tone="amber" />
          <Stat label="Linked Alerts" value="187" tone="teal" />
          <Stat label="Avg. MTTR" value="42m" />
        </div>

        {/* Timeline */}
        <div className="mt-4 rounded-lg border border-border bg-surface p-4">
          <div className="mb-3 text-xs text-muted-foreground">
            Investigation Timeline
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-teal"></div>
              <div className="text-xs">
                Suspicious OAuth consent granted
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-teal"></div>
              <div className="text-xs">
                Unusual service principal login detected
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-amber"></div>
              <div className="text-xs">
                Privileged mailbox accessed
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-danger"></div>
              <div className="text-xs">
                External data download initiated
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="col-span-12 bg-surface px-4 py-4 md:col-span-3">
        <div className="text-xs text-muted-foreground">
          Active Investigation
        </div>

        <div className="mt-1 text-sm font-medium">
          INC-2026-1042
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <Stat label="Severity" value="High" tone="amber" />
          <Stat label="Alerts" value="12" />
          <Stat label="Assets" value="5" />
          <Stat label="Users" value="2" tone="teal" />
        </div>

        <div className="mt-4 space-y-2 text-xs">
          <Row
            icon={Fingerprint}
            label="Primary User"
            value="j.smith"
          />

          <Row
            icon={Database}
            label="Affected Hosts"
            value="5"
          />

          <Row
            icon={GitCommit}
            label="Case Status"
            value="Active"
          />

          <Row
            icon={Activity}
            label="Analyst"
            value="SOC-2"
            tone="teal"
          />
        </div>

        <div className="mt-4 rounded-md border border-danger/30 bg-danger/10 p-2.5 text-[11px]">
          <div className="flex items-center gap-1.5 font-medium">
            <AlertTriangle className="h-3 w-3 text-danger" />
            Lateral Movement Detected
          </div>

          <p className="mt-1 text-muted-foreground">
            Multiple SMB administrative share accesses observed
            across three servers following credential abuse.
          </p>
        </div>
      </div>
    </>
  );
}

function ApprovalView() {
  return (
    <>
      {/* Main Section */}
      <div className="col-span-12 bg-background px-4 py-4 md:col-span-7">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">
              Approval Workflow
            </div>
            <div className="text-sm font-medium">
              Govern rule changes before deployment
            </div>
          </div>

          <button className="inline-flex h-7 items-center gap-1.5 rounded-md border border-teal/40 bg-teal/10 px-2.5 text-xs font-medium text-teal">
            <GitCommit className="h-3 w-3" />
            Review Changes
          </button>
        </div>

        <div className="rounded-lg border border-border bg-surface p-4">
          <h3 className="text-sm font-medium">
            Control every detection change
          </h3>

          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            Route rule updates through structured approval workflows,
            validate content, track ownership, and ensure only trusted
            detections reach production environments.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Stat label="Pending Reviews" value="18" tone="amber" />
          <Stat label="Approved" value="246" tone="teal" />
          <Stat label="Rejected" value="7" />
          <Stat label="Deployments" value="52" />
        </div>

        {/* Approval Queue */}
        <div className="mt-4 rounded-lg border border-border bg-surface overflow-hidden">
          <div className="border-b border-border px-4 py-3 text-xs font-medium text-muted-foreground">
            Pending Approval Queue
          </div>

          {[
            {
              rule: "Suspicious OAuth Consent Grant",
              owner: "Detection Team",
              status: "Awaiting Approval",
            },
            {
              rule: "Kerberoasting Detection",
              owner: "SOC Team",
              status: "Security Review",
            },
            {
              rule: "Azure AD Privilege Escalation",
              owner: "Threat Team",
              status: "Final Approval",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-border/50 px-4 py-3 text-xs last:border-b-0"
            >
              <div>
                <div className="font-medium text-foreground">
                  {item.rule}
                </div>
                <div className="text-muted-foreground">
                  {item.owner}
                </div>
              </div>

              <span className="rounded-full border border-teal/30 bg-teal/10 px-2 py-1 text-[10px] text-teal">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="col-span-12 bg-surface px-4 py-4 md:col-span-3">
        <div className="text-xs text-muted-foreground">
          Latest Change Request
        </div>

        <div className="mt-1 text-sm font-medium">
          DF-1042 Rule Update
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <Stat label="Version" value="v8" />
          <Stat label="Reviewer" value="2" />
          <Stat label="Changes" value="12" />
          <Stat label="Risk" value="Low" tone="teal" />
        </div>

        <div className="mt-4 space-y-2 text-xs">
          <Row
            icon={GitCommit}
            label="Current Stage"
            value="Review"
          />

          <Row
            icon={Fingerprint}
            label="Owner"
            value="Detection Team"
          />

          <Row
            icon={Database}
            label="Target"
            value="Production"
          />

          <Row
            icon={Activity}
            label="Validation"
            value="Passed"
            tone="teal"
          />
        </div>

        <div className="mt-4 rounded-md border border-teal/30 bg-teal/10 p-2.5 text-[11px]">
          <div className="flex items-center gap-1.5 font-medium">
            <Check className="h-3 w-3 text-teal" />
            Ready for Deployment
          </div>

          <p className="mt-1 text-muted-foreground">
            Validation completed successfully. Required reviewers have
            approved the change and the rule is ready for production deployment.
          </p>
        </div>
      </div>
    </>
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
