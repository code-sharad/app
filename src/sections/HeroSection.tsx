import { useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';

interface HeroSectionProps {
  variant?: 'default' | 'closing';
  zIndex?: number;
}

const HeroSection = ({ variant = 'default', zIndex = 1 }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);


  const isClosing = variant === 'closing';



  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-sage-50 flex flex-col lg:block"
      style={{ zIndex }}
    >
      {/* Portrait Image (Left) */}
      <img
        src={isClosing ? '/closing-portrait.jpg' : '/hero-portrait.jpg'}
        alt={isClosing ? 'Closing portrait' : 'Hero portrait'}
        className="relative w-full h-[50vh] lg:absolute lg:left-0 lg:top-0 lg:w-[52vw] lg:h-full object-cover"
        style={{ objectPosition: 'center 35%' }}
      />

      {/* Content (Right) */}
      <div className="relative w-full px-6 py-10 lg:absolute lg:left-[58vw] lg:top-[18vh] lg:w-[38vw] lg:p-0">
        <div>
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-sage-900 leading-[0.95] tracking-tight mb-6">
            {isClosing ? (
              <>
                <span className="word inline-block">FUEL</span>{' '}
                <span className="word inline-block">THE</span>{' '}
                <span className="word inline-block">FUTURE.</span>
              </>
            ) : (
              <>
                <span className="word inline-block">ECO-FRIENDLY</span>{' '}
                <span className="word inline-block">FUEL</span>
              </>
            )}
          </h1>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed max-w-md">
            {isClosing
              ? 'Biomass briquettes that perform—made in Nanded, delivered across India.'
              : 'High-calorific biomass briquettes made from farm residues.'}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            {isClosing ? 'Go to Contact' : 'Request a Quote'}
            <ArrowRight size={18} />
          </a>
          
        </div>
      </div>

      {/* Bottom Caption */}
      {!isClosing && (
        <div
          className="relative px-6 pb-8 mt-auto lg:absolute lg:left-[6vw] lg:bottom-[8vh] lg:p-0 font-mono text-xs uppercase tracking-widest text-sage-600"
        >
          Krushnoor MIDC, Nanded • Est. 2020
        </div>
      )}
    </section>
  );
};

export default HeroSection;
