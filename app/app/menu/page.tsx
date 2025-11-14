"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { MenuCard } from "@/components/menu-card"
import { motion } from "framer-motion"
import type { MenuItem } from "@/types"

// Mock menu data - Replace with Firebase calls
const mockMenuItems: MenuItem[] = [
  // Breakfast
  {
    id: "1",
    category: "breakfast",
    name: "Toast Mayai",
    description: "Crispy golden toast layered with fluffy fried eggs, a simple yet comforting classic.",
    price: 194.44,
    image: "/toast.jpg",
  },
  {
    id: "2",
    category: "breakfast",
    name: "Breakfast Platter",
    description: "A sunny side up egg paired with three juicy sausages, fresh tomato slices, and a hearty bundle of ugali for a balanced, energizing meal.",
    price: 352.86,
    image: "/breako.jpg",
  },
  {
    id: "3",
    category: "breakfast",
    name: "Milk Potato",
    description: "A nourishing duo of creamy fresh milk served with tender sweet potato, simple comfort in every bite.",
    price: 269.15,
    image: "/ngwashe.jpg",
  },

  // Lunch & Dinner
  {
    id: "4",
    category: "lunch-dinner",
    name: "Ugali with Tilapia",
    description: "Ugali served with a side of fried tilapia and sukuma wiki, a traditional Kenyan favorite.",
    price: 520.70,
    image: "/ugali-fish.png",
  },
  {
    id: "5",
    category: "lunch-dinner",
    name: "Mukimo Beef",
    description: "Premium grass-fed beef tenderloin with truffle mashed potatoes",
    price: 240.71,
    image: "/mukimo-beef.jpeg",
  },
  {
    id: "6",
    category: "lunch-dinner",
    name: "Our Special",
    description: "A hearty plate of fluffy rice, soft chapati, tender meat, and savory yellow peas, crafted for a wholesome royal taste.",
    price: 520.70,
    image: "/ricechapo.jpg",
  },
  {
    id: "7",
    category: "lunch-dinner",
    name: "The Githeri way",
    description: "A wholesome mix of soft maize and beans, served with creamy avocado for a hearty Kenyan classic",
    price: 200.43,
    image: "/githeri.jpeg",
  },
  {
    id: "8",
    category: "lunch-dinner",
    name: "Pilau",
    description: "Fragrant spiced rice infused with tender beef, a rich and flavorful delight.",
    price: 3744.86,
    image: "/pilau.jpg",
  },

  // Beverages & Desserts
  {
    id: "9",
    category: "beverages-desserts",
    name: "capuccino Soufflé",
    description: "A velvety coffee topped with frothy milk, the perfect balance of bold and smooth.",
    price: 120.73,
    image: "/cappuccino.jpg",
  },
  {
    id: "10",
    category: "beverages-desserts",
    name: "Natural Fruit Juices",
    description: "Freshly pressed tropical blends and custom mixes, bursting with pure, refreshing goodness.",
    price: 120.32,
    image: "/juice.jpg",
  },
  {
    id: "11",
    category: "beverages-desserts",
    name: "Milk",
    description: "Smooth, creamy milk served chilled, simple nourishment in every sip.",
    price: 100.44,
    image: "/milk.jpg",
  },
  {
    id: "12",
    category: "beverages-desserts",
    name: "Shakes",
    description: "A luscious blend of fruits whipped into a creamy, energizing treat.",
    price: 3357.03,
    image: "/Milkshake.jpg",
  },
]

interface TabConfig {
  id: "breakfast" | "lunch-dinner" | "beverages-desserts"
  label: string
}

const tabs: TabConfig[] = [
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch-dinner", label: "Lunch & Dinner" },
  { id: "beverages-desserts", label: "Beverages & Desserts" },
]

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<"breakfast" | "lunch-dinner" | "beverages-desserts">("lunch-dinner")

  const filteredItems = mockMenuItems.filter((item) => item.category === activeTab)

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <HeroBanner
          title="Our Menu"
          subtitle="Culinary Excellence in Every Dish"
          backgroundImage="/breako.jpg"
        />

        {/* Menu Section */}
        <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="serif-title text-primary mb-4">Discover Our Culinary Creations</h2>
            <div className="elegant-line mb-6 mx-auto w-32" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each dish is prepared fresh daily by our award-winning chefs using the finest ingredients
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-foreground hover:bg-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <MenuCard {...item} />
              </motion.div>
            ))}
          </div>

          {/* PDF & Sticky CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-4">Want a printed copy?</p>
            <a
              href="#"
              className="inline-block bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-3 rounded-lg font-semibold transition-colors mr-4"
            >
              Download Menu PDF
            </a>
          </motion.div>
        </section>

        {/* Sticky CTA */}
        <div className="fixed bottom-6 right-6 z-40">
          <motion.a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-primary hover:bg-accent text-primary-foreground px-6 py-3 rounded-full shadow-lg font-semibold transition-colors"
          >
            Order via WhatsApp
          </motion.a>
        </div>
      </main>
      <Footer />
    </>
  )
}
