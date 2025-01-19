"use client";

import Link from "next/link";

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <li>
                <Link href="#features" className="text-gray-600 hover:text-primary" onClick={(e) => handleScroll(e, "#features")}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-600 hover:text-primary" onClick={(e) => handleScroll(e, "#pricing")}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#demo" className="text-gray-600 hover:text-primary" onClick={(e) => handleScroll(e, "#demo")}>
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Contact</h4>
            <p className="text-sm text-gray-600"><a href="mailto:support@aichatbot.com" className="text-gray-600 hover:text-primary">
              support@aichatbot.com
            </a></p>
            <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="text-md font-semibold mb-2">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/aol-dev" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <Link href="#" className="text-gray-600 hover:text-primary">
            Terms and Conditions
          </Link>
          <p>© 2023 AI Chatbot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
