import React from 'react';
import Newsletter from '../components/home/Newsletter';
import FadeInView from '../components/ui/FadeInView';
import PolicySection from '../components/ui/PolicySection';
import AnimatedButton from '../components/ui/AnimatedButton';

const SustainabilityPage = () => {
  return (
    <div className="pt-16"> {/* Start content below fixed navbar */}
      
      {/* Page Header */}
      <header className="py-12 md:py-20 bg-attireo-beige/40 dark:bg-attireo-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Commitment
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            Fashion for a better future.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-attireo-white dark:bg-attireo-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <FadeInView direction="up">
            
            <PolicySection title="Our Philosophy">
              <p>
                At Attireo, we believe that style and sustainability are not mutually exclusive. We are on a journey to make thoughtful decisions at every step, reducing our impact on the planet while creating high-quality apparel that lasts.
              </p>
            </PolicySection>

            <PolicySection title="Sustainable Materials">
              <p>
                We are increasing our use of sustainable materials year over year. This includes sourcing GOTS-certified organic cotton, recycled polyester, linen, and TENCEL™ Lyocell. These choices help reduce water usage, carbon emissions, and waste.
              </p>
            </PolicySection>

            <PolicySection title="Ethical Production">
              <p>
                A sustainable future includes the people who make our clothes. We are committed to a transparent supply chain and partner exclusively with factories that guarantee fair wages, safe working conditions, and respect for workers' rights.
              </p>
            </PolicySection>
            
            <PolicySection title="Our Packaging">
              <p>
                We've eliminated single-use plastics from our shipping. All orders are sent in mailers made from 100% recycled and recyclable materials. Our tags are printed on recycled cardstock with soy-based inks.
              </p>
            </PolicySection>

            <PolicySection title="Our Progress">
              <p>
                We're not perfect, but we are committed to progress. We publish an annual sustainability report to share our achievements and the areas where we're still working to improve.
              </p>
              <div className="pt-4">
                <AnimatedButton
                  className="px-8 py-3 
                             bg-attireo-black dark:bg-attireo-beige 
                             text-attireo-white dark:text-attireo-black 
                             font-semibold tracking-wide uppercase 
                             hover:bg-gray-800 dark:hover:bg-attireo-white
                             transition-colors duration-300"
                >
                  Read Our 2025 Report
                </AnimatedButton>
              </div>
            </PolicySection>

          </FadeInView>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default SustainabilityPage;