import Link from "next/link"
import { ArrowRight, Globe, MessageCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-teal-600" />
            <span className="font-bold text-xl">LinguaConnect</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">Se connecter</Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-teal-600 hover:bg-teal-700">S'inscrire</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Apprenez une langue avec des locuteurs natifs</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Une plateforme collaborative où chacun peut enseigner sa langue maternelle et apprendre une nouvelle langue
            gratuitement.
          </p>
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mb-10">
            <h3 className="text-xl font-semibold mb-4">Comment ça fonctionne :</h3>
            <ul className="text-left space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-teal-500 font-bold mr-2">•</span>
                <span>
                  <strong>Pour les étudiants :</strong> Gagnez des points en évaluant vos professeurs. Utilisez ces
                  points pour débloquer plus de sessions gratuites.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 font-bold mr-2">•</span>
                <span>
                  <strong>Pour les professeurs :</strong> Obtenez des évaluations pour améliorer votre rating. Accumulez
                  des points pour monter de niveau et gagner des récompenses financières.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 font-bold mr-2">•</span>
                <span>
                  <strong>Pour les écoles :</strong> Accédez à notre réseau de professeurs qualifiés classés par rating
                  pour vos besoins de recrutement.
                </span>
              </li>
            </ul>
          </div>
          <Link href="/auth/register">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Commencer maintenant <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Comment ça fonctionne</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-4 rounded-full mb-6">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Trouvez un partenaire</h3>
              <p className="text-gray-600">
                Recherchez un partenaire linguistique qui parle la langue que vous souhaitez apprendre.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-4 rounded-full mb-6">
                <MessageCircle className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Planifiez une session</h3>
              <p className="text-gray-600">Organisez une session en ligne selon vos disponibilités communes.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-4 rounded-full mb-6">
                <Globe className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Progressez et gagnez</h3>
              <p className="text-gray-600">
                Échangez vos connaissances, évaluez vos sessions et gagnez des points pour débloquer des avantages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Ce que disent nos utilisateurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      src={`/placeholder.svg?height=50&width=50`}
                      alt={testimonial.name}
                      className="rounded-full h-12 w-12 object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.language}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{testimonial.comment}</p>
                  <div className="flex mt-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer votre voyage linguistique?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Rejoignez notre communauté de passionnés de langues et commencez à apprendre dès aujourd'hui.
          </p>
          <Link href="/auth/register">
            <Button size="lg" variant="outline" className="bg-white text-teal-600 hover:bg-teal-50">
              S'inscrire gratuitement
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Globe className="h-6 w-6 text-teal-400" />
              <span className="font-bold text-xl">LinguaConnect</span>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="#" className="text-gray-300 hover:text-white">
                À propos
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Confidentialité
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Conditions
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} LinguaConnect. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const testimonials = [
  {
    name: "Chadouli",
    language: "Apprend l'anglais",
    comment:
      "Grâce à LinguaConnect, j'ai pu pratiquer mon anglais avec des locuteurs natifs. Ma confiance a considérablement augmenté!",
    rating: 5,
  },
  {
    name: "boumaza imad eddine ",
    language: "Enseigne le français",
    comment:
      "J'adore partager ma langue et ma culture avec des apprenants du monde entier. Une expérience enrichissante!",
    rating: 4,
  },
  {
    name: "Racim douaria",
    language: "Apprend le français",
    comment:
      "Les sessions sont toujours agréables et instructives. J'ai fait des progrès incroyables en seulement quelques mois.",
    rating: 5,
  },
]
