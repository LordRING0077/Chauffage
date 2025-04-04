"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedFlame } from "@/components/animated-flame"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="max-w-md">
              <motion.h3
                className="mb-2 text-2xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Recevez nos conseils pour Lyon et sa région
              </motion.h3>
              <motion.p
                className="text-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Inscrivez-vous à notre newsletter pour recevoir nos conseils d&apos;entretien adaptés au climat lyonnais
                et nos offres spéciales pour Lyon et sa région.
              </motion.p>
            </div>
            <motion.div
              className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Input
                type="email"
                placeholder="Votre email"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-white"
              />
              <Button className="bg-white text-orange-600 hover:bg-white/90">
                S&apos;inscrire <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:px-6">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={item}>
            <div className="flex items-center gap-2 mb-4">
              <AnimatedFlame size={24} />
              <h3 className="text-lg font-bold">Chauffagiste Lyon</h3>
            </div>
            <p className="mb-4 text-gray-300">
              Services professionnels de chauffage et plomberie à Lyon et sa région depuis plus de 15 ans. Installation,
              dépannage et entretien de chaudières, pompes à chaleur et systèmes de plomberie par des experts certifiés
              RGE.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/chauffagistelyon"
                aria-label="Facebook"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/chauffagistelyon"
                aria-label="Instagram"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/chauffagistelyon"
                aria-label="Twitter"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={item}>
            <h3 className="mb-4 text-lg font-bold">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#chauffage"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  Installation de chauffage
                </Link>
              </li>
              <li>
                <Link
                  href="/services#entretien"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  Entretien de chaudière
                </Link>
              </li>
              <li>
                <Link
                  href="/services#depannage"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  Dépannage d&apos;urgence
                </Link>
              </li>
              <li>
                <Link
                  href="/services#plomberie"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  Services de plomberie
                </Link>
              </li>
              <li>
                <Link
                  href="/services#sanitaires"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  Installation sanitaires
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h3 className="mb-4 text-lg font-bold">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />À propos de nous
                </Link>
              </li>
              <li>
                <Link
                  href="/realisations"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  Nos réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  Blog & Conseils
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?devis=true"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  Demande de devis
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item}>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                <span className="text-gray-300">123 Avenue de Lyon, 69000 Lyon, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-orange-500" />
                <a href="tel:+33478000000" className="text-gray-300 hover:text-white transition-colors">
                  04 78 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-orange-500" />
                <a
                  href="mailto:contact@chauffagiste-lyon.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contact@chauffagiste-lyon.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Button
                asChild
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">&copy; {currentYear} Chauffagiste Lyon. Tous droits réservés.</p>
            <div className="flex gap-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Conditions d&apos;utilisation
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Plan du site
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

