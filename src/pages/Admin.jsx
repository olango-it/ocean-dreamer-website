import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useSiteContent } from "@/hooks/useSiteContent";
import { saveContent } from "@/lib/contentStore";
import { Button } from "@/components/ui/button";
import JsonNodeEditor from "@/components/admin/JsonNodeEditor";
import { LogOut, Save, Eye, Loader2, Check } from "lucide-react";

const TABS = [
  { key: "navbar", label: "Navigation" },
  { key: "hero", label: "Hero" },
  { key: "about", label: "About" },
  { key: "packagesSection", label: "Packages Header" },
  { key: "packages", label: "Packages" },
  { key: "gallery", label: "Gallery" },
  { key: "testimonials", label: "Testimonials" },
  { key: "faq", label: "FAQ" },
  { key: "contact", label: "Contact" },
  { key: "footer", label: "Footer" },
];

export default function Admin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { content } = useSiteContent();
  const [tab, setTab] = useState("hero");
  const [draft, setDraft] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  if (sessionStorage.getItem("od_admin") !== "1") {
    return <Navigate to="/admin/login" replace />;
  }

  const working = draft ?? JSON.parse(JSON.stringify(content));

  const update = (key, val) => {
    setDraft({ ...working, [key]: val });
    setSaved(false);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveContent(working);
      await queryClient.invalidateQueries({ queryKey: ["siteContent"] });
      setDraft(null);
      setSaved(true);
    } finally {
      setSaving(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("od_admin");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-40 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading text-lg font-bold text-foreground">Ocean Dreamer Admin</span>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/"><Eye className="w-4 h-4 mr-1" /> View Site</Link>
            </Button>
            <Button onClick={handleSave} disabled={saving} size="sm" className="bg-primary">
              {saving ? (
                <Loader2 className="w-4 h-4 mr-1 animate-spin" />
              ) : saved ? (
                <Check className="w-4 h-4 mr-1" />
              ) : (
                <Save className="w-4 h-4 mr-1" />
              )}
              {saving ? "Saving..." : saved ? "Saved" : "Save Changes"}
            </Button>
            <Button onClick={logout} variant="ghost" size="sm">
              <LogOut className="w-4 h-4 mr-1" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-[210px_1fr] gap-8">
        <nav className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`whitespace-nowrap text-left px-3 py-2 rounded-lg font-body text-sm font-medium transition-colors ${
                tab === t.key
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:bg-muted"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <h2 className="font-heading text-xl font-bold text-foreground mb-6">
            {TABS.find((t) => t.key === tab)?.label}
          </h2>
          <JsonNodeEditor
            value={working[tab]}
            onChange={(v) => update(tab, v)}
          />
        </div>
      </div>
    </div>
  );
}