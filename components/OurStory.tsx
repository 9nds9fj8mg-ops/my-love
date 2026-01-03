'use client'

import { motion } from 'framer-motion'
import { getAssets } from '@/lib/assets'
import Image from 'next/image'

export default function OurStory() {
  const { images, videos } = getAssets()
  const allAssets = [...images, ...videos.slice(0, 2)] // Use first 2 videos for story section

  const storyMoments = [
    {
      text: 'Кожна мить з тобою - скарб, який я бережу в серці',
      asset: allAssets[0],
      isVideo: videos.includes(allAssets[0]),
    },
    {
      text: 'Твоя посмішка освітлює навіть найтемніші дні',
      asset: allAssets[1],
      isVideo: videos.includes(allAssets[1]),
    },
    {
      text: 'Разом ми пишемо найкращу історію кохання',
      asset: allAssets[2],
      isVideo: videos.includes(allAssets[2]),
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-cream via-cream-dark to-cream py-12 section-fade">
      <div className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-serif text-rose-deep mb-3 fade-in-text">
            Наша історія
          </h2>
          <div className="w-20 h-1 bg-rose-soft mx-auto" />
        </motion.div>

        <div className="space-y-16">
          {storyMoments.map((moment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Media */}
              <div className="w-full image-reveal">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[280px] w-full rounded-xl overflow-hidden shadow-xl bg-cream-dark/30 flex items-center justify-center p-2"
                >
                  {moment.isVideo ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover rounded-lg"
                    >
                      <source src={moment.asset} type="video/mp4" />
                      <source src={moment.asset} type="video/quicktime" />
                    </video>
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={moment.asset}
                        alt={`Момент ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                        sizes="100vw"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-elegant-black/30 to-transparent pointer-events-none rounded-lg" />
                </motion.div>
              </div>

              {/* Text */}
              <div className="w-full fade-in-text">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-lg font-serif text-elegant-gray leading-relaxed text-center"
                >
                  {moment.text}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

