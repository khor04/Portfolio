# Khor Cheng Hooi — Portfolio

A personal portfolio built with Next.js. It presents selected projects, technical skills, education, activities, and contact information.

## Tech stack

- Next.js
- React
- TypeScript
- CSS

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
```

## Deployment

This project is configured for static export with `output: "export"` in `next.config.mjs`. The production build creates the static site in the `out` directory.

### Vercel

Import the repository into Vercel and deploy it as a Next.js project. The build command is `npm run build`; Vercel can serve the generated static export.

### Render Static Site

Create a **Static Site** connected to the repository and use:

- **Build command:** `npm install && npm run build`
- **Publish directory:** `out`

Static hosting serves the portfolio without starting an app server, so it does not have the web-service spin-down cold start.

## Updating content

- Portfolio text, project details, skills, education, activities, and profile links are in `lib/data.ts`.
- Page structure is in `app/page.tsx`.
- Put downloadable files and images in `public`; reference them with paths beginning with `/` (for example, `/Khor-Cheng-Hooi-Resume-Backend.pdf`).
