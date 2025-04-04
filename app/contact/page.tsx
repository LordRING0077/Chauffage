"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const isDevis = searchParams.get("devis") === "true"
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: isDevis ? "Demande de devis" : "",
    message: "",
    service: isDevis ? "installation_chauffage" : "",
    serviceType: isDevis ? "particulier" : "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    console.log(formData)

    toast({
      title: "Formulaire envoyé",
      description: "Nous vous contacterons dans les plus brefs délais.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: isDevis ? "Demande de devis" : "",
      message: "",
      service: isDevis ? "installation_chauffage" : "",
      serviceType: isDevis ? "particulier" : "",
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {isDevis ? "Demande de devis" : "Contactez-nous"}
            </h1>
            <p className="mt-4 text-gray-200 md:text-xl">
              {isDevis
                ? "Obtenez un devis gratuit et sans engagement pour vos travaux de chauffage et plomberie"
                : "Notre équipe est à votre disposition pour répondre à toutes vos questions"}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>{isDevis ? "Demande de devis" : "Formulaire de contact"}</CardTitle>
                  <CardDescription>
                    {isDevis
                      ? "Remplissez ce formulaire pour obtenir un devis personnalisé"
                      : "Envoyez-nous un message et nous vous répondrons dans les plus brefs délais"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="votre@email.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="01 23 45 67 89"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {!isDevis && (
                      <div className="space-y-2">
                        <Label htmlFor="subject">Sujet</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Sujet de votre message"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                    )}

                    {isDevis && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="service">Type de service</Label>
                          <Select
                            name="service"
                            value={formData.service}
                            onValueChange={(value) => handleSelectChange("service", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="installation_chauffage">Installation de chauffage</SelectItem>
                              <SelectItem value="entretien_chaudiere">Entretien de chaudière</SelectItem>
                              <SelectItem value="depannage_chauffage">Dépannage de chauffage</SelectItem>
                              <SelectItem value="plomberie">Services de plomberie</SelectItem>
                              <SelectItem value="installation_sanitaire">Installation sanitaire</SelectItem>
                              <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Type de client</Label>
                          <RadioGroup
                            name="serviceType"
                            value={formData.serviceType}
                            onValueChange={(value) => handleSelectChange("serviceType", value)}
                            className="flex flex-col space-y-1"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="particulier" id="particulier" />
                              <Label htmlFor="particulier" className="font-normal">
                                Particulier
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="professionnel" id="professionnel" />
                              <Label htmlFor="professionnel" className="font-normal">
                                Professionnel
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="copropriete" id="copropriete" />
                              <Label htmlFor="copropriete" className="font-normal">
                                Copropriété
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={
                          isDevis
                            ? "Décrivez votre projet ou besoin en détail pour un devis plus précis"
                            : "Comment pouvons-nous vous aider ?"
                        }
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      {isDevis ? "Demander un devis" : "Envoyer le message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Nos coordonnées</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-700" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-gray-500">123 Avenue de Paris, 75001 Paris, France</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-blue-700" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <a href="tel:+33123456789" className="text-gray-500 hover:text-blue-700">
                        01 23 45 67 89
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-blue-700" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:contact@acm-chauffage.fr" className="text-gray-500 hover:text-blue-700">
                        contact@acm-chauffage.fr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-blue-700" />
                    <div>
                      <p className="font-medium">Horaires d&apos;ouverture</p>
                      <p className="text-gray-500">Lundi - Vendredi: 8h - 19h</p>
                      <p className="text-gray-500">Samedi: 9h - 17h</p>
                      <p className="text-gray-500">Dimanche: Fermé (sauf urgences)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">Notre zone d&apos;intervention</h2>
                <p className="mb-4 text-gray-500">
                  Nous intervenons dans toute l&apos;Île-de-France, notamment à Paris, Hauts-de-Seine,
                  Seine-Saint-Denis, Val-de-Marne, Essonne, Yvelines, Val-d&apos;Oise et Seine-et-Marne.
                </p>
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Carte de la zone d'intervention d'ACM Chauffage en Île-de-France"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="rounded-lg bg-blue-50 p-6">
                <h3 className="mb-2 text-xl font-bold">Service d&apos;urgence</h3>
                <p className="mb-4 text-gray-500">
                  Besoin d&apos;une intervention urgente ? Notre équipe est disponible 7j/7 pour les dépannages
                  d&apos;urgence.
                </p>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-700" />
                  <a href="tel:+33123456789" className="font-bold text-blue-700 hover:underline">
                    01 23 45 67 89
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Questions fréquentes</h2>
            <p className="mt-4 text-gray-500 md:text-lg">
              Retrouvez les réponses aux questions les plus fréquemment posées
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* FAQ Item 1 */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold">Quels sont vos délais d&apos;intervention ?</h3>
              <p className="text-gray-500">
                Pour les dépannages urgents, nous intervenons généralement dans les 2 à 4 heures. Pour les autres
                prestations, nous fixons un rendez-vous selon vos disponibilités, généralement sous 24 à 48 heures.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold">Comment obtenir un devis ?</h3>
              <p className="text-gray-500">
                Vous pouvez demander un devis gratuit en remplissant notre formulaire en ligne, en nous appelant ou en
                nous envoyant un email. Nous vous répondrons dans les 24 heures ouvrées.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold">Quelles sont les garanties sur vos prestations ?</h3>
              <p className="text-gray-500">
                Toutes nos installations sont garanties 2 ans pièces et main d&apos;œuvre. Les équipements bénéficient
                de la garantie constructeur, généralement de 2 à 10 ans selon les modèles.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold">Proposez-vous des contrats d&apos;entretien ?</h3>
              <p className="text-gray-500">
                Oui, nous proposons des contrats d&apos;entretien annuels pour vos équipements de chauffage, incluant
                une visite annuelle et des tarifs préférentiels sur les dépannages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org structured data for local business */}
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
            email: "contact@acm-chauffage.fr",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Avenue de Paris",
              addressLocality: "Paris",
              postalCode: "75001",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 48.8566,
              longitude: 2.3522,
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
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "17:00",
              },
            ],
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 48.8566,
                longitude: 2.3522,
              },
              geoRadius: "50000",
            },
          }),
        }}
      />
    </>
  )
}

