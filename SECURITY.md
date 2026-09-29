# Information security

This repository must remain private and follow the applicable corporate policies.

## Check before publishing

Before approving a change or publishing the wiki, confirm that the repository visibility is still **Private** on GitHub. Markdown and the workflow cannot enforce this rule. If visibility is incorrect, stop the publication and ask the repository owner to correct the classification before continuing.

## Do not commit

- Passwords, tokens, private keys, connection strings, or certificates that contain a private key.
- Privileged user names or service-account secrets.
- Database dumps, production files, or financial or personal data.
- Unsanitized logs.
- Original FIS/SunGard or customer documents without explicit authorization.
- Internal URLs, IP addresses, and server names when policy requires a higher classification.

Document **where** a secret is managed and who can grant access, never its value. Before attaching evidence, remove IDs, names, email addresses, values, sensitive paths, and customer data.

## Critical changes

SQL procedures, restarts, reprocessing, deployments, and security changes require a ticket, approval, backup or evidence, and a rollback plan under the current process. Examples in this knowledge base are guidance; they do not authorize execution.
