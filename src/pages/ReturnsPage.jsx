import React from 'react';
import Newsletter from '../components/home/Newsletter';
import FadeInView from '../components/ui/FadeInView';
import PolicySection from '../components/ui/PolicySection'; // Import our new component
import AnimatedButton from '../components/ui/AnimatedButton'; // Import our button

const ReturnsPage = () => {
  return (
    <div className="pt-16"> {/* Start content below the fixed navbar */}
      
      {/* Page Header */}
      <header className="py-12 md:py-20 bg-attireo-beige/40 dark:bg-attireo-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Returns & Exchanges
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            Simple and straightforward.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-attireo-white dark:bg-attireo-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <FadeInView direction="up">
            
            <PolicySection title="Our Policy">
              <p>
                We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.
              </p>
              <p>
                To be eligible for a return, your item must be in the same condition that you received it: unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
              </p>
            </PolicySection>

            <PolicySection title="How to Start a Return">
              <p>
                To start a return, please visit our online returns portal. If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package.
              </p>
              <div className="pt-4">
                <AnimatedButton
                  className="px-8 py-3 
                             bg-attireo-black dark:bg-attireo-beige
                             text-attireo-white dark:text-attireo-black 
                             font-semibold tracking-wide uppercase 
                             hover:bg-gray-800 dark:hover:bg-attireo-white/90
                             transition-colors duration-300"
                >
                  Go to Returns Portal
                </AnimatedButton>
              </div>
            </PolicySection>

            <PolicySection title="Exchanges">
              <p>
                The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.
              </p>
            </PolicySection>
            
            <PolicySection title="Refunds">
              <p>
                We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days.
              </p>
            </PolicySection>

          </FadeInView>
        </div>
      </section>

      {/* Re-use the Newsletter section */}
      <Newsletter />
    </div>
  );
};

export default ReturnsPage;