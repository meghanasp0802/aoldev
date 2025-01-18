import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">AI Chatbot</h3>
            <p className="text-sm text-gray-600">Empowering websites with AI-powered conversations.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><Link href="#features" className="text-gray-600 hover:text-primary">Features</Link></li>
              <li><Link href="#pricing" className="text-gray-600 hover:text-primary">Pricing</Link></li>
              <li><Link href="#demo" className="text-gray-600 hover:text-primary">Demo</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Contact</h4>
            <p className="text-sm text-gray-600">support@aichatbot.com</p>
            <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-md font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-primary">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-primary">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          © 2023 AI Chatbot. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

