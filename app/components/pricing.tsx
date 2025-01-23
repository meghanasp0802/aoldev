import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small websites",
      features: [
        "Up to 1,000 chat sessions/month",
        "Basic AI model",
        "Email support",
        "1 website integration",
      ],
    },
    {
      name: "Professional",
      price: "$99",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 chat sessions/month",
        "Advanced AI model",
        "Priority support",
        "5 website integrations",
        "Custom branding",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Unlimited chat sessions",
        "Premium AI model",
        "24/7 dedicated support",
        "Unlimited website integrations",
        "Full customization",
        "API access",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Flexible Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => plan.price === "Custom" ? window.location.href = "mailto:support@aichatbot.com" : window.location.href = "/signup"}>{plan.price === "Custom" ? "Contact Us" : "Get Started"}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
