import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface TextImageSectionProps {
  layout: 'left' | 'right';
  image: string;
  headline: string;
  body: string;
  cta: string;
  caption?: string;
  zIndex: number;
}

const TextImageSection = ({
  layout,
  image,
  headline,
  body,
  cta,
  caption,
  zIndex,
}: TextImageSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);


  const isLeft = layout === 'left';



  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-sage-50 flex flex-col lg:block"
      style={{ zIndex }}
    >
      {/* Text Block */}
      <div
        className={`relative w-full p-8 order-2 lg:absolute ${isLeft ? 'lg:left-[6vw]' : 'lg:left-[52vw]'} lg:top-[26vh] lg:w-[42vw]`}
      >
        <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-sage-900 leading-tight mb-6">
          {headline}
        </h2>
        <p className="text-lg text-sage-600 leading-relaxed mb-6">{body}</p>
        <button className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-sage-900 hover:text-sage-600 transition-colors mb-4">
          {cta}
          <ArrowRight size={16} />
        </button>
        {caption && (
          <p className="font-mono text-xs uppercase tracking-widest text-sage-500">
            {caption}
          </p>
        )}
      </div>

      {/* Feature Image */}
      <img
        src={image}
        alt="Feature"
        className={`relative w-full h-[50vh] order-1 lg:absolute ${isLeft ? 'lg:left-[54vw]' : 'lg:left-[6vw]'} lg:top-[14vh] lg:w-[40vw] lg:h-[72vh] object-cover`}
      />
    </section>
  );
};

export default TextImageSection;
