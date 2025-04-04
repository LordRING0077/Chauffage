"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MotionCard } from "@/components/ui/motion-card"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ParallaxSection } from "@/components/ui/parallax-section"
import { FloatingElement } from "@/components/ui/floating-element"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { AnimatedFlame } from "@/components/animated-flame"
import {
  Wrench,
  Clock,
  Award,
  ThumbsUp,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  CheckCircle,
  Calendar,
  Shield,
  Zap,
  Thermometer,
} from "lucide-react"
import { useRef } from "react"

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <>
      {/* Hero Section with Parallax and Animation */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-orange-600/20 blur-3xl"></div>
          <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-red-600/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"></div>
        </div>

        {/* Floating gear elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <FloatingElement className="absolute -left-20 top-1/4" amplitude={15} duration={8}>
            <div className="h-40 w-40 rounded-full border-4 border-orange-600/10 rotate-slow"></div>
          </FloatingElement>
          <FloatingElement className="absolute right-10 top-1/3" amplitude={10} duration={6} delay={1}>
            <div className="h-24 w-24 rounded-full border-4 border-orange-600/10 rotate-medium"></div>
          </FloatingElement>
          <FloatingElement className="absolute bottom-1/4 left-1/3" amplitude={12} duration={7} delay={2}>
            <div className="h-32 w-32 rounded-full border-4 border-orange-600/10 rotate-fast"></div>
          </FloatingElement>
        </div>

        <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Chauffagiste professionnel</span>
              <AnimatedGradientText
                text="à Lyon et sa région"
                className="mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              />
              <span className="block mt-2">depuis plus de 15 ans</span>
            </h1>

            <motion.p
              className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Dépannage chauffage urgent, installation et entretien de chaudières. Intervention rapide 24h/24 et 7j/7
              dans toute la région lyonnaise.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button asChild size="lg" className="cta-button bg-orange-600 hover:bg-orange-700">
                <Link href="/contact?devis=true">Demander un devis gratuit</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/services">Découvrir nos services</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <span className="mb-2 text-sm text-gray-400">Découvrir</span>
              <div className="h-10 w-6 rounded-full border-2 border-gray-400 p-1">
                <motion.div
                  className="h-2 w-2 rounded-full bg-white"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trustpilot-like banner */}
        <div className="absolute -bottom-6 left-0 w-full z-10">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="flex flex-wrap items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-lg"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <ThumbsUp className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium text-gray-900">4.9/5 sur Google</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium text-gray-900">Certifié RGE</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium text-gray-900">Intervention 1h max</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium text-gray-900">Garantie 10 ans</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview with Motion Cards */}
      <section className="py-20" ref={targetRef}>
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Nos <span className="gradient-text">Services</span>
              </h2>
              <p className="mt-4 text-gray-500 md:text-lg">
                Des solutions complètes pour tous vos besoins en chauffage et plomberie à Lyon
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 - Dépannage chauffage urgent */}
            <ScrollReveal delay={0.1}>
              <MotionCard className="service-card h-full bg-white p-6">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-orange-100 p-3">
                    <AnimatedFlame size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Dépannage chauffage urgent</h3>
                </div>
                <div className="relative mb-6 h-40 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/chauffage-installation.jpg"
                    alt="Dépannage de chauffage urgent par un chauffagiste à Lyon"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-6 text-gray-500">
                  Intervention rapide en cas de panne de chauffage. Nos techniciens sont disponibles 24h/24 et 7j/7 pour
                  rétablir votre confort rapidement.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Délai d'intervention : 1h maximum</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Disponible 24h/24 et 7j/7</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Toutes marques de chaudières</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full hover-lift">
                  <Link href="/services#depannage" className="flex items-center justify-center gap-2">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </MotionCard>
            </ScrollReveal>

            {/* Service Card 2 - Installation de chaudière */}
            <ScrollReveal delay={0.2}>
              <MotionCard className="service-card h-full bg-white p-6">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-orange-100 p-3">
                    <Wrench className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold">Installation de chaudière</h3>
                </div>
                <div className="relative mb-6 h-40 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/entretien-chaudiere.jpg"
                    alt="Installation de chaudière par un chauffagiste à Lyon"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-6 text-gray-500">
                  Installation professionnelle de chaudières gaz, fioul, électriques et à condensation. Devis gratuit et
                  conseils personnalisés pour optimiser votre consommation.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Toutes marques de chaudières</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Installation aux normes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Garantie décennale</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full hover-lift">
                  <Link href="/services#installation" className="flex items-center justify-center gap-2">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </MotionCard>
            </ScrollReveal>

            {/* Service Card 3 - Pompe à chaleur */}
            <ScrollReveal delay={0.3}>
              <MotionCard className="service-card h-full bg-white p-6">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-orange-100 p-3">
                    <Thermometer className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold">Pompe à chaleur</h3>
                </div>
                <div className="relative mb-6 h-40 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/plomberie-reparation.jpg"
                    alt="Installation de pompe à chaleur à Lyon"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-6 text-gray-500">
                  Installation et maintenance de pompes à chaleur air/eau et air/air. Solution écologique et économique
                  pour le chauffage de votre logement à Lyon.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Économies d'énergie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Éligible aux aides de l'État</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Installation par experts certifiés</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full hover-lift">
                  <Link href="/services#pompe-chaleur" className="flex items-center justify-center gap-2">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </MotionCard>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="cta-button">
                <Link href="/services">Voir tous nos services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Nos <span className="gradient-text">Tarifs</span> chauffagiste à Lyon
              </h2>
              <p className="mt-4 text-gray-500 md:text-lg">
                Des tarifs transparents et compétitifs, communiqués avant toute intervention
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Price Card 1 */}
            <ScrollReveal delay={0.1}>
              <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Dépannage chauffage</h3>
                  <div className="rounded-full bg-orange-100 p-2">
                    <Wrench className="h-5 w-5 text-orange-600" />
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold">À partir de 89€</span>
                  <span className="text-sm text-gray-500"> TTC</span>
                </div>
                <p className="mb-6 text-gray-500">Inclus : Déplacement, diagnostic et première heure de main d'œuvre</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Intervention rapide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Techniciens qualifiés</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Disponible 24h/24 et 7j/7</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact?service=depannage">Contacter un chauffagiste</Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Price Card 2 */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Entretien chaudière</h3>
                  <div className="rounded-full bg-orange-100 p-2">
                    <Calendar className="h-5 w-5 text-orange-600" />
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold">À partir de 99€</span>
                  <span className="text-sm text-gray-500"> TTC</span>
                </div>
                <p className="mb-6 text-gray-500">
                  Contrat d'entretien annuel avec visite préventive et dépannage prioritaire
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Entretien annuel obligatoire</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Optimisation des performances</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Prolongation de la durée de vie</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact?service=entretien">Souscrire un contrat</Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Price Card 3 */}
            <ScrollReveal delay={0.3}>
              <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Installation chaudière</h3>
                  <div className="rounded-full bg-orange-100 p-2">
                    <AnimatedFlame size={20} />
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold">À partir de 1590€</span>
                  <span className="text-sm text-gray-500"> TTC</span>
                </div>
                <p className="mb-6 text-gray-500">Installation complète avec mise en service et garantie</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Devis gratuit et personnalisé</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Aides financières disponibles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Garantie décennale</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact?service=installation">Demander un devis</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-8 text-center">
              <p className="text-gray-500">
                Pour tous nos services, nous proposons des facilités de paiement et vous aidons à obtenir les aides
                financières disponibles (MaPrimeRénov', CEE, etc.).
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section with Parallax */}
      <ParallaxSection className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <ScrollReveal>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/equipe-chauffagiste.jpg"
                  alt="L'équipe de chauffagistes professionnels de Chauffagiste Lyon"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block rounded-full bg-orange-600 px-3 py-1 text-sm font-medium text-white">
                    Plus de 15 ans d&apos;expérience à Lyon
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <div className="flex flex-col justify-center space-y-6">
              <ScrollReveal>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Pourquoi choisir <span className="gradient-text">Chauffagiste Lyon</span> ?
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-gray-500 md:text-lg">
                  Notre équipe de chauffagistes certifiés met son expertise à votre service pour vous garantir des
                  installations fiables et des interventions rapides dans toute la région lyonnaise.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-orange-100 p-2">
                      <Clock className="h-5 w-5 text-orange-600" />
                    </div>
                    <span>Intervention rapide dans l'heure pour les urgences</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-orange-100 p-2">
                      <Zap className="h-5 w-5 text-orange-600" />
                    </div>
                    <span>Disponible 24h/24 et 7j/7 sans majoration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-orange-100 p-2">
                      <Award className="h-5 w-5 text-orange-600" />
                    </div>
                    <span>Techniciens certifiés RGE et formés régulièrement</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-orange-100 p-2">
                      <Shield className="h-5 w-5 text-orange-600" />
                    </div>
                    <span>Garantie satisfaction et assurance décennale</span>
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="pt-4">
                  <Button asChild className="cta-button">
                    <Link href="/about">En savoir plus sur nous</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Stats Section with Animated Counters */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Chauffagiste Lyon en <span className="text-orange-500">chiffres</span>
              </h2>
              <p className="mt-4 text-gray-300 md:text-lg">Des chiffres qui parlent d&apos;eux-mêmes</p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Stat 1 */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col items-center rounded-lg bg-white/5 p-6 text-center backdrop-blur-sm hover-lift">
                <Calendar className="mb-4 h-10 w-10 text-orange-500" />
                <div className="text-4xl font-bold">
                  <AnimatedCounter from={0} to={15} />+
                </div>
                <p className="mt-2 text-gray-300">Années d&apos;expérience</p>
              </div>
            </ScrollReveal>

            {/* Stat 2 */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col items-center rounded-lg bg-white/5 p-6 text-center backdrop-blur-sm hover-lift">
                <ThumbsUp className="mb-4 h-10 w-10 text-orange-500" />
                <div className="text-4xl font-bold">
                  <AnimatedCounter from={0} to={5000} formatter={(value) => `${Math.round(value / 100) * 100}`} />+
                </div>
                <p className="mt-2 text-gray-300">Clients satisfaits</p>
              </div>
            </ScrollReveal>

            {/* Stat 3 */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col items-center rounded-lg bg-white/5 p-6 text-center backdrop-blur-sm hover-lift">
                <Wrench className="mb-4 h-10 w-10 text-orange-500" />
                <div className="text-4xl font-bold">
                  <AnimatedCounter from={0} to={12} />
                </div>
                <p className="mt-2 text-gray-300">Techniciens qualifiés</p>
              </div>
            </ScrollReveal>

            {/* Stat 4 */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col items-center rounded-lg bg-white/5 p-6 text-center backdrop-blur-sm hover-lift">
                <Clock className="mb-4 h-10 w-10 text-orange-500" />
                <div className="text-4xl font-bold">24/7</div>
                <p className="mt-2 text-gray-300">Service d&apos;urgence</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Preview with Animation */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ce que disent <span className="gradient-text">nos clients</span> à Lyon
              </h2>
              <p className="mt-4 text-gray-500 md:text-lg">La satisfaction de nos clients est notre priorité</p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <ScrollReveal delay={0.1}>
              <MotionCard className="bg-white p-6">
                <div className="flex items-center gap-1 pb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="mb-6 italic text-gray-700">
                  "Intervention rapide suite à une panne de chaudière en plein hiver. Technicien très professionnel qui
                  a identifié le problème rapidement. Je recommande vivement !"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="/client-temoignage-1.jpg"
                      alt="Sophie M. - Lyon 6ème"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sophie M.</p>
                    <p className="text-sm text-gray-500">Lyon 6ème - Dépannage chaudière</p>
                  </div>
                </div>
              </MotionCard>
            </ScrollReveal>

            {/* Testimonial 2 */}
            <ScrollReveal delay={0.2}>
              <MotionCard className="bg-white p-6">
                <div className="flex items-center gap-1 pb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="mb-6 italic text-gray-700">
                  "J'ai fait installer une pompe à chaleur par cette entreprise. Le conseil avant achat était très
                  complet et l'installation s'est déroulée parfaitement. Économies de chauffage au rendez-vous !"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="/client-temoignage-2.jpg"
                      alt="Thomas L. - Villeurbanne"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Thomas L.</p>
                    <p className="text-sm text-gray-500">Villeurbanne - Installation pompe à chaleur</p>
                  </div>
                </div>
              </MotionCard>
            </ScrollReveal>

            {/* Testimonial 3 */}
            <ScrollReveal delay={0.3}>
              <MotionCard className="bg-white p-6">
                <div className="flex items-center gap-1 pb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="mb-6 italic text-gray-700">
                  "Service d'entretien annuel de chaudière impeccable. Technicien ponctuel et qui prend le temps
                  d'expliquer ce qu'il fait. Tarif très correct pour la qualité du service."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="/client-temoignage-3.jpg"
                      alt="Marie D. - Lyon 3ème"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Marie D.</p>
                    <p className="text-sm text-gray-500">Lyon 3ème - Entretien chaudière</p>
                  </div>
                </div>
              </MotionCard>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="hover-lift">
                <Link href="/testimonials" className="flex items-center gap-2">
                  Voir tous les témoignages <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Zones d&apos;intervention à <span className="gradient-text">Lyon</span> et sa région
              </h2>
              <p className="mt-4 text-gray-500 md:text-lg">
                Notre équipe de chauffagistes intervient rapidement dans tout Lyon et sa périphérie
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold">Lyon et ses arrondissements</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Lyon 1er arrondissement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Lyon 2ème arrondissement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Lyon 3ème arrondissement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Lyon 4ème arrondissement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Lyon 5ème arrondissement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Lyon 6ème arrondissement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Lyon 7ème arrondissement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Lyon 8ème arrondissement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Lyon 9ème arrondissement</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold">Périphérie de Lyon</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Villeurbanne</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Vénissieux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Saint-Priest</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Bron</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Vaulx-en-Velin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Caluire-et-Cuire</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Meyzieu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Oullins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    <span>Décines-Charpieu</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-6 text-center">
              <p className="text-gray-500">
                Vous ne trouvez pas votre commune ? Contactez-nous pour vérifier si elle est dans notre zone
                d&apos;intervention.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/zones-intervention">Voir toutes nos zones d&apos;intervention</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Questions <span className="gradient-text">fréquentes</span>
              </h2>
              <p className="mt-4 text-gray-500 md:text-lg">
                Retrouvez les réponses aux questions les plus fréquemment posées
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {/* FAQ Item 1 */}
            <ScrollReveal delay={0.1}>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 text-lg font-bold">
                  Dans quel délai intervenez-vous pour un dépannage de chauffage à Lyon ?
                </h3>
                <p className="text-gray-500">
                  Nous intervenons dans l&apos;heure suivant votre appel pour les situations d&apos;urgence à Lyon et
                  ses environs. Nos chauffagistes sont disponibles 24h/24 et 7j/7, même les week-ends et jours fériés
                  sans majoration de tarif.
                </p>
              </div>
            </ScrollReveal>

            {/* FAQ Item 2 */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 text-lg font-bold">Quelles marques de chaudières installez-vous ?</h3>
                <p className="text-gray-500">
                  Nous installons et réparons toutes les grandes marques de chaudières : Saunier Duval, Frisquet,
                  Chaffoteaux, ELM Leblanc, Vaillant, De Dietrich, Viessmann, Atlantic, etc. Nous vous conseillons la
                  marque la plus adaptée à vos besoins et à votre budget.
                </p>
              </div>
            </ScrollReveal>

            {/* FAQ Item 3 */}
            <ScrollReveal delay={0.3}>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 text-lg font-bold">L&apos;entretien annuel de ma chaudière est-il obligatoire ?</h3>
                <p className="text-gray-500">
                  Oui, l&apos;entretien annuel est obligatoire pour toutes les chaudières dont la puissance est comprise
                  entre 4 et 400 kW (décret n°2009-649). Cet entretien permet de garantir la sécurité, d&apos;optimiser
                  les performances et de réduire la consommation énergétique.
                </p>
              </div>
            </ScrollReveal>

            {/* FAQ Item 4 */}
            <ScrollReveal delay={0.4}>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 text-lg font-bold">
                  Proposez-vous des facilités de paiement pour l&apos;installation d&apos;une nouvelle chaudière ?
                </h3>
                <p className="text-gray-500">
                  Oui, nous proposons plusieurs solutions de financement adaptées à votre budget. Nous vous aidons
                  également à obtenir toutes les aides financières auxquelles vous avez droit : MaPrimeRénov&apos;,
                  prime énergie (CEE), TVA réduite, éco-prêt à taux zéro, etc.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.5}>
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link href="/faq">Voir toutes les questions fréquentes</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section with Animated Background */}
      <AnimatedBackground className="py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <ScrollReveal>
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Besoin d&apos;un chauffagiste à Lyon en urgence ?
                </h2>
                <p className="text-white/90 md:text-lg">
                  Notre équipe de chauffagistes professionnels intervient 24h/24 et 7j/7 dans toute la région lyonnaise.
                  Contactez-nous dès maintenant pour un dépannage rapide ou un devis gratuit.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-white/90 cta-button">
                    <Link href="/contact?devis=true">Demander un devis gratuit</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link href="/contact">Nous contacter</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex items-center justify-center">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <h3 className="mb-4 text-xl font-bold">Contactez notre équipe</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-orange-300" />
                      <a href="tel:+33478123456" className="hover:underline">
                        04 78 12 34 56
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-orange-300" />
                      <a href="mailto:contact@chauffagiste-lyon.fr" className="hover:underline">
                        contact@chauffagiste-lyon.fr
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-orange-300" />
                      <span>15 rue de la République, 69001 Lyon</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-orange-300" />
                      <span>Service d&apos;urgence 24h/24 et 7j/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </AnimatedBackground>

      {/* Schema.org structured data for local business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Chauffagiste Lyon",
            image: "https://www.chauffagiste-lyon.com/logo.svg",
            url: "https://www.chauffagiste-lyon.com",
            telephone: "+33478123456",
            priceRange: "€€",
            description:
              "Services professionnels de chauffage et plomberie à Lyon et sa région. Dépannage chauffage urgent, installation et entretien de chaudières. Intervention rapide 24h/24 et 7j/7.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "15 rue de la République",
              addressLocality: "Lyon",
              postalCode: "69001",
              addressRegion: "Rhône",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 45.764,
              longitude: 4.8357,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
                description: "Service d'urgence 24h/24",
              },
            ],
            sameAs: [
              "https://www.facebook.com/chauffagistelyon",
              "https://www.instagram.com/chauffagistelyon",
              "https://twitter.com/chauffagistelyon",
            ],
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 45.764,
                longitude: 4.8357,
              },
              geoRadius: "30000",
            },
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 45.764,
                longitude: 4.8357,
              },
              geoRadius: "30000",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services de chauffage à Lyon",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Dépannage chauffage urgent",
                    description:
                      "Intervention rapide en cas de panne de chauffage. Nos techniciens sont disponibles 24h/24 et 7j/7 pour rétablir votre confort rapidement.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Installation de chaudière",
                    description:
                      "Installation professionnelle de chaudières gaz, fioul, électriques et à condensation à Lyon",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Entretien de chaudière",
                    description: "Entretien annuel obligatoire de chaudières à Lyon et sa région",
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}

