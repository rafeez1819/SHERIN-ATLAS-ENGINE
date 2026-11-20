.PHONY: install test self-cycle lint clean

install:
	pip install -e ".[dev]"

test:
	pytest

self-cycle:
	python examples/self_cycle_demo.py

lint:
	ruff check sherin examples
	mypy sherin || true

clean:
	rm -rf build/ dist/ *.egg-info .pytest_cache .mypy_cache .ruff_cache htmlcov .coverage
	find . -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null || true
