import { Link } from "@tanstack/react-router";
import logo from "../../assets/Logo2.png";
import { SECTIONS } from "./site-content";

type FooterBasePath = "/platform" | "/use-cases" | "/company" | "/resources";

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
            {SECTIONS.map((c) => {
              const basePath = c.basePath as FooterBasePath;
              return (
                <div key={c.key}>
                  <Link
                    to={basePath}
                    className="text-xs font-semibold uppercase tracking-wider text-foreground hover:text-teal"
                  >
                    {c.title}
                  </Link>
                  <ul className="mt-4 space-y-2.5">
                    {c.pages.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={basePath}
                          hash={p.slug}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {p.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Detection Forge, Inc. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/resources" hash="security" className="hover:text-foreground">Security</Link>
            <Link to="/resources" hash="status" className="hover:text-foreground">Status</Link>
            <Link to="/company" hash="contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
