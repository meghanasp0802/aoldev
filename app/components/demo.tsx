'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Demo() {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim()) {
      // Add the user's message to the chat
      setMessages([...messages, { role: 'user', content: input }]);

      // Set loading to true
      setLoading(true);

      try {
        // Send the message to the backend API for processing
        const response = await fetch('/api/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });

        const data = await response.json();

        if (data.response) {
          // If there's a response from the backend, add the bot's message to the chat
          setMessages((prev) => [
            ...prev,
            { role: 'bot', content: data.response },
          ]);
        } else {
          // Handle any error responses from the backend
          setMessages((prev) => [
            ...prev,
            { role: 'bot', content: 'Oops! Something went wrong. Please try again.' },
          ]);
        }
      } catch (error) {
        // Handle any fetch errors
        setMessages((prev) => [
          ...prev,
          { role: 'bot', content: 'Oops! Something went wrong. Please try again.' },
        ]);
        console.error('Error:', error);
      } finally {
        // Reset loading state and clear input field
        setLoading(false);
        setInput('');
      }
    }
  };

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
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                  }`}
                >
                  {message.content}
                </span>
              </div>
            ))}
            {loading && (
              <div className="text-left mb-4">
                <span className="inline-block p-2 rounded-lg bg-gray-200 text-black">Typing...</span>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <div className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                disabled={loading}
              />
              <Button onClick={handleSend} disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
