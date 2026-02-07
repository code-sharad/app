import { useRef } from 'react';
import { TrendingUp, Calendar, Truck, Package } from 'lucide-react';

const ProductionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);




  const stats = [
    {
      icon: TrendingUp,
      value: '750',
      unit: 'Tons',
      label: 'Monthly Production',
    },
    {
      icon: Calendar,
      value: '4+',
      unit: 'Years',
      label: 'Experience',
    },
    {
      icon: Truck,
      value: '100%',
      unit: '',
      label: 'On-Time Delivery',
    },
    {
      icon: Package,
      value: '24/7',
      unit: '',
      label: 'Production',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-sage-100 py-24 lg:py-32"
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-sm uppercase tracking-widest text-sage-500 mb-4">
            Production Capacity
          </p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-sage-900 leading-tight mb-4">
            Scale That Delivers
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            With state-of-the-art manufacturing facilities and dedicated logistics,
            we ensure consistent supply to meet your industrial fuel needs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-sage-50 p-6 lg:p-8 rounded-lg text-center shadow-card hover:shadow-lg transition-shadow"
            >
              <stat.icon className="w-8 h-8 text-sage-700 mx-auto mb-4" />
              <p className="font-heading font-bold text-3xl lg:text-4xl text-sage-900 mb-1">
                {stat.value}
                <span className="text-lg lg:text-xl text-sage-500 ml-1">
                  {stat.unit}
                </span>
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-sage-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Manufacturing Image */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="/manufacturing.jpg"
            alt="Manufacturing facility"
            className="w-full h-[300px] lg:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <h3 className="font-heading font-bold text-xl lg:text-2xl text-white mb-2">
                  Modern Manufacturing Facility
                </h3>
                <p className="text-sage-100 text-sm lg:text-base max-w-xl">
                  Equipped with advanced briquetting machinery and quality control
                  systems to ensure consistent product output.
                </p>
              </div>
              <a
                href="#contact"
                className="btn-primary self-start lg:self-auto"
              >
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;
