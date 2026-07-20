import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

const humanize = (k) =>
  k.replace(/([A-Z])/g, " $1").replace(/[_-]/g, " ").replace(/^./, (s) => s.toUpperCase()).trim();

export default function JsonNodeEditor({ label, value, onChange }) {
  // Object
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return (
      <div className="space-y-3">
        {label && (
          <p className="font-body text-xs font-bold uppercase tracking-wide text-primary">{humanize(label)}</p>
        )}
        <div className={`space-y-3 ${label ? "border-l-2 border-primary/20 pl-4" : ""}`}>
          {Object.keys(value).map((k) => (
            <JsonNodeEditor
              key={k}
              label={k}
              value={value[k]}
              onChange={(v) => {
                const n = { ...value };
                n[k] = v;
                onChange(n);
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Array
  if (Array.isArray(value)) {
    return (
      <div className="space-y-3">
        {label && (
          <p className="font-body text-xs font-bold uppercase tracking-wide text-primary">{humanize(label)}</p>
        )}
        <div className="space-y-2 border-l-2 border-primary/20 pl-4">
          {value.map((item, i) => (
            <div key={i} className="rounded-lg bg-muted/40 p-3 space-y-2 relative">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-1 right-1 h-6 w-6 text-destructive hover:bg-destructive/10"
                onClick={() => onChange(value.filter((_, idx) => idx !== i))}
              >
                <Trash2 className="w-3.5 h-3.5" />
              </Button>
              <p className="font-body text-[10px] font-semibold text-muted-foreground">#{i + 1}</p>
              <JsonNodeEditor
                value={item}
                onChange={(v) => {
                  const n = [...value];
                  n[i] = v;
                  onChange(n);
                }}
              />
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-full border-dashed"
            onClick={() => {
              const tpl = value.length ? JSON.parse(JSON.stringify(value[value.length - 1])) : "";
              onChange([...value, tpl]);
            }}
          >
            <Plus className="w-3.5 h-3.5 mr-1" /> Add Item
          </Button>
        </div>
      </div>
    );
  }

  // Primitive
  const isLong = typeof value === "string" && (value.length > 60 || value.includes("\n"));
  return (
    <div className="space-y-1">
      {label && (
        <label className="font-body text-xs font-medium text-foreground/70">{humanize(label)}</label>
      )}
      {typeof value === "boolean" ? (
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="w-4 h-4"
        />
      ) : typeof value === "number" ? (
        <Input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="font-body text-sm"
        />
      ) : isLong ? (
        <Textarea
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className="font-body text-sm min-h-[80px]"
        />
      ) : (
        <Input
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className="font-body text-sm"
        />
      )}
    </div>
  );
}