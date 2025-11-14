"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { motion } from "framer-motion"
import { Truck, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DeliveryPage() {
  const deliveryZones = [
    { name: "Downtown", time: "15-20 mins", charge: "KSh 516" },
    { name: "Midtown", time: "20-25 mins", charge: "KSh 645" },
    { name: "Uptown", time: "25-30 mins", charge: "KSh 774" },
    { name: "Suburbs", time: "30-40 mins", charge: "KSh 903" },
  ]

  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Fresh, hot meals delivered within minutes of preparation.",
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Order in advance for scheduled delivery or immediate dispatch.",
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Serving multiple zones throughout the city with professional drivers.",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <HeroBanner
          title="Fresh, Hot & On Your Doorstep"
          subtitle="Delivery within minutes—experience fine dining at home"
          backgroundImage="/delivery.jpg"
        />

        {/* Delivery Info */}
        <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="serif-title text-primary mb-4">How Our Delivery Works</h2>
            <div className="elegant-line mb-6 mx-auto w-32" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border p-8 rounded-lg text-center"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="serif-section text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Delivery Zones */}
        <section className="py-16 md:py-24 px-4 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="serif-title text-primary mb-4">Delivery Zones & Times</h2>
              <div className="elegant-line mb-6 mx-auto w-32" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliveryZones.map((zone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border p-6 rounded-lg"
                >
                  <h3 className="serif-section text-primary mb-3">{zone.name}</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Clock size={16} className="text-secondary" />
                      {zone.time}
                    </p>
                    <p className="text-lg font-bold text-accent">{zone.charge}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ordering Section */}
        <section className="py-16 md:py-24 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="serif-title text-primary mb-6">Ready to Order?</h2>
            <div className="elegant-line mb-8 mx-auto w-32" />
            <p className="text-lg text-muted-foreground mb-8">
              Scan the QR code below or click the WhatsApp button to place your order. Our team will confirm your
              delivery time and get your meal ready fresh!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* QR Code Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card border-2 border-border p-8 rounded-lg"
              >
                <p className="text-sm text-muted-foreground mb-4">Scan to Order</p>
                <div className="w-48 h-48 mx-auto bg-muted rounded-lg flex items-center justify-center">
                  <svg
                    width="192"
                    height="192"
                    viewBox="0 0 192 192"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary"
                  >
                    <rect x="24" y="24" width="40" height="40" stroke="currentColor" strokeWidth="2" />
                    <rect x="24" y="128" width="40" height="40" stroke="currentColor" strokeWidth="2" />
                    <rect x="128" y="24" width="40" height="40" stroke="currentColor" strokeWidth="2" />
                    <rect x="80" y="80" width="32" height="32" fill="currentColor" />
                  </svg>
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-primary hover:bg-accent text-primary-foreground text-lg py-6"
                >
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    Order via WhatsApp
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Our team is available 7 days a week to take your order and ensure timely delivery.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Sticky CTA */}
        <div className="fixed bottom-6 left-6 z-40">
          <motion.a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-primary hover:bg-accent text-primary-foreground px-6 py-3 rounded-full shadow-lg font-semibold transition-colors"
          >
            Order Now
          </motion.a>
        </div>
      </main>
      <Footer />
    </>
  )
}
