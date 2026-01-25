import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { WEB3FORMS_ACCESS_KEY } from '@/config/form';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: formData.subject || 'Contact form message',
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 px-8 md:px-12 lg:px-16 bg-[var(--stone-light)]">
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-6 px-5 py-2 border border-[var(--warm-grey)]/20 text-xs tracking-[0.2em] text-[var(--warm-grey)] uppercase bg-white/50">
            Contact Us
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl text-[var(--deep-charcoal)] mb-6 leading-tight tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg text-[var(--warm-grey)] max-w-2xl mx-auto leading-relaxed">
            Connect with our export team to discuss your stone requirements, request samples, or inquire about custom
            specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact info cards */}
          <div className="space-y-8">
            <ContactCard
              icon={<MapPin className="w-6 h-6" />}
              title="Factory Address"
              content={[
                'RIICO Industrial Area, Plot No. F7(A), Bigod, Dist. Bhilwara-311601, Rajasthan, India',
                <>
                  <span className="font-semibold text-[var(--deep-charcoal)]">Branch Address:</span>{' '}
                  Kesarganj chouraha , Four Lane, Bijoliya, Dist. Bhilwara-311602 Rajasthan, India
                </>,
              ]}
            />
            <ContactCard
              icon={<Mail className="w-6 h-6" />}
              title="Email"
              content={['info@shivomindustries.com', 'export@shivomindustries.com']}
            />
            <ContactCard
              icon={<Phone className="w-6 h-6" />}
              title="Phone"
              content={['+91 9928764042', 'Mon-Sat: 9:00 AM - 6:00 PM IST']}
            />
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2 bg-white p-10 md:p-12 rounded-2xl border border-[var(--warm-grey)]/15 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[var(--deep-charcoal)] mb-8 leading-tight">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--deep-charcoal)] mb-3">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 border border-[var(--warm-grey)]/20 rounded-lg focus:border-[var(--muted-bronze)] focus:outline-none focus:ring-2 focus:ring-[var(--muted-bronze)]/20 transition-all duration-300 bg-[var(--stone-light)]/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--deep-charcoal)] mb-3">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 border border-[var(--warm-grey)]/20 rounded-lg focus:border-[var(--muted-bronze)] focus:outline-none focus:ring-2 focus:ring-[var(--muted-bronze)]/20 transition-all duration-300 bg-[var(--stone-light)]/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--deep-charcoal)] mb-3">Subject *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-5 py-4 border border-[var(--warm-grey)]/20 rounded-lg focus:border-[var(--muted-bronze)] focus:outline-none focus:ring-2 focus:ring-[var(--muted-bronze)]/20 transition-all duration-300 bg-[var(--stone-light)]/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--deep-charcoal)] mb-3">Message *</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 border border-[var(--warm-grey)]/20 rounded-lg focus:border-[var(--muted-bronze)] focus:outline-none focus:ring-2 focus:ring-[var(--muted-bronze)]/20 transition-all duration-300 resize-none bg-[var(--stone-light)]/50"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--deep-charcoal)] text-white hover:bg-[var(--muted-bronze)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] font-medium"
              >
                <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>

              {submitStatus === 'success' && (
                <p className="text-sm text-green-600">
                  ✓ Message sent successfully! We will get back to you shortly.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-600">
                  ✗ Something went wrong. Please try again or contact us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode[];
}) {
  return (
    <div className="group bg-white p-8 border border-[var(--warm-grey)]/15 rounded-2xl transition-all duration-500 hover:border-[var(--muted-bronze)]/40 hover:shadow-[0_12px_32px_rgba(23,39,64,0.1)] hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-[var(--muted-bronze)] transition-transform duration-300 group-hover:scale-110">{icon}</div>
        <h4 className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-[var(--deep-charcoal)] leading-tight">{title}</h4>
      </div>
      <div className="space-y-2">
        {content.map((line, idx) => (
          <p key={idx} className="text-base text-[var(--warm-grey)] leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
