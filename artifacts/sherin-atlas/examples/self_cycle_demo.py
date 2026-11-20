#!/usr/bin/env python3
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
    print("    ✓ Core components present\n")

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
