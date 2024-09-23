import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Appbar } from "./components/Appbar"
import App from "next/app"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      <header className="relative px-4 lg:px-6 h-14 flex items-center bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-10">
        <Appbar/>
      </header>
      <main className="flex-1 relative z-10">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Let Your Fans Choose the Soundtrack
                </h1>
                <p className="mx-auto max-w-[700px] text-purple-200 md:text-xl">
                  Engage your audience like never before. Muzitime lets your fans pick the songs for your stream,
                  creating an interactive and unforgettable experience.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-purple-600 text-white hover:bg-purple-700 transition-colors">Get Started</Button>
                <Button variant="outline" className="text-purple-300 border-purple-600 hover:bg-purple-800/50 transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-300">
              Why Creators Love Muzitime
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-pink-400" />
                <h3 className="text-lg font-bold text-purple-300">Boost Engagement</h3>
                <p className="text-sm text-gray-300">
                  Increase viewer interaction and keep your audience hooked throughout your stream.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Music className="h-12 w-12 mb-4 text-pink-400" />
                <h3 className="text-lg font-bold text-purple-300">Diverse Playlists</h3>
                <p className="text-sm text-gray-300">
                  Discover new music and create unique playlists with your communities help.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-pink-400" />
                <h3 className="text-lg font-bold text-purple-300">Easy Integration</h3>
                <p className="text-sm text-gray-300">
                  Seamlessly integrate with popular streaming platforms and music services.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-300">
                  Ready to Revolutionize Your Streams?
                </h2>
                <p className="mx-auto max-w-[600px] text-purple-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join Muzitimes today and give your fans the power to shape your content. Sign up now for free!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input 
                    className="max-w-lg flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400" 
                    placeholder="Enter your email" 
                    type="email" 
                  />
                  <Button type="submit" className="bg-pink-600 text-white hover:bg-pink-700 transition-colors">
                    Sign Up
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-purple-300">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-purple-400 transition-colors" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-10 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-gray-900/90 backdrop-blur-md">
        <p className="text-xs text-purple-300">© 2024 Muzitime. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-purple-300 hover:text-purple-400 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-purple-300 hover:text-purple-400 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}