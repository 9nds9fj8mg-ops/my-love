'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const initGSAPAnimations = () => {
  if (typeof window === 'undefined') return

  // Fade in text on scroll
  gsap.utils.toArray<HTMLElement>('.fade-in-text').forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  // Parallax effect for images
  gsap.utils.toArray<HTMLElement>('.parallax-slow').forEach((element) => {
    gsap.to(element, {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  // Parallax effect for fast elements
  gsap.utils.toArray<HTMLElement>('.parallax-fast').forEach((element) => {
    gsap.to(element, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  // Image reveal animations
  gsap.utils.toArray<HTMLElement>('.image-reveal').forEach((element) => {
    gsap.fromTo(
      element,
      {
        scale: 1.2,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  // Section fade in
  gsap.utils.toArray<HTMLElement>('.section-fade').forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })
}

