# Architecture — Sherin Atlas

Palette and the specialized flows live in [diagrams.md](diagrams.md).

## Philosophy

> **Kulexicon handles language. SHERIN handles meaning.**

Everything inside SHERIN operates on structured, typed units (KUID chunks / Knowledge Candidates).  
Raw text never becomes knowledge. Every promotion requires independent verification.

## High-Level Data Flow

```mermaid
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
```

## Cognitor Core vs Domain Adapters

```mermaid
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
```

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

```mermaid
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
```

## Critical Invariants

1. Nothing enters Semantic Memory without passing Defender.
2. Episodic Memory never drives reasoning.
3. Only `VERIFIED` items are eligible for task selection.
4. Missing or conflicting information produces explicit `MISSING` / `CONFLICTING` / `UNKNOWN` states.
5. The system never invents values to fill gaps.
