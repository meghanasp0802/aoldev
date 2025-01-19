'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useAuth } from '../hooks/useAuth'

export default function Header() {
  const { session, logout } = useAuth()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="header">
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" onClick={(e) => handleScroll(e, "#header")} className="text-2xl font-bold text-primary">
          AI Chatbot
        </Link>
        <div className="space-x-4">
          <Link href="#features" onClick={(e) => handleScroll(e, "#features")} className="text-gray-600 hover:text-primary transition-colors">Features</Link>
          <Link href="#pricing" onClick={(e) => handleScroll(e, "#pricing")} className="text-gray-600 hover:text-primary transition-colors">Pricing</Link>
          {session ? (
            <>
              <span className="text-gray-600">Welcome, {session.user?.email}</span>
              <Button onClick={logout} variant="outline">Log Out</Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline">Log In</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
    </section>
  )
}