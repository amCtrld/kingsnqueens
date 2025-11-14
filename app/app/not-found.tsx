import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChefHat } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="min-h-screen flex items-center justify-center px-4 py-16">
          <div className="text-center max-w-2xl">
            <div className="flex justify-center mb-6">
              <ChefHat className="w-16 h-16 text-primary" />
            </div>
            <h1 className="serif-title text-5xl md:text-6xl text-primary mb-4">404</h1>
            <h2 className="serif-subtitle text-2xl mb-6">Looks like you've wandered off the menu!</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Sorry, we couldn't find the page you're looking for. Let's get you back to our delicious offerings.
            </p>
            <div className="elegant-line mb-8 mx-auto w-32" />
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/"
                className="inline-block bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Return to Home
              </Link>
              <Link
                href="/menu"
                className="inline-block bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
