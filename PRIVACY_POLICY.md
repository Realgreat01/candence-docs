# Privacy Policy

**CadenceAI**

Last updated: 25 November 2026
Effective date: 25 November 2026

This Privacy Policy explains how [COMPANY LEGAL NAME] ("**CadenceAI**", "**we**", "**us**", "**our**") collects, uses, discloses, and protects personal information when you use the CadenceAI website, dashboard, API, and related services (the "**Service**").

This policy should be read together with our [Terms of Service](TERMS_OF_SERVICE.md).

## 1. Who We Are

[COMPANY LEGAL NAME] is the controller of the personal information described in this policy.

- **Address:** [POSTAL ADDRESS]
- **Privacy contact:** [PRIVACY EMAIL]
- **EU/UK representative (if required under GDPR Article 27):** [REPRESENTATIVE NAME AND ADDRESS]

## 2. Information We Collect

### 2.1 Information you provide

- **Account information** — name, email address, password hash, and authentication method (email/password or Google sign-in).
- **Onboarding and profile data** — your identity details, niches, brand voice settings, writing samples, forbidden words, posting cadence, and preferences.
- **Knowledge base content** — text you paste, documents and files you upload, URLs you submit for ingestion, and quick notes. This content is chunked and embedded to ground your drafts.
- **Post content and history** — drafts you create, instructions you give to regenerate content, approvals, scheduling times, and publishing outcomes.
- **Communications** — messages you send to support and your preferences for service emails.

### 2.2 Information from third-party platforms

- **Google** — if you sign in with Google, we receive your name, email address, and profile identifier. We do not receive your Google password.
- **X and TikTok** — when you connect an account through OAuth, we receive an access token, refresh token, and basic profile information (such as account ID, handle, and profile metadata) needed to schedule and publish posts. We may also read the status of posts we publish (for example, whether a TikTok post is still processing).
- **Connected-platform metadata** — privacy options, interaction settings, and audit status for TikTok; tweet identifiers for X; and connection health (e.g., token expiration or revocation).

We do not collect your platform passwords. Token storage and handling are described in Section 7.

### 2.3 Information collected automatically

- **Usage data** — actions taken in the dashboard, API requests, feature usage, and error events.
- **Device and technical data** — IP address, browser type and version, operating system, and timestamps. Server logs may retain these for security and reliability.
- **Cookies and local storage** — described in Section 8.

### 2.4 AI processing data

When generating content, we send your prompts, relevant excerpts from your knowledge base, voice settings, and recent post excerpts to an AI provider. Embeddings of your content are stored in our vector database to support retrieval. We do not use your content to train our own foundation models.

## 3. How We Use Information

We use personal information to:

1. **Provide the Service** — authenticate you, complete onboarding, index your knowledge base, generate drafts, schedule posts, and publish to connected platforms at your direction.
2. **Operate connected accounts** — maintain OAuth connections, refresh tokens, detect revoked or expired connections, and report connection health.
3. **Communicate** — send transactional messages such as password resets, security alerts, and service notices, and respond to your requests.
4. **Improve the Service** — analyze aggregate usage and errors, debug, and develop features. Where feasible, we use aggregated or de-identified information for this purpose.
5. **Protect the Service** — detect and prevent fraud, abuse, and security incidents; enforce our Terms; and comply with legal obligations.
6. **Comply with law** — respond to lawful requests and meet tax, accounting, and regulatory obligations.

## 4. Legal Bases (EEA, UK, and similar jurisdictions)

Where GDPR or comparable law applies, we rely on:

- **Performance of a contract** — to provide the Service you have signed up for (Sections 3.1–3.2).
- **Legitimate interests** — to secure and improve the Service, prevent abuse, and communicate operational information, balanced against your rights (Sections 3.3–3.5). You may object as described in Section 10.
- **Consent** — where required, for example for optional marketing communications or certain cookies. You may withdraw consent at any time.
- **Legal obligation** — to comply with applicable law (Section 3.6).

## 5. How We Share Information

We do not sell personal information. We disclose information only:

**5.1 Service providers (sub-processors).** We share information with vendors that process it on our behalf, under contracts limiting their use of it:

| Provider type                                | Purpose                                         | Data involved                                               |
| -------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------- |
| Cloud hosting and database provider          | Hosting application and database infrastructure | Account, content, usage data                                |
| AI model providers (e.g., Anthropic, OpenAI) | Generating drafts and computing embeddings      | Prompts, knowledge excerpts, voice settings, generated text |
| Email delivery provider                      | Transactional email (password reset, notices)   | Email address, name                                         |
| Error monitoring / logging (if enabled)      | Diagnosing failures and reliability             | Technical and usage data                                    |

**5.2 Connected platforms.** When you connect and use X or TikTok, we transmit the content and metadata necessary to create posts on your behalf. Those platforms handle the data under their own privacy policies.

**5.3 Google (authentication).** If you sign in with Google, Google processes authentication data under its own policies.

