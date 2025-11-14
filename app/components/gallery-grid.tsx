"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import type { GalleryImage } from "@/types"

interface GalleryGridProps {
  images: GalleryImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [filter, setFilter] = useState<"all" | "food" | "space" | "events">("all")

  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter)

  return (
    <>
      {/* Filters */}
      <div className="flex gap-4 justify-center mb-12 flex-wrap">
        {(["all", "food", "space", "events"] as const).map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all capitalize ${
              filter === category ? "bg-primary text-primary-foreground" : "bg-muted/50 text-foreground hover:bg-muted"
            }`}
          >
            {category === "all" ? "All" : category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, idx) => (
          <motion.div
            key={image.id}
            layoutId={image.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true }}
            onClick={() => setSelectedId(image.id)}
            className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
          >
            <Image
              src={image.imageUrl || "/placeholder.svg"}
              alt="Gallery"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm">View</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {selectedId && (
                <Image
                  src={images.find((img) => img.id === selectedId)?.imageUrl || ""}
                  alt="Gallery"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              )}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
                aria-label="Close"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
