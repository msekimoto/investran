# How to contribute

## Principles

1. Clearly separate confirmed facts, assumptions, and `KT pending` items.
2. State the version and environment for every configuration.
3. Record the source, last validation date, and owner.
4. Write procedures with prerequisites, impact, validation, and rollback.
5. Do not copy long passages from manuals. Prefer a concise summary and a document or page reference.
6. Never include secrets or production data.

## Definition of done

An operational guide is complete only when another person can run the flow in a safe environment, find the logs, recognize success or failure, and know when to stop and escalate.

## Living-document rule

- Treat the detailed module guide as the source of truth. Landing pages and cross-module pages should summarize the route and link to that guide instead of copying its procedure.
- When an incident, upgrade, configuration change, or process change affects a documented flow, review and update the canonical guide as part of closing the incident/change. If the instructions remain correct, record the review date, scope, and evidence in the document control block.
- Keep operational guides aligned with the [operational guide template](templates/operational-guide.md). Use `KT pending` or `Under validation` until a responsible owner has confirmed the procedure in a supported environment; never imply validation that has not happened.
- Record unresolved ownership or validation gaps in the [KT plan](docs/16-kt-plan.md), and link the relevant page and ticket/change. Sanitize all evidence and exclude secrets and production data.

## Suggested workflow

- Create a branch and pull request.
- Request review from the functional and technical specialists.
- Run the procedure in DEV/UAT when possible.
- Record the evidence and validation date.
- Update the status in the [KT plan](docs/16-kt-plan.md).
- For an incident, upgrade, configuration, or process change, update or explicitly revalidate the affected canonical guide before closing the related ticket/change.
