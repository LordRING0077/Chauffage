import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Award, Clock, ThumbsUp } from "lucide-react"

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez ACM Chauffage, votre expert en chauffage et plomberie en Île-de-France depuis plus de 15 ans. Une équipe de professionnels qualifiés à votre service.",
  keywords: [
    "entreprise chauffage",
    "plomberie professionnelle",
    "services Île-de-France",
    "chauffagiste certifié",
    "plombier qualifié",
  ],
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              À propos d&apos;ACM Chauffage
            </h1>
            <p className="mt-4 text-gray-200 md:text-xl">
              Votre partenaire de confiance pour tous vos besoins en chauffage et plomberie en Île-de-France
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="L'équipe ACM Chauffage"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Notre histoire</h2>
              <p className="text-gray-500 md:text-lg">
                Fondée en 2008, ACM Chauffage est une entreprise familiale spécialisée dans les services de chauffage et
                plomberie en Île-de-France. Depuis plus de 15 ans, nous mettons notre expertise au service des
                particuliers et professionnels pour garantir leur confort et leur sécurité.
              </p>
              <p className="text-gray-500 md:text-lg">
                Notre mission est simple : fournir des services de qualité, réalisés par des professionnels qualifiés, à
                des prix justes et transparents. Nous nous engageons à utiliser des matériaux et équipements de haute
                qualité pour assurer la durabilité de nos installations.
              </p>
              <p className="text-gray-500 md:text-lg">
                Aujourd&apos;hui, ACM Chauffage compte une équipe de 15 techniciens certifiés, prêts à intervenir
                rapidement dans toute l&apos;Île-de-France pour répondre à vos besoins en chauffage et plomberie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nos valeurs</h2>
            <p className="mt-4 text-gray-500 md:text-lg">Les principes qui guident notre travail au quotidien</p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Value 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-3">
                <ThumbsUp className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Qualité</h3>
              <p className="text-gray-500">
                Nous nous engageons à fournir des services de la plus haute qualité, en utilisant des matériaux et
                équipements fiables et durables. Chaque installation est réalisée avec soin et précision.
              </p>
            </div>

            {/* Value 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-3">
                <Clock className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Réactivité</h3>
              <p className="text-gray-500">
                Nous comprenons l&apos;importance d&apos;une intervention rapide, surtout en cas d&apos;urgence. Notre
                équipe est disponible 7j/7 pour les dépannages urgents et nous nous engageons à respecter nos délais
                d&apos;intervention.
              </p>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-3">
                <Award className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Professionnalisme</h3>
              <p className="text-gray-500">
                Nos techniciens sont certifiés et régulièrement formés aux dernières technologies. Nous travaillons avec
                rigueur et transparence, en respectant les normes et réglementations en vigueur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Notre équipe</h2>
            <p className="mt-4 text-gray-500 md:text-lg">Des professionnels qualifiés et passionnés à votre service</p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Jean Dupont - Fondateur"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Jean Dupont</h3>
              <p className="mb-2 text-blue-700">Fondateur & Directeur</p>
              <p className="text-gray-500">
                Plus de 25 ans d&apos;expérience dans le domaine du chauffage et de la plomberie.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Marie Martin - Responsable technique"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Marie Martin</h3>
              <p className="mb-2 text-blue-700">Responsable technique</p>
              <p className="text-gray-500">
                Ingénieure en génie climatique, experte en systèmes de chauffage écologiques.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Pierre Leroy - Chef d'équipe"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Pierre Leroy</h3>
              <p className="mb-2 text-blue-700">Chef d&apos;équipe</p>
              <p className="text-gray-500">
                15 ans d&apos;expérience, spécialiste en installation et dépannage de chaudières.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Sophie Bernard - Service client"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Sophie Bernard</h3>
              <p className="mb-2 text-blue-700">Service client</p>
              <p className="text-gray-500">
                À votre écoute pour organiser vos rendez-vous et répondre à vos questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nos certifications</h2>
            <p className="mt-4 text-gray-500 md:text-lg">Des garanties de qualité et de professionnalisme</p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Certification 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-24 w-24">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Certification RGE"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold">Certification RGE</h3>
              <p className="text-gray-500">
                Reconnu Garant de l&apos;Environnement pour nos installations écologiques.
              </p>
            </div>

            {/* Certification 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-24 w-24">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Qualibat"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold">Qualibat</h3>
              <p className="text-gray-500">
                Certification attestant de nos compétences techniques et de notre sérieux.
              </p>
            </div>

            {/* Certification 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-24 w-24">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="PG"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold">Professionnel du Gaz</h3>
              <p className="text-gray-500">
                Habilitation pour l&apos;installation et la maintenance des équipements à gaz.
              </p>
            </div>

            {/* Certification 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-24 w-24">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Qualifelec"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold">Qualifelec</h3>
              <p className="text-gray-500">Certification pour les installations électriques liées au chauffage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 rounded-lg bg-blue-900 p-8 text-white sm:grid-cols-2 lg:grid-cols-4">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold">15+</span>
              <span className="mt-2 text-gray-200">Années d&apos;expérience</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold">5000+</span>
              <span className="mt-2 text-gray-200">Clients satisfaits</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold">15</span>
              <span className="mt-2 text-gray-200">Techniciens qualifiés</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold">24/7</span>
              <span className="mt-2 text-gray-200">Service d&apos;urgence</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Prêt à travailler avec nous ?</h2>
            <p className="mt-4 text-gray-500 md:text-lg">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en chauffage et plomberie. Notre équipe
              est à votre disposition pour vous conseiller et vous proposer les meilleures solutions.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact?devis=true">Demander un devis</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org structured data for organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ACM Chauffage",
            url: "https://www.acm-chauffage.fr",
            logo: "https://www.acm-chauffage.fr/logo.svg",
            foundingDate: "2008",
            founders: [
              {
                "@type": "Person",
                name: "Jean Dupont",
              },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Avenue de Paris",
              addressLocality: "Paris",
              postalCode: "75001",
              addressCountry: "FR",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+33123456789",
              contactType: "customer service",
              availableLanguage: "French",
            },
            sameAs: [
              "https://www.facebook.com/acmchauffage",
              "https://www.instagram.com/acmchauffage",
              "https://twitter.com/acmchauffage",
            ],
          }),
        }}
      />
    </>
  )
}

