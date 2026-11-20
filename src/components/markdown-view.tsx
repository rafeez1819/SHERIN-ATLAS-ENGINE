import { Children, isValidElement, type ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { MermaidBlock } from "@/components/mermaid-block";

function normalizeHtmlBlocks(source: string) {
  return source.replace(/<div align="center">([\s\S]*?)<\/div>/gi, (_match, content: string) =>
    content.replace(/<br\s*\/?>/gi, "  \n"),
  );
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-['Instrument_Serif'] text-4xl tracking-tight text-[#f6f1e7]">{children}</h1>
  ),
  h2: ({ children }) => <h2 className="pt-4 text-xl font-semibold text-[#e8c872]">{children}</h2>,
  h3: ({ children }) => <h3 className="pt-2 text-lg font-medium text-[#f6f1e7]">{children}</h3>,
  p: ({ children }) => <p className="leading-7">{children}</p>,
  a: ({ children, href }) => (
    <a className="text-[#e8c872] underline underline-offset-4" href={href}>
      {children}
    </a>
  ),
  img: ({ src, alt }) =>
    src ? (
      <img alt={alt ?? ""} className="my-3 max-w-full rounded-lg" loading="lazy" src={src} />
    ) : null,
  ul: ({ children }) => <ul className="list-disc space-y-1 pl-6">{children}</ul>,
  ol: ({ children, start }) => (
    <ol className="list-decimal space-y-1 pl-6" start={start}>
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-[#e8c872] pl-3 text-[#cbbfa8]">{children}</blockquote>
  ),
  hr: () => <hr className="border-[#242018]" />,
  table: ({ children }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-[#3b3527] px-3 py-2 font-semibold text-[#e8c872]">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border-b border-[#242018] px-3 py-2 align-top">{children}</td>
  ),
  pre: ({ children }) => {
    const child = Children.toArray(children)[0];
    if (
      isValidElement<{ className?: string; children?: ReactNode }>(child) &&
      child.props.className === "language-mermaid"
    ) {
      return <MermaidBlock code={String(child.props.children ?? "")} />;
    }

    return (
      <pre className="overflow-x-auto rounded-xl border border-[#242018] bg-[#0c0e16] p-4 text-xs leading-5 text-[#d6cbb8]">
        {children}
      </pre>
    );
  },
  code: ({ className, children }) => (
    <code className={className ? className : "rounded bg-[#1c1608] px-1 text-[#e8c872]"}>
      {children}
    </code>
  ),
};

export function MarkdownView({ source }: { source: string }) {
  return (
    <div className="space-y-4 text-[15px] leading-7 text-[#ebe4d6]">
      <ReactMarkdown
        components={components}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {normalizeHtmlBlocks(source)}
      </ReactMarkdown>
    </div>
  );
}
