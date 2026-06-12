import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import axios from "axios";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/forgotPassword")({
  component: RouteComponent,
});

function RouteComponent() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        "https://detection-forge-server.vercel.app/api/forgot-password",
        { email }
      );

      toast.success(res.data.message);
    } catch (err) {
      console.log(err);
      toast.error("Failed to send reset link");
    }finally {
    setLoading(false);
  }
  };

  return (
    <PageShell>
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">

        <h1 className="text-2xl font-bold">
          Forgot Password
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <div className="mt-6 space-y-2">
          <Label>Email Address</Label>

          <Input
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
        disabled={loading}
        onClick={handleSubmit}
        className="mt-6 w-full rounded-md bg-foreground py-3 text-background disabled:opacity-50"
        >
        {loading ? "Sending..." : "Send Reset Link"}
        </button>

      </div>
    </div>
    </PageShell>
  );
}