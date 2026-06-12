import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { PageShell } from "@/components/site/PageShell";
import { toast } from 'sonner';
import axios from 'axios';

export const Route = createFileRoute('/resetPassword/$token')({
  component: RouteComponent,
})

function RouteComponent() {
  const { token } = Route.useParams()
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
  if (!newPassword || !confirmPassword) {
    toast.error("All fields are required");
    return;
  }

  if (newPassword !== confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  try {
    setLoading(true)
    const res = await axios.patch(
      `https://detection-forge-server.vercel.app/api/reset-password/${token}`,
      {
        newPassword,
      }
    );

    toast.success(res.data.message);

  } catch (err) {
    console.log(err);
    toast.error("Failed to reset password");
  }finally{
    setLoading(false)
  }
};
  return (
    <PageShell>
        <div className="flex min-h-screen items-center justify-center px-4">
    <div className="w-full max-w-md rounded-xl border p-6">

      <h1 className="text-2xl font-bold">
        Reset Password
      </h1>

      <p className="mt-2 text-sm text-muted-foreground">
        Enter your new password below.
      </p>

      <div className="mt-6 space-y-4">

        <div>
          <label className="mb-2 block text-sm font-medium">
            New Password
          </label>

          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full rounded-md border p-2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Confirm Password
          </label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-md border p-2"
          />
        </div>

        <button
        disabled={loading}
        onClick={handleResetPassword}
        className="w-full rounded-md bg-black py-2 text-white disabled:opacity-50"
        >
        {loading ? "Resetting..." : "Reset Password"}
        </button>

      </div>

    </div>
  </div>
    </PageShell>
  )
}

