"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { motion } from "framer-motion"
import { Award, Users, Leaf, Heart } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every dish and every interaction with our guests.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Sourcing local and organic ingredients to support our community and environment.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting relationships with our guests, staff, and local suppliers.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Driven by our love for fine cuisine and the art of hospitality.",
    },
  ]

  const team = [
    {
      name: "Chef Marcus Odhiambo",
      role: "Executive Chef",
      bio: "With 20 years of experience, Chef Marcus leads our kitchen with innovation and tradition.",
      image: "/Odhis.jpeg",
    },
    {
      name: "Sarah Wambui",
      role: "Head Sommelier",
      bio: "Expert wine curator with an exceptional palate and deep knowledge of global vineyards.",
      image: "/Wambo.jpeg",
    },
    {
      name: "Robert Musa",
      role: "General Manager",
      bio: "Dedicated to creating unforgettable experiences for every guest who walks through our doors.",
      image: "/Musa.jpeg",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <HeroBanner
          title="About Kings & Queens"
          subtitle="A Legacy of Excellence and Elegance"
          backgroundImage="/food1.jpeg"
        />

        {/* Our Story */}
        <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl"
            >
              <img src="/chef2.jpeg" alt="Our Story" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="serif-title text-primary mb-6">Our Story</h2>
              <div className="elegant-line mb-6" />
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Kings & Queens was founded in 2015 with a singular vision: to elevate fine dining to an art form. Our
                founder, with a passion for culinary excellence and hospitality, created a space where every guest feels
                like royalty.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Over the years, we've earned numerous accolades and recognition from leading culinary publications. But
                our greatest achievement is the loyalty and love of our guests, who continue to return for unforgettable
                experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Kings & Queens stands as a beacon of excellence in the culinary world, known for our commitment
                to quality, innovation, and the timeless art of hospitality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-16 md:py-24 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="serif-title text-primary mb-6">Our Philosophy</h2>
              <div className="elegant-line mb-8 mx-auto w-32" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Kings & Queens, we believe that dining is not just about food—it's about creating memories,
                celebrating moments, and connecting people through the universal language of exceptional cuisine.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every dish that leaves our kitchen is a testament to our chefs' dedication, creativity, and respect for
                the finest ingredients. We believe in doing things the right way, every time, no matter the cost or
                effort.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="serif-title text-primary mb-4">Our Core Values</h2>
            <div className="elegant-line mb-6 mx-auto w-32" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
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
                  <h3 className="serif-section text-primary mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 md:py-24 px-4 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="serif-title text-primary mb-4">Meet Our Leadership</h2>
              <div className="elegant-line mb-6 mx-auto w-32" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="serif-section text-primary mb-1">{member.name}</h3>
                    <p className="text-sm text-secondary font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="serif-title text-primary mb-4">Community Impact</h2>
            <div className="elegant-line mb-6 mx-auto w-32" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "10+",
                title: "Years of Service",
                description: "Serving our community and guests with unwavering excellence.",
              },
              {
                number: "50+",
                title: "Local Suppliers",
                description: "Supporting local farmers and artisans for fresh, quality ingredients.",
              },
              {
                number: "100+",
                title: "Team Members",
                description: "Dedicated professionals committed to exceptional hospitality.",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border p-8 rounded-lg text-center"
              >
                <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <h3 className="serif-section text-primary mb-3">{stat.title}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
