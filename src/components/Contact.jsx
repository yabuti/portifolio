import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yeabsragetachew6789@gmail.com',
    href: 'mailto:yeabsragetachew6789@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+251905841982',
    href: 'tel:+251905841982',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Addis Abeba, Ethiopia',
    href: null,
  },
];

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Name is required.';
  if (!fields.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!fields.message.trim()) errors.message = 'Message is required.';
  return errors;
}

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: fields.name,
          from_email: fields.email,
          message: fields.message,
        },
        PUBLIC_KEY
      );
      setStatus('success');
      setFields({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field) =>
    `w-full bg-[var(--color-bg)] border rounded-lg px-4 py-3 text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200 ${
      errors[field]
        ? 'border-red-500 focus:ring-red-500'
        : 'border-[var(--color-border)] hover:border-accent/50'
    }`;

  return (
    <section
      id="contact"
      className="bg-[var(--color-bg)] transition-colors duration-300"
      aria-label="Contact section"
    >
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-[var(--color-text-secondary)] text-lg mb-10 max-w-2xl">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                  <Icon size={20} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-[var(--color-text)] hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[var(--color-text)]">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="card">
              {/* Name */}
              <div className="mb-5">
                <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                  Name <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-required="true"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={!!errors.name}
                  className={inputClass('name')}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle size={13} aria-hidden="true" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="mb-5">
                <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                  Email <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  autoComplete="email"
                  aria-required="true"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                  className={inputClass('email')}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle size={13} aria-hidden="true" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                  Message <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  aria-required="true"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  aria-invalid={!!errors.message}
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle size={13} aria-hidden="true" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px]"
                aria-busy={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div role="status" className="mt-4 flex items-center gap-2 text-green-500 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3">
                  <CheckCircle size={18} aria-hidden="true" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {status === 'error' && (
                <div role="alert" className="mt-4 flex items-center gap-2 text-red-500 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                  <AlertCircle size={18} aria-hidden="true" />
                  <span>Something went wrong. Please try again or email me directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
