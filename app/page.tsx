'use client'

import { useAuth } from './hooks/useAuth'
import HeroSection from './components/hero-section'
import HowItWorks from './components/how-it-works'
import Features from './components/features'
import UseCases from './components/use-cases'
import Testimonials from './components/testimonials'
import Pricing from './components/pricing'
import Demo from './components/demo'
import CTA from './components/cta'
import { Button } from "@/components/ui/button"

export default function Home() {
  const { token, logout } = useAuth()

  return (
    <div className="pt-16">
      {token && (
        <div className="bg-green-100 p-4 text-green-700 text-center">
          You are logged in!
          <Button onClick={logout} className="ml-4">
            Logout
          </Button>
        </div>
      )}
      <HeroSection />
      <HowItWorks />
      <Features />
      <UseCases />
      <Testimonials />
      <Pricing />
      <Demo />
      <CTA />
    </div>
  )
}