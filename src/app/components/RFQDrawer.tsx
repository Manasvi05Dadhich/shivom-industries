import { X } from 'lucide-react';
import { useState } from 'react';
import { WEB3FORMS_ACCESS_KEY } from '@/config/form';

interface RFQDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RFQDrawer({ isOpen, onClose }: RFQDrawerProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: ''
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
          subject: `RFQ Request from ${formData.name} - ${formData.product}`,
          from_name: formData.name,
          email: formData.email,
          message: `
RFQ Request Details:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Country: ${formData.country}
Product Interest: ${formData.product}
Estimated Quantity: ${formData.quantity || 'Not provided'}

Additional Requirements:
${formData.message || 'None'}
          `.trim(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          country: '',
          product: '',
          quantity: '',
          message: '',
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
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

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-white z-50 overflow-y-auto shadow-[0_0_60px_rgba(0,0,0,0.2)]">
        <div className="p-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[var(--deep-charcoal)] mb-3 leading-tight">
                Request For Quotation
              </h2>
              <p className="text-base text-[var(--warm-grey)] leading-relaxed">
                Fill out the form below and we'll respond within 24 hours
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[var(--stone-light)] transition-all duration-300 rounded-lg hover:scale-110"
            >
              <X className="w-5 h-5 text-[var(--warm-grey)]" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[var(--deep-charcoal)] mb-3">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 border border-[var(--warm-grey)]/20 rounded-lg focus:border-[var(--muted-bronze)] focus:outline-none focus:ring-2 focus:ring-[var(--muted-bronze)]/20 transition-all duration-300 bg-[var(--stone-light)]/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--deep-charcoal)] mb-3">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 border border-[var(--warm-grey)]/20 rounded-lg focus:border-[var(--muted-bronze)] focus:outline-none focus:ring-2 focus:ring-[var(--muted-bronze)]/20 transition-all duration-300 bg-[var(--stone-light)]/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--deep-charcoal)] mb-3">
                Company Name
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-5 py-4 border border-[var(--warm-grey)]/20 rounded-lg focus:border-[var(--muted-bronze)] focus:outline-none focus:ring-2 focus:ring-[var(--muted-bronze)]/20 transition-all duration-300 bg-[var(--stone-light)]/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--deep-charcoal)] mb-3">
                Country *
              </label>
              <input
                type="text"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-5 py-4 border border-[var(--warm-grey)]/20 rounded-lg focus:border-[var(--muted-bronze)] focus:outline-none focus:ring-2 focus:ring-[var(--muted-bronze)]/20 transition-all duration-300 bg-[var(--stone-light)]/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--deep-charcoal)] mb-3">
                Product Interest *
              </label>
              <input
                type="text"
                required
                placeholder="e.g., Dholpur Beige, Kandla Grey"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full px-5 py-4 border border-[var(--warm-grey)]/20 rounded-lg focus:border-[var(--muted-bronze)] focus:outline-none focus:ring-2 focus:ring-[var(--muted-bronze)]/20 transition-all duration-300 bg-[var(--stone-light)]/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--deep-charcoal)] mb-3">
                Estimated Quantity
              </label>
              <input
                type="text"
                placeholder="e.g., 1000 sq ft, 2 containers"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-5 py-4 border border-[var(--warm-grey)]/20 rounded-lg focus:border-[var(--muted-bronze)] focus:outline-none focus:ring-2 focus:ring-[var(--muted-bronze)]/20 transition-all duration-300 bg-[var(--stone-light)]/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--deep-charcoal)] mb-3">
                Additional Requirements
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 border border-[var(--warm-grey)]/20 rounded-lg focus:border-[var(--muted-bronze)] focus:outline-none focus:ring-2 focus:ring-[var(--muted-bronze)]/20 transition-all duration-300 resize-none bg-[var(--stone-light)]/50"
                placeholder="Specify finish, size, thickness, delivery requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full px-8 py-5 bg-[var(--deep-charcoal)] text-white hover:bg-[var(--muted-bronze)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] font-medium text-base"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-sm text-green-600 text-center">
                ✓ RFQ submitted successfully! We will contact you shortly.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-sm text-red-600 text-center">
                ✗ Something went wrong. Please try again or contact us directly.
              </p>
            )}

            <p className="text-xs text-[var(--warm-grey)] text-center">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
