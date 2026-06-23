# Summit Outreach Website

Marketing site for Summit Outreach LLC (Wyoming), operating Carrier Vault (insurance shopping) and Fleet Advocate (free CSA safety reviews). Built in Next.js 14 + Tailwind. Lead forms post to GoHighLevel via Inbound Webhook.

## Tech stack

- Next.js 14 (App Router, Server Components, Server Actions)
- Tailwind CSS
- Lucide icons
- Hosted on Vercel (free tier)

## Local dev

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Environment variable

Create `.env.local` (don't commit):

```
GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/<your-webhook-id>
```

In Vercel: Project Settings → Environment Variables → add `GHL_WEBHOOK_URL`.

## Deploy

### Easiest (one-command, no GitHub needed)

```bash
npx vercel
# follow prompts: login, link to your Vercel account, deploy
```

### Via GitHub

1. Create a new repo on github.com (private is fine)
2. Push this folder
3. In Vercel: New Project → Import → select repo → Deploy
4. Add the `GHL_WEBHOOK_URL` env var in Vercel Project Settings

## How leads flow

```
Visitor fills form on site
    ↓
Next.js Server Action posts JSON to GHL Inbound Webhook
    ↓
GHL workflow fires:
  • creates/upserts contact with all 5 fields + brand tag
  • moves opportunity to "New Lead" stage
  • notifies VA in GHL inbox
  • auto-replies (email + SMS once A2P live)
```

## Lead form payload (what GHL receives)

```json
{
  "full_name": "John Smith",
  "company": "ABC Trucking LLC",
  "usdot": "1234567",
  "phone": "5555555555",
  "email": "john@abctrucking.com",
  "brand_source": "carrier-vault",
  "page": "carrier-vault",
  "submitted_at": "2026-06-22T22:00:00Z"
}
```

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, services, carrier logos, why us, testimonials, lead form |
| `/carrier-vault` | Insurance shopping deep dive + lead form |
| `/fleet-advocate` | Free CSA safety check + lead form |
| `/privacy` | Privacy Policy (A2P-required) |
| `/terms` | Terms of Service |
| `/sms-consent` | SMS Consent (A2P-required) |

## Brand colors

- `brand-navy` — `#0a1f3d` (primary dark)
- `brand-blue` — `#1e40af` (secondary accent)
- `brand-accent` — `#f97316` (CTA orange — high contrast)
- `brand-ink` — `#0f172a` (body text)

## Legal/compliance footer

Disclosure: "Summit Outreach LLC is a marketing brand of CEO Insurance LLC. Insurance is offered through Southwestern Insurance, a licensed broker. Conor O'Donoghue is a licensed insurance producer."

EIN: 42-2550732 · 1621 Central Ave, Cheyenne, WY 82001
