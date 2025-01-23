import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      company: "Tech Innovators Inc.",
      quote: "The AI chatbot has revolutionized our customer support. We've seen a 40% increase in customer satisfaction!",
      image: "/man.svg",
      alt:"John"
    },
    {
      name: "Jane Smith",
      company: "E-commerce Solutions",
      quote: "Implementing this chatbot was a game-changer for our online store. Sales have increased by 25% since we started using it.",
      image: "/man.svg",
      alt:"Jane"
    },
    {
      name: "Mike Johnson",
      company: "HealthTech Solutions",
      quote: "Our patients love the convenience of getting quick answers through the chatbot. It's improved our overall service quality.",
      image: "/man.svg",
      alt:"Mike"
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardContent className="flex-grow">
                <p className="italic m-5">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

