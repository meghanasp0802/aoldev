import React from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Users, 
  Briefcase, 
  HelpCircle, 
  Mail, 
  Code, 
  Globe, 
  Target 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CareerOpportunities = [
  {
    title: "Frontend Developer",
    type: "Full-time",
    description: "Build intuitive user interfaces for our AI-powered platform.",
    skills: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "AI Research Scientist",
    type: "Remote",
    description: "Advance AI capabilities through machine learning research.",
    skills: ["Python", "Machine Learning", "Deep Learning"]
  },
  {
    title: "Technical Writer",
    type: "Part-time",
    description: "Create comprehensive documentation for our technical ecosystem.",
    skills: ["Technical Writing", "Markdown", "API Documentation"]
  }
];

const ContributionGuidelines = [
  {
    title: "Code Contributions",
    steps: [
      "Fork project repository",
      "Create feature branch",
      "Write documented code",
      "Submit pull request",
      "Participate in code review"
    ]
  },
  {
    title: "Documentation",
    steps: [
      "Identify documentation gaps",
      "Draft clear content",
      "Follow style guidelines",
      "Submit updates",
      "Collaborate with team"
    ]
  },
  {
    title: "Additional Resources",
    steps: [
      "Report GitHub issues",
      "Suggest improvements",
      "Participate in discussions",
      "Provide testing feedback",
      "Spread project awareness"
    ]
  }
];

const FAQs = [
  {
    question: "How do I apply?",
    answer: "Review open positions, prepare resume, submit through application portal."
  },
  {
    question: "Do you offer remote work?",
    answer: "Yes, we support remote work for most positions."
  },
  {
    question: "What is the interview process?",
    answer: "Screening, technical assessment, and team interview rounds."
  }
];

export default function CareersContent() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <section className="text-center mb-12 mt-20">
        <h1 className="text-4xl font-bold mb-4 text-purple-800">
          Join Our Innovative Team
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Build the future of AI-powered interactions with passionate technologists.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">
          <Briefcase className="inline-block mr-3 text-purple-500" />
          Current Opportunities
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {CareerOpportunities.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">{job.title}</CardTitle>
                <p className="text-sm text-gray-500">{job.type}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-purple-500 text-purple-700 hover:bg-purple-50"
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">
          <Code className="inline-block mr-3 text-purple-500" />
          Contribution Guidelines
        </h2>
        <Card>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {ContributionGuidelines.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-4 text-purple-800">
                    {section.title}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {section.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">
          <HelpCircle className="inline-block mr-3 text-purple-500" />
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {FAQs.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-purple-800">
          Ready to Make an Impact?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our team of passionate technologists.
        </p>
        <div className="flex justify-center items-center gap-4">
          <Link href="/contact">
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white"
              size="lg"
            >
              <Mail className="mr-2" /> Contact Hiring Team
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-purple-500 text-purple-700 hover:bg-purple-50"
          >
            <Users className="mr-2" /> Team Culture
          </Button>
        </div>
      </section>
    </div>
  );
}