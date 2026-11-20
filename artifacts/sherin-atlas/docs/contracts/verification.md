# Independent Verification Contract (P1-D)

## Purpose

Ensure that no result becomes durable knowledge until it has passed an independent acceptance contract. This is the primary anti-poisoning mechanism of Sherin Atlas.

## Contract Signature

```text
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
```

## Decision Flow

```mermaid
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
```

## Acceptance Predicates

All must hold for `VERIFIED`:

1. **Provenance completeness** — every contributing leaf has an immutable SourceId.
2. **Contract satisfaction** — all required slots are BOUND or DERIVABLE; preconditions hold.
3. **Observation match** — independent re-execution (or oracle) agrees with the proposed result.
4. **Task alignment** — the result satisfies the original WHAT of the task.

## Rules

- The verifier is pure and side-effect-free.
- It never mutates the memory graph.
- Promotion to Semantic Memory is a separate step that only accepts `VERIFIED` outcomes.
- On failure the most specific non-VERIFIED state is returned.
- No silent invention is permitted under any circumstance.
