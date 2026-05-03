"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Clock } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Award,
    title: "Excellence",
    description: "Un service haut de gamme pour chaque client",
  },
  {
    icon: Users,
    title: "Hospitalite",
    description: "L'accueil chaleureux de la Cote d'Ivoire",
  },
  {
    icon: Clock,
    title: "Disponibilite",
    description: "A votre service 24 heures sur 24",
  },
]

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="apropos" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={containerRef} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop"
                alt="Interieur elegant de l'hotel MACASAH"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 md:right-8 bg-card p-6 rounded-lg shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif text-primary">10+</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Annees</p>
                  <p className="font-serif text-lg">d&apos;experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* Section Label */}
            <div className="inline-block mb-4">
              <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                A Propos
              </span>
              <div className="h-px w-12 bg-primary mt-2" />
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.2]">
              Votre havre de paix au coeur d&apos;Abidjan
            </h2>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bienvenue a Hotel Residence MACASAH, votre adresse de confort et de raffinement 
              a Abidjan. Notre etablissement vous accueille dans un cadre chaleureux melant 
              modernite, hospitalite ivoirienne et services de qualite.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Que vous soyez en voyage d&apos;affaires, en escapade romantique ou en sejour 
              touristique, nous mettons tout en oeuvre pour faire de votre passage une 
              experience inoubliable. Chambres elegantes, service attentionne, et cuisine 
              locale comme internationale : tout est pense pour votre bien-etre.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Button asChild className="group">
              <Link href="#chambres" className="flex items-center gap-2">
                Decouvrir nos chambres
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
