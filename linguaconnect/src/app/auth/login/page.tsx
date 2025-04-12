"use client"

import Link from "next/link"
import { ArrowLeft, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à l'accueil
        </Link>

        <div className="max-w-md mx-auto">
          <Card className="border-none shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Globe className="h-10 w-10 text-teal-600" />
              </div>
              <CardTitle className="text-2xl">Connexion</CardTitle>
              <CardDescription>Connectez-vous à votre compte LinguaConnect</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="email" className="mb-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="email">Email</TabsTrigger>
                  <TabsTrigger value="google">Google</TabsTrigger>
                </TabsList>
                <TabsContent value="email">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="votre@email.com" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Link href="#" className="text-sm text-teal-600 hover:text-teal-700">
                          Mot de passe oublié?
                        </Link>
                      </div>
                      <Input id="password" type="password" placeholder="••••••••" />
                    </div>
                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                      Se connecter
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="google">
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full">
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                        <path d="M1 1h22v22H1z" fill="none" />
                      </svg>
                      Continuer avec Google
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="text-center text-sm">
                Vous n'avez pas de compte?{" "}
                <Link href="/auth/register" className="text-teal-600 hover:text-teal-700 font-medium">
                  S'inscrire
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
