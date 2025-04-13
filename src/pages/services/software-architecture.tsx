import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceLayout from '@/components/services/ServiceLayout';

const SoftwareArchitecture = () => {
  const serviceData = {
    title: "Software Architecture",
    description: "Build scalable, maintainable, and robust software systems with our expert architecture services. We design systems that grow with your business needs.",
    features: [
      "System design and architecture planning",
      "Microservices architecture",
      "Cloud-native solutions",
      "API design and implementation",
      "Database architecture",
      "Security architecture",
      "Performance optimization",
      "Scalability planning"
    ],
    benefits: [
      {
        title: "Scalable Systems",
        description: "Design systems that can handle growth and increased load without compromising performance."
      },
      {
        title: "Cost Efficiency",
        description: "Optimize resource usage and reduce operational costs through efficient architecture."
      },
      {
        title: "Future-Proof Design",
        description: "Build systems that can adapt to changing business requirements and technology trends."
      },
      {
        title: "Improved Performance",
        description: "Optimize system performance through efficient architecture and design patterns."
      },
      {
        title: "Enhanced Security",
        description: "Implement security best practices at the architectural level to protect your data and systems."
      },
      {
        title: "Easier Maintenance",
        description: "Create maintainable systems that are easier to update and extend over time."
      }
    ],
    processSteps: [
      {
        title: "Requirements Analysis",
        description: "Understand your business needs, technical requirements, and future growth plans."
      },
      {
        title: "Architecture Design",
        description: "Create a comprehensive architecture design that meets your requirements and follows best practices."
      },
      {
        title: "Implementation Planning",
        description: "Develop a detailed implementation plan with clear milestones and deliverables."
      },
      {
        title: "Review & Optimization",
        description: "Review the architecture with stakeholders and optimize based on feedback."
      }
    ],
    technologies: [
      "Microservices",
      "Kubernetes",
      "Docker",
      "AWS / Azure / GCP",
      "GraphQL",
      "RESTful APIs",
      "Event-Driven Architecture",
      "Serverless"
    ]
  };

  return (
    <Layout>
      <ServiceLayout {...serviceData} />
    </Layout>
  );
};

export default SoftwareArchitecture; 