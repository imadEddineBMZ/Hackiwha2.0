"use client"

import Link from "next/link"
import {
  Award,
  BookOpen,
  Calendar,
  Clock,
  Globe,
  LogOut,
  Mail,
  MessageCircle,
  Search,
  Settings,
  Star,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the profile data based on the ID
  const isOwnProfile = params.id === "me"
  const profile = {
    name: "John Smith",
    role: "teacher",
    languages: [
      { name: "Anglais", level: "Natif", flag: "🇬🇧" },
      { name: "Français", level: "Intermédiaire", flag: "🇫🇷" },
      { name: "Espagnol", level: "Débutant", flag: "🇪🇸" },
    ],
    bio: "Professeur d'anglais natif avec 5 ans d'expérience. Spécialisé dans la conversation courante et professionnelle. J'adapte mes cours à vos besoins spécifiques et je suis très patient avec les débutants. J'aime voyager et découvrir de nouvelles cultures.",
    rating: 4.8,
    reviewCount: 48,
    memberSince: "Janvier 2024",
    completedSessions: 87,
    availability: [
      { day: "Lundi", times: ["10:00 - 12:00", "14:00 - 16:00"] },
      { day: "Mercredi", times: ["09:00 - 11:00", "15:00 - 17:00"] },
      { day: "Vendredi", times: ["14:00 - 18:00"] },
      { day: "Samedi", times: ["10:00 - 14:00"] },
    ],
    badges: [
      { name: "Expert", icon: <Award className="h-4 w-4" /> },
      { name: "Mentor", icon: <Award className="h-4 w-4" /> },
      { name: "Polyglotte", icon: <Globe className="h-4 w-4" /> },
    ],
    reviews: [
      {
        name: "Sophie Martin",
        date: "10 avril 2025",
        rating: 5,
        comment:
          "John est un excellent professeur! Il est très patient et explique clairement les concepts difficiles. J'ai beaucoup progressé grâce à lui.",
      },
      {
        name: "Thomas Dubois",
        date: "2 avril 2025",
        rating: 5,
        comment:
          "Cours très intéressants et adaptés à mon niveau. John a une méthode d'enseignement efficace et motivante.",
      },
      {
        name: "Maria Rodriguez",
        date: "25 mars 2025",
        rating: 4,
        comment:
          "Bon professeur, sessions agréables et utiles. J'aurais aimé plus d'exercices pratiques, mais dans l'ensemble très satisfaite.",
      },
    ],
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r p-4">
        <div className="flex items-center gap-2 mb-8">
          <Globe className="h-6 w-6 text-teal-600" />
          <span className="font-bold text-xl">LinguaConnect</span>
        </div>

        <nav className="space-y-1 flex-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <BookOpen className="h-5 w-5" />
            <span>Tableau de bord</span>
          </Link>
          <Link href="/search" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <Search className="h-5 w-5" />
            <span>Rechercher</span>
          </Link>
          <Link
            href="/progress"
            className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <Award className="h-5 w-5" />
            <span>Progression</span>
          </Link>
          <Link href="/profile/me" className="flex items-center gap-3 px-3 py-2 text-teal-600 bg-teal-50 rounded-md">
            <User className="h-5 w-5" />
            <span>Profil</span>
          </Link>
          <Link
            href="/settings"
            className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <Settings className="h-5 w-5" />
            <span>Paramètres</span>
          </Link>
        </nav>

        <div className="pt-4 border-t">
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            <LogOut className="mr-2 h-5 w-5" />
            Se déconnecter
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        {/* Mobile header */}
        <header className="md:hidden bg-white border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-teal-600" />
            <span className="font-bold text-xl">LinguaConnect</span>
          </div>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </header>

        <div className="container mx-auto px-4 py-6">
          {/* Profile header */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center md:items-start gap-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt={profile.name} />
                    <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl font-bold">{profile.name}</h1>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Vérifié</Badge>
                    </div>
                    <p className="text-gray-500">{profile.role === "teacher" ? "Enseignant" : "Étudiant"}</p>

                    <div className="flex items-center mt-2">
                      <div className="flex mr-1">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(profile.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {profile.rating} ({profile.reviewCount} avis)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-lg font-medium mb-2">À propos</h2>
                    <p className="text-gray-600">{profile.bio}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Membre depuis {profile.memberSince}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{profile.completedSessions} sessions complétées</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {isOwnProfile ? (
                    <Link href="/settings">
                      <Button variant="outline" className="w-full">
                        <Settings className="mr-2 h-4 w-4" />
                        Modifier le profil
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Demander une session
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Mail className="mr-2 h-4 w-4" />
                        Contacter
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left column */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Langues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {profile.languages.map((language, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{language.flag}</span>
                          <span>{language.name}</span>
                        </div>
                        <Badge variant="outline">{language.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right column (wider) */}
            <div className="md:col-span-2">
              <Tabs defaultValue="reviews">
                <TabsList className="mb-6">
                  <TabsTrigger value="reviews">Avis ({profile.reviews.length})</TabsTrigger>
                  <TabsTrigger value="sessions">Sessions passées</TabsTrigger>
                </TabsList>

                <TabsContent value="reviews">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {profile.reviews.map((review, index) => (
                          <div key={index} className={index > 0 ? "pt-6 border-t" : ""}>
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex items-center gap-3">
                                <Avatar>
                                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={review.name} />
                                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{review.name}</div>
                                  <div className="text-sm text-gray-500">{review.date}</div>
                                </div>
                              </div>
                              <div className="flex">
                                {Array(5)
                                  .fill(0)
                                  .map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                    />
                                  ))}
                              </div>
                            </div>
                            <p className="text-gray-600">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="sessions">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sessions passées</CardTitle>
                      <CardDescription>Historique des sessions avec d'autres utilisateurs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {pastSessions.map((session, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={session.partner} />
                                <AvatarFallback>{session.partner.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{session.title}</div>
                                <div className="text-sm text-gray-500">
                                  Avec {session.partner} • {session.date}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="bg-gray-100">
                                <Clock className="mr-1 h-3 w-3" />
                                {session.duration}
                              </Badge>
                              <Link href={`/session/recording/${index}`}>
                                <Button variant="outline" size="sm" className="text-teal-600">
                                  Voir l'enregistrement
                                </Button>
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const pastSessions = [
  {
    title: "Conversation en anglais",
    partner: "Sophie Martin",
    date: "10 avril 2025",
    duration: "45 min",
  },
  {
    title: "Grammaire anglaise",
    partner: "Thomas Dubois",
    date: "5 avril 2025",
    duration: "60 min",
  },
  {
    title: "Vocabulaire professionnel",
    partner: "Maria Rodriguez",
    date: "28 mars 2025",
    duration: "30 min",
  },
  {
    title: "Prononciation avancée",
    partner: "Alex Chen",
    date: "20 mars 2025",
    duration: "45 min",
  },
  {
    title: "Préparation entretien",
    partner: "Emma Wilson",
    date: "15 mars 2025",
    duration: "60 min",
  },
]
