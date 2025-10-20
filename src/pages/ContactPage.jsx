import React from 'react';
// 1. Import our custom react-spring components
import AnimatedButton from '../components/ui/AnimatedButton';
import FadeInView from '../components/ui/FadeInView';
// 2. Remove framer-motion import
// import { motion } from 'framer-motion'; 
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Newsletter from '../components/home/Newsletter'; // Reuse the newsletter

// Reusable component for form inputs (No changes needed)
const FormInput = ({ id, name, type = 'text', placeholder, label }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className="w-full p-3 text-sm
                 bg-attireo-white dark:bg-gray-800
                 border border-attireo-black/20 dark:border-gray-700 
                 focus:border-attireo-gold focus:ring-0
                 placeholder-gray-500"
      required
    />
  </div>
);

// Reusable component for contact info items (No changes needed)
const InfoItem = ({ icon, title, children }) => (
  <div className="flex space-x-4">
    <div className="shrink-0 w-10 h-10 flex items-center justify-center 
                   bg-attireo-beige/60 dark:bg-gray-800">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{children}</p>
    </div>
  </div>
);

const ContactPage = () => {
  return (
    <div className="pt-16"> {/* Start content below the fixed navbar */}
      
      {/* Page Header */}
      <header className="py-12 md:py-20 bg-attireo-beige/40 dark:bg-attireo-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            We're here to help. Get in touch with us.
          </p>
        </div>
      </header>

      {/* Main Content (Split Layout) */}
      <section className="py-16 md:py-24 bg-attireo-white dark:bg-attireo-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* 3. Replace motion.div with FadeInView */}
            <FadeInView direction="right">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Have a question about your order, our products, or our brand? Fill out the form or contact us directly.
              </p>
              <div className="space-y-6">
                <InfoItem icon={<FiMail size={20} className="text-attireo-gold" />} title="Email Us">
                  hello@attireo.com
                </InfoItem>
                <InfoItem icon={<FiPhone size={20} className="text-attireo-gold" />} title="Call Us">
                  +1 (234) 567-890
                </InfoItem>
                <InfoItem icon={<FiMapPin size={20} className="text-attireo-gold" />} title="Visit Us">
                  123 Fashion Ave, New York, NY 10001
                </InfoItem>
              </div>
            </FadeInView>

            {/* 4. Replace motion.div with FadeInView */}
            <FadeInView direction="left">
              <form action="#" method="POST" className="space-y-6">
                <FormInput
                  id="name"
                  name="name"
                  label="Full Name"
                  placeholder="Your Name"
                />
                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="you@example.com"
                />
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="How can we help?"
                    className="w-full p-3 text-sm
                               bg-attireo-white dark:bg-gray-800
                               border border-attireo-black/20 dark:border-gray-700 
                               focus:border-attireo-gold focus:ring-0
                               placeholder-gray-500"
                    required
                  ></textarea>
                </div>
                <div>
                  {/* 5. Replace motion.button with AnimatedButton */}
                  <AnimatedButton
                    type="submit"
                    className="w-full px-8 py-3 
                               bg-attireo-black dark:bg-attireo-beige/90 
                               text-attireo-white dark:text-attireo-black
                               font-semibold tracking-wide uppercase
                               hover:bg-gray-800 dark:hover:bg-attireo-white
                               transition-colors duration-300"
                  >
                    Send Message
                  </AnimatedButton>
                </div>
              </form>
            </FadeInView>

          </div>
        </div>
      </section>

      {/* Re-use the Newsletter section */}
      <Newsletter />
    </div>
  );
};

export default ContactPage;