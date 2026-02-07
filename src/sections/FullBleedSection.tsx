import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface FullBleedSectionProps {
  image: string;
  cardHeadline: string;
  cardBody: string;
  cardCta: string;
  cardSecondaryCta?: string;
  zIndex: number;
}

const FullBleedSection = ({
  image,
  cardHeadline,
  cardBody,
  cardCta,
  cardSecondaryCta,
  zIndex,
}: FullBleedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);




  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-sage-50 flex flex-col lg:block"
      style={{ zIndex }}
    >
      {/* Full-bleed Landscape Image */}
      <img
        src={image}
        alt="Landscape"
        className="relative w-full h-[50vh] lg:absolute lg:inset-0 lg:h-full object-cover"
      />

      {/* Bottom CTA Card */}
      <div
        className="relative w-full p-8 bg-sage-50 lg:absolute lg:left-[6vw] lg:bottom-[8vh] lg:w-[46vw] lg:min-h-[28vh] lg:p-10 lg:shadow-card"
      >
        <h3 className="font-heading font-bold text-2xl lg:text-3xl text-sage-900 mb-4">
          {cardHeadline}
        </h3>
        <p className="text-sage-600 leading-relaxed mb-6">{cardBody}</p>
        <div className="flex flex-wrap items-center gap-4">
          <button className="btn-primary inline-flex items-center gap-2">
            {cardCta}
            <ArrowRight size={16} />
          </button>
          {cardSecondaryCta && (
            <button className="font-mono text-sm uppercase tracking-widest text-sage-700 hover:text-sage-900 transition-colors">
              {cardSecondaryCta}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FullBleedSection;
