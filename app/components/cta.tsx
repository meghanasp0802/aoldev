import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug md:leading-tight">
          Ready to Transform Your Website?
        </h2>
        <p className="text-lg md:text-xl mb-6 md:mb-8">
          Start engaging your visitors with AI-powered conversations today.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0 font-bold">
          <Link href="/signup">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-black hover:bg-gray-100 transition-transform transform hover:text-purple-600 hover:scale-105 focus:scale-105 w-full md:w-auto"
            >
              Get Started Free
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-black hover:bg-gray-100 transition-transform transform hover:text-purple-600 hover:scale-105 focus:scale-105 w-full md:w-auto"
            >
              Schedule a Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
