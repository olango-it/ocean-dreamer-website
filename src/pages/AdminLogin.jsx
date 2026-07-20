import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock, ArrowLeft, Shield } from "lucide-react";

const PIN = "553752";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (pin === PIN) {
      sessionStorage.setItem("od_admin", "1");
      navigate("/admin");
    } else {
      setError(true);
      setPin("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h1 className="font-heading text-2xl font-bold text-foreground">Admin Portal</h1>
            <p className="font-body text-sm text-muted-foreground mt-1">Enter your PIN to continue</p>
          </div>
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="password"
                  inputMode="numeric"
                  autoFocus
                  maxLength={6}
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value.replace(/\D/g, ""));
                    setError(false);
                  }}
                  placeholder="••••••"
                  className={`w-full font-body text-center text-2xl tracking-[0.5em] pl-10 pr-4 py-3 rounded-xl border-2 bg-background focus:outline-none ${
                    error ? "border-destructive" : "border-border focus:border-primary"
                  }`}
                />
              </div>
              {error && (
                <p className="font-body text-xs text-destructive text-center">Incorrect PIN. Try again.</p>
              )}
            </div>
            <Button type="submit" className="w-full bg-primary py-5">Unlock</Button>
          </form>
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="font-body text-xs text-muted-foreground inline-flex items-center gap-1 hover:text-primary"
            >
              <ArrowLeft className="w-3 h-3" /> Back to site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}