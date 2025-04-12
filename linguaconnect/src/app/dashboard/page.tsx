"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Award,
  Bell,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Globe,
  LogOut,
  MessageCircle,
  Search,
  Settings,
  User,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  // In a real app, this would come from authentication
  const [userRole, setUserRole] = useState<"student" | "teacher">("student")

  // Toggle role for demo purposes
  const toggleRole = () => {
    setUserRole(userRole === "student" ? "teacher" : "student")
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
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-teal-600 bg-teal-50 rounded-md">
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
          <Link
            href="/profile/me"
            className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
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
            <Bell className="h-5 w-5" />
          </Button>
        </header>

        <div className="container mx-auto px-4 py-6">
          {/* Header with user info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Bonjour, {userRole === "student" ? "Sophie" : "Thomas"}</h1>
                <p className="text-gray-500">
                  {userRole === "student" ? "Étudiant en anglais" : "Enseignant de français"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={toggleRole} className="hidden md:flex">
                Voir en tant que {userRole === "student" ? "enseignant" : "étudiant"}
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700">
                {userRole === "student" ? "Trouver un enseignant" : "Voir les demandes"}
              </Button>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userRole === "student" ? "450" : "720"}</div>
                <p className="text-xs text-gray-500 mt-1">+45 cette semaine</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Niveau</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userRole === "student" ? "Intermédiaire" : "Expert"}</div>
                <Progress value={userRole === "student" ? 45 : 85} className="h-2 mt-2 bg-gray-200">
                  <div
                    className="h-full bg-teal-600 rounded-full"
                    style={{ width: `${userRole === "student" ? 45 : 85}%` }}
                  />
                </Progress>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userRole === "student" ? "12" : "34"}</div>
                <p className="text-xs text-gray-500 mt-1">Depuis l'inscription</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userRole === "student" ? "4.2" : "4.8"}</div>
                <div className="flex mt-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < (userRole === "student" ? 4 : 5) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main content tabs */}
          <Tabs defaultValue="upcoming">
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming">Sessions à venir</TabsTrigger>
              <TabsTrigger value="past">Sessions passées</TabsTrigger>
              <TabsTrigger value="recommended">Recommandations</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              {userRole === "student" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>Session d'anglais</CardTitle>
                          <CardDescription>Avec Rafik </CardDescription>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmée</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Demain, 15 avril 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>14:00 - 15:00</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-2 text-gray-500" />
                          <span>prononciations </span>
                        </div>
                      </div>
                      <div className="flex justify-between mt-6">
                        <Button variant="outline">Annuler</Button>
                        <Button className="bg-teal-600 hover:bg-teal-700">Rejoindre</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>Session d'anglais</CardTitle>
                          <CardDescription>Avec DJA3FER</CardDescription>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">En attente</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Vendredi, 18 avril 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>10:00 - 11:00</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Grammaire et vocabulaire</span>
                        </div>
                      </div>
                      <div className="flex justify-end mt-6">
                        <Button variant="outline">Annuler la demande</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>Cours de français</CardTitle>
                          <CardDescription>Avec Imad eddine </CardDescription>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmée</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Aujourd'hui, 14 avril 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>18:00 - 19:00</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Conversation courante</span>
                        </div>
                      </div>
                      <div className="flex justify-between mt-6">
                        <Button variant="outline">Annuler</Button>
                        <Button className="bg-teal-600 hover:bg-teal-700">Rejoindre</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>Cours de français</CardTitle>
                          <CardDescription>Avec rafik</CardDescription>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmée</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Demain, 15 avril 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>16:30 - 17:30</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Prononciation</span>
                        </div>
                      </div>
                      <div className="flex justify-between mt-6">
                        <Button variant="outline">Annuler</Button>
                        <Button className="bg-teal-600 hover:bg-teal-700">Rejoindre</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </TabsContent>

            <TabsContent value="past">
              <div className="space-y-4">
                {pastSessions.map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={session.partner} />
                        <AvatarFallback>{session.partner.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{session.title}</h3>
                        <p className="text-sm text-gray-500">
                          Avec {session.partner} • {session.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              className={`h-4 w-4 ${i < session.rating ? "text-yellow-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                      </div>
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recommended">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendedUsers.map((user, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base">{user.name}</CardTitle>
                          <CardDescription>
                            {user.role === "teacher" ? `Enseigne ${user.language}` : `Apprend ${user.language}`}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center mb-2">
                        <div className="flex mr-2">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                className={`h-4 w-4 ${i < user.rating ? "text-yellow-400" : "text-gray-300"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">({user.reviewCount} avis)</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{user.bio}</p>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">Voir le profil</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

const pastSessions = [
  {
    title: "Conversation en anglais",
    partner: "Imad",
    date: "10 avril 2025",
    rating: 5,
  },
  {
    title: "Grammaire anglaise",
    partner: "RAFIK",
    date: "5 avril 2025",
    rating: 4,
  },
  {
    title: "Vocabulaire professionnel",
    partner: "Chadouli",
    date: "28 mars 2025",
    rating: 5,
  },
]

const recommendedUsers = [
  {
    name: "Racim",
    role: "teacher",
    language: "l'anglais",
    rating: 5,
    reviewCount: 48,
    bio: "Professeur d'anglais natif avec 5 ans d'expérience. Spécialisé dans la conversation courante et professionnelle.",
  },
  {
    name: "Amine",
    role: "teacher",
    language: "l'espagnol",
    rating: 4,
    reviewCount: 32,
    bio: "Passionnée par le partage de la culture espagnole. J'aide les débutants à progresser rapidement.",
  },
  {
    name: "Aymen",
    role: "teacher",
    language: "le japonais",
    rating: 5,
    reviewCount: 27,
    bio: "J'enseigne le japonais de manière ludique et interactive. Tous niveaux bienvenus!",
  },
]
