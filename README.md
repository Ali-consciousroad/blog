# Blog with Comment

A Next.js blog application with commenting functionality using Upstash (Redis) and Auth0 authentication.

### Demo

[https://blog-with-comment.vercel.app/](https://blog-with-comment.vercel.app/)

## Quick Start

1. Clone the repository:
```bash
git clone <your-repo-url>
cd blog-with-comment-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

> **Note:** Use `npm run dev` to start the project.

## Environment Setup

### Upstash (Redis)
1. Create a new database in [Upstash Console](https://console.upstash.com/)
2. Add `REDIS_URL` to your `.env.local` file (found in database details under **Redis Connect**)

### Auth0
1. Create a new **Single Page Web Application** in [Auth0 dashboard](https://manage.auth0.com/)
2. Configure these settings in Auth0:
   - **Allowed Callback URLs**: `http://localhost:3000/`
   - **Allowed Logout URLs**: `http://localhost:3000/`
   - **Allowed Web Origins**: `http://localhost:3000`
3. Add these to your `.env.local`:
   - `NEXT_PUBLIC_AUTH0_DOMAIN`
   - `NEXT_PUBLIC_AUTH0_CLIENT_ID`
   - `NEXT_PUBLIC_AUTH0_ADMIN_EMAIL` (for admin comment deletion privileges)

## Features
- Blog posts with Markdown support
- Comment system with Auth0 authentication
- Users can delete their own comments
- Admin can delete any comment
- Comments stored in Serverless Redis (Upstash)

## Deployment
Deploy to Vercel by pushing to GitHub/GitLab/Bitbucket and [importing to Vercel](https://vercel.com/new).

**Note**: Set environment variables in Vercel to match your `.env.local` file.
