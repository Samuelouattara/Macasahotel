"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  navigation: [
    { name: "Accueil", href: "#accueil" },
    { name: "A Propos", href: "#apropos" },
    { name: "Chambres", href: "#chambres" },
    { name: "Services", href: "#services" },
    { name: "Galerie", href: "#galerie" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Restaurant", href: "#services" },
    { name: "Salle de Conference", href: "#services" },
    { name: "Petit-Dejeuner", href: "#services" },
    { name: "Room Service", href: "#services" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="#accueil" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="text-background">
                  <rect x="4" y="12" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M4 20h40" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 12V8a8 8 0 0 1 16 0v4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="24" cy="30" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                <div>
                  <span className="font-serif text-lg font-semibold tracking-wide">MACASAH</span>
                  <span className="block text-xs tracking-[0.2em] uppercase opacity-70">Hotel Residence</span>
                </div>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Votre adresse de confort et de raffinement au coeur d&apos;Abidjan. 
              Decouvrez l&apos;hospitalite ivoirienne dans un cadre moderne et elegant.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-serif text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-background/70 text-sm mb-4">
              Inscrivez-vous pour recevoir nos offres speciales et actualites.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
              />
              <Button type="submit" variant="secondary" size="icon">
                <ArrowUp className="w-4 h-4 rotate-45" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Hotel Residence MACASAH. Tous droits reserves.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            <Link href="#" className="hover:text-background transition-colors">
              Politique de confidentialite
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Conditions generales
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-40"
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}
