import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Globe, Zap, Lock, BarChart, Headphones } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: "Real-time Support",
      description: "Provide instant assistance to your website visitors 24/7.",
      icon: <MessageSquare className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Multi-language Support",
      description: "Communicate with visitors in their preferred language.",
      icon: <Globe className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Advanced AI Integration",
      description: "Leverage cutting-edge AI models for intelligent interactions.",
      icon: <Zap className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Secure & Private",
      description: "Ensure data protection and privacy compliance.",
      icon: <Lock className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Analytics & Insights",
      description: "Gain valuable insights from chat interactions and user behavior.",
      icon: <BarChart className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Seamless Integration",
      description: "Easy to install and compatible with any website platform.",
      icon: <Headphones className="w-10 h-10 text-purple-500" />,
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Features & Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {feature.icon}
                  <span className="ml-4">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

