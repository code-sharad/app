import { useEffect, useRef } from 'react';

import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import FeatureSection from './sections/FeatureSection';
import PolaroidSection from './sections/PolaroidSection';
import FullBleedSection from './sections/FullBleedSection';
import TextImageSection from './sections/TextImageSection';
import AboutSection from './sections/AboutSection';
import ProductsSection from './sections/ProductsSection';
import VisionMissionSection from './sections/VisionMissionSection';
import ProductionSection from './sections/ProductionSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import './App.css';



function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ScrollTrigger refresh logic removed
  }, []);

  return (
    <div ref={mainRef} className="relative">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Clean-Burning Performance */}
        <FeatureSection
          image="/landscape-workers.jpg"
          cardTitle="Low ash. High heat."
          cardBody="Our briquettes deliver consistent calorific value with minimal residue—engineered for boilers, furnaces, and industrial dryers."
          cardCta="See lab results"
          rightHeadline="Consistent output, batch after batch."
          rightMicrocopy="Moisture-controlled. Uniform density. Ready to burn."
          zIndex={10}
        />

        {/* Section 3: Made From Farm Residues */}
        <PolaroidSection
          layout="left"
          polaroid1={{ image: '/polaroid-raw.jpg', caption: 'Raw biomass collection' }}
          polaroid2={{ image: '/polaroid-processed.jpg', caption: 'Processed feedstock' }}
          headline="Soya husk. Chana husk. Sawdust."
          body="We turn agricultural residues into reliable fuel—reducing waste and cutting emissions."
          bullet="No binders • Low moisture • High density"
          zIndex={20}
        />

        {/* Section 4: Pressed for Performance */}
        <PolaroidSection
          layout="right"
          polaroid1={{ image: '/polaroid-extrusion.jpg', caption: 'Extrusion line' }}
          polaroid2={{ image: '/polaroid-quality.jpg', caption: 'Quality check' }}
          headline="Pressed under pressure. Dried to spec."
          body="Our process controls moisture, density, and finish—so every briquette burns predictably."
          cta="Watch the process"
          zIndex={30}
        />

        {/* Section 5: Scale That Delivers */}
        <FullBleedSection
          image="/landscape-production.jpg"
          cardHeadline="750 tons per month"
          cardBody="Scheduled production, timely dispatch, and dedicated logistics support."
          cardCta="Plan a shipment"
          cardSecondaryCta="View delivery map"
          zIndex={40}
        />

        {/* Section 6: Lab-Tested Quality */}
        <TextImageSection
          layout="left"
          image="/feature-lab.jpg"
          headline="Tested. Measured. Consistent."
          body="We monitor calorific value, ash content, and moisture—so your boiler sees stable performance."
          cta="Request a test report"
          caption="Typical specs: 4000+ kcal/kg • Ash < 8%"
          zIndex={50}
        />

        {/* Section 7: Built for Your Boiler */}
        <FullBleedSection
          image="/landscape-boiler.jpg"
          cardHeadline="Compatible with most furnaces"
          cardBody="Sized for reliable feeding and complete combustion."
          cardCta="Ask about sizing"
          zIndex={60}
        />

        {/* Section 8: Lower Emissions */}
        <TextImageSection
          layout="left"
          image="/feature-green-field.jpg"
          headline="Lower emissions. Less waste."
          body="Switching to biomass briquettes reduces reliance on coal and helps utilize agricultural residues."
          cta="Calculate your impact"
          zIndex={70}
        />

        {/* Section 9: Reliable Supply */}
        <FullBleedSection
          image="/landscape-logistics.jpg"
          cardHeadline="On-time delivery"
          cardBody="Batch tracking, scheduled loads, and direct communication—so you never run dry."
          cardCta="Set up a supply plan"
          zIndex={80}
        />

        {/* Section 10: Let's Work Together */}
        <TextImageSection
          layout="left"
          image="/feature-partnership.jpg"
          headline="Let's work together."
          body="Tell us your volume, timeline, and delivery location. We'll respond with pricing and a supply plan."
          cta="Start a conversation"
          caption="Call 9921834743 (Mon–Sat, 9–6)"
          zIndex={90}
        />

        {/* Section 11: Request a Quote */}
        <FullBleedSection
          image="/landscape-final-cta.jpg"
          cardHeadline="Ready when you are."
          cardBody="Share your requirements and we'll return a clear quote within one business day."
          cardCta="Request a Quote"
          cardSecondaryCta="Or email sssaikrushnoor@gmail.com"
          zIndex={100}
        />

        {/* Section 12: Closing Hero */}
        <HeroSection
          variant="closing"
          zIndex={110}
        />

        {/* Flowing Sections */}
        <div className="relative z-[120]">
          {/* About Section */}
          <AboutSection />

          {/* Products Section */}
          <ProductsSection />

          {/* Vision & Mission */}
          <VisionMissionSection />

          {/* Production Capacity */}
          <ProductionSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
