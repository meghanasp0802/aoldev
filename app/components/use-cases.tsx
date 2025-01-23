import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function UseCases() {
  const useCases = [
    {
      title: "E-commerce",
      description: "Assist customers with product recommendations and order inquiries.",
      image: "/e commerce.svg",
      alt:"E-com"
    },
    {
      title: "Customer Service",
      description: "Provide 24/7 support and quickly resolve common issues.",
      image: "/customer.svg",
      alt:"Customer"
    },
    {
      title: "Healthcare",
      description: "Offer preliminary health assessments and appointment scheduling.",
      image: "/health.svg",
    },
    {
      title: "Education",
      description: "Support students with course information and study resources.",
      image: "/education.svg",
      alt:"Education"
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={useCase.image}
                alt={useCase.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{useCase.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

