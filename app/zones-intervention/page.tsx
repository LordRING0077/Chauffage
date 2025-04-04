import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ArrowRight, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Zones d'intervention | Chauffagiste Lyon",
  description:
    "Découvrez les zones d'intervention de nos chauffagistes à Lyon et sa région. Service de dépannage chauffage urgent disponible 24h/24 et 7j/7 dans tout le département du Rhône.",
  keywords: [
    "chauffagiste Lyon",
    "zones intervention chauffagiste",
    "dépannage chauffage Lyon",
    "chauffagiste Villeurbanne",
    "chauffagiste Vénissieux",
    "chauffagiste Rhône",
  ],
}

export default function ZonesInterventionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Zones d&apos;intervention
            </h1>
            <p className="mt-4 text-gray-200 md:text-xl">
              Nos chauffagistes interviennent rapidement dans tout Lyon et sa périphérie
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Map */}
            <div className="relative h-[400px] overflow-hidden rounded-lg md:h-full">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Carte des zones d'intervention de Chauffagiste Lyon"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block rounded-full bg-orange-600 px-3 py-1 text-sm font-medium text-white">
                  Intervention dans tout le département du Rhône
                </span>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight">Intervention rapide à Lyon et sa région</h2>
              <p className="mb-6 text-gray-500">
                Notre équipe de chauffagistes professionnels intervient rapidement dans tout Lyon et sa périphérie pour
                tous vos besoins en chauffage : dépannage urgent, installation, entretien et réparation de chaudières.
              </p>
              <p className="mb-6 text-gray-500">
                Nous garantissons une intervention dans l&apos;heure suivant votre appel pour les situations
                d&apos;urgence, 24h/24 et 7j/7, même les week-ends et jours fériés sans majoration de tarif.
              </p>

              <div className="mb-8 rounded-lg bg-orange-50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold">Besoin d&apos;un dépannage urgent ?</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Notre service d&apos;urgence est disponible 24h/24 et 7j/7 dans toute la région lyonnaise.
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="tel:+33478123456">Appeler maintenant : 04 78 12 34 56</Link>
                </Button>
              </div>

              <h3 className="mb-4 text-xl font-bold">Pourquoi choisir notre service local ?</h3>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-orange-600" />
                  <span>Connaissance parfaite du territoire lyonnais et de ses spécificités</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-orange-600" />
                  <span>Délais d&apos;intervention réduits grâce à notre présence locale</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-orange-600" />
                  <span>Techniciens disponibles dans tous les secteurs de Lyon et sa périphérie</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Lyon Arrondissements */}
          <div className="mt-20">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-center">Lyon et ses arrondissements</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((arrondissement) => (
                <Card key={arrondissement} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold">
                        Lyon {arrondissement}
                        {arrondissement === 1 ? "er" : "ème"}
                      </h3>
                      <MapPin className="h-5 w-5 text-orange-600" />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Intervention rapide dans le {arrondissement}
                      {arrondissement === 1 ? "er" : "ème"} arrondissement de Lyon
                    </p>
                    <Button asChild variant="link" className="mt-2 p-0">
                      <Link href={`/chauffagiste-lyon-${arrondissement}`} className="flex items-center gap-1">
                        En savoir plus <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Périphérie de Lyon */}
          <div className="mt-20">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-center">Périphérie de Lyon</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                "Villeurbanne",
                "Vénissieux",
                "Saint-Priest",
                "Bron",
                "Vaulx-en-Velin",
                "Caluire-et-Cuire",
                "Meyzieu",
                "Oullins",
                "Décines-Charpieu",
                "Saint-Genis-Laval",
                "Tassin-la-Demi-Lune",
                "Rillieux-la-Pape",
              ].map((ville) => (
                <Card key={ville} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold">{ville}</h3>
                      <MapPin className="h-5 w-5 text-orange-600" />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Intervention rapide à {ville}</p>
                    <Button asChild variant="link" className="mt-2 p-0">
                      <Link
                        href={`/chauffagiste-${ville.toLowerCase().replace(/-/g, "-").replace(/ /g, "-")}`}
                        className="flex items-center gap-1"
                      >
                        En savoir plus <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold">Vous ne trouvez pas votre commune ?</h2>
                <p className="mt-2">
                  Contactez-nous pour vérifier si elle est dans notre zone d&apos;intervention. Notre équipe de
                  chauffagistes couvre une large zone autour de Lyon.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-white/90">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="tel:+33478123456">Appeler maintenant</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Chauffagiste Lyon",
            image: "https://www.chauffagiste-lyon.com/logo.svg",
            telephone: "+33478123456",
            url: "https://www.chauffagiste-lyon.com/zones-intervention",
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
            areaServed: [
              {
                "@type": "City",
                name: "Lyon",
                sameAs: "https://fr.wikipedia.org/wiki/Lyon",
              },
              {
                "@type": "City",
                name: "Villeurbanne",
                sameAs: "https://fr.wikipedia.org/wiki/Villeurbanne",
              },
              {
                "@type": "City",
                name: "Vénissieux",
                sameAs: "https://fr.wikipedia.org/wiki/Vénissieux",
              },
              {
                "@type": "City",
                name: "Saint-Priest",
                sameAs: "https://fr.wikipedia.org/wiki/Saint-Priest",
              },
            ],
            description:
              "Zones d'intervention de nos chauffagistes à Lyon et sa région. Service de dépannage chauffage urgent disponible 24h/24 et 7j/7 dans tout le département du Rhône.",
          }),
        }}
      />
    </>
  )
}

