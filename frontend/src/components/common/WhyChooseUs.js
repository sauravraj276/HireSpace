import React from 'react';
import { Target, Zap, Briefcase, BarChart3, Lock, HeadphonesIcon } from 'lucide-react';
import '../../styles/components/why-choose-us.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: Target,
      title: 'Targeted Job Matching',
      description: 'Our advanced algorithm matches you with jobs that fit your skills and career goals perfectly.',
    },
    {
      id: 2,
      icon: Zap,
      title: 'Fast Application Process',
      description: 'Apply to multiple jobs with just one click. Save time and focus on what matters most.',
    },
    {
      id: 3,
      icon: Briefcase,
      title: 'Top Companies',
      description: 'Connect with leading companies and startups. Access exclusive opportunities not found elsewhere.',
    },
    {
      id: 4,
      icon: BarChart3,
      title: 'Career Insights',
      description: 'Get valuable insights about your career path, salary expectations, and industry trends.',
    },
    {
      id: 5,
      icon: Lock,
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security. Control your privacy settings.',
    },
    {
      id: 6,
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Our dedicated support team is always ready to help you with any questions or concerns.',
    },
  ];

  return (
    <section className="why-choose-us section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Why Choose <span className="text-primary">HireSpace?</span>
          </h2>
          <p className="section-subtitle">
            We're committed to making your job search easier, faster, and more successful.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">
                  <IconComponent size={40} strokeWidth={2} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