**5.4 Legal and safety disclosures.** We may disclose information if we believe in good faith that it is required by law, regulation, legal process, or governmental request; to enforce our Terms; or to protect the rights, property, or safety of CadenceAI, our users, or others.

**5.5 Business transfers.** If we are involved in a merger, acquisition, financing, or sale of assets, information may be transferred as part of that transaction, subject to this policy's protections.

**5.6 With your direction.** We may share information at your request or with your consent.

## 6. International Transfers

We may process information in countries other than yours, including the United States. Where we transfer personal data from the EEA, UK, or Switzerland to a country without an adequacy decision, we rely on appropriate safeguards such as the European Commission's Standard Contractual Clauses and, where applicable, additional technical and organizational measures. Contact us for details of the safeguards we use.

## 7. Security

We use technical and organizational measures designed to protect personal information, including:

- encryption of social platform access and refresh tokens at rest using AES-256-GCM;
- HTTP-only cookies for session tokens, with refresh-token rotation and family revocation;
- user-scoped queries so that data access is filtered by account;
- safeguards on URL ingestion (restricted internal address ranges, redirect re-validation, upload size limits) and sanitization of ingested content;
- access controls limiting internal access to what is necessary.

No method of transmission or storage is completely secure. We cannot guarantee absolute security, and you use the Service at your own risk. If we become aware of a breach affecting your personal information, we will notify you and relevant authorities as required by law.

## 8. Cookies and Tracking

We use strictly necessary cookies to operate the Service:

| Cookie                               | Purpose                                       | Type                   |
| ------------------------------------ | --------------------------------------------- | ---------------------- |
| Session cookies (access and refresh) | Keep you signed in and refresh sessions       | HTTP-only, necessary   |
| Platform connection state            | Secure the OAuth flow for connecting X/TikTok | HTTP-only, short-lived |

We do not use advertising cookies or third-party analytics trackers by default. If we introduce analytics or non-essential cookies, we will update this policy and, where required, obtain consent before setting them. You can control cookies through your browser settings; blocking necessary cookies may prevent you from using the Service.

## 9. Data Retention

We retain personal information only as long as necessary for the purposes described above:

- **Account data** — for the life of your account and for a reasonable period after closure to meet legal obligations and resolve disputes.
- **Knowledge base and post data** — until you delete it or close your account, subject to backup rotation and legal holds.
- **Social tokens** — until you disconnect the platform, revoke access, or the token becomes invalid, plus a short period to record the disconnection.
- **Server and security logs** — for a limited period, typically [RETENTION PERIOD, e.g., 90 days], unless needed to investigate an incident.
- **Billing records** — as required by tax and accounting law.

When data is no longer needed, we delete or de-identify it. Backups may persist for a limited rotation period before overwrite.

## 10. Your Rights

Depending on your location, you may have the right to:

- **Access** the personal information we hold about you;
- **Correct** inaccurate or incomplete information;
- **Delete** your information, subject to legal exceptions;
- **Export** your information in a portable format;
- **Restrict** or **object** to certain processing;
- **Withdraw consent** where processing is based on consent;
- **Not be subject to solely automated decisions** with legal or similarly significant effects (the Service produces content for your review and does not make such decisions about you);
- **Lodge a complaint** with a supervisory authority.

To exercise these rights, contact [PRIVACY EMAIL]. We will verify your identity before fulfilling a request and respond within the time required by applicable law (generally 30–45 days). You can also delete much of your data directly in the dashboard.

**California residents:** under the CCPA/CPRA, you have rights to know, delete, correct, and opt out of "sale" or "sharing" of personal information, and to non-discrimination for exercising those rights. **We do not sell or share personal information as those terms are defined under the CCPA/CPRA**, and we do not knowingly collect sensitive personal information beyond what is necessary to provide the Service.

## 11. Children

The Service is not directed to children under 18, and we do not knowingly collect personal information from them. If you believe a child has provided information, contact us and we will take appropriate steps to delete it.

## 12. Automated Processing and AI

We use automated systems, including third-party AI models, to generate drafts and to detect near-duplicate content. These systems do not make decisions that produce legal or similarly significant effects about you. Generated drafts are subject to your review and approval (unless you enable an autopilot setting that publishes approved categories of content); you can review and disable autopilot at any time.

## 13. Changes to This Policy

We may update this policy to reflect changes in the Service, technology, or law. Material changes will be communicated through the Service or by email before they take effect, and we will update the "Last updated" date. Continued use of the Service after the effective date constitutes acceptance of the updated policy.

## 14. Contact Us

Questions, requests, or complaints about this policy can be sent to:

Verix Innovations
Email: support@verixinnovations.com

If you are in the EEA or UK and are not satisfied with our response, you may lodge a complaint with your local supervisory authority.

---

> **Note:** This document is a template tailored to the CadenceAI product and is not legal advice. Replace the bracketed placeholders, confirm the retention periods and sub-processor list against your actual infrastructure, and have qualified counsel review it for GDPR, CCPA/CPRA, and other jurisdictional requirements before publishing.
