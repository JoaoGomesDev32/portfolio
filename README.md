# João Gomes — Web Developer Portfolio

Professional portfolio showcasing full-stack web projects, technical skills, and contact information for João Gomes.

This repository contains a modern, responsive Next.js + TypeScript portfolio that bundles projects, experience, and contact details in a clean, accessible layout.

## Features

- Clean, responsive UI built with Next.js and Tailwind CSS
- Accessible components and dark/light theme support
- Project gallery with screenshots, descriptions and links
- Contact form and social links
- Fully typed with TypeScript

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Framer Motion, Radix UI primitives
- Node.js, npm

## Quick Start (development)

Clone the repository and run the development server from the project root:

```bash
git clone https://github.com/JoaoGomesDev32/portfolio.git
cd portfolio
npm install
npm run dev
# open http://localhost:3000
```

## Build (production)

```bash
cd portfolio
npm run build
npm run start
```

## Deploying to Netlify

This project is configured to deploy from the repository root using the official Netlify Next.js plugin.

1) In the Netlify site settings, set:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Base directory**: leave empty or `/`

2) The repository contains `netlify.toml` with the following configuration:

```toml
[build]
  publish = ".next"
  command = "npm run build"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

3) Ensure the install command is `npm install`.

Notes:
- Netlify will build the app from the root of the repo.
- If you prefer Vercel, the project also works well there.

## Favicon / Brand Icon

The project now includes a custom icon with the initials `JG` in `public/icon.svg`, and the app metadata references the same icon.

## Contributing

If you'd like improvements, open an issue or submit a pull request. For major changes, create a feature branch and describe the intent in the PR body.

## License

This project is released under the MIT License.

## Contact

- João Gomes — joaogomes@example.com
- GitHub: https://github.com/JoaoGomesDev32

