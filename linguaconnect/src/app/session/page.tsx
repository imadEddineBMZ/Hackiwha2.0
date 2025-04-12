"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Award,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Filter,
  Globe,
  LogOut,
  SearchIcon,
  Settings,
  Star,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

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
          <Link href="/search" className="flex items-center gap-3 px-3 py-2 text-teal-600 bg-teal-50 rounded-md">
            <SearchIcon className="h-5 w-5" />
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
            <SearchIcon className="h-5 w-5" />
          </Button>
        </header>

        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Rechercher un partenaire linguistique</h1>
              <p className="text-gray-500">Trouvez l'enseignant ou l'étudiant idéal pour votre apprentissage</p>
            </div>
            <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4" />
              Filtres
              {showFilters ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Filters sidebar */}
            {showFilters && (
              <div className="md:col-span-1 space-y-6 bg-white p-6 rounded-lg border">
                <div>
                  <h3 className="font-medium mb-3">Type de partenaire</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="teacher" />
                      <Label htmlFor="teacher">Enseignants</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="student" />
                      <Label htmlFor="student">Étudiants</Label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Langue</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Toutes les langues" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">Anglais</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="es">Espagnol</SelectItem>
                      <SelectItem value="de">Allemand</SelectItem>
                      <SelectItem value="it">Italien</SelectItem>
                      <SelectItem value="pt">Portugais</SelectItem>
                      <SelectItem value="ru">Russe</SelectItem>
                      <SelectItem value="zh">Chinois</SelectItem>
                      <SelectItem value="ja">Japonais</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Niveau du professeur</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Tous les niveaux" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Niveau 1 (Débutant)</SelectItem>
                      <SelectItem value="intermediate">Niveau 2 (Intermédiaire)</SelectItem>
                      <SelectItem value="advanced">Niveau 3 (Avancé)</SelectItem>
                      <SelectItem value="expert">Niveau 4 (Expert)</SelectItem>
                      <SelectItem value="master">Niveau 5 (Maître)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Note minimale</h3>
                  <div className="space-y-3">
                    <Slider defaultValue={[3]} max={5} step={1} />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Disponibilité</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="weekdays" />
                      <Label htmlFor="weekdays">Jours de semaine</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="weekends" />
                      <Label htmlFor="weekends">Week-ends</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mornings" />
                      <Label htmlFor="mornings">Matins</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="evenings" />
                      <Label htmlFor="evenings">Soirées</Label>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700">Appliquer les filtres</Button>
              </div>
            )}

            {/* Search results */}
            <div className={`${showFilters ? "md:col-span-2 lg:col-span-3" : "md:col-span-3 lg:col-span-4"} space-y-6`}>
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Rechercher par nom, langue ou compétence..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((user, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={`/placeholder.svg?height=48&width=48`} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{user.name}</CardTitle>
                          <div className="flex items-center mt-1">
                            <div className="flex mr-1">
                              {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${i < user.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                  />
                                ))}
                            </div>
                            <span className="text-xs text-gray-500">({user.reviewCount})</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-wrap gap-1 mb-3">
                        <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                          {user.role === "teacher" ? `Enseigne ${user.language}` : `Apprend ${user.language}`}
                        </Badge>
                        <Badge variant="outline" className="bg-gray-50 border-gray-200">
                          {user.level}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-3">{user.bio}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">Voir le profil</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="bg-rose-50 text-rose-600">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="sm">
                    5
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const searchResults = [
  {
    name: "John Smith",
    role: "teacher",
    language: "l'anglais",
    level: "Natif",
    rating: 5,
    reviewCount: 48,
    bio: "Professeur d'anglais natif avec 5 ans d'expérience. Spécialisé dans la conversation courante et professionnelle. J'adapte mes cours à vos besoins spécifiques.",
  },
  {
    name: "Maria Garcia",
    role: "teacher",
    language: "l'espagnol",
    level: "Natif",
    rating: 4,
    reviewCount: 32,
    bio: "Passionnée par le partage de la culture espagnole. J'aide les débutants à progresser rapidement avec des méthodes interactives et ludiques.",
  },
  {
    name: "Akira Tanaka",
    role: "teacher",
    language: "le japonais",
    level: "Natif",
    rating: 5,
    reviewCount: 27,
    bio: "J'enseigne le japonais de manière ludique et interactive. Tous niveaux bienvenus! Spécialisé dans la conversation et l'écriture.",
  },
  {
    name: "Sophie Martin",
    role: "student",
    language: "l'anglais",
    level: "Intermédiaire",
    rating: 4,
    reviewCount: 15,
    bio: "Étudiante en anglais cherchant à améliorer ma fluidité à l'oral. Je suis intéressée par la culture américaine et britannique.",
  },
  {
    name: "Thomas Dubois",
    role: "teacher",
    language: "le français",
    level: "Natif",
    rating: 5,
    reviewCount: 39,
    bio: "Enseignant de français passionné par la littérature et la culture française. J'aide les étudiants à perfectionner leur accent et leur grammaire.",
  },
  {
    name: "Emma Wilson",
    role: "student",
    language: "le français",
    level: "Débutant",
    rating: 4,
    reviewCount: 8,
    bio: "Débutante en français, je cherche un partenaire patient pour pratiquer les bases de la conversation. J'adore la cuisine française!",
  },
]
