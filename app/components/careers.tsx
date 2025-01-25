'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Users,
  Briefcase,
  HelpCircle,
  Mail,
  Code,
  Globe,
  Target,
  GitMerge,
  ChevronDown,
  Book,
  Layers,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Career Opportunities Section Data
const CareerOpportunities = [
  {
    title: 'Frontend Developer',
    type: 'Full-time',
    description: 'Build intuitive user interfaces for our AI-powered platform.',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'AI Research Scientist',
    type: 'Remote',
    description: 'Advance AI capabilities through machine learning research.',
    skills: ['Python', 'Machine Learning', 'Deep Learning'],
  },
  {
    title: 'Technical Writer',
    type: 'Part-time',
    description: 'Create comprehensive documentation for our technical ecosystem.',
    skills: ['Technical Writing', 'Markdown', 'API Documentation'],
  },
];

// Contribution Guidelines Section Data
const ContributionGuidelines = [
  {
    title: 'Code Contributions',
    icon: <Code className="w-6 h-6 text-purple-500" />,
    description: 'Elevate our codebase through high-quality, innovative contributions.',
    sections: [
      {
        heading: 'Contribution Workflow',
        details: [
          'Fork official repository',
          'Create descriptive feature/bugfix branch',
          'Implement changes following coding standards',
          'Write comprehensive unit tests',
          'Document code changes thoroughly',
        ],
      },
      {
        heading: 'Coding Standards',
        details: [
          'Follow TypeScript/React best practices',
          'Maintain consistent code formatting',
          'Implement proper error handling',
          'Optimize for performance',
          'Adhere to SOLID principles',
        ],
      },
      {
        heading: 'Review Process',
        details: [
          'Mandatory CI/CD checks',
          'Peer code review required',
          'Constructive feedback encouraged',
          'Minimum two approvals for merge',
          'Maintain clean, atomic commits',
        ],
      },
    ],
  },
  {
    title: 'Documentation',
    icon: <Book className="w-6 h-6 text-purple-500" />,
    description: 'Transform complex technical concepts into clear, accessible knowledge.',
    sections: [
      {
        heading: 'Documentation Strategy',
        details: [
          'Identify documentation gaps',
          'Use clear, concise technical writing',
          'Create user and developer guides',
          'Maintain consistent terminology',
          'Include practical examples',
        ],
      },
      {
        heading: 'Style and Format',
        details: [
          'Follow Markdown best practices',
          'Use semantic HTML',
          'Implement clear section hierarchies',
          'Include code snippets',
          'Ensure cross-referencing accuracy',
        ],
      },
      {
        heading: 'Collaborative Process',
        details: [
          'Use pull requests for updates',
          'Engage in technical editing',
          'Validate technical accuracy',
          'Encourage community feedback',
          'Maintain version-controlled docs',
        ],
      },
    ],
  },
  {
    title: 'Community Engagement',
    icon: <Layers className="w-6 h-6 text-purple-500" />,
    description: 'Multiple ways to drive project innovation.',
    sections: [
      {
        heading: 'Technical Contributions',
        details: [
          'Report detailed GitHub issues',
          'Propose architectural improvements',
          'Participate in RFC discussions',
          'Optimize performance',
          'Help triage bugs',
        ],
      },
      {
        heading: 'Non-Technical Support',
        details: [
          'Provide UX feedback',
          'Create tutorial content',
          'Translate documentation',
          'Assist in community support',
          'Spread project awareness',
        ],
      },
      {
        heading: 'Knowledge Sharing',
        details: [
          'Write technical blog posts',
          'Create video tutorials',
          'Speak at conferences',
          'Mentor contributors',
          'Build integrations',
        ],
      },
    ],
  },
];

// Frequently Asked Questions (FAQs) Section Data
const FAQs = [
  {
    question: 'How do I apply?',
    answer: 'Review open positions, prepare resume, submit through application portal.',
  },
  {
    question: 'Do you offer remote work?',
    answer: 'Yes, we support remote work for most positions.',
  },
  {
    question: 'What is the interview process?',
    answer: 'Screening, technical assessment, and team interview rounds.',
  },
];

export default function CareersContent() {
  const [activeSection, setActiveSection] = useState({});

  const toggleSection = (sectionTitle, subsectionIndex) => {
    setActiveSection((prev) => ({
      ...prev,
      [`${sectionTitle}-${subsectionIndex}`]: !prev[`${sectionTitle}-${subsectionIndex}`],
    }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-12 mt-20">
        <h1 className="text-4xl font-bold mb-4 text-purple-800">Join Our Innovative Team</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Build the future of AI-powered interactions with passionate technologists.
        </p>
      </section>

      {/* Career Opportunities */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">
          <Briefcase className="inline-block mr-3 text-purple-500" />
          Current Opportunities
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {CareerOpportunities.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow w-full">
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
          <GitMerge className="inline-block mr-3 text-purple-500" />
          Contribution Guidelines
        </h2>
        <Card>
          <CardContent className="p-10">
            <div className="grid md:grid-cols-3 gap-8">
              {ContributionGuidelines.map((guideline, index) => (
                <div key={index}>
                  <div className="flex items-center mb-4">
                    {guideline.icon}
                    <h3 className="text-xl font-semibold ml-2 text-purple-800">
                      {guideline.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    {guideline.description}
                  </p>
                  {guideline.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-3">
                      <Button
                        variant="outline"
                        className="w-full justify-between hover:bg-purple-50"
                        onClick={() => toggleSection(guideline.title, sectionIndex)}
                      >
                        {section.heading}
                        <ChevronDown 
                          className={`transform transition-transform ${
                            activeSection[`${guideline.title}-${sectionIndex}`] 
                              ? 'rotate-180' 
                              : ''
                          }`} 
                        />
                      </Button>
                      {activeSection[`${guideline.title}-${sectionIndex}`] && (
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          {section.details.map((detail, detailIndex) => (
                            <li 
                              key={detailIndex} 
                              className="pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-500 before:rounded-full"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
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
        <div className="grid md:grid-cols-2 gap-8">
          {FAQs.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
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