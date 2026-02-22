# Scent Stories 🌸

> *Your fragrance. Your vibe. Your story.*

A Gen Z-focused landing page for an upcoming perfume brand, featuring a minimalist purple aesthetic, spicy scent showcases, and a waitlist signup form powered by Next.js and Supabase.

![Scent Stories Preview](https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=1200&h=600&fit=crop)

## ✨ Features

- **Gen Z Minimalist Design** — Bold typography, purple gradients, and glassmorphism effects
- **Spicy Scent Showcase** — Curated collection featuring Cloves, Oud, and Cinnamon
- **Waitlist Signup** — Server-side form handling with validation and duplicate detection
- **Responsive Design** — Optimized for all screen sizes
- **Smooth Animations** — Subtle transitions and scroll effects
- **Toast Notifications** — "Spicy" themed feedback using Sonner

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Database | [Supabase](https://supabase.com/) (PostgreSQL) |
| Forms | React Server Actions + [Zod](https://zod.dev/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Notifications | [Sonner](https://sonner.emilkowal.ski/) |
| Utilities | [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) |

## 🎨 Design System

### Color Palette — "Minimalist Purple"

| Name | Usage | Hex |
|------|-------|-----|
| Violet 600 | Primary buttons, accents | `#7c3aed` |
| Plum 600 | Gradients, highlights | `#c026d3` |
| Lavender 200 | Subtle backgrounds | `#ede0fe` |
| Violet 950 | Deep background | `#2e1065` |
| Plum 950 | Gradient end | `#4a044e` |

### Typography

- **Font**: Inter (Google Fonts)
- **Headlines**: Bold, tight tracking, gradient text effects
- **Body**: Light weight, high readability on dark backgrounds

## 🗄 Database Schema

### `leads` Table

Stores waitlist signups with email deduplication.

```sql
create table leads (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  name text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table leads enable row level security;

-- Allow anonymous inserts for the waitlist form
create policy "Allow anonymous inserts" on leads
  for insert to anon with check (true);
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (free tier works)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Muhammad-Anique/scent-stories-05867.git
   cd scent-stories-05867
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

4. **Set up the database**
   - Go to your Supabase project dashboard
   - Open the SQL Editor
   - Run the schema SQL from the Database Schema section above

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key | Yes |

## 📝 Project Structure

```
scent-stories/
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx           # Root layout with fonts & Toaster
│   └── page.tsx             # Home page composition
├── components/
│   ├── sections/
│   │   ├── Hero.tsx         # Full-screen hero section
│   │   ├── ScentShowcase.tsx # Spicy scent cards
│   │   └── SignUpForm.tsx   # Waitlist form with validation
│   └── ui/
│       ├── Button.tsx       # Reusable button component
│       └── Input.tsx        # Form input with error states
├── lib/
│   ├── actions.ts           # Server actions (submitLead)
│   ├── supabase.ts          # Supabase client setup
│   └── utils.ts             # Tailwind merge utility
├── public/                  # Static assets
├── .env.example             # Environment variable template
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind + custom theme
└── tsconfig.json            # TypeScript configuration
```

## 🎯 Key Features Explained

### Server Actions with Validation

The `submitLead` action in `lib/actions.ts`:
- Validates form data with Zod
- Simulates a 2-second processing delay for "tech-native" feel
- Handles duplicate emails (Postgres 23505 error code)
- Returns structured success/error responses

### Toast Notifications

Using Sonner with custom "spicy" theming:
- Success: Flame icon with warm colors
- Error: Red flame for attention
- Info: Purple accent for duplicates

### Responsive Design

- Mobile-first approach with Tailwind breakpoints
- Flexible grid layouts for scent cards
- Adaptive typography scaling

## 📄 License

MIT License — feel free to use this project as a template for your own landing pages.

---

Built with 💜 for the next generation of fragrance enthusiasts.