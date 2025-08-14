# KYC Dashboard — Next.js 14 (TypeScript)

## Setup

1. Install dependencies

   npm install

2. Run development server

   npm run dev

3. Open http://localhost:3000

## Notes
- API: `app/api/dashboard/route.ts` serves mock-data.json
- Charts: Chart.js via react-chartjs-2
- Tailwind: configured in tailwind.config.cjs

Next steps:
- Build remaining components (status cards, categories, circular chart)
- Add TabSwitcher, date picker, and responsive sidebar collapse
- Add dark mode class toggling