import logo from "@/assets/detection-forge-logo.png";

const COLS = [
  {
    title: "Platform",
    links: ["Detection lifecycle", "Replay validation", "Coverage efficacy", "Identity analytics", "Risk-based detections"],
  },
  { title: "Use cases", links: ["SOC teams", "MDR / MSSP", "Detection engineers", "Security leaders", "Forensics"] },
  { title: "Company", links: ["About", "Customers", "Careers", "Press", "Contact"] },
  { title: "Resources", links: ["Documentation", "Blog", "Research", "Security", "Status"] },
];

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_3fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Detection Forge" className="h-8 w-8 rounded-md object-cover ring-1 ring-border" />
              <span className="text-sm font-semibold tracking-tight">Detection Forge</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The control plane for detection engineering. Build, validate, and scale detections —
              alongside the SIEM you already operate.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {COLS.map((c) => (
              <div key={c.title}>
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  {c.title}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Detection Forge, Inc. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
            <a href="#" className="hover:text-foreground">DPA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
