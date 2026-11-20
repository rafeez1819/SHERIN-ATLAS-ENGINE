# Diagram gallery

One palette across every diagram.

| Token | Use | Hex |
| --- | --- | --- |
| Gold | identity, freeze, trained | `#e8c872` |
| Violet | reasoning and decisions | `#a78bfa` |
| Cyan | memory and streams | `#7dd3fc` |
| Teal | contracts and observation | `#5eead4` |
| Emerald | verified, eligible | `#34d399` |
| Amber | missing, partial, ask | `#fbbf24` |
| Rose | conflict, halt | `#fb7185` |
| Magenta | review, classification | `#e879f9` |
| Slate | unknown, invalid | `#94a3b8` |

Background fills stay near `#0c0e16`. Text stays `#f8f5ef` or the matching light tint. Do not mix the older indigo/purple set.

## Curriculum stages

```mermaid
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
```

Rollback is the only backward edge. A failed gate does not skip forward.

## Tool discovery lifecycle

```mermaid
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
```

Automatic discovery authorizes nothing: no install, no filesystem write, no network, no memory promotion.

## Observation harness

```mermaid
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
```

Invariant: `PHASE A PASS → FREEZE → OBSERVATION → EVIDENCE REVIEW → ELIGIBILITY → VISUALIZATION`.

## Teaching path

```mermaid
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
```
