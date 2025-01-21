import { Button } from "@/components/ui/button"
import Link from "next/link";


export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Website?</h2>
        <p className="text-xl mb-8">Start engaging your visitors with AI-powered conversations today.</p>
        <div className="space-x-4">
          <Link href='/signup'>
            <Button size="lg" variant="secondary" className="text-black border-white hover:bg-white hover:text-purple-600">Get Started Free</Button>
          </Link>
          <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-purple-600">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

