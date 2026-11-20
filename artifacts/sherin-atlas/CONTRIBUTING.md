# Contributing to Sherin Atlas

Thank you for your interest in contributing.

## Core Principles (Non-Negotiable)

1. **Never invent answers** — preserve `UNKNOWN` / `MISSING` states.
2. **Provenance is mandatory** — every piece of knowledge must carry source identity.
3. **Verification before promotion** — nothing becomes `VERIFIED` without independent acceptance.
4. **Fail closed** — gates stay closed until evidence opens them.
5. **Core stays domain-agnostic** — domain knowledge belongs in adapters.

## Development Workflow

1. Create a feature branch from `main`.
2. Make focused, verifiable changes.
3. Add or update tests.
4. Run the self-cycle and test suite.
5. Open a pull request with a clear description of:
   - What changed
   - Why it was needed
   - How it was verified

## Code Style

- Python 3.11+
- Type hints required for public interfaces
- Prefer explicit states over implicit behavior
- Keep the Cognitor core free of domain imports

## Testing

```bash
pytest
python examples/self_cycle_demo.py
```

All new reasoning paths must demonstrate correct handling of `MISSING`, `CONFLICTING`, and `UNKNOWN` outcomes.
