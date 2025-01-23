'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Demo() {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hello! How can I assist you today?' },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      // Simulate bot response (replace with actual AI integration)
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', content: 'Thank you for your message. This is a demo response.' }])
      }, 1000)
      setInput('')
    }
  }

  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Try Our Chatbot Demo</h2>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>AI Chatbot Demo</CardTitle>
          </CardHeader>
          <CardContent className="h-80 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                  {message.content}
                </span>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <div className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button className="font-bold" onClick={handleSend}>Send</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

