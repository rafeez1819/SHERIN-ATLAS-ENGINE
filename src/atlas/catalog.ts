import readme from "../../artifacts/sherin-atlas/README.md?raw";
import arch from "../../artifacts/sherin-atlas/docs/architecture/README.md?raw";
import diagrams from "../../artifacts/sherin-atlas/docs/architecture/diagrams.md?raw";
import verification from "../../artifacts/sherin-atlas/docs/contracts/verification.md?raw";
import curriculum from "../../artifacts/sherin-atlas/docs/curriculum/README.md?raw";
import memory from "../../artifacts/sherin-atlas/docs/memory/README.md?raw";
import demo from "../../artifacts/sherin-atlas/examples/self_cycle_demo.py?raw";

export type AtlasFile = {
  path: string;
  title: string;
  body: string;
};

export const atlasFiles: AtlasFile[] = [
  { path: "README.md", title: "Overview", body: readme },
  { path: "docs/architecture/diagrams.md", title: "Diagram gallery", body: diagrams },
  { path: "docs/architecture/README.md", title: "Architecture", body: arch },
  { path: "docs/contracts/verification.md", title: "Verification", body: verification },
  { path: "docs/curriculum/README.md", title: "Curriculum", body: curriculum },
  { path: "docs/memory/README.md", title: "Memory", body: memory },
  { path: "examples/self_cycle_demo.py", title: "Self-cycle demo", body: demo },
];
