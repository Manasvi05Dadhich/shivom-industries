import React from 'react';
import { HeroSection } from '@/app/components/ui/hero-section-2';

export function HeroSectionDemo() {
  return (
    <div className="w-full">
      <HeroSection
        logo={{
          url: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=80&h=80&fit=crop',
          alt: 'Company Logo',
          text: 'Your Logo',
        }}
        slogan="ELEVATE YOUR PERSPECTIVE"
        title={
          <>
            Each Peak <br />
            <span className="text-primary">Teaches Something</span>
          </>
        }
        subtitle="Discover breathtaking landscapes and challenge yourself with our guided mountain expeditions. Join a community of adventurers."
        callToAction={{
          text: 'JOIN US TO EXPLORE',
          href: '#explore',
        }}
        backgroundImage="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=900&auto=format&fit=crop&q=80"
        contactInfo={{
          website: 'yourwebsite.com',
          phone: '+1 (555) 123-4567',
          address: '20 Fieldstone Dr, Roswell, GA',
        }}
      />
    </div>
  );
}
