import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 text-white py-24">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Empower Your Website with AI-Powered Conversations
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Boost customer engagement and automate support with our intelligent chatbot plugin.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-700 hover:bg-gray-200 hover:text-indigo-700 transition-transform transform hover:scale-105"
          >
            Get Started Free
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg"
            alt="AI Chatbot Interface"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl hover:shadow-indigo-500/50 transition-shadow duration-300"
          />
        </div>
      </div>
    </section>
  );
}
