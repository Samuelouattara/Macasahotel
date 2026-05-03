"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Amadou Diallo",
    role: "Homme d'affaires",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    text: "Un sejour exceptionnel! Le personnel est aux petits soins et les chambres sont d'une proprete irreprochable. Je recommande vivement pour les voyages d'affaires.",
  },
  {
    name: "Marie-Claire Kouassi",
    role: "Touriste",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    text: "L'accueil chaleureux et l'ambiance paisible font de cet hotel un veritable havre de paix. La cuisine du restaurant est delicieuse!",
  },
  {
    name: "Jean-Pierre Mensah",
    role: "Directeur commercial",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    text: "La salle de conference est parfaitement equipee. Organisation impeccable pour notre seminaire d'entreprise. Merci a toute l'equipe!",
  },
]

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-[0.2em] text-primary-foreground/70 font-medium mb-4">
            Temoignages
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl mb-6">
            Ce que disent nos clients
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Decouvrez les experiences de nos clients et pourquoi ils choisissent 
            l&apos;Hotel Residence MACASAH pour leur sejour a Abidjan.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-foreground/20" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-primary-foreground/90 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
