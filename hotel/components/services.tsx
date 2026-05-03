"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Utensils, Coffee, Presentation, Sparkles, Wifi, Car } from "lucide-react"

const services = [
  {
    icon: Utensils,
    title: "Restaurant",
    description: "Savourez les saveurs authentiques de la Cote d'Ivoire preparees par nos chefs passionnes. Cuisine locale et internationale.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Coffee,
    title: "Petit-Dejeuner",
    description: "Commencez votre journee avec notre buffet varie : fruits tropicaux, patisseries traditionnelles, boissons chaudes et froides.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Presentation,
    title: "Salle de Conference",
    description: "Un espace modulable equipe des dernieres technologies audio-visuelles pour vos reunions et seminaires.",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop",
  },
]

const amenities = [
  { icon: Wifi, label: "Wi-Fi Gratuit" },
  { icon: Car, label: "Parking Securise" },
  { icon: Sparkles, label: "Menage Quotidien" },
  { icon: Coffee, label: "Room Service" },
]

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Nos Services
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
            Une Experience Complete
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Au-dela de l&apos;hebergement, nous vous offrons une gamme de services 
            pour rendre votre sejour inoubliable.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenities Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-primary rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-3">
                  <amenity.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-primary-foreground">{amenity.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
