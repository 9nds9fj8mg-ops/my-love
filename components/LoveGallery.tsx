'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { getAssets } from '@/lib/assets'

export default function LoveGallery() {
  const { images, videos } = getAssets()
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null)

  const allAssets = [
    ...images.map((img) => ({ src: img, type: 'image' as const })),
    ...videos.map((vid) => ({ src: vid, type: 'video' as const })),
  ]

  return (
    <section className="relative bg-elegant-black py-12 section-fade">
      <div className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-serif text-cream mb-3 fade-in-text">
            Галерея кохання
          </h2>
          <div className="w-20 h-1 bg-rose-soft mx-auto" />
          <p className="text-rose-light text-base mt-4 fade-in-text">
            Кожна фотографія - це спогад про наше щастя
          </p>
        </motion.div>

        {/* Single Column Grid for Mobile */}
        <div className="space-y-4">
          {allAssets.map((asset, index) => (
            <motion.div
              key={asset.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="cursor-pointer image-reveal"
              onClick={() => setSelectedAsset(asset.src)}
            >
              {asset.type === 'video' ? (
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover rounded-xl"
                  >
                    <source src={asset.src} type="video/mp4" />
                    <source src={asset.src} type="video/quicktime" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-elegant-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-cream">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={asset.src}
                    alt={`Галерея ${index + 1}`}
                    width={450}
                    height={600}
                    className="w-full h-auto object-cover rounded-xl"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elegant-black/40 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedAsset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-elegant-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedAsset(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-[450px] w-full max-h-[90vh] h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedAsset.includes('.MP4') || selectedAsset.includes('.MOV') ? (
                <video
                  autoPlay
                  loop
                  controls
                  className="w-full h-full object-contain"
                >
                  <source src={selectedAsset} type="video/mp4" />
                  <source src={selectedAsset} type="video/quicktime" />
                </video>
              ) : (
                <Image
                  src={selectedAsset}
                  alt="Велике зображення"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              )}
              <button
                onClick={() => setSelectedAsset(null)}
                className="absolute top-4 right-4 text-cream hover:text-rose-light transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

