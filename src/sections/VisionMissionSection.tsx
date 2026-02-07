import { useRef } from 'react';
import { Eye, Target, CheckCircle } from 'lucide-react';

const VisionMissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);




  const visionPoints = [
    'Become a trusted manufacturer of biomass briquettes',
    'Promote sustainable energy solutions',
    'Reduce agricultural waste',
    'Contribute to a cleaner and greener environment',
  ];

  const missionPoints = [
    'Manufacture high-quality biomass briquettes with consistent calorific value',
    'Provide eco-friendly fuel solutions at competitive prices',
    'Support industries in reducing their carbon footprint',
    'Promote the effective use of agricultural waste for energy generation',
  ];

  return (
    <section
      ref={sectionRef}
      id="vision-mission"
      className="relative bg-sage-50 py-24 lg:py-32"
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-sm uppercase tracking-widest text-sage-500 mb-4">
            Our Purpose
          </p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-sage-900 leading-tight">
            Vision & Mission
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <div className="bg-white p-8 lg:p-10 rounded-lg shadow-card border border-sage-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-lime-accent rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-sage-900" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-sage-900">
                Our Vision
              </h3>
            </div>
            <p className="text-sage-600 leading-relaxed mb-6">
              To become a trusted and leading manufacturer of biomass briquettes
              by promoting sustainable energy solutions, reducing agricultural
              waste, and contributing to a cleaner and greener environment.
            </p>
            <ul className="space-y-3">
              {visionPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sage-600"
                >
                  <CheckCircle className="w-5 h-5 text-lime-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 lg:p-10 rounded-lg shadow-card border border-sage-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-lime-accent rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-sage-900" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-sage-900">
                Our Mission
              </h3>
            </div>
            <ul className="space-y-4">
              {missionPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sage-600"
                >
                  <CheckCircle className="w-5 h-5 text-lime-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
