# RepoMD 🩺 — Code Health Monitor

**An autonomous developer workflow system that coordinates specialized agents
across the software development lifecycle — not just a coding assistant.**

Built for the **IBM Bob 2.0 Hackathon**.

## The problem

Auditing a codebase for bugs, security issues, missing tests, and
documentation gaps is manual, slow, and inconsistent — developers spend
60–90 minutes per review cycle inspecting code, searching logs, writing
tests, and updating docs by hand.

## The solution

RepoMD deploys **four parallel subagents** through IBM Bob 2.0 to audit a
repository simultaneously:

- 🐛 **Code Quality** — duplicate logic, dead code, high-complexity functions
- 🔐 **Security** — outdated/vulnerable dependencies
- 🧪 **Test Coverage** — exported functions with no tests, auto-generated
- 📝 **Documentation** — missing docstrings, auto-generated

Findings are aggregated into a single **Health Score**. A fifth
**Validator subagent** then reviews every proposed fix before it's applied,
so nothing risky is auto-merged. The repo is re-audited to show measurable
before/after improvement.

## Pipeline

```
Detect → Analyze → Fix → Validate → Verify → Document
```

## Structure

```
repomd/
├── bob_sessions/       Bob task session summary screenshots (required)
├── sample-project/     Sample repo with planted issues, used for the demo
├── templates/           Landing page HTML
├── public/               CSS/JS for the landing page
```

## Impact

| Metric | Before | After |
|---|---|---|
| Health Score | 45/100 | 88/100 |
| Manual review time | 60–90 min | 10–15 min |

## Built with

IBM Bob 2.0 (Bob IDE) — Agent mode, parallel subagents, document understanding.
