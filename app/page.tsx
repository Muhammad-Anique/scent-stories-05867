import { Hero } from '@/components/sections/Hero';
import { ScentShowcase } from '@/components/sections/ScentShowcase';
import { SignUpForm } from '@/components/sections/SignUpForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full viewport height with CTA */}
      <Hero />

      {/* Scent Showcase - Featured spicy notes */}
      <ScentShowcase />

      {/* Sign Up Form - Waitlist capture */}
      <div id="signup-form">
        <SignUpForm />
      </div>

      {/* Footer */}
      <footer className="w-full py-8 px-4 border-t border-violet-400/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-violet-300/50 text-sm">
            © {new Date().getFullYear()} Scent Stories. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-violet-300/50 text-sm hover:text-violet-200 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-violet-300/50 text-sm hover:text-violet-200 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-violet-300/50 text-sm hover:text-violet-200 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}