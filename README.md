# Next.js 15 Demo app based on the [docs](https://nextjs.org/learn/dashboard-app)

## Technologies Used

- **Next.js**
- **TypeScript**
- **Vercel**
- **Tailwind CSS**
- **NextAuth.js**
- **Zod**

---

## Project Features

- **Styling**: Tailwind CSS for responsive styling.
- **Optimizations**: Image, link, and font optimizations.
- **Routing**: Nested layouts and file-based routing.
- **Data Fetching**: Vercel-hosted Postgres setup with streaming.
- **Search & Pagination**: URL-based search and pagination.
- **Data Mutation**: React Server Actions with cache revalidation.
- **Error Handling**: Custom error and 404 pages.
- **Form Validation & Accessibility**: Server-side validation and accessibility tips.
- **Authentication**: NextAuth.js with middleware support.
- **Metadata**: SEO and social sharing metadata setup.

---

## Installation Guide

To set up this project, ensure you have `pnpm` installed. Run the following commands to install dependencies and start the development server.

### Prerequisites

- **Node.js** and **pnpm**

### Installation Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Ali-Sanad/nextjs-demo
   cd nextjs-demo
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Environment Variables**:
   Configure the required environment variables for **Vercel**, **Postgres**, and **Auth.js** in a `.env` file, example of env variables can be found inside `.env.sample`

4. **Run the Development Server**:
   ```bash
   pnpm dev
   ```

### Build & Run

- **Build** the project:

  ```bash
  pnpm build
  ```

- **Start** the production server:

  ```bash
  pnpm start
  ```

- **Lint** the codebase:
  ```bash
  pnpm lint
  ```

---
