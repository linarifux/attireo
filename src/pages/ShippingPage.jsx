import React from 'react';
import Newsletter from '../components/home/Newsletter';
import FadeInView from '../components/ui/FadeInView';
// 1. Import our new reusable component
import PolicySection from '../components/ui/PolicySection';

// 2. Local PolicySection component is correctly removed

const ShippingPage = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <header className="py-12 md:py-20 bg-attireo-beige/40 dark:bg-attireo-black/30">
        {/* --- Content Added Back --- */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Shipping & Delivery
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            How we get your order to you.
          </p>
        </div>
        {/* --- End of Added Content --- */}
      </header>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-attireo-white dark:bg-attireo-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <FadeInView direction="up">
            {/* 3. All PolicySection components now refer to the imported component */}
            <PolicySection title="Order Processing">
              <p>
                All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
              </p>
              <p>
                If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.
              </p>
            </PolicySection>

            <PolicySection title="Domestic Shipping (U.S.)">
              <p><strong>Standard Shipping:</strong> 5-7 business days. $5.00 flat rate. Free for orders over $100.</p>
              <p><strong>Express Shipping:</strong> 2-3 business days. $15.00 flat rate.</p>
            </PolicySection>

            <PolicySection title="International Shipping">
              {/* --- Content Added Back --- */}
              <p>We ship to over 50 countries worldwide. Shipping charges for your order will be calculated and displayed at checkout.</p>
              <p><strong>Standard International:</strong> 10-15 business days. Rates vary by country.</p>
              <p><strong>Express International:</strong> 5-7 business days. Rates vary by country.</p>
              <p>
                Your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. Attireo is not responsible for these charges if they are applied.
              </p>
              {/* --- End of Added Content --- */}
            </PolicySection>
            
            <PolicySection title="How do I track my order?">
              {/* --- Content Added Back --- */}
              <p>
                When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.
              </p>
              {/* --- End of Added Content --- */}
            </PolicySection>

          </FadeInView>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default ShippingPage;