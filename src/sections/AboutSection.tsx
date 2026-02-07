import { useRef } from 'react';
import { Leaf, Factory, Users } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);




  const features = [
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Made from agricultural waste materials',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Established production unit since 2020',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Led by experienced industry professionals',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-sage-50 py-24 lg:py-32"
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src="/hero-bg.jpg"
              alt="About us"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-lime-accent p-6 rounded-lg shadow-card">
              <p className="font-heading font-bold text-3xl text-sage-900">750+</p>
              <p className="font-mono text-xs uppercase tracking-widest text-sage-700">
                Tons/Month
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-sage-500 mb-4">
              About Us
            </p>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-sage-900 leading-tight mb-6">
              Shri Swami Samarth Agro Industries
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed mb-6">
              Established in 2020, we are a manufacturing-based company specializing
              in the production of high-quality biomass briquettes. We are committed
              to providing an eco-friendly, cost-effective, and sustainable fuel
              alternative to traditional fossil fuels.
            </p>
            <p className="text-sage-600 leading-relaxed mb-8">
              Our briquettes are manufactured using agricultural and biomass waste
              materials such as soya husk, chana husk, sawdust, and other biomass
              residues, ensuring efficient energy output with minimal environmental
              impact.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center sm:text-left">
                  <feature.icon className="w-8 h-8 text-sage-700 mx-auto sm:mx-0 mb-3" />
                  <h4 className="font-heading font-semibold text-sage-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-sage-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
