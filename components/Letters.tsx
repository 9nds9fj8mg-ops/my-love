'use client'

import { motion } from 'framer-motion'

export default function Letters() {
  const letters = [
    {
      title: 'Моє кохання',
      content: `Кожен день з тобою - це подарунок, який я не заслуговую, але за який я безмежно вдячний. Твоя присутність у моєму житті перетворила звичайні моменти на чарівні спогади, а звичайні дні - на свята.

Ти - це не просто людина в моєму житті. Ти - це моє натхнення, моя сила, моя тиша після бурі. Коли я дивлюся на тебе, я бачу майбутнє, наповнене щастям, сміхом і безмежним коханням.

Кожна твоя посмішка - це сонце, що освітлює навіть найпохмуріші дні. Кожне твоє слово - це музика, що наповнює моє серце радістю. Кожна мить поруч з тобою - це скарб, який я бережу в найглибших куточках душі.`,
    },
    {
      title: 'Ти - моє все',
      content: `У твоїх очах я бачу відображення нашого майбутнього - світлого, щасливого, наповненого коханням. Твої руки - це мій дім, твоя посмішка - моя сила, твоя любов - моя всесвіт.

Разом ми створили щось особливе, щось унікальне. Наша історія - це не просто послідовність подій, це симфонія почуттів, танець душ, поезія двох сердець, які знайшли одне одного.

Я хочу, щоб ти знала: ти - найкраща частина мого життя. Кожен день я прокидаюся з думкою про тебе, і кожен день я засинаю з посмішкою, знаючи, що ти є в моєму житті.`,
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-cream to-cream-dark py-12 section-fade">
      <div className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-serif text-rose-deep mb-3 fade-in-text">
            Листи до тебе
          </h2>
          <div className="w-20 h-1 bg-rose-soft mx-auto" />
        </motion.div>

        <div className="space-y-8">
          {letters.map((letter, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg fade-in-text"
            >
              <h3 className="text-2xl font-serif text-rose-deep mb-4">
                {letter.title}
              </h3>
              <div className="space-y-4">
                {letter.content.split('\n\n').map((paragraph, pIndex) => (
                  <motion.p
                    key={pIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: pIndex * 0.1 }}
                    className="text-sm text-elegant-gray leading-relaxed font-serif"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-10 fade-in-text"
        >
          <p className="text-xl font-serif text-rose-deep italic">
            З любов'ю, назавжди
          </p>
        </motion.div>
      </div>
    </section>
  )
}

