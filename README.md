# FirstBank Chinese Business Desk — Executive Prototype

Responsive React/Vite customer portal and Express demo API for a proposed Chinese Business Desk integrated into a simulated FirstBank dashboard.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Frontend: http://localhost:5173

In a second terminal:

```bash
npm run server
```

Demo API: http://localhost:4000/api/health

## Main routes

- `/` — FirstBank-style login / create-account landing page, with direct Chinese Business Desk access
- `/desk` — service landing page and FAQ
- `/desk/account` — four-step onboarding with local draft auto-save, FTZ/state selection and demo CRM assignment
- `/desk/bvn` — physical registration locations, FirstRemote BVN 10-stage guided demo, 90-day deferral timeline and simulated BVN check
- `/desk/cerpac` — CERPAC document workflow
- `/desk/crm` — Chinese-speaking CRM directory
- `/admin` — GHM overview of RRM-HBS, CRM and customer feedback
- `/admin/operations` — RRM → HBS queue
- `/admin/cc` — customer care queue
- `/admin/lou` — document review queue
- `/admin/crm` — CRM management and customer allocation view
- `/admin/tablets` — tablet assignment tracking
- `/admin/customers` — customer directory
- `/admin/calls` — physical meeting scheduling, attended/missed status and reports

## FirstRemote BVN reference

The user-supplied proposal is included at `docs/FirstRemote_BVN_Pitch_Deck_Complete.pdf`; the mapped journey is summarized in `docs/REMOTE-BVN-WORKFLOW.md`. The remote journey follows the proposal's ten stages: invitation, consent, passport NFC/MRZ, face match/liveness, camera-based contactless fingerprints, screening, maker-checker approval, NIBSS submission, BVN issuance, and deferral cure. The 90-day reminder/escalation timeline is also represented.

## Branch directory source

The Nigerian branch selector includes an address sample taken from FirstBank's published branch-hours directory. The official live branch locator is linked in the UI because its complete list is dynamically loaded/downloadable and could not be reliably extracted as a static exhaustive dataset in this build. The official locator is the source of truth for the full current network: https://firstbankgroup.com/ng/contact/find-a-branch/ . Do not treat the embedded sample as the complete directory.

## Brand assets

The UI has been restyled in FirstBank's deep-blue/gold direction and uses a restrained wordmark treatment. The public brand-kit page is https://firstbankgroup.com/ng/home/about/brand-kits/ . The actual authorised logo artwork and licensed brand typeface files were not retrievable as clean assets in this environment; the emblem treatment and system font stack are placeholders, not the official logo/typeface. Replace them with bank-issued files and obtain brand/communications approval before external use.

## Prototype boundaries and security

- This is an independent demonstration, not an official FirstBank product and not connected to FirstBank systems.
- Customer records, CRM names, contact numbers, tablets, balances and call activity are fictional.
- Never enter real BVNs, identity data, passwords, bank account details or immigration documents. The BVN verification button only returns a local simulated response.
- Passport NFC, liveness, face match, fingerprint capture, compliance screening, NIBSS submission and BVN issuance are simulated checkpoints. They do not collect biometric data or communicate with real providers.
- File inputs are UI placeholders; files are not uploaded to a secure document-management service.
- The Express API uses in-memory demo data. Browser registration autosaves are stored in localStorage for this same-browser prototype, so staff and customer sessions on separate devices do not share records. It is not production persistence or a secure bank integration.
- Production requires FirstBank-approved API gateway/BFF, identity and access management, role-based permissions, encrypted document storage, consent records, audit logging, data retention and NDPA/cross-border transfer review, vendor due diligence, NIBSS/CBN approvals, maker-checker controls, and Compliance/Legal sign-off on the proposed 90-day deferral and transaction limits.

## Suggested production architecture

Customer experience → FirstBank API gateway/BFF → IAM and consent service → onboarding/CRM/document management adapters → approved identity/biometric and screening providers → authorised NIBSS BVN enrolment channel. Publish state changes through auditable events; do not expose core banking or NIBSS credentials to the browser.

## Additional prototype changes

- Scroll-to-top control is available throughout the customer and staff pages.
- The GHM landing view includes RRM-HBS, CRM and customer feedback sections; its dashboard baseline counters are zeroed.
- FTZ onboarding requires Lekki or Ogun selection; non-FTZ onboarding requires one of the 36 states or FCT.
- Autosaved registrations are labelled Draft, submitted registrations Submitted, and staff can move applications to Under review or Completed. Completed items remain in the work queue.
- China BVN location listings do not display fees.
- The CERPAC link points to the official Nigeria Immigration e-CERPAC requirements page: https://cerpac.immigration.gov.ng/requirements .
- Physical Meetings & Reports records scheduled, attended and missed in-person meetings, not phone calls.
- The login/create-account screen and authentication are visual prototype elements only; the Chinese Business Desk link remains available without login.
