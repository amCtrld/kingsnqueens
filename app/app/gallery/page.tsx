"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { GalleryGrid } from "@/components/gallery-grid"
import { motion } from "framer-motion"
import type { GalleryImage } from "@/types"

// Mock gallery data - Replace with Firebase calls
const mockGalleryImages: GalleryImage[] = [
  {
    id: "1",
    imageUrl: "/chicken.jpg",
    category: "food",
  },
  {
    id: "2",
    imageUrl: "/cappuccino.jpg",
    category: "food",
  },
  {
    id: "3",
    imageUrl: "/chips.jpg",
    category: "food",
  },
  {
    id: "4",
    imageUrl: "/space1.jpg",
    category: "space",
  },
  {
    id: "5",
    imageUrl: "/space2.jpeg",
    category: "space",
  },
  {
    id: "6",
    imageUrl: "/space3.jpeg",
    category: "space",
  },
  {
    id: "7",
    imageUrl: "/event1.jpg",
    category: "events",
  },
  {
    id: "8",
    imageUrl: "/event2.jpg",
    category: "events",
  },
  {
    id: "9",
    imageUrl: "/event3.jpg",
    category: "events",
  },
]

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <HeroBanner
          title="Our Gallery"
          subtitle="Visual Moments from Kings & Queens"
          backgroundImage="/events1.jpg"
        />

        {/* Gallery Section */}
        <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="serif-title text-primary mb-4">Explore Our Space</h2>
            <div className="elegant-line mb-6 mx-auto w-32" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our collection of beautifully prepared dishes, elegant dining spaces, and memorable events
            </p>
          </motion.div>

          <GalleryGrid images={mockGalleryImages} />
        </section>
      </main>
      <Footer />
    </>
  )
}
