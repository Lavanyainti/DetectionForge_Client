import { useEffect, useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import axios from "axios";

const OPEN_EVENT = "open-book-demo";

export function openBookDemo() {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
}

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid work email").max(255),
  company: z.string().trim().min(1, "Company is required").max(150),
  role: z.string().trim().max(150).optional(),
  message: z.string().trim().max(1000).optional(),
});

export function BookDemoDialog() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handler = () => {
      setSubmitted(false);
      setErrors({});
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, handler);
    return () => window.removeEventListener(OPEN_EVENT, handler);
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const map: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0]?.toString() ?? "";
        if (k && !map[k]) map[k] = issue.message;
      }
      setErrors(map);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // const { error } = await supabase.from("demo_requests").insert({
    //   name: parsed.data.name,
    //   email: parsed.data.email,
    //   company: parsed.data.company,
    //   role: parsed.data.role || null,
    //   message: parsed.data.message || null,
    //   source: typeof window !== "undefined" ? window.location.pathname : null,
    //   user_agent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 500) : null,
    // });
    try{
      console.log(parsed.data.name)
      const result=await axios.post("http://localhost:5011/api/createDemo", {
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      role: parsed.data.role || null,
      message: parsed.data.message || null,
      source: typeof window !== "undefined" ? window.location.pathname : null,
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 500) : null,
     });
      setSubmitting(false);
      console.log(result)
      if(result){
        setSubmitted(true);
        toast.success("Request received. Our team will reach out shortly.");
      }
    }catch(err){
      setSubmitting(false);
      console.log(err)
       toast.error("Couldn't submit your request. Please try again.");
    }
    // if (error) {
    //   toast.error("Couldn't submit your request. Please try again.");
    //   return;
    // }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg border-border bg-background">
        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-teal/30 bg-teal/10 text-teal">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Thanks — request received.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A detection engineer from our team will reach out within one business day to schedule
              your 30-minute walkthrough.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Book a demo</DialogTitle>
              <DialogDescription>
                A 30-minute walkthrough with our detection engineering team. Bring a real rule, SIEM,
                or coverage question.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit} className="mt-2 space-y-4" noValidate>
              <div className="grid gap-2">
                <Label htmlFor="bd-name">Full name</Label>
                <Input id="bd-name" name="name" autoComplete="name" maxLength={100} required />
                {errors.name && <p className="text-xs text-danger">{errors.name}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bd-email">Work email</Label>
                <Input id="bd-email" name="email" type="email" autoComplete="email" maxLength={255} required />
                {errors.email && <p className="text-xs text-danger">{errors.email}</p>}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="bd-company">Company</Label>
                  <Input id="bd-company" name="company" autoComplete="organization" maxLength={150} required />
                  {errors.company && <p className="text-xs text-danger">{errors.company}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="bd-role">Role <span className="text-muted-foreground">(optional)</span></Label>
                  <Input id="bd-role" name="role" autoComplete="organization-title" maxLength={150} />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bd-message">What would you like to see? <span className="text-muted-foreground">(optional)</span></Label>
                <Textarea id="bd-message" name="message" rows={3} maxLength={1000} />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? "Sending…" : <>Request demo <ArrowRight className="h-4 w-4" /></>}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                We'll only use your details to coordinate the demo.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
