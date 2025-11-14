"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface MenuCardProps {
  name: string
  description: string
  price: number
  image?: string
  featured?: boolean
}

export function MenuCard({ name, description, price, image, featured }: MenuCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`rounded-lg overflow-hidden shadow-lg transition-all ${
        featured ? "bg-secondary/10 border-2 border-secondary" : "bg-card border border-border"
      }`}
    >
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="serif-section text-primary mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">KSh {price.toFixed(2)}</span>
          {featured && <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">Featured</span>}
        </div>
      </div>
    </motion.div>
  )
}
