"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { CateringPackage } from "@/types"

// Mock catering data - Replace with Firebase calls
const mockCateringPackages: CateringPackage[] = [
  {
    id: "1",
    name: "Royal Elegance",
    description: "Perfect for intimate gatherings",
    price: 10982,
    servings: 10,
  },
  {
    id: "2",
    name: "Grand Banquet",
    description: "Ideal for larger celebrations",
    price: 8398,
    servings: 50,
  },
  {
    id: "3",
    name: "Executive Catering",
    description: "For corporate events",
    price: 7106,
    servings: 100,
  },
]

const addOns = [
  { id: 1, name: "Floral Arrangements", price: 19380 },
  { id: 2, name: "Specialized Music", price: 38760 },
  { id: 3, name: "Premium Bar Service", price: 32300 },
  { id: 4, name: "Professional Photography", price: 51680 },
]

export default function CateringPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Send to Firebase
    alert("Inquiry submitted! We will contact you soon.")
    setFormData({ name: "", phone: "", email: "", eventType: "", message: "" })
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <HeroBanner
          title="Catering & Events"
          subtitle="We bring the royal touch to your occasions"
          backgroundImage="/events.jpg"
        />

        {/* Catering Packages */}
        <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="serif-title text-primary mb-4">Our Catering Packages</h2>
            <div className="elegant-line mb-6 mx-auto w-32" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockCateringPackages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="serif-section text-primary mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-primary">KSh {pkg.price}</p>
                  <p className="text-sm text-muted-foreground">per person (up to {pkg.servings} guests)</p>
                </div>
                <Button asChild className="w-full bg-primary hover:bg-accent text-primary-foreground">
                  <a href="#inquiry">Request Quote</a>
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Event Add-ons */}
        <section className="py-16 md:py-24 px-4 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="serif-title text-primary mb-4">Event Add-ons</h2>
              <div className="elegant-line mb-6 mx-auto w-32" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, idx) => (
                <motion.div
                  key={addon.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border p-6 rounded-lg text-center"
                >
                  <h4 className="font-semibold text-primary mb-2">{addon.name}</h4>
                  <p className="text-2xl font-bold text-accent">KSh {addon.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section id="inquiry" className="py-16 md:py-24 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="serif-title text-primary mb-4">Start Planning Your Event</h2>
            <div className="elegant-line mb-6 mx-auto w-32" />
          </motion.div>

          <form onSubmit={handleSubmit} className="bg-card border border-border p-8 rounded-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select Event Type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="birthday">Birthday Party</option>
                <option value="anniversary">Anniversary</option>
                <option value="other">Other</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your event..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold py-3"
            >
              Submit Inquiry
            </Button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}
