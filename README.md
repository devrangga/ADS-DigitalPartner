## Getting Started

First, run install the dependencies:

```bash
npm install
```

Then, update the .env file with your DATABASE_URL and AUTH_SECRET values.

Next, set up Prisma by generating the initial migration and applying it to your database:

```bash
npx prisma migrate dev --name init

```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
