import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface Polaroid {
  image: string;
  caption: string;
}

interface PolaroidSectionProps {
  layout: 'left' | 'right';
  polaroid1: Polaroid;
  polaroid2: Polaroid;
  headline: string;
  body: string;
  bullet?: string;
  cta?: string;
  zIndex: number;
}

const PolaroidSection = ({
  layout,
  polaroid1,
  polaroid2,
  headline,
  body,
  bullet,
  cta,
  zIndex,
}: PolaroidSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);


  const isLeft = layout === 'left';



  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-sage-50 flex flex-col lg:block"
      style={{ zIndex }}
    >
      {/* Polaroids */}
      {isLeft ? (
        <>
          {/* Left Layout - Polaroids on Left */}
          <div
            className="relative w-full h-[40vh] order-2 mb-4 lg:mb-0 lg:absolute lg:left-[6vw] lg:top-[10vh] lg:w-[34vw] lg:h-[34vh] polaroid"
          >
            <img
              src={polaroid1.image}
              alt={polaroid1.caption}
              className="w-full h-[85%] object-cover"
            />
            <p className="polaroid-caption">{polaroid1.caption}</p>
          </div>
          <div
            className="relative w-full h-[40vh] order-2 lg:absolute lg:left-[6vw] lg:top-[52vh] lg:w-[34vw] lg:h-[34vh] polaroid"
          >
            <img
              src={polaroid2.image}
              alt={polaroid2.caption}
              className="w-full h-[85%] object-cover"
            />
            <p className="polaroid-caption">{polaroid2.caption}</p>
          </div>
        </>
      ) : (
        <>
          {/* Right Layout - Polaroids on Right */}
          <div
            className="relative w-full h-[40vh] order-2 mb-4 lg:mb-0 lg:absolute lg:left-[56vw] lg:top-[10vh] lg:w-[34vw] lg:h-[34vh] polaroid"
          >
            <img
              src={polaroid1.image}
              alt={polaroid1.caption}
              className="w-full h-[85%] object-cover"
            />
            <p className="polaroid-caption">{polaroid1.caption}</p>
          </div>
          <div
            className="relative w-full h-[40vh] order-2 lg:absolute lg:left-[56vw] lg:top-[52vh] lg:w-[34vw] lg:h-[34vh] polaroid"
          >
            <img
              src={polaroid2.image}
              alt={polaroid2.caption}
              className="w-full h-[85%] object-cover"
            />
            <p className="polaroid-caption">{polaroid2.caption}</p>
          </div>
        </>
      )}

      {/* Text Block */}
      <div
        className={`relative w-full p-8 order-1 lg:absolute ${isLeft ? 'lg:left-[52vw]' : 'lg:left-[6vw]'} lg:top-[26vh] lg:w-[42vw]`}
      >
        <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-sage-900 leading-tight mb-6">
          {headline}
        </h2>
        <p className="text-lg text-sage-600 leading-relaxed mb-4">{body}</p>
        {bullet && (
          <p className="font-mono text-sm uppercase tracking-widest text-sage-500 mb-6">
            {bullet}
          </p>
        )}
        {cta && (
          <button className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-sage-900 hover:text-sage-600 transition-colors">
            {cta}
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </section>
  );
};

export default PolaroidSection;
