import { useRef } from 'react';
import { Check, Flame, Droplets, Scale } from 'lucide-react';

const ProductsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);




  const rawMaterials = [
    'Soya husk',
    'Chana husk',
    'Sawdust',
    'Other agricultural biomass waste',
  ];

  const features = [
    {
      icon: Leaf,
      title: 'Eco-friendly',
      description: 'Renewable fuel source',
    },
    {
      icon: Droplets,
      title: 'Low Moisture',
      description: 'Minimal ash content',
    },
    {
      icon: Flame,
      title: 'High Calorific',
      description: '4000+ kcal/kg value',
    },
    {
      icon: Scale,
      title: 'Cost-effective',
      description: 'Alternative to coal',
    },
  ];

  const applications = ['Boilers', 'Furnaces', 'Industrial heating systems'];

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative bg-sage-100 py-24 lg:py-32"
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-sm uppercase tracking-widest text-sage-500 mb-4">
            Our Product
          </p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-sage-900 leading-tight mb-4">
            Biomass Briquettes
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Premium-quality biomass briquettes suitable for industrial use,
            manufactured with precision and care.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Product Image */}
          <div className="relative">
            <img
              src="/briquettes-product.jpg"
              alt="Biomass Briquettes"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-card"
            />
          </div>

          {/* Right - Product Details */}
          <div className="space-y-8">
            {/* Raw Materials */}
            <div className="bg-sage-50 p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-sage-900 mb-4">
                Raw Materials Used
              </h3>
              <ul className="space-y-2">
                {rawMaterials.map((material, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sage-600"
                  >
                    <Check className="w-5 h-5 text-lime-accent flex-shrink-0" />
                    {material}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="font-heading font-bold text-xl text-sage-900 mb-4">
                Key Features
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-sage-50 p-4 rounded-lg text-center"
                  >
                    <feature.icon className="w-6 h-6 text-sage-700 mx-auto mb-2" />
                    <h4 className="font-heading font-semibold text-sage-900 text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-sage-500">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="bg-sage-800 text-sage-50 p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl mb-4">
                Applications
              </h3>
              <div className="flex flex-wrap gap-3">
                {applications.map((app, index) => (
                  <span
                    key={index}
                    className="bg-sage-700 px-4 py-2 rounded-full text-sm font-mono uppercase tracking-wider"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Need to import Leaf for the features array
import { Leaf } from 'lucide-react';

export default ProductsSection;
