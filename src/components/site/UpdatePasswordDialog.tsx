import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const OPEN_UPDATE_PASSWORD = "open-update-password";

export function openUpdateDialog() {
  window.dispatchEvent(new CustomEvent(OPEN_UPDATE_PASSWORD));
}


export function UpdatePasswordDialog() {
  const [open, setOpen] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  useEffect(() => {
    const handler = () => setOpen(true);

    window.addEventListener(
      OPEN_UPDATE_PASSWORD,
      handler
    );

    return () =>
      window.removeEventListener(
        OPEN_UPDATE_PASSWORD,
        handler
      );
  }, []);

  const handleUpdatePassword = async () => {
    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      toast.error("All fields required");
      return;
    }

    
    if (newPassword !== confirmPassword) {
  toast.error("Passwords do not match");
  return;
}

    try {
      setIsLoading(true);

      const res = await axios.post(
        "http://localhost:5011/api/updatePassword",
        {
          currentPassword,
          newPassword,
        },
        {
          withCredentials: true,
        }
      );

      toast.success(res.data.message);
      setOpen(false);

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
          "Failed to update password"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>

        <DialogHeader>
          <DialogTitle>
            Update Password
          </DialogTitle>

          <DialogDescription>
            Change your account password.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">

          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) =>
              setCurrentPassword(e.target.value)
            }
            className="w-full rounded-md border p-2"
          />

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
           onChange={(e) => {
  const value = e.target.value;
  setNewPassword(value);

  if (value.length < 8) {
    setPasswordError("Password must be at least 8 characters");
  } else if (!/[A-Z]/.test(value)) {
    setPasswordError("Password must contain at least 1 uppercase letter");
  } else if (!/\d/.test(value)) {
    setPasswordError("Password must contain at least 1 number");
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    setPasswordError("Password must contain at least 1 special character");
  } else {
    setPasswordError("");
  }
}}
            className="w-full rounded-md border p-2"
          />
          {passwordError && (
  <p className="mt-1 text-sm text-red-500">
    {passwordError}
  </p>
)}
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            className="w-full rounded-md border p-2"
          />

          <button
            disabled={isLoading}
            onClick={handleUpdatePassword}
            className="h-11 w-full rounded-md bg-foreground text-background"
          >
            {isLoading
              ? "Updating..."
              : "Update Password"}
          </button>

        </div>

      </DialogContent>
    </Dialog>
  );
}