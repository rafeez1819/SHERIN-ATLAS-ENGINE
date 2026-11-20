# Curriculum Protocol

Stages open in order. A failed gate rolls back. It never skips ahead.

```mermaid
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
```

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
