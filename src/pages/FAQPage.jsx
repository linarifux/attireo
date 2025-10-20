import React from 'react';
import Newsletter from '../components/home/Newsletter';
import AccordionItem from '../components/ui/AccordionItem';
import FadeInView from '../components/ui/FadeInView';

// Mock data for the FAQs
const faqs = [
  {
    q: "What is your return policy?",
    a: "We accept returns within 30 days of the purchase date, provided the items are in their original, unworn condition with all tags attached. Please visit our 'Returns' page to start the process."
  },
  {
    q: "How do I track my order?",
    a: "Once your order has shipped, you will receive an email with a tracking number and a link to the carrier's website. You can also log into your Attireo account to see your order status."
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we ship to over 50 countries. Shipping fees and delivery times vary by location. All applicable duties and taxes will be calculated at checkout."
  },
  {
    q: "What sizes do you carry?",
    a: "We are committed to inclusivity and offer a wide range of sizes, from XXS to 4XL, as well as unisex and 'One Size' options for many of our accessories."
  },
  {
    q: "How should I care for my garments?",
    a: "Care instructions are specific to each item. We recommend checking the care label found inside the garment. For most items, we suggest gentle machine washing or hand washing and line drying to preserve the quality."
  }
];

const FAQPage = () => {
  return (
    <div className="pt-16"> {/* Start content below the fixed navbar */}
      
      {/* Page Header */}
      <header className="py-12 md:py-20 bg-attireo-beige/40 dark:bg-attireo-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            Have questions? We have answers.
          </p>
        </div>
      </header>

      {/* Main Content (Accordion List) */}
      <section className="py-16 md:py-24 bg-attireo-white dark:bg-attireo-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <FadeInView direction="up">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} title={faq.q}>
                  <p>{faq.a}</p>
                </AccordionItem>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Re-use the Newsletter section */}
      <Newsletter />
    </div>
  );
};

export default FAQPage;