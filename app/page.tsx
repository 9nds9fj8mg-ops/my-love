'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import OurStory from '@/components/OurStory'
import LoveGallery from '@/components/LoveGallery'
import Letters from '@/components/Letters'
import { initGSAPAnimations } from '@/lib/gsap-animations'

export default function Home() {
  useEffect(() => {
    initGSAPAnimations()
  }, [])

  return (
    <main className="relative min-h-screen py-4 sm:py-8">
      <div className="mx-auto max-w-[450px] w-full bg-cream shadow-2xl rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border-4 sm:border-8 border-neutral-900 relative">
        {/* Phone notch simulation for desktop */}
        <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-2xl z-50" />
        
        {/* Phone home indicator for desktop */}
        <div className="hidden sm:block absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-neutral-900/50 rounded-full z-50" />
        
        <div className="relative">
          <Hero />
          <OurStory />
          <LoveGallery />
          <Letters />
        </div>
      </div>
    </main>
  )
}

