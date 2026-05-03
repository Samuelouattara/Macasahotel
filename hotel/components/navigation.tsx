"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "A Propos", href: "#apropos" },
  { name: "Chambres", href: "#chambres" },
  { name: "Services", href: "#services" },
  { name: "Galerie", href: "#galerie" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="#accueil" className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <div className={`transition-colors duration-500 ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-colors duration-500">
                  <rect x="4" y="12" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M4 20h40" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 12V8a8 8 0 0 1 16 0v4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="24" cy="30" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className={`transition-colors duration-500 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}>
                <span className="font-serif text-xl font-semibold tracking-wide">MACASAH</span>
                <span className="block text-xs tracking-[0.2em] uppercase opacity-70">Hotel Residence</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:opacity-100 ${
                    isScrolled
                      ? "text-foreground/70 hover:text-primary"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                asChild
                className={`transition-all duration-500 ${
                  isScrolled
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                }`}
              >
                <Link href="#contact" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Reserver
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24 lg:hidden"
          >
            <nav className="container mx-auto px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 text-2xl font-serif text-foreground border-b border-border hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Button asChild size="lg" className="w-full">
                  <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Phone className="w-4 h-4 mr-2" />
                    Reserver maintenant
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
