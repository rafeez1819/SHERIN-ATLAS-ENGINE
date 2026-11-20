import { MermaidBlock } from "@/components/mermaid-block";

function inline(text: string) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="rounded bg-[#1c1608] px-1 text-[#e8c872]">
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

export function MarkdownView({ source }: { source: string }) {
  const chunks = source.split(/```/);
  return (
    <div className="space-y-4 text-[15px] leading-7 text-[#ebe4d6]">
      {chunks.map((chunk, index) => {
        if (index % 2 === 1) {
          const nl = chunk.indexOf("\n");
          const lang = nl === -1 ? chunk : chunk.slice(0, nl);
          const body = nl === -1 ? "" : chunk.slice(nl + 1);
          if (lang.trim() === "mermaid") return <MermaidBlock key={index} code={body} />;
          return (
            <pre
              key={index}
              className="overflow-x-auto rounded-xl border border-[#242018] bg-[#0c0e16] p-4 text-xs leading-5 text-[#d6cbb8]"
            >
              {body}
            </pre>
          );
        }
        return chunk
          .split("\n")
          .map((line, i) => {
            const key = `${index}-${i}`;
            if (!line.trim()) return <div key={key} className="h-2" />;
            if (line.startsWith("# "))
              return (
                <h1
                  key={key}
                  className="font-['Instrument_Serif'] text-4xl tracking-tight text-[#f6f1e7]"
                >
                  {line.slice(2)}
                </h1>
              );
            if (line.startsWith("## "))
              return (
                <h2 key={key} className="pt-4 text-xl font-semibold text-[#e8c872]">
                  {line.slice(3)}
                </h2>
              );
            if (line.startsWith("### "))
              return (
                <h3 key={key} className="pt-2 text-lg font-medium text-[#f6f1e7]">
                  {line.slice(4)}
                </h3>
              );
            if (line.startsWith("> "))
              return (
                <blockquote
                  key={key}
                  className="border-l-2 border-[#e8c872] pl-3 text-[#cbbfa8]"
                >
                  {inline(line.slice(2))}
                </blockquote>
              );
            if (line.startsWith("- "))
              return (
                <div key={key} className="pl-3">
                  · {inline(line.slice(2))}
                </div>
              );
            if (line.startsWith("|"))
              return (
                <div key={key} className="font-mono text-xs text-[#cbbfa8]">
                  {line}
                </div>
              );
            if (line.trim() === "---")
              return <hr key={key} className="border-[#242018]" />;
            return <p key={key}>{inline(line)}</p>;
          });
      })}
    </div>
  );
}
