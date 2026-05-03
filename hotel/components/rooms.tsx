"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Wifi, Wind, Users, ArrowRight, Check } from "lucide-react"

const rooms = [
  {
    id: 1,
    name: "Chambre Standard",
    description: "Un espace confortable avec toutes les commodites essentielles pour un sejour agreable.",
    price: "45 000",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
    features: ["Lit double", "Climatisation", "Wi-Fi gratuit", "TV ecran plat"],
    capacity: 2,
    size: "22m2",
  },
  {
    id: 2,
    name: "Chambre Superieure",
    description: "Plus spacieuse avec une vue agreable et des finitions haut de gamme.",
    price: "65 000",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
    features: ["Lit king size", "Balcon", "Mini-bar", "Coffre-fort"],
    capacity: 2,
    size: "28m2",
    popular: true,
  },
  {
    id: 3,
    name: "Suite Executive",
    description: "Notre suite la plus luxueuse avec salon separe et amenagements premium.",
    price: "95 000",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    features: ["Salon separe", "Baignoire", "Service en chambre", "Bureau"],
    capacity: 3,
    size: "45m2",
  },
  {
    id: 4,
    name: "Chambre Familiale",
    description: "Ideale pour les familles avec espace supplementaire et lits additionnels.",
    price: "85 000",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop",
    features: ["2 lits doubles", "Espace enfants", "Refrigerateur", "Terrasse"],
    capacity: 4,
    size: "38m2",
  },
]

export function Rooms() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null)

  return (
    <section id="chambres" className="py-24 lg:py-32">
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
            Nos Hebergements
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
            Chambres & Suites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Decouvrez nos 4 categories de chambres, chacune concue pour offrir 
            le parfait equilibre entre confort moderne et elegance raffinee.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredRoom(room.id)}
              onMouseLeave={() => setHoveredRoom(null)}
              className="group relative bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Popular Badge */}
                {room.popular && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Populaire
                  </Badge>
                )}
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-foreground">
                    {room.price} <span className="text-muted-foreground text-xs">FCFA/nuit</span>
                  </span>
                </div>

                {/* Quick Info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 text-white/90">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4" />
                    <span className="text-sm">{room.size}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl text-foreground mb-2">{room.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {room.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button asChild className="w-full group/btn">
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    Reserver cette chambre
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
