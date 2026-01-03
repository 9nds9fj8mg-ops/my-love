'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getAssets } from '@/lib/assets'

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const { videos } = getAssets()

  useEffect(() => {
    if (videos.length === 0) return

    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [videos.length])

  const currentVideo = videos.length > 0 ? (videos[currentVideoIndex] || videos[0]) : null

  return (
    <section className="relative h-screen w-full overflow-hidden aspect-[9/16]">
      {/* Video Background */}
      {currentVideo ? (
        <div className="absolute inset-0 z-0">
          <video
            key={currentVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            onLoadedData={(e) => {
              const video = e.currentTarget
              video.play().catch(() => {})
            }}
          >
            <source src={currentVideo} type="video/mp4" />
            <source src={currentVideo} type="video/quicktime" />
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-elegant-black/60 via-elegant-black/40 to-elegant-black/70" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-rose-deep via-rose-soft to-elegant-black" />
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl font-serif text-cream mb-4 fade-in-text"
          >
            Моя кохана
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg text-rose-light font-light fade-in-text"
          >
            Ти - моє все
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-rose-light rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-rose-light rounded-full mt-1.5"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

