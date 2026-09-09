# Data Import and interfaces

This page is the entry point for the import module. Detailed material is in the specific Data Import guides and process troubleshooting.

## Detailed material

- [Data Import](data-import/README.md): overview, limitations, and support flows.
- [Data Import practical guide](data-import/guia-pratico-data-import.md): execution, mapping, and daily operations.
- [Templates, entities, and mappings](data-import/templates-entidades-mappings.md): mappings and rules by entity.
- [Data Import troubleshooting](data-import/troubleshooting.md): rejected-row and partial-load diagnosis.

## Recommended support flow

1. Confirm the entity, template, and entitlement.
2. Validate the mapping, keys, and UDFs.
3. Test a sample in a controlled environment.
4. Record the job, file, user, and checksum.
5. Monitor status and rejected rows.
6. Reconcile account/count/entity after loading.
7. Archive evidence and repeat only when idempotency is guaranteed.

## Quick decision

| Question | Best guide |
|---|---|
| Job rejects rows or mapping fails | [Data Import troubleshooting](data-import/troubleshooting.md) |
| Need to prepare the file and templates | [Templates, entities, and mappings](data-import/templates-entidades-mappings.md) |
| Need to understand the overall process | [Data Import](data-import/README.md) |

## KT pending

- Official and customized templates.
- Entities by frequency and volume.
- Interface owner and reconciliation routine.
- Retry, cancellation, and partial-load rules.
