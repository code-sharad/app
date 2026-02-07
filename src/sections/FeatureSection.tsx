import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface FeatureSectionProps {
  image: string;
  cardTitle: string;
  cardBody: string;
  cardCta: string;
  rightHeadline: string;
  rightMicrocopy: string;
  zIndex: number;
}

const FeatureSection = ({
  image,
  cardTitle,
  cardBody,
  cardCta,
  rightHeadline,
  rightMicrocopy,
  zIndex,
}: FeatureSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);




  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-sage-50 flex flex-col lg:block"
      style={{ zIndex }}
    >
      {/* Wide Landscape Image (Top) */}
      <img
        src={image}
        alt="Feature"
        className="relative w-full h-[50vh] lg:absolute lg:left-0 lg:top-0 lg:w-full lg:h-[62vh] object-cover"
      />

      {/* Feature Card (Bottom-Left) */}
      <div
        className="relative w-full bg-sage-50 border-b border-sage-900/10 p-8 lg:absolute lg:left-[6vw] lg:top-[54vh] lg:w-[44vw] lg:min-h-[36vh] lg:border lg:border-sage-900/8 lg:p-10 lg:shadow-card"
      >
        <h3 className="font-heading font-bold text-2xl lg:text-3xl text-sage-900 mb-4">
          {cardTitle}
        </h3>
        <p className="text-sage-600 leading-relaxed mb-6">{cardBody}</p>
        <button className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-sage-900 hover:text-sage-600 transition-colors">
          {cardCta}
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Right Text Block (Bottom-Right) */}
      <div
        className="relative w-full p-8 lg:absolute lg:left-[56vw] lg:top-[70vh] lg:w-[38vw]"
      >
        <h3 className="font-heading font-bold text-xl lg:text-2xl text-sage-900 mb-2">
          {rightHeadline}
        </h3>
        <p className="font-mono text-sm uppercase tracking-widest text-sage-500">
          {rightMicrocopy}
        </p>
      </div>
    </section>
  );
};

export default FeatureSection;
