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
        <div className="flex flex-wrap justify-between md:justify-start space-y-0 md:space-y-0 md:flex-row">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-center">AI Chatbot</h3>
            <p className="text-md text-gray-600 text-center">Empowering websites with AI-powered conversations.</p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2 text-center">Quick Links</h4>
            <ul className="text-sm flex flex-col items-center mb-3">
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

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0 text-center">
            <h4 className="text-md font-semibold mb-2">Contact</h4>
            <p className="text-sm text-gray-600">
              <a href="mailto:support@aichatbot.com" className="text-gray-600 hover:text-primary text-center">
                support@aichatbot.com
              </a>
            </p>
            <p className="text-sm text-gray-600 sm:text-center mb-2">+1 (555) 123-4567</p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0 text-center">
            <h4 className="text-md font-semibold mb-2 text-center">Follow Us</h4>
            <ul className="text-sm flex flex-col items-center">
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

        <div className="mt-8 text-center text-sm mb-6 text-gray-600 md:mb-2">
          <Link href="/terms" className="text-gray-600 hover:text-primary mb-2">
            Terms and Conditions
          </Link>
          <p>© 2023 AI Chatbot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
