import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "@tanstack/react-router";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

const OPEN_SIGNIN = "open-signin";

export function openSignIn() {
  window.dispatchEvent(new CustomEvent(OPEN_SIGNIN));
}


export function SignInDialog() {
  const [open, setOpen] = useState(false);
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();

  useEffect(() => {
    const handler = () => setOpen(true);

    window.addEventListener(OPEN_SIGNIN, handler);
    return () => window.removeEventListener(OPEN_SIGNIN, handler);
  }, []);

  const handleGoogleSuccess = async (credentialResponse: any) => {
        try {
            const token = credentialResponse.credential;
            console.log(token)
            const data={
                token:token,
                authProvide:"google"
            }

            const res = await axios.post("http://localhost:5011/api/authGoogle", {token,},{withCredentials: true,});
            //console.log(res.data.expiresAt)
            console.log(res)
            localStorage.setItem("expiresAt", res.data.expiresAt);
            setIsLoggedIn(true);

            setOpen(false); // close dialog
            toast.success('Login Success')
            router.navigate({ to: "/" }); // ✅ correct

        } catch (err) {
            console.log("Google login error", err);
        }
        };

    const handleMailLogin=async()=>{

        if(!email || !password ){
            toast.error("All fields required")
            return
        }
        try{
          const res=await axios.post('https://detection-forge-server.vercel.app/api/loginMail',{email,password},{withCredentials: true,})
          console.log(res.data.data.expiresAt)
          localStorage.setItem("expiresAt", res.data.data.expiresAt);
          setIsLoggedIn(true);
          console.log(res)
          setOpen(false); 
          toast.success('Login Success')
        }catch(err){
          console.log(err)
          return;
        }
        
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md border-border bg-background">

        <DialogHeader>
          <DialogTitle>Welcome back</DialogTitle>
          <DialogDescription>
            Sign in to access your DetectionForge workspace.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-4">

        <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() => console.log("Failed")}
        />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border"></span>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-background px-2 text-muted-foreground">
                OR
              </span>
            </div>
          </div>

          <div className="grid gap-2">
            <Label>Email</Label>
            <Input type="email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>

          <div className="grid gap-2">
            <Label>Password</Label>
            <Input type="password" onChange={(e)=>setPassword(e.target.value)}/>
          </div>

          <button
            className="inline-flex h-11 w-full items-center justify-center rounded-md bg-foreground text-background" onClick={handleMailLogin}
          >
            Sign In
          </button>

        </div>

      </DialogContent>
    </Dialog>
  );
}