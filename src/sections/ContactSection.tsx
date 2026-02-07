import { useRef, useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  FileText,
  Send,
  CheckCircle
} from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    requirement: '',
  });



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        requirement: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'F-71, Krushnoor-MIDC, Nanded, Maharashtra',
      href: null,
    },
    {
      icon: Phone,
      label: 'Mobile',
      value: '9921834743 / 8605428171',
      href: 'tel:9921834743',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '9130124920',
      href: 'https://wa.me/9130124920',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'sssaikrushnoor@gmail.com',
      href: 'mailto:sssaikrushnoor@gmail.com',
    },
    {
      icon: FileText,
      label: 'GST Number',
      value: '27ABMFM3780G1ZX',
      href: null,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-sage-800 py-24 lg:py-32"
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-sm uppercase tracking-widest text-sage-400 mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-sage-50 leading-tight mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-sage-300 max-w-2xl mx-auto">
            Ready to switch to eco-friendly fuel? Reach out to us for quotes,
            inquiries, or to schedule a facility visit.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <div>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-sage-700/50 rounded-lg"
                >
                  <div className="w-10 h-10 bg-lime-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-sage-900" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-sage-400 mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sage-50 hover:text-lime-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sage-50">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
          {/* Map Placeholder */}
          <div className="mt-8 bg-sage-700/30 rounded-lg p-6 text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.734848095302!2d77.49334207593404!3d18.94312705612892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce3d0020ff10ad%3A0xe52d8ba1c4b22b0c!2sShri%20Swami%20Samarth%20Agro%20industries!5e0!3m2!1sen!2sin!4v1770476549173!5m2!1sen!2sin"
              className="w-full h-[300px] lg:h-[450px] border-0 rounded-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
