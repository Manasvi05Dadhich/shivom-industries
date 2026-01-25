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
    <section className="py-24 px-8 bg-[var(--stone-light)]">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 border border-[var(--warm-grey)]/30 text-xs tracking-[0.15em] text-[var(--warm-grey)] uppercase">
            Contact Us
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-5xl text-[var(--deep-charcoal)] mb-4">
            Get In Touch
          </h2>
          <p className="text-[var(--warm-grey)] max-w-2xl mx-auto">
            Connect with our export team to discuss your stone requirements, request samples, or inquire about custom
            specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info cards */}
          <div className="space-y-6">
            <ContactCard
              icon={<MapPin className="w-5 h-5" />}
              title="Factory Address"
              content={[
                'RIICO Industrial Area, Plot No. F7(A), Bigod, Dist. Bhilwara-311601, Rajasthan, India',
                <>
                  <span className="font-semibold text-[var(--black)]">Branch Address:</span>{' '}
                  Kesarganj chouraha , Four Lane, Bijoliya, Dist. Bhilwara-311602 Rajasthan, India
                </>,
              ]}
            />
            <ContactCard
              icon={<Mail className="w-5 h-5" />}
              title="Email"
              content={['info@shivomindustries.com', 'export@shivomindustries.com']}
            />
            <ContactCard
              icon={<Phone className="w-5 h-5" />}
              title="Phone"
              content={['+91 9928764042', 'Mon-Sat: 9:00 AM - 6:00 PM IST']}
            />
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2 bg-white p-8 border border-[var(--warm-grey)]/20">
            <h3 className="font-['Cormorant_Garamond'] text-2xl text-[var(--deep-charcoal)] mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-[var(--deep-charcoal)] mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--warm-grey)]/20 focus:border-[var(--muted-bronze)] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--deep-charcoal)] mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--warm-grey)]/20 focus:border-[var(--muted-bronze)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[var(--deep-charcoal)] mb-2">Subject *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-[var(--warm-grey)]/20 focus:border-[var(--muted-bronze)] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[var(--deep-charcoal)] mb-2">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-[var(--warm-grey)]/20 focus:border-[var(--muted-bronze)] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-3 bg-[var(--deep-charcoal)] text-white hover:bg-[var(--muted-bronze)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
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
    <div className="bg-white p-6 border border-[var(--warm-grey)]/20">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-[var(--muted-bronze)]">{icon}</div>
        <h4 className="font-['Cormorant_Garamond'] text-lg text-[var(--deep-charcoal)]">{title}</h4>
      </div>
      <div className="space-y-1">
        {content.map((line, idx) => (
          <p key={idx} className="text-sm text-[var(--warm-grey)]">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
