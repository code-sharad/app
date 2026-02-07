import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Product', id: 'products' },
    { label: 'Why Us', id: 'vision-mission' },
    { label: 'Contact', id: 'contact' },
    { label: 'Privacy', id: null },
  ];

  return (
    <footer className="bg-sage-900 py-8 lg:py-12">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="font-heading font-bold text-sage-50 hover:text-lime-accent transition-colors"
          >
            SHRI SWAMI SAMARTH AGRO
          </button>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link, index) => (
              <button
                key={index}
                onClick={() => link.id && scrollToSection(link.id)}
                className="font-mono text-xs uppercase tracking-widest text-sage-400 hover:text-sage-50 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sage-400 hover:text-lime-accent transition-colors"
          >
            Back to Top
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-sage-800 my-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="font-mono text-xs text-sage-500">
            © {new Date().getFullYear()} Shri Swami Samarth Agro Industries. All
            rights reserved.
          </p>
          <p className="font-mono text-xs text-sage-600 mt-2">
            F-71, Krushnoor-MIDC, Nanded, Maharashtra • GST: 27ABMFM3780G1ZX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
