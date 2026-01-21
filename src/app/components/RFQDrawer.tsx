import { X } from 'lucide-react';
import { useState } from 'react';
import { WEB3FORMS_ACCESS_KEY } from '@/config/form';

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
      <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-white z-50 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-3xl text-[var(--deep-charcoal)] mb-2">
                Request For Quotation
              </h2>
              <p className="text-sm text-[var(--warm-grey)]">
                Fill out the form below and we'll respond within 24 hours
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[var(--stone-light)] transition-colors rounded"
            >
              <X className="w-5 h-5 text-[var(--warm-grey)]" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-[var(--deep-charcoal)] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--warm-grey)]/20 focus:border-[var(--muted-bronze)] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-[var(--deep-charcoal)] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--warm-grey)]/20 focus:border-[var(--muted-bronze)] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-[var(--deep-charcoal)] mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--warm-grey)]/20 focus:border-[var(--muted-bronze)] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-[var(--deep-charcoal)] mb-2">
                Country *
              </label>
              <input
                type="text"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--warm-grey)]/20 focus:border-[var(--muted-bronze)] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-[var(--deep-charcoal)] mb-2">
                Product Interest *
              </label>
              <input
                type="text"
                required
                placeholder="e.g., Dholpur Beige, Kandla Grey"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--warm-grey)]/20 focus:border-[var(--muted-bronze)] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-[var(--deep-charcoal)] mb-2">
                Estimated Quantity
              </label>
              <input
                type="text"
                placeholder="e.g., 1000 sq ft, 2 containers"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--warm-grey)]/20 focus:border-[var(--muted-bronze)] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-[var(--deep-charcoal)] mb-2">
                Additional Requirements
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--warm-grey)]/20 focus:border-[var(--muted-bronze)] focus:outline-none transition-colors resize-none"
                placeholder="Specify finish, size, thickness, delivery requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-[var(--deep-charcoal)] text-white hover:bg-[var(--muted-bronze)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
