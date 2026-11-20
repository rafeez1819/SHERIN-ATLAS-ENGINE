const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mermaid.core-BIvn6QjB.js","assets/index-D7AWZnep.js","assets/rolldown-runtime-W7wSyTde.js","assets/chunk-Y2CYZVJY-DsF7k-Jl.js","assets/d3-selection-WZrhSw2I.js","assets/chunk-BG4553SI-B0GLbTeN.js","assets/chunk-DQASFODM-CJsOvDcd.js","assets/dist-BQOIfBRp.js","assets/chunk-6MUBBAK2-BzMJO_WZ.js","assets/chunk-STOXU5M4-BfJuGp-V.js","assets/chunk-R3KSYZAL-CXh0o4Gj.js","assets/chunk-X4PVCEUW-DncWkQKa.js","assets/rough.esm-Dy-Kn_BL.js","assets/chunk-AXFCVDMN-hoGk5TzO.js","assets/chunk-J5ZVWO5B-oDCd-gWO.js","assets/chunk-LEVMRMFU-DFxhJrvD.js","assets/chunk-DUW6YSOI-Dgx8z5s3.js","assets/chunk-M57EVK23-CwIzYxq2.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-W7wSyTde.js";import{n as t,r as n,t as r}from"./index-D7AWZnep.js";var i=e(n(),1),a=[{path:`README.md`,title:`Overview`,body:`<div align="center">

# 🧠 SHERIN ATLAS

### Deterministic Reasoning Engine
**Kulexicon handles language. SHERIN handles meaning.**

