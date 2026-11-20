import { useEffect, useId, useState } from "react";

export function MermaidBlock({ code }: { code: string }) {
  const reactId = useId().replace(/:/g, "");
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let alive = true;
    setSvg("");
    setError("");
    void import("mermaid").then(async (mod) => {
      const mermaid = mod.default;
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "dark",
        themeVariables: {
          fontFamily: "IBM Plex Sans, sans-serif",
          primaryTextColor: "#f6f1e7",
          lineColor: "#e8c872",
          background: "#07080d",
        },
      });
      try {
        const { svg: next } = await mermaid.render(`m-${reactId}`, code.trim());
        if (alive) setSvg(next);
      } catch (err) {
        if (alive) setError(err instanceof Error ? err.message : "Diagram failed");
      }
    });
    return () => {
      alive = false;
    };
  }, [code, reactId]);

  if (error) {
    return (
      <pre className="overflow-x-auto rounded-xl border border-rose-900/60 bg-[#1a0c10] p-4 text-xs text-rose-200">
        {error}
      </pre>
    );
  }
  if (!svg) {
    return <div className="h-40 animate-pulse rounded-xl bg-[#12141c]" />;
  }
  return (
    <div
      className="overflow-x-auto rounded-xl border border-[#2a261c] bg-[#0c0e16] p-4 [&_svg]:mx-auto [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
