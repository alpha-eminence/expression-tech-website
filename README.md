# XPRSV Tech

AI consulting website for Travis Brown, based in Los Angeles. Helps individuals and businesses cut through the AI noise and build real solutions.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Email:** Resend
- **Deployment:** Vercel

## Setup

```bash
git clone https://github.com/travbrown/expression-tech-website.git
cd expression-tech-website
npm install
cp .env.example .env
# Fill in your environment variables (see below)
npm run dev
```

## Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [Resend](https://resend.com) for contact form emails |
| `CONTACT_EMAIL` | Email address to receive contact form notifications |

## Deployment

Auto-deploys to Vercel from the `main` branch.
