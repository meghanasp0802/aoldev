import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, Zap, Globe, ArrowDown } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      title: "Install the Plugin",
      description: "Easily integrate our chatbot into your website with a simple code snippet.",
      icon: <Zap className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Connect to AI Models",
      description: "Choose from various advanced AI models to power your chatbot's intelligence.",
      icon: <Bot className="w-10 h-10  text-purple-500" />,
    },
    {
      title: "Engage Visitors",
      description: "Watch as the chatbot interacts with your visitors, providing real-time assistance.",
      icon: <Globe className="w-10 h-10  text-purple-500" />,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {step.icon}
                  <span className="ml-4">{step.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
              {index < steps.length - 1 && (
                <>
                {/* Arrow for larger screens */}
                <ArrowRight className="absolute top-1/2 -right-8 w-8 h-8 text-purple-500 hidden md:block" />
          
                {/* Arrow for smaller screens */}
                <ArrowDown className="absolute left-1/2 -translate-x-1/2 top-full w-8 h-8 text-purple-500 block md:hidden" />
                </>
                 )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

