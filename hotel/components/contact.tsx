"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Plateau Dokui, Abidjan",
    subValue: "Cote d'Ivoire",
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "+225 24 98 800",
    subValue: "Disponible 24h/24",
  },
  {
    icon: Mail,
    label: "Email",
    value: "rmacasah@gmail.com",
    subValue: "Reponse sous 24h",
  },
  {
    icon: Clock,
    label: "Check-in / Check-out",
    value: "14h00 / 12h00",
    subValue: "Flexibilite possible",
  },
]

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30">
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
            Contact
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
            Reservez Votre Sejour
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Notre equipe est a votre disposition pour repondre a toutes vos questions 
            et vous aider a planifier votre sejour parfait.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl text-foreground mb-8">Nous Contacter</h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.subValue}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative h-64 bg-muted rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.329892621476!2d-4.0077!3d5.3544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjEnMTUuOCJOIDTCsDAwJzI3LjciVw!5e0!3m2!1sen!2sci!4v1620000000000!5m2!1sen!2sci"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Hotel MACASAH"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-8 lg:p-10 rounded-xl shadow-sm"
          >
            <h3 className="font-serif text-2xl text-foreground mb-6">Envoyer un Message</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-serif text-xl text-foreground mb-2">Message Envoye!</h4>
                <p className="text-muted-foreground">
                  Merci pour votre message. Notre equipe vous repondra dans les plus brefs delais.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <FieldGroup className="gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel>Nom</FieldLabel>
                      <Input placeholder="Votre nom" required />
                    </Field>
                    <Field>
                      <FieldLabel>Prenom</FieldLabel>
                      <Input placeholder="Votre prenom" required />
                    </Field>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel>Email</FieldLabel>
                      <Input type="email" placeholder="votre@email.com" required />
                    </Field>
                    <Field>
                      <FieldLabel>Telephone</FieldLabel>
                      <Input type="tel" placeholder="+225 XX XX XX XX" />
                    </Field>
                  </div>
                  
                  <Field>
                    <FieldLabel>Message</FieldLabel>
                    <Textarea
                      placeholder="Comment pouvons-nous vous aider? Dates souhaitees, type de chambre, questions..."
                      rows={5}
                      required
                    />
                  </Field>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                        />
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Envoyer le message
                      </span>
                    )}
                  </Button>
                </FieldGroup>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
