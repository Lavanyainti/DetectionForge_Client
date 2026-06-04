import { Link } from "@tanstack/react-router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState,useEffect } from "react";
import { useTheme } from "@/lib/theme";
import { openBookDemo } from "@/components/site/BookDemoDialog";
import logo from "@/assets/detection-forge-logo.png";


const NAV = [
  { label: "Platform", href: "#platform" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "How it works", href: "#how" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Integrations", href: "#integrations" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#platform");

  useEffect(() => {
  const handleScroll = () => {
    NAV.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) {
        const top = section.getBoundingClientRect().top;
      if (top <= 80 && top >= -80) {
          setActiveSection(item.href);
      }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Detection Forge" className="h-8 w-8 rounded-md object-cover ring-1 ring-border" />
          <span className="text-sm font-semibold tracking-tight">Detection Forge</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-1.5 text-sm transition-all duration-300 ${
                activeSection === item.href
                  ? "text-[#008b8b] font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#demo"
            className="hidden h-9 items-center rounded-md border border-border bg-surface px-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated md:inline-flex"
          >
            Sign in
          </a>
          <button
            onClick={openBookDemo}
            className="hidden h-9 items-center rounded-md bg-foreground px-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90 md:inline-flex"
          >
            Book a demo
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-md border border-border md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div
          className={`overflow-hidden border-t border-border bg-background md:hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                openBookDemo();
              }}
              className="mt-2 rounded-md bg-foreground px-3 py-2 text-center text-sm font-medium text-background"
            >
              Book a demo
            </button>
          </div>
      </div>
    </header>
  );
}
