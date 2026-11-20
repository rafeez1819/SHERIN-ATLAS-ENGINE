import { useState } from "react";
import { atlasFiles } from "@/atlas/catalog";
import { MarkdownView } from "@/components/markdown-view";

const stages = [
  ["00", "Foundation"],
  ["01", "Facts"],
  ["02", "Chains"],
  ["03", "Properties"],
  ["04", "Rules"],
  ["05", "Multi-hop"],
  ["06", "Arithmetic"],
  ["07", "Sequences"],
  ["08", "Contradiction"],
  ["09", "Planning"],
  ["10", "Adversarial"],
];

const discovery = [
  ["Source", "Directory, form, or generated tool"],
  ["Identity", "Allocation plus source hash"],
  ["Candidate", "WHERE / WHEN / WHY / HOW"],
  ["Trained", "Answers complete. Still not trusted."],
  ["Verified", "Independent check. Only then selectable."],
];

const streams = [
  "S-01 EventLog",
  "S-02 ReasonTrace",
  "S-03 ConfidenceLog",
  "S-04 DefenderVerdict",
  "S-05 QuerySession",
  "S-06 LearnerAction",
];

export function AtlasApp() {
  const [path, setPath] = useState<string | null>(null);
  const file = atlasFiles.find((item) => item.path === path) ?? null;

  return (
    <div className="flex min-h-screen bg-[#07080d] text-[#f6f1e7]">
      <aside className="atlas-scroll sticky top-0 hidden h-screen w-72 shrink-0 overflow-y-auto border-r border-[#242018] bg-[#0c0e16] p-5 md:block">
        <p className="text-[11px] tracking-[0.22em] text-[#e8c872]">SHERIN ATLAS</p>
        <h1 className="mt-2 font-['Instrument_Serif'] text-3xl">Repo map</h1>
        <p className="mt-2 text-sm leading-6 text-[#b7ad9c]">
          The files are loaded. Open one, or stay on the map.
        </p>
        <button
          type="button"
          onClick={() => setPath(null)}
          className={`mt-6 w-full rounded-lg px-3 py-2 text-left text-sm ${
            path === null ? "bg-[#1c1608] text-[#e8c872]" : "text-[#d6cbb8] hover:bg-[#141820]"
          }`}
        >
          Visual map
        </button>
        <p className="mt-6 text-[11px] tracking-[0.18em] text-[#8d8476]">FILES</p>
        <ul className="mt-2 space-y-1">
          {atlasFiles.map((item) => (
            <li key={item.path}>
              <button
                type="button"
                onClick={() => setPath(item.path)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                  path === item.path
                    ? "bg-[#1c1608] text-[#e8c872]"
                    : "text-[#d6cbb8] hover:bg-[#141820]"
                }`}
              >
                <span className="block font-medium">{item.title}</span>
                <span className="block truncate text-xs text-[#8d8476]">{item.path}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className="atlas-scroll min-w-0 flex-1 overflow-y-auto px-5 py-6 md:px-10 md:py-10">
        <div className="mb-4 flex gap-2 overflow-x-auto md:hidden">
          <button
            type="button"
            onClick={() => setPath(null)}
            className="shrink-0 rounded-full border border-[#e8c872] px-3 py-1 text-xs text-[#e8c872]"
          >
            Map
          </button>
          {atlasFiles.map((item) => (
            <button
              key={item.path}
              type="button"
              onClick={() => setPath(item.path)}
              className="shrink-0 rounded-full border border-[#2a261c] px-3 py-1 text-xs"
            >
              {item.title}
            </button>
          ))}
        </div>

        {file ? (
          <article>
            <p className="text-xs tracking-[0.16em] text-[#e8c872]">{file.path}</p>
            <div className="mt-4">
              <MarkdownView source={file.body} />
            </div>
          </article>
        ) : (
          <Map />
        )}
      </main>
    </div>
  );
}

function Map() {
  return (
    <div className="mx-auto max-w-5xl space-y-10">
      <header>
        <p className="text-xs tracking-[0.22em] text-[#e8c872]">DETERMINISTIC REASONING ENGINE</p>
        <h2 className="mt-2 font-['Instrument_Serif'] text-5xl leading-none md:text-6xl">
          Sherin Atlas
        </h2>
        <p className="mt-4 max-w-2xl text-[#cbbfa8]">
          Kulexicon handles language. SHERIN handles meaning. Nothing in this repo is empty —
          open a file in the list, or read the live map below.
        </p>
      </header>

      <section className="grid gap-3 md:grid-cols-3">
        {[
          ["Reasoning", "Problem frames, planning, binding, diagnosis, bounded repair"],
          ["Memory", "Working, semantic, and episodic. Only semantic facts drive answers."],
          ["Contracts", "Independent verification and evidence-based contract checks"],
        ].map(([title, copy]) => (
          <article key={title} className="rounded-2xl border border-[#2a261c] bg-[#0c0e16] p-5">
            <h3 className="text-[#e8c872]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#cbbfa8]">{copy}</p>
          </article>
        ))}
      </section>

      <section>
        <h3 className="text-sm tracking-[0.16em] text-[#8d8476]">CURRICULUM 00–10</h3>
        <ol className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {stages.map(([id, name], index) => (
            <li
              key={id}
              className="rounded-xl border border-[#2a261c] bg-[#0c0e16] px-3 py-3"
              style={{ borderColor: index === stages.length - 1 ? "#34d399" : undefined }}
            >
              <div className="font-['Instrument_Serif'] text-2xl text-[#e8c872]">{id}</div>
              <div className="text-sm text-[#d6cbb8]">{name}</div>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="text-sm tracking-[0.16em] text-[#8d8476]">TOOL DISCOVERY</h3>
          <ol className="mt-3 space-y-2">
            {discovery.map(([title, copy], index) => (
              <li key={title} className="flex gap-3 rounded-xl border border-[#2a261c] bg-[#0c0e16] p-3">
                <span className="font-['Instrument_Serif'] text-2xl text-[#e8c872]">{index + 1}</span>
                <span>
                  <span className="block font-medium">{title}</span>
                  <span className="block text-sm text-[#b7ad9c]">{copy}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="text-sm tracking-[0.16em] text-[#8d8476]">OBSERVATION HARNESS</h3>
          <p className="mt-3 text-sm text-[#cbbfa8]">
            Phase A must freeze before Phase B opens. Visualization never decides eligibility.
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {streams.map((name) => (
              <li key={name} className="rounded-xl border border-[#17324a] bg-[#0c1e33] px-3 py-3 text-sm">
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-3 rounded-xl border border-[#3f0a16] bg-[#1a0c10] px-3 py-3 text-sm text-[#fecdd3]">
            Any of the 10 assertions fails → gate closed. No promotion.
          </p>
        </div>
      </section>
    </div>
  );
}
