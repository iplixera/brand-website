import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceLayout from '@/components/services/ServiceLayout';

const FrontendDevelopment = () => {
  const serviceData = {
    title: "Frontend Development",
    description: "Create beautiful, responsive, and user-friendly interfaces that engage your users. Our frontend development services focus on delivering exceptional user experiences.",
    features: [
      "Responsive web design",
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "Cross-browser compatibility",
      "Modern UI/UX implementation",
      "Performance optimization",
      "Accessibility compliance",
      "Interactive animations"
    ],
    benefits: [
      {
        title: "Enhanced User Experience",
        description: "Create intuitive and engaging interfaces that keep users coming back."
      },
      {
        title: "Mobile-First Design",
        description: "Ensure your application works flawlessly across all devices and screen sizes."
      },
      {
        title: "Fast Loading Times",
        description: "Optimize performance for quick loading and smooth interactions."
      },
      {
        title: "Brand Consistency",
        description: "Maintain consistent design language and brand identity across all interfaces."
      },
      {
        title: "Increased Engagement",
        description: "Keep users engaged with interactive and responsive design elements."
      },
      {
        title: "Accessible Design",
        description: "Ensure your application is accessible to all users, including those with disabilities."
      }
    ],
    processSteps: [
      {
        title: "Design Review",
        description: "Analyze design requirements and create a technical implementation plan."
      },
      {
        title: "Component Development",
        description: "Build reusable components following modern frontend architecture patterns."
      },
      {
        title: "Integration & Testing",
        description: "Integrate components and ensure cross-browser compatibility and responsiveness."
      },
      {
        title: "Optimization",
        description: "Optimize performance, accessibility, and user experience."
      }
    ],
    technologies: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "CSS Modules",
      "Framer Motion",
      "Redux / Zustand",
      "Jest / Testing Library",
      "Webpack / Vite"
    ]
  };

  return (
    <Layout>
      <ServiceLayout {...serviceData} />
    </Layout>
  );
};

export default FrontendDevelopment; 