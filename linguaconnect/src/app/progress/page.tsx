"use client"

import Link from "next/link"
import { Award, BookOpen, Calendar, Clock, Globe, LogOut, Search, Settings, Star, Trophy, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProgressPage() {
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
          <Link href="/progress" className="flex items-center gap-3 px-3 py-2 text-teal-600 bg-teal-50 rounded-md">
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
            <Award className="h-5 w-5" />
          </Button>
        </header>

        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Votre progression</h1>
              <p className="text-gray-500">Suivez votre parcours d'apprentissage linguistique</p>
            </div>
          </div>

          {/* Level progress */}
          <Card className="mb-8">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Niveau actuel: Intermédiaire</CardTitle>
                  <CardDescription>450 points • Prochain niveau à 600 points</CardDescription>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                  <Trophy className="mr-1 h-4 w-4" />
                  Niveau 3
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>450 / 600 points</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-gray-200">
                    <div className="h-full bg-teal-600 rounded-full" style={{ width: "75%" }} />
                  </Progress>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-full p-3 mx-auto w-12 h-12 flex items-center justify-center mb-2">
                      <Trophy className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="text-xs font-medium">Débutant</div>
                    <div className="text-xs text-gray-500">0 pts</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full p-3 mx-auto w-12 h-12 flex items-center justify-center mb-2">
                      <Trophy className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="text-xs font-medium">Élémentaire</div>
                    <div className="text-xs text-gray-500">200 pts</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-100 rounded-full p-3 mx-auto w-12 h-12 flex items-center justify-center mb-2">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div className="text-xs font-medium">Intermédiaire</div>
                    <div className="text-xs text-gray-500">400 pts</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-full p-3 mx-auto w-12 h-12 flex items-center justify-center mb-2">
                      <Trophy className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="text-xs font-medium">Avancé</div>
                    <div className="text-xs text-gray-500">600 pts</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-full p-3 mx-auto w-12 h-12 flex items-center justify-center mb-2">
                      <Trophy className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="text-xs font-medium">Expert</div>
                    <div className="text-xs text-gray-500">1000 pts</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs for badges and history */}
          <Tabs defaultValue="history">
            <TabsList className="mb-6">
              <TabsTrigger value="history">Historique des points</TabsTrigger>
              <TabsTrigger value="stats">Statistiques</TabsTrigger>
              <TabsTrigger value="teacher">Vue Enseignant</TabsTrigger>
              <TabsTrigger value="student">Vue Étudiant</TabsTrigger>
            </TabsList>

            {/* Ajouter les nouveaux onglets pour la vue enseignant et étudiant */}
            <TabsContent value="teacher">
              <Card>
                <CardHeader>
                  <CardTitle>Progression en tant qu'enseignant</CardTitle>
                  <CardDescription>Votre parcours d'enseignement et vos récompenses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="gri grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-3">Rating actuel</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-3xl font-bold">4.8</div>
                          <div className="flex">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                />
                              ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">Basé sur 48 évaluations</p>
                      </div>

                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-3">Gains potentiels</h3>
                        <div className="text-3xl font-bold">120 €</div>
                        <p className="text-sm text-gray-600">Disponible au niveau 5 (Expert)</p>
                        <Progress value={85} className="h-2 mt-2 bg-gray-200">
                          <div className="h-full bg-teal-600 rounded-full" style={{ width: "85%" }} />
                        </Progress>
                        <p className="text-sm text-gray-600 mt-1">85% vers le prochain niveau</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Statistiques d'enseignement</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white border rounded-lg text-center">
                          <div className="text-2xl font-bold text-teal-600">34</div>
                          <div className="text-sm text-gray-600">Sessions données</div>
                        </div>
                        <div className="p-4 bg-white border rounded-lg text-center">
                          <div className="text-2xl font-bold text-teal-600">18</div>
                          <div className="text-sm text-gray-600">Étudiants aidés</div>
                        </div>
                        <div className="p-4 bg-white border rounded-lg text-center">
                          <div className="text-2xl font-bold text-teal-600">28h</div>
                          <div className="text-sm text-gray-600">Temps d'enseignement</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="student">
              <Card>
                <CardHeader>
                  <CardTitle>Progression en tant qu'étudiant</CardTitle>
                  <CardDescription>Votre parcours d'apprentissage et vos points</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-3">Points accumulés</h3>
                        <div className="text-3xl font-bold">320</div>
                        <p className="text-sm text-gray-600">+45 cette semaine</p>
                      </div>

                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-3">Sessions gratuites disponibles</h3>
                        <div className="text-3xl font-bold">3</div>
                        <p className="text-sm text-gray-600">Prochaine session gratuite à 400 points</p>
                        <Progress value={80} className="h-2 mt-2 bg-gray-200">
                          <div className="h-full bg-teal-600 rounded-full" style={{ width: "80%" }} />
                        </Progress>
                        <p className="text-sm text-gray-600 mt-1">80% vers la prochaine session gratuite</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Statistiques d'apprentissage</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white border rounded-lg text-center">
                          <div className="text-2xl font-bold text-teal-600">12</div>
                          <div className="text-sm text-gray-600">Sessions suivies</div>
                        </div>
                        <div className="p-4 bg-white border rounded-lg text-center">
                          <div className="text-2xl font-bold text-teal-600">4</div>
                          <div className="text-sm text-gray-600">Professeurs différents</div>
                        </div>
                        <div className="p-4 bg-white border rounded-lg text-center">
                          <div className="text-2xl font-bold text-teal-600">15h</div>
                          <div className="text-sm text-gray-600">Temps d'apprentissage</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="badges">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {badges.map((badge, index) => (
                  <Card key={index} className={`${badge.unlocked ? "" : "opacity-60"}`}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base">{badge.name}</CardTitle>
                        {badge.unlocked ? (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Débloqué</Badge>
                        ) : (
                          <Badge variant="outline">Verrouillé</Badge>
                        )}
                      </div>
                      <CardDescription>{badge.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4">
                        <div className={`rounded-full p-4 ${badge.unlocked ? badge.bgColor : "bg-gray-100"}`}>
                          <Award className={`h-6 w-6 ${badge.unlocked ? badge.iconColor : "text-gray-400"}`} />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Récompense</div>
                          <div className="text-sm text-gray-500">{badge.reward}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Historique des points</CardTitle>
                  <CardDescription>Vos activités récentes et points gagnés</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pointHistory.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className={`rounded-full p-2 ${item.bgColor}`}>{item.icon}</div>
                          <div>
                            <div className="font-medium">{item.title}</div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {item.date}
                            </div>
                          </div>
                        </div>
                        <Badge className={`${item.badgeColor} ${item.badgeTextColor}`}>
                          {item.points > 0 ? `+${item.points}` : item.points} points
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stats">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Temps d'apprentissage</CardTitle>
                    <CardDescription>Heures passées en sessions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-gray-500" />
                          <span>Total</span>
                        </div>
                        <span className="font-bold">18 heures</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-gray-500" />
                          <span>Ce mois-ci</span>
                        </div>
                        <span className="font-bold">5 heures</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-gray-500" />
                          <span>Cette semaine</span>
                        </div>
                        <span className="font-bold">2 heures</span>
                      </div>
                      <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Graphique de progression</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sessions complétées</CardTitle>
                    <CardDescription>Votre activité d'apprentissage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-rose-50 p-4 rounded-lg text-center">
                          <div className="text-3xl font-bold text-rose-600 mb-1">12</div>
                          <div className="text-sm text-gray-600">Sessions totales</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg text-center">
                          <div className="text-3xl font-bold text-green-600 mb-1">4.8</div>
                          <div className="text-sm text-gray-600">Note moyenne</div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Répartition par langue</h3>
                        <div className="space-y-2">
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Anglais</span>
                              <span>10 sessions</span>
                            </div>
                            <Progress value={83} className="h-2" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Espagnol</span>
                              <span>2 sessions</span>
                            </div>
                            <Progress value={17} className="h-2" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Partenaires fréquents</h3>
                        <div className="space-y-2">
                          {frequentPartners.map((partner, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={partner.name} />
                                  <AvatarFallback>{partner.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span>{partner.name}</span>
                              </div>
                              <div className="flex items-center">
                                <span className="text-sm text-gray-500 mr-2">{partner.sessions} sessions</span>
                                <div className="flex">
                                  {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-3 w-3 ${i < partner.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                      />
                                    ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

const badges = [
  {
    name: "Premier pas",
    description: "Compléter votre première session d'apprentissage",
    reward: "+50 points",
    unlocked: true,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    name: "Assidu",
    description: "Compléter 5 sessions en une semaine",
    reward: "+100 points",
    unlocked: true,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    name: "Polyglotte débutant",
    description: "Apprendre 2 langues différentes",
    reward: "+150 points",
    unlocked: true,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    name: "Évaluateur",
    description: "Donner 10 évaluations de sessions",
    reward: "+75 points",
    unlocked: false,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    name: "Mentor",
    description: "Aider 5 étudiants différents",
    reward: "+200 points",
    unlocked: false,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    name: "Expert linguistique",
    description: "Atteindre le niveau avancé dans une langue",
    reward: "+300 points",
    unlocked: false,
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
]

const pointHistory = [
  {
    title: "Session avec John Smith",
    date: "14 avril 2025",
    points: 25,
    icon: <Star className="h-4 w-4 text-yellow-500" />,
    bgColor: "bg-yellow-100",
    badgeColor: "bg-green-100",
    badgeTextColor: "text-green-800",
  },
  {
    title: "Badge 'Assidu' débloqué",
    date: "12 avril 2025",
    points: 100,
    icon: <Award className="h-4 w-4 text-blue-500" />,
    bgColor: "bg-blue-100",
    badgeColor: "bg-green-100",
    badgeTextColor: "text-green-800",
  },
  {
    title: "Session avec Maria Garcia",
    date: "10 avril 2025",
    points: 25,
    icon: <Star className="h-4 w-4 text-yellow-500" />,
    bgColor: "bg-yellow-100",
    badgeColor: "bg-green-100",
    badgeTextColor: "text-green-800",
  },
  {
    title: "Session annulée",
    date: "8 avril 2025",
    points: -10,
    icon: <Clock className="h-4 w-4 text-red-500" />,
    bgColor: "bg-red-100",
    badgeColor: "bg-red-100",
    badgeTextColor: "text-red-800",
  },
  {
    title: "Session avec Emily Johnson",
    date: "5 avril 2025",
    points: 25,
    icon: <Star className="h-4 w-4 text-yellow-500" />,
    bgColor: "bg-yellow-100",
    badgeColor: "bg-green-100",
    badgeTextColor: "text-green-800",
  },
]

const frequentPartners = [
  {
    name: "John Smith",
    sessions: 5,
    rating: 5,
  },
  {
    name: "Maria Garcia",
    sessions: 3,
    rating: 4,
  },
  {
    name: "Emily Johnson",
    sessions: 2,
    rating: 5,
  },
]
