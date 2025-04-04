import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame, Droplet, PenToolIcon as Tool, Wrench, Home, ThermometerSnowflake } from "lucide-react"

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Découvrez nos services professionnels de chauffage et plomberie en Île-de-France. Installation, entretien et dépannage de chaudières, radiateurs et systèmes de plomberie.",
  keywords: [
    "services chauffage",
    "plomberie Île-de-France",
    "installation chaudière",
    "dépannage chauffage",
    "entretien chaudière",
  ],
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Nos Services</h1>
            <p className="mt-4 text-gray-200 md:text-xl">
              Des solutions complètes pour tous vos besoins en chauffage et plomberie en Île-de-France
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Chauffage */}
      <section id="chauffage" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Services de chauffage</h2>
            <p className="mt-4 text-gray-500 md:text-lg">
              Des solutions de chauffage efficaces et économiques pour votre confort
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Flame className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle>Installation de chaudières</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Installation professionnelle de chaudières gaz, fioul, électriques et à condensation. Nous vous
                  conseillons sur le modèle le plus adapté à vos besoins et à votre budget.
                </CardDescription>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Chaudières à condensation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Chaudières à gaz</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Chaudières électriques</span>
                  </li>
                </ul>
                <div className="relative mt-6 h-40 w-full overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Installation de chaudière"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <ThermometerSnowflake className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle>Installation de radiateurs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Installation et remplacement de radiateurs pour un chauffage optimal de votre logement. Nous proposons
                  une large gamme de modèles adaptés à tous les intérieurs.
                </CardDescription>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Radiateurs à inertie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Radiateurs électriques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Radiateurs à eau chaude</span>
                  </li>
                </ul>
                <div className="relative mt-6 h-40 w-full overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Installation de radiateurs"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Service Card 3 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Home className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle>Chauffage au sol</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Installation de systèmes de chauffage au sol pour un confort optimal et une répartition homogène de la
                  chaleur dans votre logement.
                </CardDescription>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Chauffage hydraulique</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Chauffage électrique</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Rénovation et construction neuve</span>
                  </li>
                </ul>
                <div className="relative mt-6 h-40 w-full overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Chauffage au sol"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section - Entretien et Dépannage */}
      <section id="entretien" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Entretien et dépannage</h2>
            <p className="mt-4 text-gray-500 md:text-lg">
              Des services d&apos;entretien régulier et de dépannage rapide pour assurer le bon fonctionnement de vos
              installations
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Service Card 1 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Tool className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle>Entretien de chaudière</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  L&apos;entretien annuel de votre chaudière est obligatoire et essentiel pour garantir sa performance
                  et sa longévité. Nos techniciens certifiés assurent un service complet et professionnel.
                </CardDescription>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Vérification complète du système</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Nettoyage des composants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Contrôle des émissions de CO2</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Délivrance d&apos;un certificat d&apos;entretien</span>
                  </li>
                </ul>
                <div className="relative mt-6 h-40 w-full overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Entretien de chaudière"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Wrench className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle>Dépannage d&apos;urgence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Une panne de chauffage ou un problème de plomberie ? Notre équipe intervient rapidement pour
                  diagnostiquer et réparer votre installation, 7j/7 en cas d&apos;urgence.
                </CardDescription>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Intervention rapide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Diagnostic précis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Réparation efficace</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Service 7j/7 pour les urgences</span>
                  </li>
                </ul>
                <div className="relative mt-6 h-40 w-full overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Dépannage d'urgence"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section - Plomberie */}
      <section id="plomberie" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Services de plomberie</h2>
            <p className="mt-4 text-gray-500 md:text-lg">Des solutions complètes pour tous vos besoins en plomberie</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Droplet className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle>Dépannage de plomberie</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Intervention rapide pour tous vos problèmes de plomberie : fuites, canalisations bouchées, robinets
                  qui gouttent, etc. Nos plombiers expérimentés assurent un service de qualité.
                </CardDescription>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Réparation de fuites</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Débouchage de canalisations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Réparation de robinetterie</span>
                  </li>
                </ul>
                <div className="relative mt-6 h-40 w-full overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Dépannage de plomberie"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Droplet className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle>Installation sanitaire</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Installation et remplacement de tous types d&apos;équipements sanitaires : lavabos, douches,
                  baignoires, WC, etc. Nous vous accompagnons dans le choix des équipements adaptés à vos besoins.
                </CardDescription>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Installation de salles de bain</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Remplacement de sanitaires</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Mise aux normes PMR</span>
                  </li>
                </ul>
                <div className="relative mt-6 h-40 w-full overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Installation sanitaire"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Service Card 3 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Droplet className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle>Rénovation de plomberie</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Rénovation complète de votre installation de plomberie : remplacement de tuyauterie, mise aux normes,
                  optimisation du réseau d&apos;eau. Nous intervenons dans les logements anciens comme récents.
                </CardDescription>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Remplacement de tuyauterie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Mise aux normes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Optimisation du réseau d&apos;eau</span>
                  </li>
                </ul>
                <div className="relative mt-6 h-40 w-full overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Rénovation de plomberie"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Besoin d&apos;un service de chauffage ou plomberie ?
            </h2>
            <p className="mt-4 text-gray-200 md:text-lg">
              Contactez-nous dès aujourd&apos;hui pour obtenir un devis gratuit et sans engagement. Notre équipe
              d&apos;experts est à votre disposition pour répondre à toutes vos questions.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href="/contact?devis=true">Demander un devis</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org structured data for services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "Service",
                position: 1,
                name: "Installation de chaudières",
                description: "Installation professionnelle de chaudières gaz, fioul, électriques et à condensation.",
                provider: {
                  "@type": "LocalBusiness",
                  name: "ACM Chauffage",
                },
              },
              {
                "@type": "Service",
                position: 2,
                name: "Entretien de chaudière",
                description:
                  "L'entretien annuel de votre chaudière est obligatoire et essentiel pour garantir sa performance et sa longévité.",
                provider: {
                  "@type": "LocalBusiness",
                  name: "ACM Chauffage",
                },
              },
              {
                "@type": "Service",
                position: 3,
                name: "Dépannage de plomberie",
                description:
                  "Intervention rapide pour tous vos problèmes de plomberie : fuites, canalisations bouchées, robinets qui gouttent, etc.",
                provider: {
                  "@type": "LocalBusiness",
                  name: "ACM Chauffage",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}

