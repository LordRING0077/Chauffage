import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, HelpCircle, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Tarifs chauffagiste | Chauffagiste Lyon",
  description:
    "Découvrez nos tarifs transparents pour tous vos besoins en chauffage à Lyon. Dépannage, entretien, installation de chaudières et pompes à chaleur. Devis gratuit et sans engagement.",
  keywords: [
    "tarifs chauffagiste Lyon",
    "prix dépannage chauffage",
    "coût entretien chaudière",
    "prix installation chaudière Lyon",
    "devis chauffagiste gratuit",
  ],
}

export default function TarifsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Nos tarifs chauffagiste à Lyon
            </h1>
            <p className="mt-4 text-gray-200 md:text-xl">
              Des tarifs transparents et compétitifs, communiqués avant toute intervention
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Tarifs clairs et sans surprise</h2>
            <p className="mt-4 text-gray-500 md:text-lg">
              Nous pratiquons des tarifs transparents et compétitifs. Le prix vous est communiqué avant toute
              intervention, sans surprise.
            </p>
          </div>

          <Tabs defaultValue="depannage" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="depannage">Dépannage</TabsTrigger>
              <TabsTrigger value="entretien">Entretien</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
            </TabsList>

            {/* Dépannage Tab */}
            <TabsContent value="depannage" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Tarifs dépannage chauffage</CardTitle>
                  <CardDescription>Intervention rapide en cas de panne de chauffage, 24h/24 et 7j/7</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg border p-6">
                      <h3 className="mb-4 text-xl font-bold">Dépannage standard</h3>
                      <p className="mb-2 text-3xl font-bold">
                        89€ <span className="text-sm font-normal text-gray-500">TTC</span>
                      </p>
                      <p className="mb-6 text-gray-500">
                        Inclus : Déplacement, diagnostic et première heure de main d'œuvre
                      </p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Intervention dans les 24h</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Diagnostic complet</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Devis gratuit si réparation</span>
                        </li>
                      </ul>
                      <Button asChild className="w-full">
                        <Link href="/contact?service=depannage-standard">Contacter un chauffagiste</Link>
                      </Button>
                    </div>

                    <div className="rounded-lg border border-orange-200 bg-orange-50 p-6">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-xl font-bold">Dépannage urgent</h3>
                        <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-medium text-white">
                          Recommandé
                        </span>
                      </div>
                      <p className="mb-2 text-3xl font-bold">
                        119€ <span className="text-sm font-normal text-gray-500">TTC</span>
                      </p>
                      <p className="mb-6 text-gray-500">
                        Inclus : Déplacement, diagnostic et première heure de main d'œuvre
                      </p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Intervention dans l'heure</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Disponible 24h/24 et 7j/7</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Pas de majoration week-end/jours fériés</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Diagnostic complet</span>
                        </li>
                      </ul>
                      <Button asChild className="w-full">
                        <Link href="/contact?service=depannage-urgent">Contacter un chauffagiste</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8 rounded-lg bg-gray-50 p-6">
                    <div className="flex items-start gap-4">
                      <Info className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                      <div>
                        <h3 className="mb-2 text-lg font-bold">Informations complémentaires</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>Heure supplémentaire : 45€ TTC</li>
                          <li>Petites pièces de rechange (joints, fusibles, etc.) : incluses</li>
                          <li>Pièces détachées : sur devis, avec garantie 2 ans</li>
                          <li>Déplacement offert si réparation effectuée</li>
                          <li>Paiement possible par CB, chèque ou espèces</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <p className="text-sm text-gray-500">
                    * Les prix indiqués sont à titre indicatif et peuvent varier en fonction de la complexité de
                    l'intervention.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Entretien Tab */}
            <TabsContent value="entretien" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contrats d&apos;entretien chaudière</CardTitle>
                  <CardDescription>
                    Entretien annuel obligatoire de votre chaudière avec visite préventive
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-lg border p-6">
                      <h3 className="mb-4 text-xl font-bold">Formule Essentielle</h3>
                      <p className="mb-2 text-3xl font-bold">
                        99€ <span className="text-sm font-normal text-gray-500">TTC/an</span>
                      </p>
                      <p className="mb-6 text-gray-500">Entretien annuel obligatoire</p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Visite annuelle d'entretien</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Nettoyage de la chaudière</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Contrôle des sécurités</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Attestation d'entretien</span>
                        </li>
                      </ul>
                      <Button asChild className="w-full">
                        <Link href="/contact?service=entretien-essentiel">Souscrire</Link>
                      </Button>
                    </div>

                    <div className="rounded-lg border border-orange-200 bg-orange-50 p-6">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-xl font-bold">Formule Confort</h3>
                        <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-medium text-white">
                          Recommandé
                        </span>
                      </div>
                      <p className="mb-2 text-3xl font-bold">
                        149€ <span className="text-sm font-normal text-gray-500">TTC/an</span>
                      </p>
                      <p className="mb-6 text-gray-500">Entretien + dépannage prioritaire</p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Tout ce qui est inclus dans Essentielle</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Dépannage prioritaire</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Déplacement inclus en cas de panne</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Remise de 10% sur les pièces</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Assistance téléphonique 7j/7</span>
                        </li>
                      </ul>
                      <Button asChild className="w-full">
                        <Link href="/contact?service=entretien-confort">Souscrire</Link>
                      </Button>
                    </div>

                    <div className="rounded-lg border p-6">
                      <h3 className="mb-4 text-xl font-bold">Formule Sérénité</h3>
                      <p className="mb-2 text-3xl font-bold">
                        199€ <span className="text-sm font-normal text-gray-500">TTC/an</span>
                      </p>
                      <p className="mb-6 text-gray-500">Entretien + dépannage tout inclus</p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Tout ce qui est inclus dans Confort</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Main d'œuvre incluse en cas de panne</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Remise de 20% sur les pièces</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Intervention sous 4h en cas d'urgence</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Bilan énergétique annuel offert</span>
                        </li>
                      </ul>
                      <Button asChild className="w-full">
                        <Link href="/contact?service=entretien-serenite">Souscrire</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8 rounded-lg bg-gray-50 p-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                      <div>
                        <h3 className="mb-2 text-lg font-bold">Pourquoi souscrire un contrat d&apos;entretien ?</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>L'entretien annuel est obligatoire (décret n°2009-649)</li>
                          <li>Prolonge la durée de vie de votre chaudière</li>
                          <li>Réduit les risques de panne, surtout en hiver</li>
                          <li>Optimise la consommation d'énergie (jusqu'à 12% d'économies)</li>
                          <li>Garantit votre sécurité (prévention des risques d'intoxication au CO)</li>
                          <li>Maintient la garantie constructeur</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <p className="text-sm text-gray-500">
                    * Les contrats d'entretien sont valables pour une durée d'un an, renouvelable. Paiement possible en
                    plusieurs fois sans frais.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Installation Tab */}
            <TabsContent value="installation" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Tarifs installation</CardTitle>
                  <CardDescription>
                    Installation de chaudières, pompes à chaleur et systèmes de chauffage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg border p-6">
                      <h3 className="mb-4 text-xl font-bold">Installation chaudière</h3>
                      <p className="mb-2">À partir de :</p>
                      <ul className="mb-6 space-y-4">
                        <li>
                          <div className="flex items-center justify-between">
                            <span>Chaudière à condensation gaz</span>
                            <span className="font-bold">1 590€ TTC*</span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center justify-between">
                            <span>Chaudière à condensation fioul</span>
                            <span className="font-bold">2 490€ TTC*</span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center justify-between">
                            <span>Chaudière électrique</span>
                            <span className="font-bold">1 290€ TTC*</span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center justify-between">
                            <span>Chaudière basse température</span>
                            <span className="font-bold">1 890€ TTC*</span>
                          </div>
                        </li>
                      </ul>
                      <p className="mb-6 text-sm text-gray-500">
                        * Prix après déduction des aides financières (MaPrimeRénov', CEE). Installation complète avec
                        mise en service et garantie.
                      </p>
                      <Button asChild className="w-full">
                        <Link href="/contact?service=installation-chaudiere">Demander un devis</Link>
                      </Button>
                    </div>

                    <div className="rounded-lg border p-6">
                      <h3 className="mb-4 text-xl font-bold">Pompe à chaleur</h3>
                      <p className="mb-2">À partir de :</p>
                      <ul className="mb-6 space-y-4">
                        <li>
                          <div className="flex items-center justify-between">
                            <span>PAC air/eau</span>
                            <span className="font-bold">7 990€ TTC*</span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center justify-between">
                            <span>PAC air/air</span>
                            <span className="font-bold">4 990€ TTC*</span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center justify-between">
                            <span>PAC hybride (avec chaudière)</span>
                            <span className="font-bold">9 490€ TTC*</span>
                          </div>
                        </li>
                      </ul>
                      <p className="mb-6 text-sm text-gray-500">
                        * Prix après déduction des aides financières (MaPrimeRénov', CEE). Installation complète avec
                        mise en service et garantie.
                      </p>
                      <Button asChild className="w-full">
                        <Link href="/contact?service=installation-pac">Demander un devis</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg border p-6">
                      <h3 className="mb-4 text-xl font-bold">Autres installations</h3>
                      <ul className="mb-6 space-y-4">
                        <li>
                          <div className="flex items-center justify-between">
                            <span>Radiateur (unité)</span>
                            <span className="font-bold">À partir de 290€ TTC</span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center justify-between">
                            <span>Thermostat connecté</span>
                            <span className="font-bold">À partir de 199€ TTC</span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center justify-between">
                            <span>Chauffage au sol (par m²)</span>
                            <span className="font-bold">À partir de 90€ TTC</span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center justify-between">
                            <span>Ballon d'eau chaude</span>
                            <span className="font-bold">À partir de 790€ TTC</span>
                          </div>
                        </li>
                      </ul>
                      <Button asChild className="w-full">
                        <Link href="/contact?service=autres-installations">Demander un devis</Link>
                      </Button>
                    </div>

                    <div className="rounded-lg bg-orange-50 p-6">
                      <h3 className="mb-4 text-xl font-bold">Aides financières</h3>
                      <p className="mb-4 text-gray-700">
                        Pour tous nos services d'installation, nous vous aidons à obtenir toutes les aides financières
                        auxquelles vous avez droit :
                      </p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>MaPrimeRénov' (jusqu'à 4 000€)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Prime Énergie CEE (jusqu'à 4 000€)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>TVA réduite à 5,5%</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Éco-prêt à taux zéro (jusqu'à 15 000€)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Aides locales (Écoréno'v Lyon)</span>
                        </li>
                      </ul>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/aides-financieres">En savoir plus</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8 rounded-lg bg-gray-50 p-6">
                    <div className="flex items-start gap-4">
                      <Info className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                      <div>
                        <h3 className="mb-2 text-lg font-bold">Devis gratuit et personnalisé</h3>
                        <p className="text-gray-600">
                          Nous réalisons un devis gratuit et personnalisé pour toutes nos installations. Nos techniciens
                          se déplacent à votre domicile pour étudier votre projet et vous proposer la solution la plus
                          adaptée à vos besoins et à votre budget. Le devis est détaillé et transparent, sans
                          engagement.
                        </p>
                        <p className="mt-2 text-gray-600">
                          Nous proposons également des facilités de paiement et des solutions de financement adaptées à
                          votre budget.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <p className="text-sm text-gray-500">
                    * Les prix indiqués sont à titre indicatif et peuvent varier en fonction de la configuration de
                    votre logement et des spécificités techniques de l'installation. Un devis précis vous sera établi
                    après visite technique.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="mt-20 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold">Besoin d&apos;un devis personnalisé ?</h2>
                <p className="mt-2">
                  Contactez-nous dès maintenant pour obtenir un devis gratuit et sans engagement. Notre équipe de
                  chauffagistes professionnels est à votre disposition pour répondre à toutes vos questions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-white/90">
                  <Link href="/contact?devis=true">Demander un devis</Link>
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
            "@type": "WebPage",
            name: "Tarifs chauffagiste à Lyon",
            description:
              "Découvrez nos tarifs transparents pour tous vos besoins en chauffage à Lyon. Dépannage, entretien, installation de chaudières et pompes à chaleur.",
            url: "https://www.chauffagiste-lyon.com/tarifs",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "Offer",
                    name: "Dépannage chauffage standard",
                    price: "89.00",
                    priceCurrency: "EUR",
                    description: "Déplacement, diagnostic et première heure de main d'œuvre",
                    availability: "https://schema.org/InStock",
                    url: "https://www.chauffagiste-lyon.com/tarifs#depannage",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "Offer",
                    name: "Entretien chaudière - Formule Essentielle",
                    price: "99.00",
                    priceCurrency: "EUR",
                    description: "Entretien annuel obligatoire",
                    availability: "https://schema.org/InStock",
                    url: "https://www.chauffagiste-lyon.com/tarifs#entretien",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@type": "Offer",
                    name: "Installation chaudière à condensation gaz",
                    price: "1590.00",
                    priceCurrency: "EUR",
                    description: "Installation complète avec mise en service et garantie",
                    availability: "https://schema.org/InStock",
                    url: "https://www.chauffagiste-lyon.com/tarifs#installation",
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

