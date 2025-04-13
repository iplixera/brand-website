import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceLayout from '@/components/services/ServiceLayout';

const MVPDevelopment = () => {
  const serviceData = {
    title: "MVP Development",
    description: "Transform your ideas into a working product quickly and efficiently. Our MVP development service helps you validate your concept and get to market faster.",
    features: [
      "Rapid prototyping and development",
      "Core feature identification and prioritization",
      "User feedback integration",
      "Scalable architecture design",
      "Iterative development approach",
      "Performance optimization",
      "Cross-platform compatibility",
      "Security best practices"
    ],
    benefits: [
      {
        title: "Faster Time to Market",
        description: "Launch your product quickly and start gathering real user feedback to guide future development."
      },
      {
        title: "Cost-Effective Development",
        description: "Focus on essential features first, reducing initial development costs and risks."
      },
      {
        title: "Market Validation",
        description: "Test your product idea with real users before investing in full-scale development."
      },
      {
        title: "Scalable Foundation",
        description: "Build on a solid technical foundation that can grow with your business needs."
      },
      {
        title: "Investor Ready",
        description: "Have a working product to demonstrate to potential investors and stakeholders."
      },
      {
        title: "Data-Driven Decisions",
        description: "Make informed decisions based on real user data and feedback."
      }
    ],
    processSteps: [
      {
        title: "Discovery & Planning",
        description: "We work with you to understand your vision, identify core features, and create a development roadmap."
      },
      {
        title: "Design & Architecture",
        description: "Create user-friendly designs and establish a scalable technical architecture."
      },
      {
        title: "Development & Testing",
        description: "Rapid development of core features with continuous testing and quality assurance."
      },
      {
        title: "Launch & Feedback",
        description: "Deploy your MVP and gather user feedback to guide future iterations."
      }
    ],
    technologies: [
      "React / Next.js",
      "Node.js",
      "Python",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "AWS / GCP",
      "Docker"
    ]
  };

  return (
    <Layout>
      <ServiceLayout {...serviceData} />
    </Layout>
  );
};

export default MVPDevelopment; 