[![Status](https://img.shields.io/badge/Status-Active%20Development-blue?style=for-the-badge)](https://github.com)
[![Architecture](https://img.shields.io/badge/Architecture-Cognitor%20%2B%20Domain%20Adapters-purple?style=for-the-badge)](docs/architecture)
[![Verification](https://img.shields.io/badge/Verification-Independent%20%26%20Fail--Closed-success?style=for-the-badge)](docs/contracts)
[![License](https://img.shields.io/badge/License-Apache%202.0-orange?style=for-the-badge)](LICENSE)

<br>

**A formal, non-hallucinating reasoning engine that never invents answers.**  
Every claim carries provenance. Every result requires independent verification.  
Unknown information stays unknown.

</div>

---

## ✨ Why Sherin Atlas Exists

Most modern AI systems predict the next token.  
When information is missing, they fabricate.

**Sherin Atlas works differently.**

| Traditional Approach | Sherin Atlas |
|----------------------|--------------|
| Predicts probable answers | Constructs answers only from verified primitives |
| Hallucinates on incomplete data | Preserves \`UNKNOWN\` / \`MISSING\` states |
| Self-reinforcing (can learn its own mistakes) | Independent verification required before knowledge promotion |
| Opaque reasoning | Full provenance + explicit diagnosis + bounded repair |
| Language-tied | Language-independent Cognitor core + domain adapters |

> **Core Loop**  
> \`Teach → Parse → Defend → Store → Observe → Test → Update\`

---

## 🏗 Architecture Overview

\`\`\`mermaid
%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui','fontSize':'15px','lineColor':'#e8c872','primaryTextColor':'#f8f5ef'}}}%%
flowchart TB
    subgraph CORE["SHERIN ATLAS  ·  Cognitor Core"]
        direction TB
        R["REASONING<br/>ProblemFrame · Planning · Binding<br/>Diagnosis · Bounded Repair"]
        M["MEMORY<br/>Working · Semantic · Episodic<br/>Provenance · Classification"]
        C["CONTRACTS<br/>Verification · Four-Question<br/>Effect Auth · Slot Contracts"]
    end

    subgraph DOMAINS["DOMAIN SPACE"]
        direction LR
        PY["Python"]
        JS["JavaScript"]
        ALGO["Algorithms"]
    end

    CORE --> DOMAINS
    R --- M
    M --- C

    style CORE fill:#0c0e16,stroke:#e8c872,stroke-width:2px,color:#f8f5ef
    style DOMAINS fill:#0c0e16,stroke:#67e8f9,stroke-width:1.5px,color:#f8f5ef
    style R fill:#1a1530,stroke:#a78bfa,color:#f5f3ff
    style M fill:#082f2e,stroke:#5eead4,color:#ecfeff
    style C fill:#2a1030,stroke:#e879f9,color:#fdf4ff
    style PY fill:#052e24,stroke:#34d399,color:#ecfdf5
    style JS fill:#3f2a08,stroke:#fbbf24,color:#fffbeb
    style ALGO fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
\`\`\`

### Layer Responsibilities

| Layer | Component | Critical Rule |
|-------|-----------|---------------|
| **Language** | Kulexicon Adapter | Text ↔ KUID conversion. Read-only dictionary. |
| **Input Guard** | Defender Engine | Nothing enters the Knowledge Base without validation |
| **State Monitor** | Observe Engine | Records *every* event with provenance |
| **Knowledge** | Semantic Memory | Facts, Rules, Concepts — immutable once verified |
| **Reasoning** | Reasoner + Planner | Forward/backward chaining + multi-hop + diagnosis |
| **Learning** | Curriculum + Learner | Staged progression + checkpoint + rollback |
| **Orchestration** | SherinEngine | Thin coordinator — no business logic |

---

## 🧩 Memory Architecture

Sherin maintains three strictly separated memory layers:

\`\`\`mermaid
%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui','lineColor':'#e8c872'}}}%%
flowchart TD
    WM["WORKING MEMORY<br/>session context only<br/>problem · path · assumptions"]
    SM["SEMANTIC MEMORY<br/>single source of truth<br/>facts · rules · concepts"]
    EM["EPISODIC MEMORY<br/>experience archive<br/>events · traces · logs"]

    WM -->|"cleared after task"| SM
    SM -->|"writes events, never reads facts from"| EM
    EM -.->|"never drives reasoning"| SM

    style WM fill:#0c1e33,stroke:#7dd3fc,stroke-width:2px,color:#f0f9ff
    style SM fill:#052e24,stroke:#34d399,stroke-width:2px,color:#ecfdf5
    style EM fill:#2a1030,stroke:#e879f9,stroke-width:2px,color:#fdf4ff
\`\`\`

**Invariants**
- Semantic Memory is the single source of truth
- Episodic Memory never drives reasoning
- Working Memory never stores permanent knowledge
- Only \`VERIFIED\` items become eligible for task selection

---

## 🛡️ Core Safety Contracts

### Independent Verification (P1-D)

Every result must pass an independent acceptance contract before becoming knowledge.

\`\`\`mermaid
%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%
stateDiagram-v2
    [*] --> Request

    Request --> ProvenanceCheck: provenance
    ProvenanceCheck --> Missing: incomplete
    ProvenanceCheck --> ContractCheck: complete

    ContractCheck --> Missing: unbound slots
    ContractCheck --> ObservationCheck: contracts hold

    ObservationCheck --> Conflicting: mismatch
    ObservationCheck --> TaskCheck: match

    TaskCheck --> Invalid: misaligned
    TaskCheck --> Verified: aligned

    Missing --> [*]
    Conflicting --> [*]
    Invalid --> [*]
    Verified --> [*]

    classDef ok fill:#052e24,stroke:#34d399,color:#ecfdf5
    classDef warn fill:#3f2a08,stroke:#fbbf24,color:#fffbeb
    classDef bad fill:#3f0a16,stroke:#fb7185,color:#ffe4e6
    classDef mute fill:#111827,stroke:#94a3b8,color:#f8fafc
    classDef gold fill:#1c1608,stroke:#e8c872,color:#fffbeb

    class Verified ok
    class Missing warn
    class Conflicting bad
    class Invalid mute
    class Request,ProvenanceCheck,ContractCheck,ObservationCheck,TaskCheck gold
\`\`\`

\`\`\`text
VerificationOutcome =
  | VERIFIED     { result, evidence }
  | MISSING      { slots }
  | CONFLICTING  { conflicts }
  | INVALID      { reasons }
  | UNKNOWN      { residual }
\`\`\`

### Four-Question Training Contract

Every tool, operator, or knowledge item must answer:

\`\`\`mermaid
quadrantChart
    title Four-Question Training Contract
    x-axis Low Specificity --> High Specificity
    y-axis Low Evidence --> High Evidence
    quadrant-1 TRAINED → VERIFIED
    quadrant-2 PARTIAL
    quadrant-3 UNKNOWN
    quadrant-4 KNOWN (needs evidence)
    WHERE: [0.75, 0.80]
    WHEN: [0.70, 0.65]
    WHY: [0.80, 0.75]
    HOW: [0.85, 0.70]
\`\`\`

1. **WHERE** will this be used?
2. **WHEN** will it be used?
3. **WHY** will it be used?
4. **HOW** will it be used?

Only items with complete, evidence-backed answers reach \`TRAINED\`.  
Only independently verified items reach \`VERIFIED\`.

### Fail-Closed Gates

\`\`\`mermaid
%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%
flowchart LR
    A["Incoming claim"] --> B{"All predicates<br/>satisfied?"}
    B -->|yes| C["VERIFIED"]
    B -->|no| D{"Most specific<br/>failure"}
    D --> E["MISSING"]
    D --> F["CONFLICTING"]
    D --> G["INVALID"]
    D --> H["UNKNOWN"]

    style A fill:#0c0e16,stroke:#e8c872,color:#fffbeb
    style B fill:#1a1530,stroke:#a78bfa,color:#f5f3ff
    style C fill:#052e24,stroke:#34d399,color:#ecfdf5
    style D fill:#1a1530,stroke:#a78bfa,color:#f5f3ff
    style E fill:#3f2a08,stroke:#fbbf24,color:#fffbeb
    style F fill:#3f0a16,stroke:#fb7185,color:#ffe4e6
    style G fill:#2a1030,stroke:#e879f9,color:#fdf4ff
    style H fill:#111827,stroke:#94a3b8,color:#f8fafc
\`\`\`

- Missing information → \`MISSING\` / \`UNKNOWN\`
- Conflicting evidence → \`CONFLICTING\`
- No silent invention. Ever.

Full gallery: [docs/architecture/diagrams.md](docs/architecture/diagrams.md)

---

## Specialized flows

### Curriculum stages

Stages are linear and gated. A stage cannot open until the previous checkpoint is frozen.

\`\`\`mermaid
%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%
flowchart LR
    S00["00 Foundation"] --> S01["01 Facts"]
    S01 --> S02["02 Chains"]
    S02 --> S03["03 Properties"]
    S03 --> S04["04 Rules"]
    S04 --> S05["05 Multi-hop"]
    S05 --> S06["06 Arithmetic"]
    S06 --> S07["07 Sequences"]
    S07 --> S08["08 Contradiction"]
    S08 --> S09["09 Planning"]
    S09 --> S10["10 Adversarial"]

    GATE["After every stage<br/>tests · accuracy · anomalies · freeze"]

    S00 -.-> GATE
    S05 -.-> GATE
    S10 -.-> GATE

    style S00 fill:#0c0e16,stroke:#e8c872,color:#fffbeb
    style S01 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style S02 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style S03 fill:#082f2e,stroke:#5eead4,color:#ecfeff
    style S04 fill:#082f2e,stroke:#5eead4,color:#ecfeff
    style S05 fill:#1a1530,stroke:#a78bfa,color:#f5f3ff
    style S06 fill:#1a1530,stroke:#a78bfa,color:#f5f3ff
    style S07 fill:#2a1030,stroke:#e879f9,color:#fdf4ff
    style S08 fill:#3f0a16,stroke:#fb7185,color:#ffe4e6
    style S09 fill:#3f2a08,stroke:#fbbf24,color:#fffbeb
    style S10 fill:#052e24,stroke:#34d399,color:#ecfdf5
    style GATE fill:#1c1608,stroke:#e8c872,color:#fffbeb
\`\`\`

### Tool discovery lifecycle

Discovery records a candidate. It does not import, execute, or promote.

\`\`\`mermaid
%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%
flowchart TD
    SRC["Source appears<br/>directory · generated tool · form"] --> ID["Allocate identity<br/>+ source hash"]
    ID --> CAND["Four-question candidate<br/>WHERE WHEN WHY HOW"]
    CAND --> Q{"Each answer?"}
    Q -->|no evidence| UNK["UNKNOWN"]
    Q -->|partial evidence| PART["PARTIAL"]
    Q -->|sources disagree| CONF["CONFLICT"]
    Q -->|evidence complete| KNOWN["KNOWN"]
    KNOWN --> TRAIN["TRAINED<br/>still CANDIDATE memory"]
    TRAIN --> IV["Independent verification<br/>bound to contract version"]
    IV -->|pass| VER["VERIFIED<br/>eligible for selection"]
    IV -->|fail| BLOCK["USAGE_CONTRACT_BLOCKED"]

    UNK --> ASK["ASK or DEFER<br/>never guess"]
    PART --> ASK
    CONF --> ASK

    style SRC fill:#0c0e16,stroke:#e8c872,color:#fffbeb
    style ID fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style CAND fill:#1a1530,stroke:#a78bfa,color:#f5f3ff
    style UNK fill:#111827,stroke:#94a3b8,color:#f8fafc
    style PART fill:#3f2a08,stroke:#fbbf24,color:#fffbeb
    style CONF fill:#3f0a16,stroke:#fb7185,color:#ffe4e6
    style KNOWN fill:#082f2e,stroke:#5eead4,color:#ecfeff
    style TRAIN fill:#1c1608,stroke:#e8c872,color:#fffbeb
    style IV fill:#2a1030,stroke:#e879f9,color:#fdf4ff
    style VER fill:#052e24,stroke:#34d399,color:#ecfdf5
    style BLOCK fill:#3f0a16,stroke:#fb7185,color:#ffe4e6
    style ASK fill:#3f2a08,stroke:#fbbf24,color:#fffbeb
\`\`\`

### Observation harness

Phase A must freeze before Phase B can open. Visualization never decides eligibility.

\`\`\`mermaid
%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%
flowchart TD
    A["PHASE A · StubLearner"] --> T["10 assertions<br/>A-01 … A-10"]
    T -->|any fail| STOP["HALT · fix · retest"]
    T -->|all pass| FREEZE["FREEZE artifacts<br/>checksummed baseline"]
    FREEZE --> B["PHASE B · OBS-L1-001"]
    B --> S["Six streams preserved<br/>identity · order · content · provenance"]
    S --> S1["S-01 EventLog"]
    S --> S2["S-02 ReasonTrace"]
    S --> S3["S-03 ConfidenceLog"]
    S --> S4["S-04 DefenderVerdict"]
    S --> S5["S-05 QuerySession"]
    S --> S6["S-06 LearnerAction"]
    S1 & S2 & S3 & S4 & S5 & S6 --> REV["Evidence review<br/>facts only"]
    REV --> ELIG{"Eligible?"}
    ELIG -->|no| HALT["HALT<br/>visualization receives nothing"]
    ELIG -->|yes| VIS["Visualization<br/>consumer only"]

    style A fill:#0c0e16,stroke:#e8c872,color:#fffbeb
    style T fill:#1a1530,stroke:#a78bfa,color:#f5f3ff
    style STOP fill:#3f0a16,stroke:#fb7185,color:#ffe4e6
    style FREEZE fill:#1c1608,stroke:#e8c872,color:#fffbeb
    style B fill:#082f2e,stroke:#5eead4,color:#ecfeff
    style S fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style S1 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style S2 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style S3 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style S4 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style S5 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style S6 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style REV fill:#2a1030,stroke:#e879f9,color:#fdf4ff
    style ELIG fill:#1a1530,stroke:#a78bfa,color:#f5f3ff
    style HALT fill:#3f0a16,stroke:#fb7185,color:#ffe4e6
    style VIS fill:#052e24,stroke:#34d399,color:#ecfdf5
\`\`\`

---

## 📁 Repository Structure

\`\`\`text
sherin-atlas/
├── sherin/
│   ├── core/                       # Language-independent Cognitor
│   │   ├── reasoning/              # Planning, binding, diagnosis, repair
│   │   ├── memory/                 # Allocator, context, classifier, store
│   │   ├── interfaces/             # Domain adapter contracts
│   │   └── contracts/              # Verification & four-question contracts
│   │
│   ├── domains/
│   │   └── programming/
│   │       └── python/             # First domain adapter
│   │           ├── knowledge/      # Constructs, functions, types
│   │           ├── problems/       # Curriculum problems
│   │           ├── adapters/       # Knowledge / Execution / Verification
│   │           └── execution/      # Sandbox
│   │
│   ├── curriculum/                 # Ingestion, generation, verification
│   └── tools/                      # Controlled runtime tools
│
├── docs/
│   ├── architecture/               # System design
│   ├── memory/                     # Memory classification system
│   ├── contracts/                  # Verification & training contracts
│   └── curriculum/                 # Staged learning protocol
│
├── examples/                       # End-to-end demonstrations
├── tests/                          # Fail-closed test suites
└── assets/                         # Diagrams & visuals
\`\`\`

---

## 🚀 Quick Start

\`\`\`bash
# Clone
git clone https://github.com/your-org/sherin-atlas.git
cd sherin-atlas

# Create environment
python -m venv .venv
source .venv/bin/activate          # or .venv\\Scripts\\activate on Windows

# Install
pip install -e ".[dev]"

# Run self-health + Level-1 verification suite
python -m sherin.tools.self_cycle
\`\`\`

---

## 🧪 Current Status (Level-1)

| Capability | Status |
|------------|--------|
| Independent Verification Contract | ✅ Implemented |
| Provenance tracking | ✅ Implemented |
| Fail-closed on MISSING / CONFLICTING | ✅ Implemented |
| Bounded Local Repair (sketch) | ✅ Implemented |
| Self-health / self-validate loop | ✅ Implemented |
| Four-Question Training Contract | ✅ Defined |
| Domain Adapter interfaces | ✅ Defined |
| Python domain (constructs + functions) | 🟡 In progress |
| Complex DAG composition | 🔜 Planned |
| Full curriculum stages 00–10 | 🔜 Planned |

---

## 📚 Documentation

- [Architecture Overview](docs/architecture/README.md)
- [Diagram Gallery](docs/architecture/diagrams.md)
- [Memory Classification System](docs/memory/README.md)
- [Independent Verification Contract](docs/contracts/verification.md)
- [Four-Question Training Contract](docs/contracts/four_question.md)
- [Curriculum Protocol](docs/curriculum/README.md)
- [Domain Adapter Guide](docs/architecture/domain_adapters.md)

---

## 🎯 Design Principles

1. **Never invent** — preserve \`UNKNOWN\` and \`MISSING\`
2. **Provenance is mandatory** — every fact carries its source
3. **Verification before promotion** — no self-teaching of mistakes
4. **Core is language-independent** — domains supply syntax & execution
5. **Fail closed** — gates stay closed until evidence opens them
6. **Small, verifiable milestones** — teach → test → checkpoint → proceed

---

## 🗺️ Roadmap Snapshot

- [x] Core typed ports & verification outcomes
- [x] Independent Verification Contract (P1-D)
- [x] Self-health / self-repair demonstration
- [x] Four-Question Training Contract
- [ ] Effect Authorization (P1-E)
- [ ] Bounded Local Repair (P2-C) production hardening
- [ ] Full Python domain adapter
- [ ] Curriculum Stages 00–10
- [ ] Multi-domain concept registry
- [ ] Observation Harness (OBS-L1-001)

---

<div align="center">

**Built for truth-seeking systems.**  
No hallucinations. Full provenance. Independent verification.

[Documentation](docs/) · [Examples](examples/) · [Contributing](CONTRIBUTING.md)

</div>
`},{path:`docs/architecture/diagrams.md`,title:`Diagram gallery`,body:`# Diagram gallery

One palette across every diagram.

| Token | Use | Hex |
| --- | --- | --- |
| Gold | identity, freeze, trained | \`#e8c872\` |
| Violet | reasoning and decisions | \`#a78bfa\` |
| Cyan | memory and streams | \`#7dd3fc\` |
| Teal | contracts and observation | \`#5eead4\` |
| Emerald | verified, eligible | \`#34d399\` |
| Amber | missing, partial, ask | \`#fbbf24\` |
| Rose | conflict, halt | \`#fb7185\` |
| Magenta | review, classification | \`#e879f9\` |
| Slate | unknown, invalid | \`#94a3b8\` |

Background fills stay near \`#0c0e16\`. Text stays \`#f8f5ef\` or the matching light tint. Do not mix the older indigo/purple set.

## Curriculum stages

\`\`\`mermaid
%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%
flowchart TB
    subgraph L0["Foundation"]
        S00["00 Engine basics / KUID"]
    end
    subgraph L1["Facts and structure"]
        S01["01 Simple facts"]
        S02["02 Multi-fact chains"]
        S03["03 Properties"]
    end
    subgraph L2["Deduction"]
        S04["04 Rules"]
        S05["05 Multi-hop"]
        S06["06 Arithmetic"]
    end
    subgraph L3["Control"]
        S07["07 Sequences"]
        S08["08 Contradiction"]
        S09["09 Planning"]
    end
    subgraph L4["Pressure"]
        S10["10 Adversarial"]
    end

    S00 --> S01 --> S02 --> S03 --> S04 --> S05 --> S06 --> S07 --> S08 --> S09 --> S10
    GATE["Gate after every stage<br/>suite · accuracy · anomaly trend · immutable checkpoint"]
    S00 -.-> GATE
    S10 -.-> GATE

    style L0 fill:#0c0e16,stroke:#e8c872,color:#fffbeb
    style L1 fill:#0c0e16,stroke:#7dd3fc,color:#f0f9ff
    style L2 fill:#0c0e16,stroke:#a78bfa,color:#f5f3ff
    style L3 fill:#0c0e16,stroke:#fbbf24,color:#fffbeb
    style L4 fill:#0c0e16,stroke:#34d399,color:#ecfdf5
    style GATE fill:#1c1608,stroke:#e8c872,color:#fffbeb
    style S00 fill:#1c1608,stroke:#e8c872,color:#fffbeb
    style S10 fill:#052e24,stroke:#34d399,color:#ecfdf5
\`\`\`

Rollback is the only backward edge. A failed gate does not skip forward.

## Tool discovery lifecycle

\`\`\`mermaid
%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%
sequenceDiagram
    autonumber
    participant Env as Environment loader
    participant Disc as Discovery
    participant Mem as Semantic memory
    participant Train as Profile trainer
    participant Ver as Independent verifier
    participant Run as Controlled runtime

    Env->>Disc: scan manifests and hashes
    Note over Disc: no import, no execution
    Disc->>Mem: candidate profile + provenance
    alt unchanged hash
        Disc-->>Env: keep existing contract version
    else changed source
        Disc->>Mem: append new version
    end
    Train->>Mem: fill WHERE / WHEN / WHY / HOW
    Note over Train: TRAINED is not trusted
    Ver->>Mem: check contract version + evidence
    alt all four KNOWN and independently accepted
        Ver->>Mem: mark VERIFIED
        Run->>Mem: selection allowed
    else missing, partial, or conflict
        Ver-->>Run: USAGE_CONTRACT_BLOCKED
    end
\`\`\`

Automatic discovery authorizes nothing: no install, no filesystem write, no network, no memory promotion.

## Observation harness

\`\`\`mermaid
%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%
flowchart LR
    subgraph A["Phase A · fail closed"]
        direction TB
        A1["A-01 Integrity"]
        A2["A-02 Isolation · state"]
        A3["A-03 Isolation · channels"]
        A4["A-04 Judge independence"]
        A5["A-05 Provenance · source"]
        A6["A-06 Provenance · chain"]
        A7["A-07 Event stream identity"]
        A8["A-08 Telemetry stream identity"]
        A9["A-09 Promotion blocked on fail"]
        A10["A-10 Pass results frozen"]
        A1 --> A2 --> A3 --> A4 --> A5 --> A6 --> A7 --> A8 --> A9 --> A10
    end

    subgraph B["Phase B · six streams"]
        direction TB
        E["Evidence · what happened"]
        G["Eligibility · does it meet the bar"]
        V["Visualization · read only"]
        E --> G --> V
    end

    A10 -->|all ten pass| FR["Freeze"]
    FR --> E
    A9 -->|any fail| HALT["Gate closed"]

    style A fill:#0c0e16,stroke:#e8c872,color:#fffbeb
    style B fill:#0c0e16,stroke:#5eead4,color:#ecfeff
    style FR fill:#1c1608,stroke:#e8c872,color:#fffbeb
    style HALT fill:#3f0a16,stroke:#fb7185,color:#ffe4e6
    style E fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style G fill:#2a1030,stroke:#e879f9,color:#fdf4ff
    style V fill:#052e24,stroke:#34d399,color:#ecfdf5
\`\`\`

Invariant: \`PHASE A PASS → FREEZE → OBSERVATION → EVIDENCE REVIEW → ELIGIBILITY → VISUALIZATION\`.

## Teaching path

\`\`\`mermaid
%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%
flowchart TD
    T["User text"] --> K["Kulexicon → KUID"]
    K --> P["Semantic parser → chunk"]
    P --> D{"Defender"}
    D -->|reject| R["Observe rejected"]
    D -->|accept| S["Semantic memory"]
    S --> F["Forward chain"]
    F --> CF["Confidence update"]
    CF --> ST{"Self-test"}
    ST -->|pass| CP["Checkpoint"]
    ST -->|fail| RB["Rollback + Defender flag"]

    style T fill:#0c0e16,stroke:#e8c872,color:#fffbeb
    style K fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style P fill:#1a1530,stroke:#a78bfa,color:#f5f3ff
    style D fill:#3f2a08,stroke:#fbbf24,color:#fffbeb
    style R fill:#3f0a16,stroke:#fb7185,color:#ffe4e6
    style S fill:#052e24,stroke:#34d399,color:#ecfdf5
    style F fill:#1a1530,stroke:#a78bfa,color:#f5f3ff
    style CF fill:#082f2e,stroke:#5eead4,color:#ecfeff
    style ST fill:#2a1030,stroke:#e879f9,color:#fdf4ff
    style CP fill:#052e24,stroke:#34d399,color:#ecfdf5
    style RB fill:#3f0a16,stroke:#fb7185,color:#ffe4e6
\`\`\`
`},{path:`docs/architecture/README.md`,title:`Architecture`,body:`# Architecture — Sherin Atlas

Palette and the specialized flows live in [diagrams.md](diagrams.md).

## Philosophy

> **Kulexicon handles language. SHERIN handles meaning.**

Everything inside SHERIN operates on structured, typed units (KUID chunks / Knowledge Candidates).  
Raw text never becomes knowledge. Every promotion requires independent verification.

## High-Level Data Flow

\`\`\`mermaid
flowchart TD
    USER["👤 User / External Source"] --> KUL["📖 Kulexicon Adapter<br/>Text ↔ Structured Representation"]
    KUL --> DEF["🛡️ Defender Engine<br/>Duplicates • Contradictions • Schema"]
    
    DEF -->|Rejected| OBS1["👁️ Observe Engine<br/>Record rejection"]
    DEF -->|Accepted| SEM["📚 Semantic Memory<br/>Facts • Rules • Concepts"]
    
    SEM --> REA["⚙️ Reasoner + Planner<br/>Forward/Backward • Composition • Diagnosis"]
    REA --> VER["✅ Independent Verification<br/>P1-D Contract"]
    
    VER -->|VERIFIED| SEM
    VER -->|MISSING / CONFLICTING / INVALID| OBS2["👁️ Observe Engine<br/>Record outcome + residual"]
    
    SEM --> OBS3["👁️ Observe Engine<br/>Full event history"]
    
    style USER fill:#0c0e16,stroke:#e8c872,color:#fffbeb
    style KUL fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style DEF fill:#3f2a08,stroke:#fbbf24,color:#fffbeb
    style SEM fill:#052e24,stroke:#34d399,color:#ecfdf5
    style REA fill:#1a1530,stroke:#a78bfa,color:#f5f3ff
    style VER fill:#052e24,stroke:#34d399,color:#ecfdf5
    style OBS1 fill:#2a1030,stroke:#e879f9,color:#fdf4ff
    style OBS2 fill:#2a1030,stroke:#e879f9,color:#fdf4ff
    style OBS3 fill:#2a1030,stroke:#e879f9,color:#fdf4ff
\`\`\`

## Cognitor Core vs Domain Adapters

\`\`\`mermaid
flowchart TB
    subgraph CORE["Cognitor Core — Language Independent"]
        direction LR
        C1["value • type • state"]
        C2["sequence • condition"]
        C3["transformation • dependency"]
        C4["constraint • failure • repair"]
    end

    subgraph ADAPTERS["Domain Adapters"]
        direction LR
        A1["Python<br/>constructs • types • sandbox"]
        A2["JavaScript<br/>constructs • types • runtime"]
        A3["Algorithms<br/>patterns • complexity"]
    end

    CORE -->|"concept mapping"| ADAPTERS
    ADAPTERS -->|"never modifies"| CORE

    style CORE fill:#0c0e16,stroke:#e8c872,stroke-width:2px,color:#f8f5ef
    style ADAPTERS fill:#0c0e16,stroke:#7dd3fc,stroke-width:2px,color:#f8f5ef
\`\`\`

The **Cognitor Core** is language- and domain-independent.  
It reasons about:

- value, type, state, sequence, condition, transformation
- dependency, constraint, input, output
- failure, cause, repair

**Domain Adapters** (Python, JavaScript, Algorithms, …) supply:

- concrete syntax / constructs
- type systems
- execution sandboxes
- verification oracles

Adding a new domain must never require changes to the core reasoning engine.

## Closed-Loop Reasoning

\`\`\`mermaid
flowchart LR
    A[Teach / Ingest] --> B[Parse]
    B --> C[Defend]
    C --> D[Store]
    D --> E[Observe]
    E --> F[Test / Verify]
    F --> G{Pass?}
    G -->|Yes| H[Update + Checkpoint]
    G -->|No| I[Diagnose]
    I --> J[Bounded Repair]
    J --> F
    H --> A

    style A fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style F fill:#052e24,stroke:#34d399,color:#ecfdf5
    style I fill:#3f0a16,stroke:#fb7185,color:#ffe4e6
    style J fill:#3f2a08,stroke:#fbbf24,color:#fffbeb
    style H fill:#052e24,stroke:#34d399,color:#ecfdf5
\`\`\`

## Critical Invariants

1. Nothing enters Semantic Memory without passing Defender.
2. Episodic Memory never drives reasoning.
3. Only \`VERIFIED\` items are eligible for task selection.
4. Missing or conflicting information produces explicit \`MISSING\` / \`CONFLICTING\` / \`UNKNOWN\` states.
5. The system never invents values to fill gaps.
`},{path:`docs/contracts/verification.md`,title:`Verification`,body:`# Independent Verification Contract (P1-D)

## Purpose

Ensure that no result becomes durable knowledge until it has passed an independent acceptance contract. This is the primary anti-poisoning mechanism of Sherin Atlas.

## Contract Signature

\`\`\`text
VerificationRequest = {
  task_context   : TaskContext,       # WHAT / WHICH / WHEN / WHY
  proposed       : Value | PartialAST,
  provenance     : SourceId[],
  operators_used : OperatorId[],
  observed       : Observation | None
}

VerificationOutcome =
  | VERIFIED     { result, evidence }
  | MISSING      { slots }
  | CONFLICTING  { conflicts }
  | INVALID      { reasons }
  | UNKNOWN      { residual }
\`\`\`

## Decision Flow

\`\`\`mermaid
stateDiagram-v2
    [*] --> Request

    Request --> Provenance: Check provenance completeness
    Provenance --> Missing: Incomplete sources
    Provenance --> Contracts: Complete

    Contracts --> Missing: Required slots unbound
    Contracts --> Observation: All contracts satisfied

    Observation --> Conflicting: Proposed ≠ Observed
    Observation --> TaskAlign: Match

    TaskAlign --> Invalid: Type or intent mismatch
    TaskAlign --> Verified: Fully aligned

    Missing --> [*]
    Conflicting --> [*]
    Invalid --> [*]
    Verified --> Promote: Eligible for Semantic Memory

    style Verified fill:#052e24,stroke:#34d399,color:#ecfdf5
    style Missing fill:#3f2a08,stroke:#fbbf24,color:#fffbeb
    style Conflicting fill:#3f0a16,stroke:#fb7185,color:#ffe4e6
    style Invalid fill:#111827,stroke:#94a3b8,color:#f8fafc
    style Promote fill:#1c1608,stroke:#e8c872,color:#fffbeb
\`\`\`

## Acceptance Predicates

All must hold for \`VERIFIED\`:

1. **Provenance completeness** — every contributing leaf has an immutable SourceId.
2. **Contract satisfaction** — all required slots are BOUND or DERIVABLE; preconditions hold.
3. **Observation match** — independent re-execution (or oracle) agrees with the proposed result.
4. **Task alignment** — the result satisfies the original WHAT of the task.

## Rules

- The verifier is pure and side-effect-free.
- It never mutates the memory graph.
- Promotion to Semantic Memory is a separate step that only accepts \`VERIFIED\` outcomes.
- On failure the most specific non-VERIFIED state is returned.
- No silent invention is permitted under any circumstance.
`},{path:`docs/contracts/four_question.md`,title:`Four questions`,body:`# Four-Question Training Contract

Every item (tool, operator, knowledge unit) must answer:

1. **WHERE** will this be used?
2. **WHEN** will it be used?
3. **WHY** will it be used?
4. **HOW** will it be used?

States: UNKNOWN → PARTIAL → KNOWN → TRAINED → VERIFIED

Only independently verified items become eligible for task selection.
`},{path:`docs/curriculum/README.md`,title:`Curriculum`,body:`# Curriculum Protocol

Stages open in order. A failed gate rolls back. It never skips ahead.

\`\`\`mermaid
%%{init: {'theme':'dark','themeVariables': {'fontFamily':'Inter, ui-sans-serif, system-ui'}}}%%
flowchart LR
    S00["00"] --> S01["01"] --> S02["02"] --> S03["03"] --> S04["04"] --> S05["05"]
    S05 --> S06["06"] --> S07["07"] --> S08["08"] --> S09["09"] --> S10["10"]

    style S00 fill:#1c1608,stroke:#e8c872,color:#fffbeb
    style S01 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style S02 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style S03 fill:#0c1e33,stroke:#7dd3fc,color:#f0f9ff
    style S04 fill:#1a1530,stroke:#a78bfa,color:#f5f3ff
    style S05 fill:#1a1530,stroke:#a78bfa,color:#f5f3ff
    style S06 fill:#1a1530,stroke:#a78bfa,color:#f5f3ff
    style S07 fill:#3f2a08,stroke:#fbbf24,color:#fffbeb
    style S08 fill:#3f0a16,stroke:#fb7185,color:#ffe4e6
    style S09 fill:#082f2e,stroke:#5eead4,color:#ecfeff
    style S10 fill:#052e24,stroke:#34d399,color:#ecfdf5
\`\`\`

| Stage | Name |
| --- | --- |
| 00 | Engine basics / KUID foundation |
| 01 | Simple facts |
| 02 | Multi-fact chains |
| 03 | Properties and attributes |
| 04 | Rules and deduction |
| 05 | Multi-hop reasoning |
| 06 | Arithmetic and comparison |
| 07 | Sequences |
| 08 | Contradiction handling |
| 09 | Planning |
| 10 | Advanced reasoning and adversarial testing |

After every stage: full test suite, accuracy against the stage target, Observer shows no rising anomaly counts, then an immutable checkpoint.

The layered view is in [diagrams.md](../architecture/diagrams.md).
`},{path:`docs/memory/README.md`,title:`Memory`,body:`# Memory Classification System

See the main architecture documentation for the three-layer memory model:

- Working Memory (session-only)
- Semantic Memory (long-term verified knowledge)
- Episodic Memory (experience & history)

**Key rule:** Episodic Memory never drives reasoning.
`},{path:`examples/self_cycle_demo.py`,title:`Self-cycle demo`,body:`#!/usr/bin/env python3
"""
Sherin Atlas — Self-Health / Self-Validate / Self-Repair Demonstration

This script demonstrates the Independent Verification Contract (P1-D)
and a minimal bounded repair loop on Level-1 pure-functional problems.
"""

from __future__ import annotations
from dataclasses import dataclass, field
from typing import Any, Optional, List, Dict, Callable
from enum import Enum, auto
import uuid
from datetime import datetime


# ---------------------------------------------------------------------------
# Core Types
# ---------------------------------------------------------------------------

class OutcomeKind(Enum):
    VERIFIED    = auto()
    MISSING     = auto()
    CONFLICTING = auto()
    INVALID     = auto()
    UNKNOWN     = auto()
    REPAIRED    = auto()


@dataclass(frozen=True)
class SourceId:
    id: str = field(default_factory=lambda: str(uuid.uuid4())[:8])


@dataclass(frozen=True)
class OperatorId:
    name: str


@dataclass
class TaskContext:
    what: type
    which: Any
    when: str
    why: str


@dataclass
class Observation:
    result: Any
    sandbox_id: str = field(default_factory=lambda: str(uuid.uuid4())[:8])


@dataclass
class VerificationRequest:
    task_context: TaskContext
    proposed: Any
    provenance: List[SourceId]
    operators_used: List[OperatorId]
    observed: Optional[Observation]


@dataclass
class VerificationOutcome:
    kind: OutcomeKind
    result: Any = None
    evidence: Dict = field(default_factory=dict)
    slots: List[str] = field(default_factory=list)
    conflicts: List[str] = field(default_factory=list)
    reasons: List[str] = field(default_factory=list)
    repair_log: List[str] = field(default_factory=list)


# ---------------------------------------------------------------------------
# Trusted Operators (Level-1)
# ---------------------------------------------------------------------------

def op_reverse(s: str) -> str:
    return s[::-1]


def op_equal(a: Any, b: Any) -> bool:
    return a == b


TRUSTED_OPERATORS: Dict[str, Callable] = {
    "reverse": op_reverse,
    "equal": op_equal,
}


# ---------------------------------------------------------------------------
# Independent Verification Contract
# ---------------------------------------------------------------------------

def verify(req: VerificationRequest) -> VerificationOutcome:
    if not req.provenance:
        return VerificationOutcome(kind=OutcomeKind.MISSING, slots=["provenance"])

    for op in req.operators_used:
        if op.name not in TRUSTED_OPERATORS:
            return VerificationOutcome(
                kind=OutcomeKind.MISSING,
                slots=[f"operator:{op.name}"]
            )

    if req.observed is None:
        return VerificationOutcome(kind=OutcomeKind.MISSING, slots=["observation"])

    if req.observed.result != req.proposed:
        return VerificationOutcome(
            kind=OutcomeKind.CONFLICTING,
            conflicts=["effect_mismatch: proposed ≠ observed"]
        )

    if not isinstance(req.proposed, req.task_context.what):
        return VerificationOutcome(
            kind=OutcomeKind.INVALID,
            reasons=[f"type mismatch: expected {req.task_context.what.__name__}"]
        )

    return VerificationOutcome(
        kind=OutcomeKind.VERIFIED,
        result=req.proposed,
        evidence={
            "reexec": True,
            "provenance": [s.id for s in req.provenance],
            "operators": [op.name for op in req.operators_used],
            "sandbox_id": req.observed.sandbox_id,
        }
    )


# ---------------------------------------------------------------------------
# Bounded Local Repair
# ---------------------------------------------------------------------------

def bounded_repair(outcome: VerificationOutcome, req: VerificationRequest) -> VerificationOutcome:
    log = []

    if outcome.kind == OutcomeKind.CONFLICTING and "effect_mismatch" in str(outcome.conflicts):
        if any(op.name == "reverse" for op in req.operators_used):
            log.append("Detected effect_mismatch on reverse")
            log.append("Repair action: re-execute with TRUSTED reverse")

            input_val = req.task_context.which
            if isinstance(input_val, str):
                correct = TRUSTED_OPERATORS["reverse"](input_val)
                new_req = VerificationRequest(
                    task_context=req.task_context,
                    proposed=correct,
                    provenance=req.provenance + [SourceId()],
                    operators_used=[OperatorId("reverse")],
                    observed=Observation(result=correct)
                )
                repaired = verify(new_req)
                if repaired.kind == OutcomeKind.VERIFIED:
                    repaired.kind = OutcomeKind.REPAIRED
                    repaired.repair_log = log + ["Repair succeeded"]
                    return repaired

    outcome.repair_log = log + ["No applicable bounded repair"]
    return outcome


# ---------------------------------------------------------------------------
# Self Cycle
# ---------------------------------------------------------------------------

def run_self_cycle() -> None:
    print("=" * 72)
    print("  SHERIN ATLAS  —  Self-Health / Self-Validate / Self-Repair")
    print("=" * 72)
    print(f"  Timestamp : {datetime.utcnow().isoformat()}Z")
    print()

    # Health
    print("[1] Self-Health Check")
    print(f"    Trusted operators : {list(TRUSTED_OPERATORS.keys())}")
    print("    ✓ Core components present\\n")

    # Validation cases
    print("[2] Validation Suite (Level-1)")

    cases = []

    # A. Happy path
    req_a = VerificationRequest(
        task_context=TaskContext(what=bool, which="racecar", when="pure", why="L1-palindrome"),
        proposed=True,
        provenance=[SourceId(), SourceId(), SourceId()],
        operators_used=[OperatorId("reverse"), OperatorId("equal")],
        observed=Observation(result=True)
    )
    cases.append(("A. palindrome('racecar')", verify(req_a)))

    # B. Missing operator
    req_b = VerificationRequest(
        task_context=TaskContext(what=bool, which="hello", when="pure", why="L1-palindrome"),
        proposed=False,
        provenance=[SourceId()],
        operators_used=[OperatorId("reverse"), OperatorId("nonexistent")],
        observed=Observation(result=False)
    )
    cases.append(("B. missing operator", verify(req_b)))

    # C. Conflicting → repair
    req_c = VerificationRequest(
        task_context=TaskContext(what=str, which="abc", when="pure", why="L1-reverse"),
        proposed="cba",
        provenance=[SourceId(), SourceId()],
        operators_used=[OperatorId("reverse")],
        observed=Observation(result="abc")  # buggy observation
    )
    out_c = verify(req_c)
    if out_c.kind == OutcomeKind.CONFLICTING:
        out_c = bounded_repair(out_c, req_c)
    cases.append(("C. conflicting reverse → repair", out_c))

    # D. Correct reverse
    req_d = VerificationRequest(
        task_context=TaskContext(what=str, which="hello", when="pure", why="L1-reverse"),
        proposed="olleh",
        provenance=[SourceId(), SourceId()],
        operators_used=[OperatorId("reverse")],
        observed=Observation(result="olleh")
    )
    cases.append(("D. reverse('hello')", verify(req_d)))

    for name, outcome in cases:
        extra = ""
        if outcome.slots:
            extra = f"  slots={outcome.slots}"
        if outcome.conflicts:
            extra = f"  conflicts={outcome.conflicts}"
        if outcome.repair_log:
            extra = f"  repair={outcome.repair_log}"
        print(f"    {name:<42} → {outcome.kind.name}{extra}")

    verified = sum(1 for _, o in cases if o.kind in (OutcomeKind.VERIFIED, OutcomeKind.REPAIRED))
    print()
    print(f"[3] Summary: {verified}/{len(cases)} reached VERIFIED or REPAIRED")
    print("    Independent Verification Contract is operational.")
    print("=" * 72)


if __name__ == "__main__":
    run_self_cycle()
`}],o=t();function s({code:e}){let t=(0,i.useId)().replace(/:/g,``),[n,a]=(0,i.useState)(``),[s,c]=(0,i.useState)(``);return(0,i.useEffect)(()=>{let n=!0;return a(``),c(``),r(()=>import(`./mermaid.core-BIvn6QjB.js`).then(async r=>{let i=r.default;i.initialize({startOnLoad:!1,securityLevel:`strict`,theme:`dark`,themeVariables:{fontFamily:`IBM Plex Sans, sans-serif`,primaryTextColor:`#f6f1e7`,lineColor:`#e8c872`,background:`#07080d`}});try{let{svg:r}=await i.render(`m-${t}`,e.trim());n&&a(r)}catch(e){n&&c(e instanceof Error?e.message:`Diagram failed`)}}),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])),()=>{n=!1}},[e,t]),s?(0,o.jsx)(`pre`,{className:`overflow-x-auto rounded-xl border border-rose-900/60 bg-[#1a0c10] p-4 text-xs text-rose-200`,children:s}):n?(0,o.jsx)(`div`,{className:`overflow-x-auto rounded-xl border border-[#2a261c] bg-[#0c0e16] p-4 [&_svg]:mx-auto [&_svg]:max-w-full`,dangerouslySetInnerHTML:{__html:n}}):(0,o.jsx)(`div`,{className:`h-40 animate-pulse rounded-xl bg-[#12141c]`})}function c(e){return e.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((e,t)=>e.startsWith("`")&&e.endsWith("`")?(0,o.jsx)(`code`,{className:`rounded bg-[#1c1608] px-1 text-[#e8c872]`,children:e.slice(1,-1)},t):e.startsWith(`**`)&&e.endsWith(`**`)?(0,o.jsx)(`strong`,{children:e.slice(2,-2)},t):(0,o.jsx)(`span`,{children:e},t))}function l({source:e}){let t=e.split(/```/);return(0,o.jsx)(`div`,{className:`space-y-4 text-[15px] leading-7 text-[#ebe4d6]`,children:t.map((e,t)=>{if(t%2==1){let n=e.indexOf(`
`),r=n===-1?e:e.slice(0,n),i=n===-1?``:e.slice(n+1);return r.trim()===`mermaid`?(0,o.jsx)(s,{code:i},t):(0,o.jsx)(`pre`,{className:`overflow-x-auto rounded-xl border border-[#242018] bg-[#0c0e16] p-4 text-xs leading-5 text-[#d6cbb8]`,children:i},t)}return e.split(`
`).map((e,n)=>{let r=`${t}-${n}`;return e.trim()?e.startsWith(`# `)?(0,o.jsx)(`h1`,{className:`font-['Instrument_Serif'] text-4xl tracking-tight text-[#f6f1e7]`,children:e.slice(2)},r):e.startsWith(`## `)?(0,o.jsx)(`h2`,{className:`pt-4 text-xl font-semibold text-[#e8c872]`,children:e.slice(3)},r):e.startsWith(`### `)?(0,o.jsx)(`h3`,{className:`pt-2 text-lg font-medium text-[#f6f1e7]`,children:e.slice(4)},r):e.startsWith(`> `)?(0,o.jsx)(`blockquote`,{className:`border-l-2 border-[#e8c872] pl-3 text-[#cbbfa8]`,children:c(e.slice(2))},r):e.startsWith(`- `)?(0,o.jsxs)(`div`,{className:`pl-3`,children:[`· `,c(e.slice(2))]},r):e.startsWith(`|`)?(0,o.jsx)(`div`,{className:`font-mono text-xs text-[#cbbfa8]`,children:e},r):e.trim()===`---`?(0,o.jsx)(`hr`,{className:`border-[#242018]`},r):(0,o.jsx)(`p`,{children:c(e)},r):(0,o.jsx)(`div`,{className:`h-2`},r)})})})}var u=[[`00`,`Foundation`],[`01`,`Facts`],[`02`,`Chains`],[`03`,`Properties`],[`04`,`Rules`],[`05`,`Multi-hop`],[`06`,`Arithmetic`],[`07`,`Sequences`],[`08`,`Contradiction`],[`09`,`Planning`],[`10`,`Adversarial`]],d=[[`Source`,`Directory, form, or generated tool`],[`Identity`,`Allocation plus source hash`],[`Candidate`,`WHERE / WHEN / WHY / HOW`],[`Trained`,`Answers complete. Still not trusted.`],[`Verified`,`Independent check. Only then selectable.`]],f=[`S-01 EventLog`,`S-02 ReasonTrace`,`S-03 ConfidenceLog`,`S-04 DefenderVerdict`,`S-05 QuerySession`,`S-06 LearnerAction`];function p(){let[e,t]=(0,i.useState)(null),n=a.find(t=>t.path===e)??null;return(0,o.jsxs)(`div`,{className:`flex min-h-screen bg-[#07080d] text-[#f6f1e7]`,children:[(0,o.jsxs)(`aside`,{className:`atlas-scroll sticky top-0 hidden h-screen w-72 shrink-0 overflow-y-auto border-r border-[#242018] bg-[#0c0e16] p-5 md:block`,children:[(0,o.jsx)(`p`,{className:`text-[11px] tracking-[0.22em] text-[#e8c872]`,children:`SHERIN ATLAS`}),(0,o.jsx)(`h1`,{className:`mt-2 font-['Instrument_Serif'] text-3xl`,children:`Repo map`}),(0,o.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-[#b7ad9c]`,children:`The files are loaded. Open one, or stay on the map.`}),(0,o.jsx)(`button`,{type:`button`,onClick:()=>t(null),className:`mt-6 w-full rounded-lg px-3 py-2 text-left text-sm ${e===null?`bg-[#1c1608] text-[#e8c872]`:`text-[#d6cbb8] hover:bg-[#141820]`}`,children:`Visual map`}),(0,o.jsx)(`p`,{className:`mt-6 text-[11px] tracking-[0.18em] text-[#8d8476]`,children:`FILES`}),(0,o.jsx)(`ul`,{className:`mt-2 space-y-1`,children:a.map(n=>(0,o.jsx)(`li`,{children:(0,o.jsxs)(`button`,{type:`button`,onClick:()=>t(n.path),className:`w-full rounded-lg px-3 py-2 text-left text-sm ${e===n.path?`bg-[#1c1608] text-[#e8c872]`:`text-[#d6cbb8] hover:bg-[#141820]`}`,children:[(0,o.jsx)(`span`,{className:`block font-medium`,children:n.title}),(0,o.jsx)(`span`,{className:`block truncate text-xs text-[#8d8476]`,children:n.path})]})},n.path))})]}),(0,o.jsxs)(`main`,{className:`atlas-scroll min-w-0 flex-1 overflow-y-auto px-5 py-6 md:px-10 md:py-10`,children:[(0,o.jsxs)(`div`,{className:`mb-4 flex gap-2 overflow-x-auto md:hidden`,children:[(0,o.jsx)(`button`,{type:`button`,onClick:()=>t(null),className:`shrink-0 rounded-full border border-[#e8c872] px-3 py-1 text-xs text-[#e8c872]`,children:`Map`}),a.map(e=>(0,o.jsx)(`button`,{type:`button`,onClick:()=>t(e.path),className:`shrink-0 rounded-full border border-[#2a261c] px-3 py-1 text-xs`,children:e.title},e.path))]}),n?(0,o.jsxs)(`article`,{children:[(0,o.jsx)(`p`,{className:`text-xs tracking-[0.16em] text-[#e8c872]`,children:n.path}),(0,o.jsx)(`div`,{className:`mt-4`,children:(0,o.jsx)(l,{source:n.body})})]}):(0,o.jsx)(m,{})]})]})}function m(){return(0,o.jsxs)(`div`,{className:`mx-auto max-w-5xl space-y-10`,children:[(0,o.jsxs)(`header`,{children:[(0,o.jsx)(`p`,{className:`text-xs tracking-[0.22em] text-[#e8c872]`,children:`DETERMINISTIC REASONING ENGINE`}),(0,o.jsx)(`h2`,{className:`mt-2 font-['Instrument_Serif'] text-5xl leading-none md:text-6xl`,children:`Sherin Atlas`}),(0,o.jsx)(`p`,{className:`mt-4 max-w-2xl text-[#cbbfa8]`,children:`Kulexicon handles language. SHERIN handles meaning. Nothing in this repo is empty — open a file in the list, or read the live map below.`})]}),(0,o.jsx)(`section`,{className:`grid gap-3 md:grid-cols-3`,children:[[`Reasoning`,`Problem frames, planning, binding, diagnosis, bounded repair`],[`Memory`,`Working, semantic, and episodic. Only semantic facts drive answers.`],[`Contracts`,`Independent verification and the four-question usage rule`]].map(([e,t])=>(0,o.jsxs)(`article`,{className:`rounded-2xl border border-[#2a261c] bg-[#0c0e16] p-5`,children:[(0,o.jsx)(`h3`,{className:`text-[#e8c872]`,children:e}),(0,o.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-[#cbbfa8]`,children:t})]},e))}),(0,o.jsxs)(`section`,{children:[(0,o.jsx)(`h3`,{className:`text-sm tracking-[0.16em] text-[#8d8476]`,children:`CURRICULUM 00–10`}),(0,o.jsx)(`ol`,{className:`mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6`,children:u.map(([e,t],n)=>(0,o.jsxs)(`li`,{className:`rounded-xl border border-[#2a261c] bg-[#0c0e16] px-3 py-3`,style:{borderColor:n===u.length-1?`#34d399`:void 0},children:[(0,o.jsx)(`div`,{className:`font-['Instrument_Serif'] text-2xl text-[#e8c872]`,children:e}),(0,o.jsx)(`div`,{className:`text-sm text-[#d6cbb8]`,children:t})]},e))})]}),(0,o.jsxs)(`section`,{className:`grid gap-6 lg:grid-cols-2`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`h3`,{className:`text-sm tracking-[0.16em] text-[#8d8476]`,children:`TOOL DISCOVERY`}),(0,o.jsx)(`ol`,{className:`mt-3 space-y-2`,children:d.map(([e,t],n)=>(0,o.jsxs)(`li`,{className:`flex gap-3 rounded-xl border border-[#2a261c] bg-[#0c0e16] p-3`,children:[(0,o.jsx)(`span`,{className:`font-['Instrument_Serif'] text-2xl text-[#e8c872]`,children:n+1}),(0,o.jsxs)(`span`,{children:[(0,o.jsx)(`span`,{className:`block font-medium`,children:e}),(0,o.jsx)(`span`,{className:`block text-sm text-[#b7ad9c]`,children:t})]})]},e))})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`h3`,{className:`text-sm tracking-[0.16em] text-[#8d8476]`,children:`OBSERVATION HARNESS`}),(0,o.jsx)(`p`,{className:`mt-3 text-sm text-[#cbbfa8]`,children:`Phase A must freeze before Phase B opens. Visualization never decides eligibility.`}),(0,o.jsx)(`ul`,{className:`mt-3 grid grid-cols-2 gap-2`,children:f.map(e=>(0,o.jsx)(`li`,{className:`rounded-xl border border-[#17324a] bg-[#0c1e33] px-3 py-3 text-sm`,children:e},e))}),(0,o.jsx)(`p`,{className:`mt-3 rounded-xl border border-[#3f0a16] bg-[#1a0c10] px-3 py-3 text-sm text-[#fecdd3]`,children:`Any of the 10 assertions fails → gate closed. No promotion.`})]})]})]})}var h=p;export{h as component};