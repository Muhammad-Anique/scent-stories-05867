'use client';

import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById('signup-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-plum-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lavender-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-violet-400/20 mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4 text-violet-400" />
          <span className="text-sm font-medium text-violet-200">
            Coming Soon
          </span>
        </div>

        {/* Main headline - Gen Z typography */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-slide-up">
          <span className="text-white">Scent</span>
          <br />
          <span className="text-gradient italic">Stories</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-violet-200/90 max-w-2xl mx-auto mb-4 font-light animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Your fragrance. Your vibe. Your story.
        </p>

        {/* Core narrative */}
        <p className="text-base sm:text-lg text-violet-300/70 max-w-xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Discover perfumes that speak before you do. We curate bold, 
          niche scents for the generation that doesn't follow trends—
          we set them.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Button size="lg" onClick={scrollToForm}>
            Join the Waitlist
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="ghost" size="lg" onClick={scrollToForm}>
            Learn More
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-16 pt-8 border-t border-violet-400/10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-sm text-violet-300/50 mb-4">
            Trusted by fragrance enthusiasts worldwide
          </p>
          <div className="flex items-center justify-center gap-8 text-violet-300/30">
            <span className="text-lg font-semibold">Vogue</span>
            <span className="text-lg font-semibold">Allure</span>
            <span className="text-lg font-semibold">Byrdie</span>
            <span className="text-lg font-semibold">GQ</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-violet-400/50" />
      </div>
    </section>
  );
}