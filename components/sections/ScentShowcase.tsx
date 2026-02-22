'use client';

import Image from 'next/image';
import { Flame, Droplets, Leaf } from 'lucide-react';

const scents = [
  {
    id: 'cloves',
    name: 'Cloves',
    description: 'Warm, spicy, and undeniably bold. The scent of midnight conversations and unapologetic confidence.',
    image: 'https://images.unsplash.com/photo-1599909533681-96c6c0eb7739?w=600&h=800&fit=crop',
    icon: Flame,
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    id: 'oud',
    name: 'Oud',
    description: 'Rich, woody, and mysterious. A fragrance that commands attention and leaves a lasting impression.',
    image: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=600&h=800&fit=crop',
    icon: Droplets,
    color: 'from-amber-600/20 to-yellow-600/20',
  },
  {
    id: 'cinnamon',
    name: 'Cinnamon',
    description: 'Sweet heat with a rebellious edge. For those who bring the fire to every room they enter.',
    image: 'https://images.unsplash.com/photo-1556682851-c4580670113a?w=600&h=800&fit=crop',
    icon: Leaf,
    color: 'from-red-400/20 to-orange-400/20',
  },
];

export function ScentShowcase() {
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Explore the <span className="text-gradient">Spicy</span> Side
          </h2>
          <p className="text-lg text-violet-200/70 max-w-2xl mx-auto">
            Our curated collection of warm, spicy notes that define the Scent Stories experience.
          </p>
        </div>

        {/* Scent cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scents.map((scent, index) => {
            const IconComponent = scent.icon;
            return (
              <div
                key={scent.id}
                className="group relative bg-glass rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/10"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Image container */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={scent.image}
                    alt={`${scent.name} - ${scent.description}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${scent.color} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-950/90 via-violet-950/20 to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {scent.name}
                  </h3>
                  <p className="text-violet-200/70 text-sm leading-relaxed">
                    {scent.description}
                  </p>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-plum-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-violet-300/60 text-sm">
            And many more unique notes waiting to be discovered...
          </p>
        </div>
      </div>
    </section>
  );
}