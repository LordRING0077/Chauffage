import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "Découvrez les avis de nos clients satisfaits sur nos services de chauffage et plomberie en Île-de-France. Installation, entretien et dépannage par des professionnels qualifiés.",
  keywords: [
    "témoignages clients",
    "avis chauffagiste",
    "avis plombier",
    "satisfaction client",
    "chauffage Île-de-France",
  ],
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Témoignages clients
            </h1>
            <p className="mt-4 text-gray-200 md:text-xl">Découvrez ce que nos clients disent de nos services</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-2 pb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 italic text-gray-700">
                "Service impeccable ! L&apos;équipe d&apos;ACM Chauffage a remplacé ma chaudière en une journée.
                Professionnels, ponctuels et travail soigné. Je recommande vivement."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Sophie Martin"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Sophie Martin</p>
                  <p className="text-sm text-gray-500">Paris 15e</p>
                  <p className="text-sm text-gray-500">Installation de chaudière</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-2 pb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 italic text-gray-700">
                "J&apos;ai fait appel à ACM Chauffage pour un dépannage urgent suite à une fuite d&apos;eau.
                Intervention rapide et efficace. Merci pour votre réactivité !"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Thomas Dubois"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Thomas Dubois</p>
                  <p className="text-sm text-gray-500">Neuilly-sur-Seine</p>
                  <p className="text-sm text-gray-500">Dépannage plomberie</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-2 pb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 italic text-gray-700">
                "Entreprise sérieuse et professionnelle. Installation complète de ma salle de bain avec un résultat
                impeccable. Je suis très satisfait du rapport qualité-prix."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Laurent Petit"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Laurent Petit</p>
                  <p className="text-sm text-gray-500">Boulogne-Billancourt</p>
                  <p className="text-sm text-gray-500">Rénovation salle de bain</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-2 pb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 italic text-gray-700">
                "Je fais appel à ACM Chauffage depuis plusieurs années pour l&apos;entretien annuel de ma chaudière.
                Service toujours impeccable, techniciens compétents et ponctuels. Je recommande !"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Marie Durand"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Marie Durand</p>
                  <p className="text-sm text-gray-500">Versailles</p>
                  <p className="text-sm text-gray-500">Entretien de chaudière</p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-2 pb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 italic text-gray-700">
                "Excellente prestation pour l&apos;installation de notre nouveau système de chauffage. Conseils
                pertinents, devis détaillé et respect des délais. Un grand merci à toute l&apos;équipe !"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Philippe Moreau"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Philippe Moreau</p>
                  <p className="text-sm text-gray-500">Saint-Germain-en-Laye</p>
                  <p className="text-sm text-gray-500">Installation système de chauffage</p>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-2 pb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 italic text-gray-700">
                "Intervention rapide et efficace pour un problème de fuite dans ma cuisine. Technicien compétent et
                sympathique. Prix raisonnable. Je n&apos;hésiterai pas à faire appel à eux à nouveau."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Isabelle Leroy"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Isabelle Leroy</p>
                  <p className="text-sm text-gray-500">Créteil</p>
                  <p className="text-sm text-gray-500">Réparation fuite d&apos;eau</p>
                </div>
              </div>
            </div>
          </div>

          {/* More Testimonials */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Testimonial 7 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-2 pb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 italic text-gray-700">
                "En tant que syndic de copropriété, nous faisons régulièrement appel à ACM Chauffage pour
                l&apos;entretien des installations de nos immeubles. Service fiable, réactif et de qualité.
                Collaboration parfaite depuis plus de 5 ans."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Marc Bertrand"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Marc Bertrand</p>
                  <p className="text-sm text-gray-500">Syndic de copropriété, Paris</p>
                  <p className="text-sm text-gray-500">Entretien chauffage collectif</p>
                </div>
              </div>
            </div>

            {/* Testimonial 8 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-2 pb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 italic text-gray-700">
                "Nous avons fait appel à ACM Chauffage pour l&apos;installation d&apos;un système de chauffage au sol
                dans notre maison. Le résultat est à la hauteur de nos attentes : confort optimal et économies
                d&apos;énergie. Merci pour votre professionnalisme !"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Famille Rousseau"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Famille Rousseau</p>
                  <p className="text-sm text-gray-500">Rueil-Malmaison</p>
                  <p className="text-sm text-gray-500">Installation chauffage au sol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Témoignages vidéo</h2>
            <p className="mt-4 text-gray-500 md:text-lg">Découvrez les témoignages de nos clients en vidéo</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Video Testimonial 1 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative aspect-video w-full">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Témoignage vidéo - Installation de chaudière"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white/80 p-4">
                    <svg className="h-12 w-12 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Installation d&apos;une chaudière à condensation</h3>
                <p className="mb-4 text-gray-500">
                  M. et Mme Dupont témoignent de leur expérience avec ACM Chauffage pour l&apos;installation de leur
                  nouvelle chaudière à condensation.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="M. et Mme Dupont"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">M. et Mme Dupont</p>
                    <p className="text-sm text-gray-500">Levallois-Perret</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Testimonial 2 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative aspect-video w-full">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Témoignage vidéo - Rénovation salle de bain"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white/80 p-4">
                    <svg className="h-12 w-12 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Rénovation complète d&apos;une salle de bain</h3>
                <p className="mb-4 text-gray-500">
                  Mme Legrand nous parle de la rénovation de sa salle de bain réalisée par ACM Chauffage, de la
                  conception à la réalisation.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Mme Legrand"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Mme Legrand</p>
                    <p className="text-sm text-gray-500">Suresnes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Convaincu par nos services ?</h2>
            <p className="mt-4 text-gray-200 md:text-lg">
              Rejoignez nos clients satisfaits et bénéficiez de services de chauffage et plomberie de qualité
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

      {/* Schema.org structured data for reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ACM Chauffage",
            image: "https://www.acm-chauffage.fr/logo.svg",
            url: "https://www.acm-chauffage.fr",
            telephone: "+33123456789",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Avenue de Paris",
              addressLocality: "Paris",
              postalCode: "75001",
              addressCountry: "FR",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "127",
            },
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Sophie Martin",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
                datePublished: "2023-03-15",
                reviewBody:
                  "Service impeccable ! L'équipe d'ACM Chauffage a remplacé ma chaudière en une journée. Professionnels, ponctuels et travail soigné. Je recommande vivement.",
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Thomas Dubois",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
                datePublished: "2023-02-20",
                reviewBody:
                  "J'ai fait appel à ACM Chauffage pour un dépannage urgent suite à une fuite d'eau. Intervention rapide et efficace. Merci pour votre réactivité !",
              },
            ],
          }),
        }}
      />
    </>
  )
}

