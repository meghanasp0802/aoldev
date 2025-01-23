import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id="HeroSection"  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Empower Your Website with AI-Powered Conversations
          </h1>
          <p className="text-xl mb-8">
            Boost customer engagement and automate support with our intelligent chatbot plugin.
          </p>
          <Link href='/signup'>
         <Button size="lg"
          className="bg-white  text-purple-600 hover:bg-white-100 transition-transform transform hover:scale-105 focus:scale-105 font-bold">
             Get Started Free
          </Button>
          </Link>
        </div>
        <div className="md:w-1/2 p-10">
          <Image
            src="/robot-icon.svg"
            alt="AI Chatbot Interface"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

