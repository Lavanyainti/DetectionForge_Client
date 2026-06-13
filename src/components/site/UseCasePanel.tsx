import {
  X,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Dot,
} from "lucide-react";

import { LucideIcon } from "lucide-react";

type UseCase = {
  icon: LucideIcon;
  title: string;
  why: string;
  features: string[];
  impact: string[];
};

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
  data: UseCase | null; // ✅ FIXED
};

export function UseCasePanel({ open, setOpen, data }: Props) {
  if (!data) return null;
  const Icon = data.icon;
  return (
    <div
      className={`fixed top-0 right-0 z-[100] h-screen w-[500px] border-l border-border bg-background shadow-2xl transition-all duration-300 overflow-y-auto
      ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border p-6">
        <div>
          <Icon className="h-6 w-6 text-teal" />
          <h2 className="mt-2 text-2xl font-bold">
            {data.title}
          </h2>
        </div>

        <button
          onClick={() => setOpen(false)}
          className="rounded-md p-2 hover:bg-accent"
        >
          <X />
        </button>
      </div>

      {/* Body */}
      <div className="space-y-8 p-6">

        <div>
          <div className="mb-3 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-teal" />
            <h3 className="text-lg font-semibold">
                Why it matters
            </h3>
          </div>

          <p className="text-sm leading-7 text-muted-foreground">
            {data.why}
          </p>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-teal" />
            <h3 className="text-lg font-semibold">
                What DetectionForge does
            </h3>
          </div>

          <div className="space-y-2">
            {data.features.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center gap-3 rounded-md border border-border bg-surface p-3"
                >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                    <span className="text-sm">{item}</span>
                </div>
             ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-teal" />
            <h3 className="text-lg font-semibold">
                Business Impact
            </h3>
          </div>

          <div className="space-y-2">
            {data.impact.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                    <Dot className="h-6 w-6 text-teal" />
                    <span>{item}</span>
                </div>
             ))}
          </div>
        </div>

        <button
          className="mt-4 h-11 w-full rounded-md bg-foreground text-background"
        >
          Book a Demo
        </button>
      </div>
    </div>
  );
}