"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { MenuCard } from "@/components/menu-card"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { motion } from "framer-motion"
import { UtensilsCrossed, Users, Truck, Gift } from "lucide-react"
import type { Meal, Testimonial } from "@/types"

// Mock data - Replace with Firebase calls
const mockMeals: Meal[] = [
  {
    id: "1",
    name: "Our Special",
    description: "A hearty plate of fluffy rice, soft chapati, tender meat, and savory yellow peas, crafted for a wholesome royal taste.",
    price: 520.70,
    image: "/ricechapo.jpg",
    featured: true,
  },
  {
    id: "2",
    name: "Chips & Burger",
    description: "A classic combo of golden plain chips served alongside a juicy beef burger, simple yet satisfying",
    price: 540.71,
    image: "/chips.jpg",
    featured: true,
  },
  {
    id: "3",
    name: "Chicken Box",
    description: "A generous box brimming with tender, flavorful chicken, perfectly seasoned with aromatic spices for a bold, satisfying bite.",
    price: 836.55,
    image: "/chicken.jpg",
    featured: true,
  },
]

const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    quote: "Absolutely incredible dining experience. Every dish was a masterpiece. We will definitely return!",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    quote: "The ambiance, service, and food were all exceptional. Worth every penny.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emma Williams",
    quote: "Our anniversary dinner was perfect. Thank you for making it unforgettable.",
    rating: 5,
  },
]

export default function Home() {
  const [meals, setMeals] = useState<Meal[]>(mockMeals)
  const [testimonials, setTestimonials] = useState<Testimonial[]>(mockTestimonials)

  useEffect(() => {
    // TODO: Fetch from Firebase when integrated
    // fetchFeaturedMeals();
    // fetchTestimonials();
  }, [])

  const services = [
    {
      icon: UtensilsCrossed,
      title: "Dine-In",
      description: "Experience fine dining in our elegant dining room",
    },
    {
      icon: Gift,
      title: "Events & Catering",
      description: "Perfect for your special occasions and celebrations",
    },
    {
      icon: Truck,
      title: "Delivery",
      description: "Enjoy our cuisine from the comfort of your home",
    },
    {
      icon: Users,
      title: "Private Dining",
      description: "Exclusive spaces for intimate gatherings",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <HeroBanner
          title="A Royal Taste in Every Bite"
          subtitle="Experience fine dining like never before"
          backgroundImage="/elegant-restaurant-interior-with-gold-accents.jpg"
          cta={{
            text: "Reserve Your Table",
            href: "/contact",
          }}
        />

        {/* About Snapshot */}
        <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="serif-title text-primary mb-6">Welcome to Kings & Queens</h2>
              <div className="elegant-line mb-6" />
              <p className="text-lg mb-4 text-muted-foreground leading-relaxed">
                Established in 2015, Kings & Queens has become synonymous with exquisite fine dining and impeccable
                service. Our team of award-winning chefs crafts each dish with passion and precision.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We source only the finest ingredients and combine traditional techniques with innovative flavor
                combinations to create an unforgettable dining experience.
              </p>
              <a href="/about" className="inline-block text-primary font-semibold hover:text-accent transition-colors">
                Learn More →
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl"
            >
              <img src="/elegant-restaurant-interior.png" alt="Restaurant Interior" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Featured Meals */}
        <section className="py-16 md:py-24 px-4 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="serif-title text-primary mb-4">Featured Dishes</h2>
              <div className="elegant-line mb-6 mx-auto w-32" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our chef's signature creations, crafted with the finest ingredients
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {meals.map((meal, idx) => (
                <motion.div
                  key={meal.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <MenuCard {...meal} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a
                href="/menu"
                className="inline-block bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Full Menu
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="serif-title text-primary mb-4">Our Services</h2>
            <div className="elegant-line mb-6 mx-auto w-32" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="serif-section text-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="serif-title text-primary mb-4">What Our Guests Say</h2>
              <div className="elegant-line mb-6 mx-auto w-32" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TestimonialsCarousel testimonials={testimonials} />
            </motion.div>
          </div>
        </section>

        {/* Map & CTA */}
        <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg h-96 border-2 border-border"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.166882525691!2d37.0745388!3d-1.0353888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e857365430b%3A0x64372dcac2e4fed!2sKINGS%20%26%20QUEENS%20RESTAURANT!5e0!3m2!1sen!2ske!4v1763063754845!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="serif-title text-primary mb-6">Plan Your Visit</h2>
              <div className="elegant-line mb-6" />
              <div className="space-y-4">
                <div>
                  <h3 className="serif-section text-primary mb-2">Hours</h3>
                  <p className="text-muted-foreground">Tuesday - Thursday: 5PM - 11PM</p>
                  <p className="text-muted-foreground">Friday - Saturday: 5PM - 12AM</p>
                  <p className="text-muted-foreground">Sunday - Monday: Closed</p>
                </div>
                <div>
                  <h3 className="serif-section text-primary mb-2">Address</h3>
                  <p className="text-muted-foreground">Kwame Nkrumah Road, Thika</p>
                </div>
                <div>
                  <h3 className="serif-section text-primary mb-2">Contact</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                  <p className="text-muted-foreground">info@kingsqueens.cafe</p>
                </div>
              </div>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors mt-6"
              >
                Order via WhatsApp
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
