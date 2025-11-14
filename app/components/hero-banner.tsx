"use client"

import { motion } from "framer-motion"

interface HeroBannerProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  cta?: {
    text: string
    href: string
  }
}

export function HeroBanner({ title, subtitle, backgroundImage, cta }: HeroBannerProps) {
  return (
    <div
      className="relative w-full h-96 md:h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 tracking-tight">{title}</h1>
        {subtitle && <p className="text-lg md:text-2xl font-light mb-8 max-w-2xl mx-auto">{subtitle}</p>}
        {cta && (
          <motion.a
            href={cta.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary hover:bg-accent px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {cta.text}
          </motion.a>
        )}
      </motion.div>
    </div>
  )
}
