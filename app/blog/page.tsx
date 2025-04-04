import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Chauffagiste Lyon",
  description:
    "Conseils, astuces et informations sur le chauffage et la plomberie à Lyon. Découvrez nos articles pour entretenir vos installations et réaliser des économies d'énergie.",
  keywords: [
    "blog chauffage Lyon",
    "conseils plomberie Lyon",
    "économies énergie Lyon",
    "entretien chaudière Lyon",
    "astuces chauffage Lyon",
  ],
}

export default function BlogPage() {
  // Cette page sert de passerelle vers le blog WordPress
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Blog & Conseils</h1>
            <p className="mt-4 text-gray-200 md:text-xl">
              Conseils, astuces et informations sur le chauffage et la plomberie à Lyon
            </p>
          </div>
        </div>
      </section>

      {/* Redirect Notice */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Redirection vers notre blog</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Vous allez être redirigé vers notre blog WordPress où vous pourrez découvrir tous nos articles, conseils et
            actualités sur le chauffage et la plomberie à Lyon.
          </p>
          <Button asChild size="lg" className="inline-flex items-center gap-2">
            <a href="https://blog.chauffagiste-lyon.com" target="_blank" rel="noopener noreferrer">
              Accéder au blog <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Featured Articles Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Articles récents</h2>
            <p className="mt-4 text-gray-500 md:text-lg">
              Découvrez nos derniers articles sur le chauffage et la plomberie à Lyon
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Article 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/blog-economie-energie.jpg"
                  alt="Comment économiser sur votre facture de chauffage à Lyon"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                    Économies d&apos;énergie
                  </span>
                  <span>•</span>
                  <span>15 mars 2023</span>
                </div>
                <CardTitle className="line-clamp-2">Comment économiser sur votre facture de chauffage à Lyon</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">
                  Découvrez nos conseils pratiques pour réduire votre consommation d&apos;énergie et économiser sur vos
                  factures de chauffage à Lyon tout au long de l&apos;année.
                </CardDescription>
                <Button asChild variant="link" className="mt-4 px-0 inline-flex items-center gap-2">
                  <a
                    href="https://blog.chauffagiste-lyon.com/economiser-facture-chauffage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lire l&apos;article <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Article 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/blog-chaudiere.jpg"
                  alt="Quand faut-il remplacer sa chaudière à Lyon ?"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                    Chauffage
                  </span>
                  <span>•</span>
                  <span>28 février 2023</span>
                </div>
                <CardTitle className="line-clamp-2">Quand faut-il remplacer sa chaudière à Lyon ?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">
                  Les signes qui indiquent qu&apos;il est temps de remplacer votre chaudière et les avantages
                  d&apos;opter pour un modèle plus récent et économe en énergie.
                </CardDescription>
                <Button asChild variant="link" className="mt-4 px-0 inline-flex items-center gap-2">
                  <a
                    href="https://blog.chauffagiste-lyon.com/remplacer-chaudiere"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lire l&apos;article <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Article 3 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/blog-fuite-eau.jpg"
                  alt="Les gestes simples pour éviter les fuites d'eau à Lyon"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                    Plomberie
                  </span>
                  <span>•</span>
                  <span>10 février 2023</span>
                </div>
                <CardTitle className="line-clamp-2">
                  Les gestes simples pour éviter les fuites d&apos;eau à Lyon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">
                  Apprenez à détecter et prévenir les fuites d&apos;eau dans votre maison à Lyon pour éviter les dégâts
                  et économiser sur votre facture d&apos;eau.
                </CardDescription>
                <Button asChild variant="link" className="mt-4 px-0 inline-flex items-center gap-2">
                  <a
                    href="https://blog.chauffagiste-lyon.com/eviter-fuites-eau"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lire l&apos;article <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="inline-flex items-center gap-2">
              <a href="https://blog.chauffagiste-lyon.com" target="_blank" rel="noopener noreferrer">
                Voir tous les articles <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Besoin d&apos;aide pour votre chauffage à Lyon ?
            </h2>
            <p className="mt-4 text-gray-500 md:text-lg">
              Notre équipe de chauffagistes professionnels est à votre disposition pour tous vos besoins en chauffage et
              plomberie à Lyon et sa région.
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
    </>
  )
}

