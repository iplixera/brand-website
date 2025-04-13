import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceLayout from '@/components/services/ServiceLayout';

const Deployment = () => {
  const serviceData = {
    title: "Deployment & DevOps",
    description: "Streamline your development workflow and ensure reliable deployments with our DevOps expertise. We help you set up efficient CI/CD pipelines and cloud infrastructure.",
    features: [
      "CI/CD pipeline setup",
      "Cloud infrastructure management",
      "Container orchestration",
      "Infrastructure as Code (IaC)",
      "Monitoring and logging",
      "Security implementation",
      "Automated testing",
      "Disaster recovery planning"
    ],
    benefits: [
      {
        title: "Faster Deployments",
        description: "Automate your deployment process for quick and reliable releases."
      },
      {
        title: "Improved Reliability",
        description: "Ensure consistent environments and reduce deployment-related issues."
      },
      {
        title: "Cost Optimization",
        description: "Optimize cloud resources and infrastructure costs through efficient management."
      },
      {
        title: "Enhanced Security",
        description: "Implement security best practices throughout the deployment pipeline."
      },
      {
        title: "Better Collaboration",
        description: "Improve team collaboration with standardized development and deployment processes."
      },
      {
        title: "Scalable Infrastructure",
        description: "Build infrastructure that can scale with your application needs."
      }
    ],
    processSteps: [
      {
        title: "Infrastructure Assessment",
        description: "Evaluate current infrastructure and identify areas for improvement."
      },
      {
        title: "DevOps Implementation",
        description: "Set up CI/CD pipelines and implement DevOps best practices."
      },
      {
        title: "Monitoring Setup",
        description: "Implement comprehensive monitoring and alerting systems."
      },
      {
        title: "Optimization & Training",
        description: "Optimize processes and train your team on the new infrastructure."
      }
    ],
    technologies: [
      "Docker",
      "Kubernetes",
      "Jenkins / GitHub Actions",
      "Terraform",
      "AWS / Azure / GCP",
      "Prometheus / Grafana",
      "ELK Stack",
      "Ansible"
    ]
  };

  return (
    <Layout>
      <ServiceLayout {...serviceData} />
    </Layout>
  );
};

export default Deployment; 