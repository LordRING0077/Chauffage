import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Questions fréquentes | Chauffagiste Lyon",
  description:
    "Retrouvez les réponses à toutes vos questions sur nos services de chauffage et plomberie à Lyon. Dépannage, installation, entretien de chaudières et pompes à chaleur.",
  keywords: [
    "FAQ chauffagiste Lyon",
    "questions chauffage",
    "entretien chaudière obligatoire",
    "dépannage chauffage Lyon",
    "installation chaudière Lyon",
  ],
}

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Questions fréquentes
            </h1>
            <p className="mt-4 text-gray-200 md:text-xl">
              Retrouvez les réponses à toutes vos questions sur nos services de chauffage à Lyon
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="rounded-lg bg-orange-50 p-6">
                  <h2 className="mb-4 text-xl font-bold">Besoin d&apos;aide ?</h2>
                  <p className="mb-6 text-gray-600">
                    Vous ne trouvez pas la réponse à votre question ? Contactez-nous directement, nous serons ravis de
                    vous aider.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-orange-600" />
                      <a href="tel:+33478123456" className="text-orange-600 hover:underline">
                        04 78 12 34 56
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-orange-600" />
                      <a href="mailto:contact@chauffagiste-lyon.fr" className="text-orange-600 hover:underline">
                        contact@chauffagiste-lyon.fr
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <h2 className="mb-4 text-xl font-bold">Catégories</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#depannage" className="flex items-center gap-2 text-gray-600 hover:text-orange-600">
                        <ArrowRight className="h-4 w-4" />
                        <span>Dépannage chauffage</span>
                      </a>
                    </li>
                    <li>
                      <a href="#installation" className="flex items-center gap-2 text-gray-600 hover:text-orange-600">
                        <ArrowRight className="h-4 w-4" />
                        <span>Installation chaudière</span>
                      </a>
                    </li>
                    <li>
                      <a href="#entretien" className="flex items-center gap-2 text-gray-600 hover:text-orange-600">
                        <ArrowRight className="h-4 w-4" />
                        <span>Entretien chaudière</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pompe-chaleur" className="flex items-center gap-2 text-gray-600 hover:text-orange-600">
                        <ArrowRight className="h-4 w-4" />
                        <span>Pompe à chaleur</span>
                      </a>
                    </li>
                    <li>
                      <a href="#financement" className="flex items-center gap-2 text-gray-600 hover:text-orange-600">
                        <ArrowRight className="h-4 w-4" />
                        <span>Financement et aides</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="md:col-span-2">
              <h2 id="depannage" className="mb-6 text-2xl font-bold">
                Dépannage chauffage
              </h2>
              <Accordion type="single" collapsible className="mb-12">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Dans quel délai intervenez-vous pour un dépannage de chauffage à Lyon ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Nous intervenons dans l&apos;heure suivant votre appel pour les situations d&apos;urgence à Lyon
                      et ses environs. Nos chauffagistes sont disponibles 24h/24 et 7j/7, même les week-ends et jours
                      fériés sans majoration de tarif.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Quels sont vos tarifs pour un dépannage de chauffage ?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Nos tarifs de dépannage chauffage débutent à partir de 89€ TTC, incluant le déplacement, le
                      diagnostic et la première heure de main d&apos;œuvre. Le prix exact vous est communiqué avant
                      toute intervention, sans surprise. Nous n&apos;appliquons pas de majoration pour les interventions
                      en soirée, le week-end ou les jours fériés.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Ma chaudière ne s&apos;allume plus, que faire avant d&apos;appeler un chauffagiste ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Avant d&apos;appeler un chauffagiste, vous pouvez vérifier quelques points simples :
                    </p>
                    <ul className="mt-2 list-disc pl-6 text-gray-600">
                      <li>Vérifiez que l&apos;alimentation électrique de la chaudière est bien branchée</li>
                      <li>Contrôlez la pression d&apos;eau (elle doit être entre 1 et 1,5 bar)</li>
                      <li>Assurez-vous que le thermostat est bien réglé et en mode chauffage</li>
                      <li>Vérifiez que le robinet de gaz est bien ouvert</li>
                      <li>Essayez de réinitialiser la chaudière en appuyant sur le bouton reset</li>
                    </ul>
                    <p className="mt-2 text-gray-600">
                      Si malgré ces vérifications votre chaudière ne fonctionne toujours pas, contactez-nous pour une
                      intervention rapide.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 id="installation" className="mb-6 text-2xl font-bold">
                Installation chaudière
              </h2>
              <Accordion type="single" collapsible className="mb-12">
                <AccordionItem value="item-4">
                  <AccordionTrigger>Quelles marques de chaudières installez-vous ?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Nous installons et réparons toutes les grandes marques de chaudières : Saunier Duval, Frisquet,
                      Chaffoteaux, ELM Leblanc, Vaillant, De Dietrich, Viessmann, Atlantic, etc. Nous vous conseillons
                      la marque la plus adaptée à vos besoins et à votre budget.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Quel est le délai pour l&apos;installation d&apos;une nouvelle chaudière ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Le délai d&apos;installation d&apos;une nouvelle chaudière varie généralement entre 1 et 3
                      semaines après validation du devis, en fonction de la disponibilité du modèle choisi et de notre
                      planning. Pour une installation standard, comptez une journée de travail. Pour des installations
                      plus complexes (changement d&apos;énergie, modification importante du système), cela peut prendre
                      2 à 3 jours.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Quels sont les signes indiquant qu&apos;il faut remplacer ma chaudière ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Plusieurs signes peuvent indiquer qu&apos;il est temps de remplacer votre chaudière :
                    </p>
                    <ul className="mt-2 list-disc pl-6 text-gray-600">
                      <li>Âge supérieur à 15 ans</li>
                      <li>Pannes fréquentes et coûts de réparation élevés</li>
                      <li>Consommation excessive d&apos;énergie</li>
                      <li>Bruit anormal pendant le fonctionnement</li>
                      <li>Fuite d&apos;eau ou de gaz</li>
                      <li>Flamme jaune au lieu de bleue (pour les chaudières à gaz)</li>
                      <li>Difficulté à maintenir une température constante</li>
                    </ul>
                    <p className="mt-2 text-gray-600">
                      Nos techniciens peuvent réaliser un diagnostic complet pour vous conseiller sur la nécessité
                      d&apos;un remplacement.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 id="entretien" className="mb-6 text-2xl font-bold">
                Entretien chaudière
              </h2>
              <Accordion type="single" collapsible className="mb-12">
                <AccordionItem value="item-7">
                  <AccordionTrigger>L&apos;entretien annuel de ma chaudière est-il obligatoire ?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Oui, l&apos;entretien annuel est obligatoire pour toutes les chaudières dont la puissance est
                      comprise entre 4 et 400 kW (décret n°2009-649). Cet entretien permet de garantir la sécurité,
                      d&apos;optimiser les performances et de réduire la consommation énergétique. En cas de non-respect
                      de cette obligation, vous risquez :
                    </p>
                    <ul className="mt-2 list-disc pl-6 text-gray-600">
                      <li>Une amende pouvant aller jusqu&apos;à 1500€</li>
                      <li>La non-prise en charge par votre assurance en cas de sinistre</li>
                      <li>L&apos;annulation de la garantie constructeur</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>Que comprend l&apos;entretien annuel d&apos;une chaudière ?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">L&apos;entretien annuel d&apos;une chaudière comprend :</p>
                    <ul className="mt-2 list-disc pl-6 text-gray-600">
                      <li>Nettoyage complet de la chaudière (corps de chauffe, brûleur, veilleuse)</li>
                      <li>Vérification des dispositifs de sécurité</li>
                      <li>Contrôle de la combustion et mesure du taux de CO</li>
                      <li>Vérification de l&apos;étanchéité des circuits</li>
                      <li>Contrôle de la pression d&apos;eau</li>
                      <li>Vérification du circulateur</li>
                      <li>Contrôle du vase d&apos;expansion</li>
                      <li>Réglage optimal de la chaudière</li>
                      <li>Conseils d&apos;utilisation</li>
                      <li>Délivrance d&apos;une attestation d&apos;entretien</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>
                    Quelle est la différence entre un contrat d&apos;entretien et un simple entretien annuel ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Un simple entretien annuel comprend uniquement la visite obligatoire annuelle avec les opérations
                      de maintenance de base. Un contrat d&apos;entretien, quant à lui, inclut non seulement
                      l&apos;entretien annuel, mais aussi des avantages supplémentaires comme :
                    </p>
                    <ul className="mt-2 list-disc pl-6 text-gray-600">
                      <li>La priorité en cas de panne</li>
                      <li>Des tarifs préférentiels sur les déplacements et pièces de rechange</li>
                      <li>Un service d&apos;assistance téléphonique</li>
                      <li>
                        Dans certains contrats, la main d&apos;œuvre et/ou les pièces de rechange peuvent être incluses
                      </li>
                    </ul>
                    <p className="mt-2 text-gray-600">
                      Nous proposons différentes formules de contrats d&apos;entretien adaptées à vos besoins, à partir
                      de 99€ TTC par an.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 id="pompe-chaleur" className="mb-6 text-2xl font-bold">
                Pompe à chaleur
              </h2>
              <Accordion type="single" collapsible className="mb-12">
                <AccordionItem value="item-10">
                  <AccordionTrigger>
                    Quels sont les avantages d&apos;une pompe à chaleur par rapport à une chaudière traditionnelle ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Les pompes à chaleur présentent plusieurs avantages par rapport aux chaudières traditionnelles :
                    </p>
                    <ul className="mt-2 list-disc pl-6 text-gray-600">
                      <li>
                        Économies d&apos;énergie importantes (jusqu&apos;à 70% d&apos;économies sur votre facture de
                        chauffage)
                      </li>
                      <li>Impact environnemental réduit (utilisation d&apos;énergies renouvelables)</li>
                      <li>Possibilité de chauffer en hiver et de rafraîchir en été (pour certains modèles)</li>
                      <li>Durée de vie plus longue (environ 20 ans contre 15 ans pour une chaudière)</li>
                      <li>Éligibilité à de nombreuses aides financières (MaPrimeRénov', CEE, TVA réduite, etc.)</li>
                      <li>Fonctionnement silencieux et sécurisé</li>
                    </ul>
                    <p className="mt-2 text-gray-600">
                      Nos experts peuvent vous conseiller sur le type de pompe à chaleur le plus adapté à votre logement
                      et à vos besoins.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                  <AccordionTrigger>
                    Quel est le coût d&apos;installation d&apos;une pompe à chaleur à Lyon ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Le coût d&apos;installation d&apos;une pompe à chaleur à Lyon varie généralement entre 8 000€ et
                      15 000€ TTC, selon le type de pompe à chaleur, la puissance nécessaire et la complexité de
                      l&apos;installation. Cependant, de nombreuses aides financières peuvent réduire considérablement
                      cet investissement :
                    </p>
                    <ul className="mt-2 list-disc pl-6 text-gray-600">
                      <li>MaPrimeRénov' : jusqu&apos;à 4 000€</li>
                      <li>Prime Énergie (CEE) : entre 2 000€ et 4 000€</li>
                      <li>TVA réduite à 5,5%</li>
                      <li>Éco-prêt à taux zéro : jusqu&apos;à 15 000€</li>
                    </ul>
                    <p className="mt-2 text-gray-600">
                      Nous vous accompagnons dans toutes les démarches pour obtenir ces aides et proposons également des
                      solutions de financement adaptées.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                  <AccordionTrigger>Une pompe à chaleur est-elle adaptée au climat de Lyon ?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Oui, les pompes à chaleur modernes sont parfaitement adaptées au climat de Lyon. Même si les
                      hivers peuvent être froids dans la région lyonnaise, les pompes à chaleur actuelles fonctionnent
                      efficacement jusqu&apos;à -20°C pour certains modèles. Pour le climat spécifique de Lyon, nous
                      recommandons :
                    </p>
                    <ul className="mt-2 list-disc pl-6 text-gray-600">
                      <li>Des pompes à chaleur air/eau avec un COP (Coefficient de Performance) élevé</li>
                      <li>Des modèles adaptés aux basses températures</li>
                      <li>
                        Éventuellement un système hybride (pompe à chaleur + chaudière d&apos;appoint) pour les périodes
                        de grand froid
                      </li>
                    </ul>
                    <p className="mt-2 text-gray-600">
                      Nos techniciens réalisent une étude thermique précise de votre logement pour dimensionner
                      correctement votre installation et garantir son efficacité tout au long de l&apos;année.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 id="financement" className="mb-6 text-2xl font-bold">
                Financement et aides
              </h2>
              <Accordion type="single" collapsible className="mb-12">
                <AccordionItem value="item-13">
                  <AccordionTrigger>
                    Proposez-vous des facilités de paiement pour l&apos;installation d&apos;une nouvelle chaudière ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Oui, nous proposons plusieurs solutions de financement adaptées à votre budget. Nous vous aidons
                      également à obtenir toutes les aides financières auxquelles vous avez droit : MaPrimeRénov', prime
                      énergie (CEE), TVA réduite, éco-prêt à taux zéro, etc.
                    </p>
                    <p className="mt-2 text-gray-600">
                      Nous pouvons vous proposer des paiements échelonnés sans frais pour certaines installations, ainsi
                      que des solutions de financement à taux avantageux via nos partenaires bancaires. N&apos;hésitez
                      pas à nous demander un plan de financement personnalisé lors de l&apos;établissement de votre
                      devis.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-14">
                  <AccordionTrigger>
                    Quelles sont les aides financières disponibles pour remplacer ma chaudière à Lyon ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Plusieurs aides financières sont disponibles pour le remplacement de votre chaudière à Lyon :
                    </p>
                    <ul className="mt-2 list-disc pl-6 text-gray-600">
                      <li>
                        <strong>MaPrimeRénov'</strong> : jusqu&apos;à 4 000€ selon vos revenus et le type
                        d&apos;équipement
                      </li>
                      <li>
                        <strong>Prime Énergie (CEE)</strong> : entre 600€ et 1 200€ pour une chaudière à condensation
                      </li>
                      <li>
                        <strong>TVA réduite à 5,5%</strong> sur l&apos;équipement et l&apos;installation
                      </li>
                      <li>
                        <strong>Éco-prêt à taux zéro</strong> : jusqu&apos;à 15 000€ remboursables sur 15 ans
                      </li>
                      <li>
                        <strong>Aides locales</strong> : la métropole de Lyon propose des aides complémentaires dans le
                        cadre du dispositif Écoréno'v
                      </li>
                    </ul>
                    <p className="mt-2 text-gray-600">
                      Notre équipe vous accompagne dans toutes les démarches administratives pour obtenir ces aides et
                      peut même avancer certaines primes (prime CEE notamment).
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-15">
                  <AccordionTrigger>
                    Êtes-vous certifiés RGE (Reconnu Garant de l&apos;Environnement) ?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Oui, notre entreprise est certifiée RGE (Reconnu Garant de l&apos;Environnement), ce qui vous
                      permet de bénéficier des aides financières de l&apos;État pour vos travaux de rénovation
                      énergétique. Cette certification atteste de notre qualification et de notre engagement à respecter
                      les normes environnementales en vigueur.
                    </p>
                    <p className="mt-2 text-gray-600">
                      Nos techniciens sont formés aux dernières technologies respectueuses de l&apos;environnement et
                      suivent régulièrement des formations pour maintenir leurs compétences à jour. Nous sommes
                      également certifiés Qualibat, Professionnel du gaz (PG), Qualifelec et Quali&apos;EnR.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* CTA Section */}
              <div className="mt-12 rounded-lg bg-orange-50 p-8">
                <h2 className="mb-4 text-2xl font-bold">Vous avez d&apos;autres questions ?</h2>
                <p className="mb-6 text-gray-600">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions concernant nos services de
                  chauffage à Lyon. N&apos;hésitez pas à nous contacter par téléphone ou via notre formulaire de
                  contact.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/contact">Nous contacter</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="tel:+33478123456">Appeler maintenant</Link>
                  </Button>
                </div>
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
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Dans quel délai intervenez-vous pour un dépannage de chauffage à Lyon ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nous intervenons dans l'heure suivant votre appel pour les situations d'urgence à Lyon et ses environs. Nos chauffagistes sont disponibles 24h/24 et 7j/7, même les week-ends et jours fériés sans majoration de tarif.",
                },
              },
              {
                "@type": "Question",
                name: "Quelles marques de chaudières installez-vous ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nous installons et réparons toutes les grandes marques de chaudières : Saunier Duval, Frisquet, Chaffoteaux, ELM Leblanc, Vaillant, De Dietrich, Viessmann, Atlantic, etc. Nous vous conseillons la marque la plus adaptée à vos besoins et à votre budget.",
                },
              },
              {
                "@type": "Question",
                name: "L'entretien annuel de ma chaudière est-il obligatoire ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, l'entretien annuel est obligatoire pour toutes les chaudières dont la puissance est comprise entre 4 et 400 kW (décret n°2009-649). Cet entretien permet de garantir la sécurité, d'optimiser les performances et de réduire la consommation énergétique.",
                },
              },
              {
                "@type": "Question",
                name: "Proposez-vous des facilités de paiement pour l'installation d'une nouvelle chaudière ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, nous proposons plusieurs solutions de financement adaptées à votre budget. Nous vous aidons également à obtenir toutes les aides financières auxquelles vous avez droit : MaPrimeRénov', prime énergie (CEE), TVA réduite, éco-prêt à taux zéro, etc.",
                },
              },
              {
                "@type": "Question",
                name: "Quels sont les avantages d'une pompe à chaleur par rapport à une chaudière traditionnelle ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Les pompes à chaleur présentent plusieurs avantages : économies d'énergie importantes, impact environnemental réduit, possibilité de chauffer en hiver et de rafraîchir en été, durée de vie plus longue, éligibilité à de nombreuses aides financières, fonctionnement silencieux et sécurisé.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}

