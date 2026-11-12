import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  // Parallax background text
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const form = formRef.current;
    if (!form) return;

    const firstName = form.querySelector('#firstName')?.value?.trim() || '';
    const lastName = form.querySelector('#lastName')?.value?.trim() || '';
    const email = form.querySelector('#email')?.value?.trim() || '';
    const message = form.querySelector('#message')?.value?.trim() || '';

    // Validation
    if (!firstName || !email || !message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const { serviceId, templateId, publicKey } = emailjsConfig;
    const isConfigured = Boolean(
      serviceId &&
      templateId &&
      publicKey &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'
    );

    if (!isConfigured) {
      // Fallback: mailto link
      const subject = `Portfolio Contact from ${firstName} ${lastName}`.trim();
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`;
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`,
        '_blank'
      );
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      // Send via EmailJS
      try {
        const emailjs = await import('@emailjs/browser');
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        setStatus('success');
        form.reset();
      } catch (err) {
        console.error('EmailJS send error:', err);
        setStatus('error');
      } finally {
        setTimeout(() => setStatus('idle'), 4000);
      }
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Giant "Contact" Parallax Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full pointer-events-none z-0 flex justify-center"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          CONTACT
        </div>
      </motion.div>

      {/* Front Red Contact Card */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto rounded-tl-3xl relative z-10 shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between pb-6 border-b border-white/20">
          <span className="text-white/80 font-bold text-xs uppercase tracking-[0.2em]">
            Reach Me
          </span>
          <a
            href={socialLinks.instagram || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
          >
            DM on Instagram
          </a>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12 mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: Underline-only inputs */}
            <div className="flex flex-col gap-8">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  placeholder="First Name *"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Email Address *"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            {/* Right Column: Textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message *"
                required
                className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors resize-none min-h-[120px] h-full"
              />
            </div>
          </div>

          {/* Bottom Area */}
          <div className="flex flex-col gap-6 pt-4 border-t border-white/20">
            {/* Permission Checkbox */}
            <label className="flex items-start space-x-3 text-white/80 text-xs md:text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                required
                className="mt-1 rounded bg-black/20 border-white/40 text-black focus:ring-0 cursor-pointer"
              />
              <span>
                I agree to allow my submitted details to be used to contact me regarding my inquiry.
              </span>
            </label>

            {/* Response Note & Urgent Direct Email */}
            <div className="space-y-1 text-white/70 text-xs">
              <p>
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>
              <p>
                Need urgent response? Email me directly at{' '}
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline text-white font-bold hover:text-black transition-colors"
                >
                  {personalInfo.emails.primary}
                </a>
              </p>
            </div>

            {/* Submit Button */}
            <div>
              {status === 'sending' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full bg-white/20 border border-white/30 text-white/60 font-bold cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  <span>Sending...</span>
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full bg-emerald-600 border border-emerald-400 text-white font-bold flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Sent Successfully ✓</span>
                </button>
              )}

              {status === 'error' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full bg-red-950 border border-red-700 text-red-200 font-bold flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Failed — Try Again</span>
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="group px-8 py-4 rounded-full border border-white text-white font-bold hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer shadow-lg"
                >
                  <span>Send Message</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
