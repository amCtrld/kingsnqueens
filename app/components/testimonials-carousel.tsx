"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
  name: string
  quote: string
  rating: number
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  if (!testimonials.length) return null

  return (
    <div className="relative bg-muted/30 p-8 md:p-12 rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <Star key={i} size={20} className="fill-secondary text-secondary" />
            ))}
          </div>
          <p className="text-lg italic mb-4 max-w-2xl mx-auto">"{testimonials[current].quote}"</p>
          <p className="font-semibold text-primary">{testimonials[current].name}</p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full hover:bg-accent transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full hover:bg-accent transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === current ? "bg-primary w-6" : "bg-muted-foreground w-2"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
