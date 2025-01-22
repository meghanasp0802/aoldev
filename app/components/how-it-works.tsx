import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, Zap, Globe } from 'lucide-react'

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
            <Card key={index} className="relative">
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
                <ArrowRight className="absolute top-1/2 -right-8 w-8 h-8 text-purple-500 hidden md:block" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

