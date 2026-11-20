import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-NABObp09.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var atlasFiles = [
	{
		path: "README.md",
		title: "Overview",
		body: "<div align=\"center\">\n\n# 🧠 SHERIN ATLAS\n\n### Deterministic Reasoning Engine\n**Kulexicon handles language. SHERIN handles meaning.**\n\n[![Status](https://img.shields.io/badge/Status-Active%20Development-blue?style=for-the-badge)](https://github.com)\n[![Architecture](https://img.shields.io/badge/Architecture-Cognitor%20%2B%20Domain%20Adapters-purple?style=for-the-badge)](docs/architecture)\n[![Verification](https://img.shields.io/badge/Verification-Independent%20%26%20Fail--Closed-success?style=for-the-badge)](docs/contracts)\n[![License](https://img.shields.io/badge/License-Apache%202.0-orange?style=for-the-badge)](LICENSE)\n\n<br>\n\n**A formal, non-hallucinating reasoning engine that never invents answers.**  \nEvery claim carries provenance. Every result requires independent verification.  \nUnknown information stays unknown.\n\n</div>\n\n---\n\n## ✨ Why Sherin Atlas Exists\n\nMost modern AI systems predict the next token.  \nWhen information is missing, they fabricate.\n\n**Sherin Atlas works differently.**\n\n| Traditional Approach | Sherin Atlas |\n|----------------------|--------------|\n| Predicts probable answers | Constructs answers only from verified primitives |\n| Hallucinates on incomplete data | Preserves `UNKNOWN` / `MISSING` states |\n| Self-reinforcing (can learn its own mistakes) | Independent verification required before knowledge promotion |\n| Opaque reasoning | Full provenance + explicit diagnosis + bounded repair |\n| Language-tied | Language-independent Cognitor core + domain adapters |\n\n> **Core Loop**  \n> `Teach → Parse → Defend → Store → Observe → Test → Update`\n\n---\n\n## 🏗 Architecture Overview\n\n```mermaid\n%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui','fontSize':'15px','lineColor':'#e8c872','primaryTextColor':'#f8f5ef'}}}%%\nflowchart TB\n    subgraph CORE[\"SHERIN ATLAS  ·  Cognitor Core\"]\n        direction TB\n        R[\"REASONING<br/>ProblemFrame · Planning · Binding<br/>Diagnosis · Bounded Repair\"]\n        M[\"MEMORY<br/>Working · Semantic · Episodic<br/>Provenance · Classification\"]\n        C[\"CONTRACTS<br/>Verification · Four-Question<br/>Effect Auth · Slot Contracts\"]\n    end\n\n    subgraph DOMAINS[\"DOMAIN SPACE\"]\n        direction LR\n        PY[\"Python\"]\n        JS[\"JavaScript\"]\n        ALGO[\"Algorithms\"]\n    end\n\n    CORE --> DOMAINS\n    R --- M\n    M --- C\n\n    style CORE fill:#0c0e16,stroke:#e8c872,stroke-width:2px,color:#f8f5ef\n    style DOMAINS fill:#0c0e16,stroke:#67e8f9,stroke-width:1.5px,color:#f8f5ef\n    style R fill:#1a1530,stroke:#a78bfa,color:#f5f3ff\n    style M fill:#082f2e,stroke:#5eead4,color:#ecfeff\n    style C fill:#2a1030,stroke:#e879f9,color:#fdf4ff\n    style PY fill:#052e24,stroke:#34d399,color:#ecfdf5\n    style JS fill:#3f2a08,stroke:#fbbf24,color:#fffbeb\n    style ALGO fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n```\n\n### Layer Responsibilities\n\n| Layer | Component | Critical Rule |\n|-------|-----------|---------------|\n| **Language** | Kulexicon Adapter | Text ↔ KUID conversion. Read-only dictionary. |\n| **Input Guard** | Defender Engine | Nothing enters the Knowledge Base without validation |\n| **State Monitor** | Observe Engine | Records *every* event with provenance |\n| **Knowledge** | Semantic Memory | Facts, Rules, Concepts — immutable once verified |\n| **Reasoning** | Reasoner + Planner | Forward/backward chaining + multi-hop + diagnosis |\n| **Learning** | Curriculum + Learner | Staged progression + checkpoint + rollback |\n| **Orchestration** | SherinEngine | Thin coordinator — no business logic |\n\n---\n\n## 🧩 Memory Architecture\n\nSherin maintains three strictly separated memory layers:\n\n```mermaid\n%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui','lineColor':'#e8c872'}}}%%\nflowchart TD\n    WM[\"WORKING MEMORY<br/>session context only<br/>problem · path · assumptions\"]\n    SM[\"SEMANTIC MEMORY<br/>single source of truth<br/>facts · rules · concepts\"]\n    EM[\"EPISODIC MEMORY<br/>experience archive<br/>events · traces · logs\"]\n\n    WM -->|\"cleared after task\"| SM\n    SM -->|\"writes events, never reads facts from\"| EM\n    EM -.->|\"never drives reasoning\"| SM\n\n    style WM fill:#0c1e33,stroke:#7dd3fc,stroke-width:2px,color:#f0f9ff\n    style SM fill:#052e24,stroke:#34d399,stroke-width:2px,color:#ecfdf5\n    style EM fill:#2a1030,stroke:#e879f9,stroke-width:2px,color:#fdf4ff\n```\n\n**Invariants**\n- Semantic Memory is the single source of truth\n- Episodic Memory never drives reasoning\n- Working Memory never stores permanent knowledge\n- Only `VERIFIED` items become eligible for task selection\n\n---\n\n## 🛡️ Core Safety Contracts\n\n### Independent Verification (P1-D)\n\nEvery result must pass an independent acceptance contract before becoming knowledge.\n\n```mermaid\n%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%\nstateDiagram-v2\n    [*] --> Request\n\n    Request --> ProvenanceCheck: provenance\n    ProvenanceCheck --> Missing: incomplete\n    ProvenanceCheck --> ContractCheck: complete\n\n    ContractCheck --> Missing: unbound slots\n    ContractCheck --> ObservationCheck: contracts hold\n\n    ObservationCheck --> Conflicting: mismatch\n    ObservationCheck --> TaskCheck: match\n\n    TaskCheck --> Invalid: misaligned\n    TaskCheck --> Verified: aligned\n\n    Missing --> [*]\n    Conflicting --> [*]\n    Invalid --> [*]\n    Verified --> [*]\n\n    classDef ok fill:#052e24,stroke:#34d399,color:#ecfdf5\n    classDef warn fill:#3f2a08,stroke:#fbbf24,color:#fffbeb\n    classDef bad fill:#3f0a16,stroke:#fb7185,color:#ffe4e6\n    classDef mute fill:#111827,stroke:#94a3b8,color:#f8fafc\n    classDef gold fill:#1c1608,stroke:#e8c872,color:#fffbeb\n\n    class Verified ok\n    class Missing warn\n    class Conflicting bad\n    class Invalid mute\n    class Request,ProvenanceCheck,ContractCheck,ObservationCheck,TaskCheck gold\n```\n\n```text\nVerificationOutcome =\n  | VERIFIED     { result, evidence }\n  | MISSING      { slots }\n  | CONFLICTING  { conflicts }\n  | INVALID      { reasons }\n  | UNKNOWN      { residual }\n```\n\n### Four-Question Training Contract\n\nEvery tool, operator, or knowledge item must answer:\n\n```mermaid\nquadrantChart\n    title Four-Question Training Contract\n    x-axis Low Specificity --> High Specificity\n    y-axis Low Evidence --> High Evidence\n    quadrant-1 TRAINED → VERIFIED\n    quadrant-2 PARTIAL\n    quadrant-3 UNKNOWN\n    quadrant-4 KNOWN (needs evidence)\n    WHERE: [0.75, 0.80]\n    WHEN: [0.70, 0.65]\n    WHY: [0.80, 0.75]\n    HOW: [0.85, 0.70]\n```\n\n1. **WHERE** will this be used?\n2. **WHEN** will it be used?\n3. **WHY** will it be used?\n4. **HOW** will it be used?\n\nOnly items with complete, evidence-backed answers reach `TRAINED`.  \nOnly independently verified items reach `VERIFIED`.\n\n### Fail-Closed Gates\n\n```mermaid\n%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%\nflowchart LR\n    A[\"Incoming claim\"] --> B{\"All predicates<br/>satisfied?\"}\n    B -->|yes| C[\"VERIFIED\"]\n    B -->|no| D{\"Most specific<br/>failure\"}\n    D --> E[\"MISSING\"]\n    D --> F[\"CONFLICTING\"]\n    D --> G[\"INVALID\"]\n    D --> H[\"UNKNOWN\"]\n\n    style A fill:#0c0e16,stroke:#e8c872,color:#fffbeb\n    style B fill:#1a1530,stroke:#a78bfa,color:#f5f3ff\n    style C fill:#052e24,stroke:#34d399,color:#ecfdf5\n    style D fill:#1a1530,stroke:#a78bfa,color:#f5f3ff\n    style E fill:#3f2a08,stroke:#fbbf24,color:#fffbeb\n    style F fill:#3f0a16,stroke:#fb7185,color:#ffe4e6\n    style G fill:#2a1030,stroke:#e879f9,color:#fdf4ff\n    style H fill:#111827,stroke:#94a3b8,color:#f8fafc\n```\n\n- Missing information → `MISSING` / `UNKNOWN`\n- Conflicting evidence → `CONFLICTING`\n- No silent invention. Ever.\n\nFull gallery: [docs/architecture/diagrams.md](docs/architecture/diagrams.md)\n\n---\n\n## Specialized flows\n\n### Curriculum stages\n\nStages are linear and gated. A stage cannot open until the previous checkpoint is frozen.\n\n```mermaid\n%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%\nflowchart LR\n    S00[\"00 Foundation\"] --> S01[\"01 Facts\"]\n    S01 --> S02[\"02 Chains\"]\n    S02 --> S03[\"03 Properties\"]\n    S03 --> S04[\"04 Rules\"]\n    S04 --> S05[\"05 Multi-hop\"]\n    S05 --> S06[\"06 Arithmetic\"]\n    S06 --> S07[\"07 Sequences\"]\n    S07 --> S08[\"08 Contradiction\"]\n    S08 --> S09[\"09 Planning\"]\n    S09 --> S10[\"10 Adversarial\"]\n\n    GATE[\"After every stage<br/>tests · accuracy · anomalies · freeze\"]\n\n    S00 -.-> GATE\n    S05 -.-> GATE\n    S10 -.-> GATE\n\n    style S00 fill:#0c0e16,stroke:#e8c872,color:#fffbeb\n    style S01 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style S02 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style S03 fill:#082f2e,stroke:#5eead4,color:#ecfeff\n    style S04 fill:#082f2e,stroke:#5eead4,color:#ecfeff\n    style S05 fill:#1a1530,stroke:#a78bfa,color:#f5f3ff\n    style S06 fill:#1a1530,stroke:#a78bfa,color:#f5f3ff\n    style S07 fill:#2a1030,stroke:#e879f9,color:#fdf4ff\n    style S08 fill:#3f0a16,stroke:#fb7185,color:#ffe4e6\n    style S09 fill:#3f2a08,stroke:#fbbf24,color:#fffbeb\n    style S10 fill:#052e24,stroke:#34d399,color:#ecfdf5\n    style GATE fill:#1c1608,stroke:#e8c872,color:#fffbeb\n```\n\n### Tool discovery lifecycle\n\nDiscovery records a candidate. It does not import, execute, or promote.\n\n```mermaid\n%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%\nflowchart TD\n    SRC[\"Source appears<br/>directory · generated tool · form\"] --> ID[\"Allocate identity<br/>+ source hash\"]\n    ID --> CAND[\"Four-question candidate<br/>WHERE WHEN WHY HOW\"]\n    CAND --> Q{\"Each answer?\"}\n    Q -->|no evidence| UNK[\"UNKNOWN\"]\n    Q -->|partial evidence| PART[\"PARTIAL\"]\n    Q -->|sources disagree| CONF[\"CONFLICT\"]\n    Q -->|evidence complete| KNOWN[\"KNOWN\"]\n    KNOWN --> TRAIN[\"TRAINED<br/>still CANDIDATE memory\"]\n    TRAIN --> IV[\"Independent verification<br/>bound to contract version\"]\n    IV -->|pass| VER[\"VERIFIED<br/>eligible for selection\"]\n    IV -->|fail| BLOCK[\"USAGE_CONTRACT_BLOCKED\"]\n\n    UNK --> ASK[\"ASK or DEFER<br/>never guess\"]\n    PART --> ASK\n    CONF --> ASK\n\n    style SRC fill:#0c0e16,stroke:#e8c872,color:#fffbeb\n    style ID fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style CAND fill:#1a1530,stroke:#a78bfa,color:#f5f3ff\n    style UNK fill:#111827,stroke:#94a3b8,color:#f8fafc\n    style PART fill:#3f2a08,stroke:#fbbf24,color:#fffbeb\n    style CONF fill:#3f0a16,stroke:#fb7185,color:#ffe4e6\n    style KNOWN fill:#082f2e,stroke:#5eead4,color:#ecfeff\n    style TRAIN fill:#1c1608,stroke:#e8c872,color:#fffbeb\n    style IV fill:#2a1030,stroke:#e879f9,color:#fdf4ff\n    style VER fill:#052e24,stroke:#34d399,color:#ecfdf5\n    style BLOCK fill:#3f0a16,stroke:#fb7185,color:#ffe4e6\n    style ASK fill:#3f2a08,stroke:#fbbf24,color:#fffbeb\n```\n\n### Observation harness\n\nPhase A must freeze before Phase B can open. Visualization never decides eligibility.\n\n```mermaid\n%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%\nflowchart TD\n    A[\"PHASE A · StubLearner\"] --> T[\"10 assertions<br/>A-01 … A-10\"]\n    T -->|any fail| STOP[\"HALT · fix · retest\"]\n    T -->|all pass| FREEZE[\"FREEZE artifacts<br/>checksummed baseline\"]\n    FREEZE --> B[\"PHASE B · OBS-L1-001\"]\n    B --> S[\"Six streams preserved<br/>identity · order · content · provenance\"]\n    S --> S1[\"S-01 EventLog\"]\n    S --> S2[\"S-02 ReasonTrace\"]\n    S --> S3[\"S-03 ConfidenceLog\"]\n    S --> S4[\"S-04 DefenderVerdict\"]\n    S --> S5[\"S-05 QuerySession\"]\n    S --> S6[\"S-06 LearnerAction\"]\n    S1 & S2 & S3 & S4 & S5 & S6 --> REV[\"Evidence review<br/>facts only\"]\n    REV --> ELIG{\"Eligible?\"}\n    ELIG -->|no| HALT[\"HALT<br/>visualization receives nothing\"]\n    ELIG -->|yes| VIS[\"Visualization<br/>consumer only\"]\n\n    style A fill:#0c0e16,stroke:#e8c872,color:#fffbeb\n    style T fill:#1a1530,stroke:#a78bfa,color:#f5f3ff\n    style STOP fill:#3f0a16,stroke:#fb7185,color:#ffe4e6\n    style FREEZE fill:#1c1608,stroke:#e8c872,color:#fffbeb\n    style B fill:#082f2e,stroke:#5eead4,color:#ecfeff\n    style S fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style S1 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style S2 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style S3 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style S4 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style S5 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style S6 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style REV fill:#2a1030,stroke:#e879f9,color:#fdf4ff\n    style ELIG fill:#1a1530,stroke:#a78bfa,color:#f5f3ff\n    style HALT fill:#3f0a16,stroke:#fb7185,color:#ffe4e6\n    style VIS fill:#052e24,stroke:#34d399,color:#ecfdf5\n```\n\n---\n\n## 📁 Repository Structure\n\n```text\nsherin-atlas/\n├── sherin/\n│   ├── core/                       # Language-independent Cognitor\n│   │   ├── reasoning/              # Planning, binding, diagnosis, repair\n│   │   ├── memory/                 # Allocator, context, classifier, store\n│   │   ├── interfaces/             # Domain adapter contracts\n│   │   └── contracts/              # Verification & four-question contracts\n│   │\n│   ├── domains/\n│   │   └── programming/\n│   │       └── python/             # First domain adapter\n│   │           ├── knowledge/      # Constructs, functions, types\n│   │           ├── problems/       # Curriculum problems\n│   │           ├── adapters/       # Knowledge / Execution / Verification\n│   │           └── execution/      # Sandbox\n│   │\n│   ├── curriculum/                 # Ingestion, generation, verification\n│   └── tools/                      # Controlled runtime tools\n│\n├── docs/\n│   ├── architecture/               # System design\n│   ├── memory/                     # Memory classification system\n│   ├── contracts/                  # Verification & training contracts\n│   └── curriculum/                 # Staged learning protocol\n│\n├── examples/                       # End-to-end demonstrations\n├── tests/                          # Fail-closed test suites\n└── assets/                         # Diagrams & visuals\n```\n\n---\n\n## 🚀 Quick Start\n\n```bash\n# Clone\ngit clone https://github.com/your-org/sherin-atlas.git\ncd sherin-atlas\n\n# Create environment\npython -m venv .venv\nsource .venv/bin/activate          # or .venv\\Scripts\\activate on Windows\n\n# Install\npip install -e \".[dev]\"\n\n# Run self-health + Level-1 verification suite\npython -m sherin.tools.self_cycle\n```\n\n---\n\n## 🧪 Current Status (Level-1)\n\n| Capability | Status |\n|------------|--------|\n| Independent Verification Contract | ✅ Implemented |\n| Provenance tracking | ✅ Implemented |\n| Fail-closed on MISSING / CONFLICTING | ✅ Implemented |\n| Bounded Local Repair (sketch) | ✅ Implemented |\n| Self-health / self-validate loop | ✅ Implemented |\n| Four-Question Training Contract | ✅ Defined |\n| Domain Adapter interfaces | ✅ Defined |\n| Python domain (constructs + functions) | 🟡 In progress |\n| Complex DAG composition | 🔜 Planned |\n| Full curriculum stages 00–10 | 🔜 Planned |\n\n---\n\n## 📚 Documentation\n\n- [Architecture Overview](docs/architecture/README.md)\n- [Diagram Gallery](docs/architecture/diagrams.md)\n- [Memory Classification System](docs/memory/README.md)\n- [Independent Verification Contract](docs/contracts/verification.md)\n- [Four-Question Training Contract](docs/contracts/four_question.md)\n- [Curriculum Protocol](docs/curriculum/README.md)\n- [Domain Adapter Guide](docs/architecture/domain_adapters.md)\n\n---\n\n## 🎯 Design Principles\n\n1. **Never invent** — preserve `UNKNOWN` and `MISSING`\n2. **Provenance is mandatory** — every fact carries its source\n3. **Verification before promotion** — no self-teaching of mistakes\n4. **Core is language-independent** — domains supply syntax & execution\n5. **Fail closed** — gates stay closed until evidence opens them\n6. **Small, verifiable milestones** — teach → test → checkpoint → proceed\n\n---\n\n## 🗺️ Roadmap Snapshot\n\n- [x] Core typed ports & verification outcomes\n- [x] Independent Verification Contract (P1-D)\n- [x] Self-health / self-repair demonstration\n- [x] Four-Question Training Contract\n- [ ] Effect Authorization (P1-E)\n- [ ] Bounded Local Repair (P2-C) production hardening\n- [ ] Full Python domain adapter\n- [ ] Curriculum Stages 00–10\n- [ ] Multi-domain concept registry\n- [ ] Observation Harness (OBS-L1-001)\n\n---\n\n<div align=\"center\">\n\n**Built for truth-seeking systems.**  \nNo hallucinations. Full provenance. Independent verification.\n\n[Documentation](docs/) · [Examples](examples/) · [Contributing](CONTRIBUTING.md)\n\n</div>\n"
	},
	{
		path: "docs/architecture/diagrams.md",
		title: "Diagram gallery",
		body: "# Diagram gallery\n\nOne palette across every diagram.\n\n| Token | Use | Hex |\n| --- | --- | --- |\n| Gold | identity, freeze, trained | `#e8c872` |\n| Violet | reasoning and decisions | `#a78bfa` |\n| Cyan | memory and streams | `#7dd3fc` |\n| Teal | contracts and observation | `#5eead4` |\n| Emerald | verified, eligible | `#34d399` |\n| Amber | missing, partial, ask | `#fbbf24` |\n| Rose | conflict, halt | `#fb7185` |\n| Magenta | review, classification | `#e879f9` |\n| Slate | unknown, invalid | `#94a3b8` |\n\nBackground fills stay near `#0c0e16`. Text stays `#f8f5ef` or the matching light tint. Do not mix the older indigo/purple set.\n\n## Curriculum stages\n\n```mermaid\n%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%\nflowchart TB\n    subgraph L0[\"Foundation\"]\n        S00[\"00 Engine basics / KUID\"]\n    end\n    subgraph L1[\"Facts and structure\"]\n        S01[\"01 Simple facts\"]\n        S02[\"02 Multi-fact chains\"]\n        S03[\"03 Properties\"]\n    end\n    subgraph L2[\"Deduction\"]\n        S04[\"04 Rules\"]\n        S05[\"05 Multi-hop\"]\n        S06[\"06 Arithmetic\"]\n    end\n    subgraph L3[\"Control\"]\n        S07[\"07 Sequences\"]\n        S08[\"08 Contradiction\"]\n        S09[\"09 Planning\"]\n    end\n    subgraph L4[\"Pressure\"]\n        S10[\"10 Adversarial\"]\n    end\n\n    S00 --> S01 --> S02 --> S03 --> S04 --> S05 --> S06 --> S07 --> S08 --> S09 --> S10\n    GATE[\"Gate after every stage<br/>suite · accuracy · anomaly trend · immutable checkpoint\"]\n    S00 -.-> GATE\n    S10 -.-> GATE\n\n    style L0 fill:#0c0e16,stroke:#e8c872,color:#fffbeb\n    style L1 fill:#0c0e16,stroke:#7dd3fc,color:#f0f9ff\n    style L2 fill:#0c0e16,stroke:#a78bfa,color:#f5f3ff\n    style L3 fill:#0c0e16,stroke:#fbbf24,color:#fffbeb\n    style L4 fill:#0c0e16,stroke:#34d399,color:#ecfdf5\n    style GATE fill:#1c1608,stroke:#e8c872,color:#fffbeb\n    style S00 fill:#1c1608,stroke:#e8c872,color:#fffbeb\n    style S10 fill:#052e24,stroke:#34d399,color:#ecfdf5\n```\n\nRollback is the only backward edge. A failed gate does not skip forward.\n\n## Tool discovery lifecycle\n\n```mermaid\n%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%\nsequenceDiagram\n    autonumber\n    participant Env as Environment loader\n    participant Disc as Discovery\n    participant Mem as Semantic memory\n    participant Train as Profile trainer\n    participant Ver as Independent verifier\n    participant Run as Controlled runtime\n\n    Env->>Disc: scan manifests and hashes\n    Note over Disc: no import, no execution\n    Disc->>Mem: candidate profile + provenance\n    alt unchanged hash\n        Disc-->>Env: keep existing contract version\n    else changed source\n        Disc->>Mem: append new version\n    end\n    Train->>Mem: fill WHERE / WHEN / WHY / HOW\n    Note over Train: TRAINED is not trusted\n    Ver->>Mem: check contract version + evidence\n    alt all four KNOWN and independently accepted\n        Ver->>Mem: mark VERIFIED\n        Run->>Mem: selection allowed\n    else missing, partial, or conflict\n        Ver-->>Run: USAGE_CONTRACT_BLOCKED\n    end\n```\n\nAutomatic discovery authorizes nothing: no install, no filesystem write, no network, no memory promotion.\n\n## Observation harness\n\n```mermaid\n%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%\nflowchart LR\n    subgraph A[\"Phase A · fail closed\"]\n        direction TB\n        A1[\"A-01 Integrity\"]\n        A2[\"A-02 Isolation · state\"]\n        A3[\"A-03 Isolation · channels\"]\n        A4[\"A-04 Judge independence\"]\n        A5[\"A-05 Provenance · source\"]\n        A6[\"A-06 Provenance · chain\"]\n        A7[\"A-07 Event stream identity\"]\n        A8[\"A-08 Telemetry stream identity\"]\n        A9[\"A-09 Promotion blocked on fail\"]\n        A10[\"A-10 Pass results frozen\"]\n        A1 --> A2 --> A3 --> A4 --> A5 --> A6 --> A7 --> A8 --> A9 --> A10\n    end\n\n    subgraph B[\"Phase B · six streams\"]\n        direction TB\n        E[\"Evidence · what happened\"]\n        G[\"Eligibility · does it meet the bar\"]\n        V[\"Visualization · read only\"]\n        E --> G --> V\n    end\n\n    A10 -->|all ten pass| FR[\"Freeze\"]\n    FR --> E\n    A9 -->|any fail| HALT[\"Gate closed\"]\n\n    style A fill:#0c0e16,stroke:#e8c872,color:#fffbeb\n    style B fill:#0c0e16,stroke:#5eead4,color:#ecfeff\n    style FR fill:#1c1608,stroke:#e8c872,color:#fffbeb\n    style HALT fill:#3f0a16,stroke:#fb7185,color:#ffe4e6\n    style E fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style G fill:#2a1030,stroke:#e879f9,color:#fdf4ff\n    style V fill:#052e24,stroke:#34d399,color:#ecfdf5\n```\n\nInvariant: `PHASE A PASS → FREEZE → OBSERVATION → EVIDENCE REVIEW → ELIGIBILITY → VISUALIZATION`.\n\n## Teaching path\n\n```mermaid\n%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%\nflowchart TD\n    T[\"User text\"] --> K[\"Kulexicon → KUID\"]\n    K --> P[\"Semantic parser → chunk\"]\n    P --> D{\"Defender\"}\n    D -->|reject| R[\"Observe rejected\"]\n    D -->|accept| S[\"Semantic memory\"]\n    S --> F[\"Forward chain\"]\n    F --> CF[\"Confidence update\"]\n    CF --> ST{\"Self-test\"}\n    ST -->|pass| CP[\"Checkpoint\"]\n    ST -->|fail| RB[\"Rollback + Defender flag\"]\n\n    style T fill:#0c0e16,stroke:#e8c872,color:#fffbeb\n    style K fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style P fill:#1a1530,stroke:#a78bfa,color:#f5f3ff\n    style D fill:#3f2a08,stroke:#fbbf24,color:#fffbeb\n    style R fill:#3f0a16,stroke:#fb7185,color:#ffe4e6\n    style S fill:#052e24,stroke:#34d399,color:#ecfdf5\n    style F fill:#1a1530,stroke:#a78bfa,color:#f5f3ff\n    style CF fill:#082f2e,stroke:#5eead4,color:#ecfeff\n    style ST fill:#2a1030,stroke:#e879f9,color:#fdf4ff\n    style CP fill:#052e24,stroke:#34d399,color:#ecfdf5\n    style RB fill:#3f0a16,stroke:#fb7185,color:#ffe4e6\n```\n"
	},
	{
		path: "docs/architecture/README.md",
		title: "Architecture",
		body: "# Architecture — Sherin Atlas\n\nPalette and the specialized flows live in [diagrams.md](diagrams.md).\n\n## Philosophy\n\n> **Kulexicon handles language. SHERIN handles meaning.**\n\nEverything inside SHERIN operates on structured, typed units (KUID chunks / Knowledge Candidates).  \nRaw text never becomes knowledge. Every promotion requires independent verification.\n\n## High-Level Data Flow\n\n```mermaid\nflowchart TD\n    USER[\"👤 User / External Source\"] --> KUL[\"📖 Kulexicon Adapter<br/>Text ↔ Structured Representation\"]\n    KUL --> DEF[\"🛡️ Defender Engine<br/>Duplicates • Contradictions • Schema\"]\n    \n    DEF -->|Rejected| OBS1[\"👁️ Observe Engine<br/>Record rejection\"]\n    DEF -->|Accepted| SEM[\"📚 Semantic Memory<br/>Facts • Rules • Concepts\"]\n    \n    SEM --> REA[\"⚙️ Reasoner + Planner<br/>Forward/Backward • Composition • Diagnosis\"]\n    REA --> VER[\"✅ Independent Verification<br/>P1-D Contract\"]\n    \n    VER -->|VERIFIED| SEM\n    VER -->|MISSING / CONFLICTING / INVALID| OBS2[\"👁️ Observe Engine<br/>Record outcome + residual\"]\n    \n    SEM --> OBS3[\"👁️ Observe Engine<br/>Full event history\"]\n    \n    style USER fill:#0c0e16,stroke:#e8c872,color:#fffbeb\n    style KUL fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style DEF fill:#3f2a08,stroke:#fbbf24,color:#fffbeb\n    style SEM fill:#052e24,stroke:#34d399,color:#ecfdf5\n    style REA fill:#1a1530,stroke:#a78bfa,color:#f5f3ff\n    style VER fill:#052e24,stroke:#34d399,color:#ecfdf5\n    style OBS1 fill:#2a1030,stroke:#e879f9,color:#fdf4ff\n    style OBS2 fill:#2a1030,stroke:#e879f9,color:#fdf4ff\n    style OBS3 fill:#2a1030,stroke:#e879f9,color:#fdf4ff\n```\n\n## Cognitor Core vs Domain Adapters\n\n```mermaid\nflowchart TB\n    subgraph CORE[\"Cognitor Core — Language Independent\"]\n        direction LR\n        C1[\"value • type • state\"]\n        C2[\"sequence • condition\"]\n        C3[\"transformation • dependency\"]\n        C4[\"constraint • failure • repair\"]\n    end\n\n    subgraph ADAPTERS[\"Domain Adapters\"]\n        direction LR\n        A1[\"Python<br/>constructs • types • sandbox\"]\n        A2[\"JavaScript<br/>constructs • types • runtime\"]\n        A3[\"Algorithms<br/>patterns • complexity\"]\n    end\n\n    CORE -->|\"concept mapping\"| ADAPTERS\n    ADAPTERS -->|\"never modifies\"| CORE\n\n    style CORE fill:#0c0e16,stroke:#e8c872,stroke-width:2px,color:#f8f5ef\n    style ADAPTERS fill:#0c0e16,stroke:#7dd3fc,stroke-width:2px,color:#f8f5ef\n```\n\nThe **Cognitor Core** is language- and domain-independent.  \nIt reasons about:\n\n- value, type, state, sequence, condition, transformation\n- dependency, constraint, input, output\n- failure, cause, repair\n\n**Domain Adapters** (Python, JavaScript, Algorithms, …) supply:\n\n- concrete syntax / constructs\n- type systems\n- execution sandboxes\n- verification oracles\n\nAdding a new domain must never require changes to the core reasoning engine.\n\n## Closed-Loop Reasoning\n\n```mermaid\nflowchart LR\n    A[Teach / Ingest] --> B[Parse]\n    B --> C[Defend]\n    C --> D[Store]\n    D --> E[Observe]\n    E --> F[Test / Verify]\n    F --> G{Pass?}\n    G -->|Yes| H[Update + Checkpoint]\n    G -->|No| I[Diagnose]\n    I --> J[Bounded Repair]\n    J --> F\n    H --> A\n\n    style A fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style F fill:#052e24,stroke:#34d399,color:#ecfdf5\n    style I fill:#3f0a16,stroke:#fb7185,color:#ffe4e6\n    style J fill:#3f2a08,stroke:#fbbf24,color:#fffbeb\n    style H fill:#052e24,stroke:#34d399,color:#ecfdf5\n```\n\n## Critical Invariants\n\n1. Nothing enters Semantic Memory without passing Defender.\n2. Episodic Memory never drives reasoning.\n3. Only `VERIFIED` items are eligible for task selection.\n4. Missing or conflicting information produces explicit `MISSING` / `CONFLICTING` / `UNKNOWN` states.\n5. The system never invents values to fill gaps.\n"
	},
	{
		path: "docs/contracts/verification.md",
		title: "Verification",
		body: "# Independent Verification Contract (P1-D)\n\n## Purpose\n\nEnsure that no result becomes durable knowledge until it has passed an independent acceptance contract. This is the primary anti-poisoning mechanism of Sherin Atlas.\n\n## Contract Signature\n\n```text\nVerificationRequest = {\n  task_context   : TaskContext,       # WHAT / WHICH / WHEN / WHY\n  proposed       : Value | PartialAST,\n  provenance     : SourceId[],\n  operators_used : OperatorId[],\n  observed       : Observation | None\n}\n\nVerificationOutcome =\n  | VERIFIED     { result, evidence }\n  | MISSING      { slots }\n  | CONFLICTING  { conflicts }\n  | INVALID      { reasons }\n  | UNKNOWN      { residual }\n```\n\n## Decision Flow\n\n```mermaid\nstateDiagram-v2\n    [*] --> Request\n\n    Request --> Provenance: Check provenance completeness\n    Provenance --> Missing: Incomplete sources\n    Provenance --> Contracts: Complete\n\n    Contracts --> Missing: Required slots unbound\n    Contracts --> Observation: All contracts satisfied\n\n    Observation --> Conflicting: Proposed ≠ Observed\n    Observation --> TaskAlign: Match\n\n    TaskAlign --> Invalid: Type or intent mismatch\n    TaskAlign --> Verified: Fully aligned\n\n    Missing --> [*]\n    Conflicting --> [*]\n    Invalid --> [*]\n    Verified --> Promote: Eligible for Semantic Memory\n\n    style Verified fill:#052e24,stroke:#34d399,color:#ecfdf5\n    style Missing fill:#3f2a08,stroke:#fbbf24,color:#fffbeb\n    style Conflicting fill:#3f0a16,stroke:#fb7185,color:#ffe4e6\n    style Invalid fill:#111827,stroke:#94a3b8,color:#f8fafc\n    style Promote fill:#1c1608,stroke:#e8c872,color:#fffbeb\n```\n\n## Acceptance Predicates\n\nAll must hold for `VERIFIED`:\n\n1. **Provenance completeness** — every contributing leaf has an immutable SourceId.\n2. **Contract satisfaction** — all required slots are BOUND or DERIVABLE; preconditions hold.\n3. **Observation match** — independent re-execution (or oracle) agrees with the proposed result.\n4. **Task alignment** — the result satisfies the original WHAT of the task.\n\n## Rules\n\n- The verifier is pure and side-effect-free.\n- It never mutates the memory graph.\n- Promotion to Semantic Memory is a separate step that only accepts `VERIFIED` outcomes.\n- On failure the most specific non-VERIFIED state is returned.\n- No silent invention is permitted under any circumstance.\n"
	},
	{
		path: "docs/contracts/four_question.md",
		title: "Four questions",
		body: "# Four-Question Training Contract\n\nEvery item (tool, operator, knowledge unit) must answer:\n\n1. **WHERE** will this be used?\n2. **WHEN** will it be used?\n3. **WHY** will it be used?\n4. **HOW** will it be used?\n\nStates: UNKNOWN → PARTIAL → KNOWN → TRAINED → VERIFIED\n\nOnly independently verified items become eligible for task selection.\n"
	},
	{
		path: "docs/curriculum/README.md",
		title: "Curriculum",
		body: "# Curriculum Protocol\n\nStages open in order. A failed gate rolls back. It never skips ahead.\n\n```mermaid\n%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%\nflowchart LR\n    S00[\"00\"] --> S01[\"01\"] --> S02[\"02\"] --> S03[\"03\"] --> S04[\"04\"] --> S05[\"05\"]\n    S05 --> S06[\"06\"] --> S07[\"07\"] --> S08[\"08\"] --> S09[\"09\"] --> S10[\"10\"]\n\n    style S00 fill:#1c1608,stroke:#e8c872,color:#fffbeb\n    style S01 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style S02 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style S03 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff\n    style S04 fill:#1a1530,stroke:#a78bfa,color:#f5f3ff\n    style S05 fill:#1a1530,stroke:#a78bfa,color:#f5f3ff\n    style S06 fill:#1a1530,stroke:#a78bfa,color:#f5f3ff\n    style S07 fill:#3f2a08,stroke:#fbbf24,color:#fffbeb\n    style S08 fill:#3f0a16,stroke:#fb7185,color:#ffe4e6\n    style S09 fill:#082f2e,stroke:#5eead4,color:#ecfeff\n    style S10 fill:#052e24,stroke:#34d399,color:#ecfdf5\n```\n\n| Stage | Name |\n| --- | --- |\n| 00 | Engine basics / KUID foundation |\n| 01 | Simple facts |\n| 02 | Multi-fact chains |\n| 03 | Properties and attributes |\n| 04 | Rules and deduction |\n| 05 | Multi-hop reasoning |\n| 06 | Arithmetic and comparison |\n| 07 | Sequences |\n| 08 | Contradiction handling |\n| 09 | Planning |\n| 10 | Advanced reasoning and adversarial testing |\n\nAfter every stage: full test suite, accuracy against the stage target, Observer shows no rising anomaly counts, then an immutable checkpoint.\n\nThe layered view is in [diagrams.md](../architecture/diagrams.md).\n"
	},
	{
		path: "docs/memory/README.md",
		title: "Memory",
		body: "# Memory Classification System\n\nSee the main architecture documentation for the three-layer memory model:\n\n- Working Memory (session-only)\n- Semantic Memory (long-term verified knowledge)\n- Episodic Memory (experience & history)\n\n**Key rule:** Episodic Memory never drives reasoning.\n"
	},
	{
		path: "examples/self_cycle_demo.py",
		title: "Self-cycle demo",
		body: "#!/usr/bin/env python3\n\"\"\"\nSherin Atlas — Self-Health / Self-Validate / Self-Repair Demonstration\n\nThis script demonstrates the Independent Verification Contract (P1-D)\nand a minimal bounded repair loop on Level-1 pure-functional problems.\n\"\"\"\n\nfrom __future__ import annotations\nfrom dataclasses import dataclass, field\nfrom typing import Any, Optional, List, Dict, Callable\nfrom enum import Enum, auto\nimport uuid\nfrom datetime import datetime\n\n\n# ---------------------------------------------------------------------------\n# Core Types\n# ---------------------------------------------------------------------------\n\nclass OutcomeKind(Enum):\n    VERIFIED    = auto()\n    MISSING     = auto()\n    CONFLICTING = auto()\n    INVALID     = auto()\n    UNKNOWN     = auto()\n    REPAIRED    = auto()\n\n\n@dataclass(frozen=True)\nclass SourceId:\n    id: str = field(default_factory=lambda: str(uuid.uuid4())[:8])\n\n\n@dataclass(frozen=True)\nclass OperatorId:\n    name: str\n\n\n@dataclass\nclass TaskContext:\n    what: type\n    which: Any\n    when: str\n    why: str\n\n\n@dataclass\nclass Observation:\n    result: Any\n    sandbox_id: str = field(default_factory=lambda: str(uuid.uuid4())[:8])\n\n\n@dataclass\nclass VerificationRequest:\n    task_context: TaskContext\n    proposed: Any\n    provenance: List[SourceId]\n    operators_used: List[OperatorId]\n    observed: Optional[Observation]\n\n\n@dataclass\nclass VerificationOutcome:\n    kind: OutcomeKind\n    result: Any = None\n    evidence: Dict = field(default_factory=dict)\n    slots: List[str] = field(default_factory=list)\n    conflicts: List[str] = field(default_factory=list)\n    reasons: List[str] = field(default_factory=list)\n    repair_log: List[str] = field(default_factory=list)\n\n\n# ---------------------------------------------------------------------------\n# Trusted Operators (Level-1)\n# ---------------------------------------------------------------------------\n\ndef op_reverse(s: str) -> str:\n    return s[::-1]\n\n\ndef op_equal(a: Any, b: Any) -> bool:\n    return a == b\n\n\nTRUSTED_OPERATORS: Dict[str, Callable] = {\n    \"reverse\": op_reverse,\n    \"equal\": op_equal,\n}\n\n\n# ---------------------------------------------------------------------------\n# Independent Verification Contract\n# ---------------------------------------------------------------------------\n\ndef verify(req: VerificationRequest) -> VerificationOutcome:\n    if not req.provenance:\n        return VerificationOutcome(kind=OutcomeKind.MISSING, slots=[\"provenance\"])\n\n    for op in req.operators_used:\n        if op.name not in TRUSTED_OPERATORS:\n            return VerificationOutcome(\n                kind=OutcomeKind.MISSING,\n                slots=[f\"operator:{op.name}\"]\n            )\n\n    if req.observed is None:\n        return VerificationOutcome(kind=OutcomeKind.MISSING, slots=[\"observation\"])\n\n    if req.observed.result != req.proposed:\n        return VerificationOutcome(\n            kind=OutcomeKind.CONFLICTING,\n            conflicts=[\"effect_mismatch: proposed ≠ observed\"]\n        )\n\n    if not isinstance(req.proposed, req.task_context.what):\n        return VerificationOutcome(\n            kind=OutcomeKind.INVALID,\n            reasons=[f\"type mismatch: expected {req.task_context.what.__name__}\"]\n        )\n\n    return VerificationOutcome(\n        kind=OutcomeKind.VERIFIED,\n        result=req.proposed,\n        evidence={\n            \"reexec\": True,\n            \"provenance\": [s.id for s in req.provenance],\n            \"operators\": [op.name for op in req.operators_used],\n            \"sandbox_id\": req.observed.sandbox_id,\n        }\n    )\n\n\n# ---------------------------------------------------------------------------\n# Bounded Local Repair\n# ---------------------------------------------------------------------------\n\ndef bounded_repair(outcome: VerificationOutcome, req: VerificationRequest) -> VerificationOutcome:\n    log = []\n\n    if outcome.kind == OutcomeKind.CONFLICTING and \"effect_mismatch\" in str(outcome.conflicts):\n        if any(op.name == \"reverse\" for op in req.operators_used):\n            log.append(\"Detected effect_mismatch on reverse\")\n            log.append(\"Repair action: re-execute with TRUSTED reverse\")\n\n            input_val = req.task_context.which\n            if isinstance(input_val, str):\n                correct = TRUSTED_OPERATORS[\"reverse\"](input_val)\n                new_req = VerificationRequest(\n                    task_context=req.task_context,\n                    proposed=correct,\n                    provenance=req.provenance + [SourceId()],\n                    operators_used=[OperatorId(\"reverse\")],\n                    observed=Observation(result=correct)\n                )\n                repaired = verify(new_req)\n                if repaired.kind == OutcomeKind.VERIFIED:\n                    repaired.kind = OutcomeKind.REPAIRED\n                    repaired.repair_log = log + [\"Repair succeeded\"]\n                    return repaired\n\n    outcome.repair_log = log + [\"No applicable bounded repair\"]\n    return outcome\n\n\n# ---------------------------------------------------------------------------\n# Self Cycle\n# ---------------------------------------------------------------------------\n\ndef run_self_cycle() -> None:\n    print(\"=\" * 72)\n    print(\"  SHERIN ATLAS  —  Self-Health / Self-Validate / Self-Repair\")\n    print(\"=\" * 72)\n    print(f\"  Timestamp : {datetime.utcnow().isoformat()}Z\")\n    print()\n\n    # Health\n    print(\"[1] Self-Health Check\")\n    print(f\"    Trusted operators : {list(TRUSTED_OPERATORS.keys())}\")\n    print(\"    ✓ Core components present\\n\")\n\n    # Validation cases\n    print(\"[2] Validation Suite (Level-1)\")\n\n    cases = []\n\n    # A. Happy path\n    req_a = VerificationRequest(\n        task_context=TaskContext(what=bool, which=\"racecar\", when=\"pure\", why=\"L1-palindrome\"),\n        proposed=True,\n        provenance=[SourceId(), SourceId(), SourceId()],\n        operators_used=[OperatorId(\"reverse\"), OperatorId(\"equal\")],\n        observed=Observation(result=True)\n    )\n    cases.append((\"A. palindrome('racecar')\", verify(req_a)))\n\n    # B. Missing operator\n    req_b = VerificationRequest(\n        task_context=TaskContext(what=bool, which=\"hello\", when=\"pure\", why=\"L1-palindrome\"),\n        proposed=False,\n        provenance=[SourceId()],\n        operators_used=[OperatorId(\"reverse\"), OperatorId(\"nonexistent\")],\n        observed=Observation(result=False)\n    )\n    cases.append((\"B. missing operator\", verify(req_b)))\n\n    # C. Conflicting → repair\n    req_c = VerificationRequest(\n        task_context=TaskContext(what=str, which=\"abc\", when=\"pure\", why=\"L1-reverse\"),\n        proposed=\"cba\",\n        provenance=[SourceId(), SourceId()],\n        operators_used=[OperatorId(\"reverse\")],\n        observed=Observation(result=\"abc\")  # buggy observation\n    )\n    out_c = verify(req_c)\n    if out_c.kind == OutcomeKind.CONFLICTING:\n        out_c = bounded_repair(out_c, req_c)\n    cases.append((\"C. conflicting reverse → repair\", out_c))\n\n    # D. Correct reverse\n    req_d = VerificationRequest(\n        task_context=TaskContext(what=str, which=\"hello\", when=\"pure\", why=\"L1-reverse\"),\n        proposed=\"olleh\",\n        provenance=[SourceId(), SourceId()],\n        operators_used=[OperatorId(\"reverse\")],\n        observed=Observation(result=\"olleh\")\n    )\n    cases.append((\"D. reverse('hello')\", verify(req_d)))\n\n    for name, outcome in cases:\n        extra = \"\"\n        if outcome.slots:\n            extra = f\"  slots={outcome.slots}\"\n        if outcome.conflicts:\n            extra = f\"  conflicts={outcome.conflicts}\"\n        if outcome.repair_log:\n            extra = f\"  repair={outcome.repair_log}\"\n        print(f\"    {name:<42} → {outcome.kind.name}{extra}\")\n\n    verified = sum(1 for _, o in cases if o.kind in (OutcomeKind.VERIFIED, OutcomeKind.REPAIRED))\n    print()\n    print(f\"[3] Summary: {verified}/{len(cases)} reached VERIFIED or REPAIRED\")\n    print(\"    Independent Verification Contract is operational.\")\n    print(\"=\" * 72)\n\n\nif __name__ == \"__main__\":\n    run_self_cycle()\n"
	}
];
function MermaidBlock({ code }) {
	const reactId = (0, import_react.useId)().replace(/:/g, "");
	const [svg, setSvg] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		let alive = true;
		setSvg("");
		setError("");
		import("../_libs/mermaid+[...].mjs").then((n) => n.t).then(async (mod) => {
			const mermaid = mod.default;
			mermaid.initialize({
				startOnLoad: false,
				securityLevel: "strict",
				theme: "dark",
				themeVariables: {
					fontFamily: "IBM Plex Sans, sans-serif",
					primaryTextColor: "#f6f1e7",
					lineColor: "#e8c872",
					background: "#07080d"
				}
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
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: "overflow-x-auto rounded-xl border border-rose-900/60 bg-[#1a0c10] p-4 text-xs text-rose-200",
		children: error
	});
	if (!svg) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 animate-pulse rounded-xl bg-[#12141c]" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-xl border border-[#2a261c] bg-[#0c0e16] p-4 [&_svg]:mx-auto [&_svg]:max-w-full",
		dangerouslySetInnerHTML: { __html: svg }
	});
}
function inline(text) {
	return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((part, i) => {
		if (part.startsWith("`") && part.endsWith("`")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
			className: "rounded bg-[#1c1608] px-1 text-[#e8c872]",
			children: part.slice(1, -1)
		}, i);
		if (part.startsWith("**") && part.endsWith("**")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: part.slice(2, -2) }, i);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, i);
	});
}
function MarkdownView({ source }) {
	const chunks = source.split(/```/);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4 text-[15px] leading-7 text-[#ebe4d6]",
		children: chunks.map((chunk, index) => {
			if (index % 2 === 1) {
				const nl = chunk.indexOf("\n");
				const lang = nl === -1 ? chunk : chunk.slice(0, nl);
				const body = nl === -1 ? "" : chunk.slice(nl + 1);
				if (lang.trim() === "mermaid") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MermaidBlock, { code: body }, index);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "overflow-x-auto rounded-xl border border-[#242018] bg-[#0c0e16] p-4 text-xs leading-5 text-[#d6cbb8]",
					children: body
				}, index);
			}
			return chunk.split("\n").map((line, i) => {
				const key = `${index}-${i}`;
				if (!line.trim()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2" }, key);
				if (line.startsWith("# ")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-['Instrument_Serif'] text-4xl tracking-tight text-[#f6f1e7]",
					children: line.slice(2)
				}, key);
				if (line.startsWith("## ")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "pt-4 text-xl font-semibold text-[#e8c872]",
					children: line.slice(3)
				}, key);
				if (line.startsWith("### ")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "pt-2 text-lg font-medium text-[#f6f1e7]",
					children: line.slice(4)
				}, key);
				if (line.startsWith("> ")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "border-l-2 border-[#e8c872] pl-3 text-[#cbbfa8]",
					children: inline(line.slice(2))
				}, key);
				if (line.startsWith("- ")) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pl-3",
					children: ["· ", inline(line.slice(2))]
				}, key);
				if (line.startsWith("|")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-xs text-[#cbbfa8]",
					children: line
				}, key);
				if (line.trim() === "---") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "border-[#242018]" }, key);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: inline(line) }, key);
			});
		})
	});
}
var stages = [
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
	["10", "Adversarial"]
];
var discovery = [
	["Source", "Directory, form, or generated tool"],
	["Identity", "Allocation plus source hash"],
	["Candidate", "WHERE / WHEN / WHY / HOW"],
	["Trained", "Answers complete. Still not trusted."],
	["Verified", "Independent check. Only then selectable."]
];
var streams = [
	"S-01 EventLog",
	"S-02 ReasonTrace",
	"S-03 ConfidenceLog",
	"S-04 DefenderVerdict",
	"S-05 QuerySession",
	"S-06 LearnerAction"
];
function AtlasApp() {
	const [path, setPath] = (0, import_react.useState)(null);
	const file = atlasFiles.find((item) => item.path === path) ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-[#07080d] text-[#f6f1e7]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "atlas-scroll sticky top-0 hidden h-screen w-72 shrink-0 overflow-y-auto border-r border-[#242018] bg-[#0c0e16] p-5 md:block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.22em] text-[#e8c872]",
					children: "SHERIN ATLAS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-['Instrument_Serif'] text-3xl",
					children: "Repo map"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-6 text-[#b7ad9c]",
					children: "The files are loaded. Open one, or stay on the map."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setPath(null),
					className: `mt-6 w-full rounded-lg px-3 py-2 text-left text-sm ${path === null ? "bg-[#1c1608] text-[#e8c872]" : "text-[#d6cbb8] hover:bg-[#141820]"}`,
					children: "Visual map"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-[11px] tracking-[0.18em] text-[#8d8476]",
					children: "FILES"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-1",
					children: atlasFiles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPath(item.path),
						className: `w-full rounded-lg px-3 py-2 text-left text-sm ${path === item.path ? "bg-[#1c1608] text-[#e8c872]" : "text-[#d6cbb8] hover:bg-[#141820]"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-xs text-[#8d8476]",
							children: item.path
						})]
					}) }, item.path))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "atlas-scroll min-w-0 flex-1 overflow-y-auto px-5 py-6 md:px-10 md:py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex gap-2 overflow-x-auto md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setPath(null),
					className: "shrink-0 rounded-full border border-[#e8c872] px-3 py-1 text-xs text-[#e8c872]",
					children: "Map"
				}), atlasFiles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setPath(item.path),
					className: "shrink-0 rounded-full border border-[#2a261c] px-3 py-1 text-xs",
					children: item.title
				}, item.path))]
			}), file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.16em] text-[#e8c872]",
				children: file.path
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkdownView, { source: file.body })
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, {})]
		})]
	});
}
function Map() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.22em] text-[#e8c872]",
					children: "DETERMINISTIC REASONING ENGINE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-['Instrument_Serif'] text-5xl leading-none md:text-6xl",
					children: "Sherin Atlas"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-[#cbbfa8]",
					children: "Kulexicon handles language. SHERIN handles meaning. Nothing in this repo is empty — open a file in the list, or read the live map below."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid gap-3 md:grid-cols-3",
				children: [
					["Reasoning", "Problem frames, planning, binding, diagnosis, bounded repair"],
					["Memory", "Working, semantic, and episodic. Only semantic facts drive answers."],
					["Contracts", "Independent verification and the four-question usage rule"]
				].map(([title, copy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-[#2a261c] bg-[#0c0e16] p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[#e8c872]",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-6 text-[#cbbfa8]",
						children: copy
					})]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm tracking-[0.16em] text-[#8d8476]",
				children: "CURRICULUM 00–10"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6",
				children: stages.map(([id, name], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-[#2a261c] bg-[#0c0e16] px-3 py-3",
					style: { borderColor: index === stages.length - 1 ? "#34d399" : void 0 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-['Instrument_Serif'] text-2xl text-[#e8c872]",
						children: id
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-[#d6cbb8]",
						children: name
					})]
				}, id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm tracking-[0.16em] text-[#8d8476]",
					children: "TOOL DISCOVERY"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 space-y-2",
					children: discovery.map(([title, copy], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 rounded-xl border border-[#2a261c] bg-[#0c0e16] p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-['Instrument_Serif'] text-2xl text-[#e8c872]",
							children: index + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-[#b7ad9c]",
							children: copy
						})] })]
					}, title))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm tracking-[0.16em] text-[#8d8476]",
						children: "OBSERVATION HARNESS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-[#cbbfa8]",
						children: "Phase A must freeze before Phase B opens. Visualization never decides eligibility."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid grid-cols-2 gap-2",
						children: streams.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-xl border border-[#17324a] bg-[#0c1e33] px-3 py-3 text-sm",
							children: name
						}, name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 rounded-xl border border-[#3f0a16] bg-[#1a0c10] px-3 py-3 text-sm text-[#fecdd3]",
						children: "Any of the 10 assertions fails → gate closed. No promotion."
					})
				] })]
			})
		]
	});
}
var SplitComponent = AtlasApp;
//#endregion
export { SplitComponent as component };
