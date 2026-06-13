import { Link } from "@tanstack/react-router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState,useEffect } from "react";
import { useTheme } from "@/lib/theme";
import { openBookDemo } from "@/components/site/BookDemoDialog";
import { openSignIn } from "./SignInDialog";
import { openUpdateDialog } from "./UpdatePasswordDialog";
import logo from "../../assets/Logo2.png";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";

const NAV: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "Platform", to: "/platform" },
  { label: "Use cases", to: "/use-cases" },
  { label: "Company", to: "/company" },
  { label: "Resources", to: "/resources" },
];
export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#platform");

  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn } = useAuth();
 
 const [role, setRole] = useState("");

useEffect(() => {
  setRole(localStorage.getItem("role") || "");

  const handleRoleChange = () => {
    setRole(localStorage.getItem("role") || "");
  };

  window.addEventListener("roleChanged", handleRoleChange);

  return () => {
    window.removeEventListener("roleChanged", handleRoleChange);
  };
}, []);

  useEffect(() => {
  const expiresAt = localStorage.getItem("expiresAt");

  if (
    expiresAt &&
    Date.now() < Number(expiresAt)
  ) {
    setIsLoggedIn(true);
  }

  const interval = setInterval(() => {
    const expiresAt = localStorage.getItem("expiresAt");

    if (
      expiresAt &&
      Date.now() >= Number(expiresAt)
    ) {
      localStorage.removeItem("expiresAt");
      setIsLoggedIn(false);
    }
  }, 1000);

  return () => clearInterval(interval);
}, []);

 const handleLogout = async () => {
  try {
    //https://detection-forge-server.vercel.app
    //http://localhost:5011
    await axios.post(
      "https://detection-forge-server.vercel.app/api/logout",
      {},
      {
        withCredentials: true,
      }
    );

    localStorage.removeItem("expiresAt");
    setIsLoggedIn(false);

    navigate({ to: "/" });
  } catch (error) {
    console.log(error);
  }
};

//   useEffect(() => {
//   const handleScroll = () => {
//     NAV.forEach((item) => {
//       const section = document.querySelector(item.href);
//       if (section) {
//         const top = section.getBoundingClientRect().top;
//       if (top <= 80 && top >= -80) {
//           setActiveSection(item.href);
//       }
//       }
//     });
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Detection Forge" className="h-11 w-14 rounded-md object-cover bg-transparent" />
          <span className="text-lg font-bold tracking-tight text-teal">DetectionForge</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-teal [&.active]:font-medium"
            >
                {item.label}
            </Link>
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
          {!isLoggedIn ? (
  <>
    <button
      onClick={openSignIn}
      className="hidden h-9 items-center rounded-md border border-border bg-surface px-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated md:inline-flex"
    >
      Sign In
    </button>
  </>
) : (
  <>
  {role === "admin" && (
          <button
            onClick={() => navigate({ to: "/dashboard" })}
            className="hidden h-9 items-center rounded-md border border-border bg-surface px-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated md:inline-flex"
          >
            Admin Portal
          </button>
      )}
      {/* <button onClick={openUpdateDialog} className="hidden h-9 items-center rounded-md border border-border bg-surface px-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated md:inline-flex">
      Update Password
    </button> */}
  <button
    onClick={handleLogout}
    className="hidden h-9 items-center rounded-md border border-border bg-surface px-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated md:inline-flex"
  >
    Sign Out
  </button>
  </>
)}
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
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-foreground" }}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
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
