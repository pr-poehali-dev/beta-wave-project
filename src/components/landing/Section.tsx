import { motion } from "framer-motion"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, items, table, quote, isActive }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 overflow-hidden">
      {subtitle && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}

      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl text-white whitespace-pre-line"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {content && (
        <motion.p
          className="text-base md:text-lg lg:text-xl max-w-3xl mt-5 text-neutral-400 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {content}
        </motion.p>
      )}

      {quote && (
        <motion.div
          className="mt-6 border-l-4 border-orange-500 pl-6"
          initial={{ opacity: 0, x: -20 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-white font-semibold leading-snug italic">
            {quote}
          </p>
        </motion.div>
      )}

      {table && (
        <motion.div
          className="mt-6 w-full max-w-4xl overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <table className="w-full text-sm md:text-base border-collapse">
            <thead>
              <tr className="text-neutral-500 text-left">
                <th className="pb-3 pr-6 font-medium border-b border-white/10 w-1/3">Оригинал</th>
                <th className="pb-3 pr-6 font-medium border-b border-white/10 w-1/3">Русский перевод</th>
                <th className="pb-3 font-medium border-b border-white/10 w-1/3">Проблема</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row, i) => (
                <tr key={i} className="align-top">
                  <td className="py-3 pr-6 text-white border-b border-white/5">{row.col1}</td>
                  <td className="py-3 pr-6 text-neutral-300 border-b border-white/5">{row.col2}</td>
                  <td className="py-3 text-orange-400 border-b border-white/5">{row.col3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}

      {items && (
        <motion.ul
          className="mt-5 space-y-3 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {items.map((item, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-neutral-300 text-base md:text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </section>
  )
}
