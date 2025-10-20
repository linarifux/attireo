import React from 'react';
import Newsletter from '../components/home/Newsletter';
import FadeInView from '../components/ui/FadeInView';
import AnimatedButton from '../components/ui/AnimatedButton';
import { FiGift, FiHeart, FiTrendingUp } from 'react-icons/fi';

// Mock data for open positions
const jobOpenings = [
  {
    id: 1,
    title: 'Senior Product Designer',
    department: 'Design',
    location: 'New York, NY (Remote Friendly)',
  },
  {
    id: 2,
    title: 'Full-Stack Engineer (React + Node)',
    department: 'Engineering',
    location: 'New York, NY (Remote Friendly)',
  },
  {
    id: 3,
    title: 'Digital Marketing Manager',
    department: 'Marketing',
    location: 'Los Angeles, CA',
  },
];

// Reusable component for the perks grid
const PerkCard = ({ icon, title, children }) => (
  <FadeInView direction="up" className="text-center p-6">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">
      {children}
    </p>
  </FadeInView>
);

// Reusable component for a job opening
const JobOpening = ({ title, department, location }) => (
  <FadeInView direction="up">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center 
                    p-6 border border-attireo-black/20 dark:border-gray-700 
                    bg-attireo-white dark:bg-attireo-black/20">
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{department} &mdash; {location}</p>
      </div>
      <AnimatedButton
        className="mt-4 sm:mt-0 px-6 py-2 
                   bg-attireo-black dark:bg-attireo-beige
                   text-attireo-white dark:text-attireo-black
                   font-semibold tracking-wide uppercase text-sm hover:bg-gray-800 dark:hover:bg-attireo-white/90
                   transition-colors duration-300"
      >
        Apply Now
      </AnimatedButton>
    </div>
  </FadeInView>
);

const CareersPage = () => {
  const introImageUrl = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMGNvbGxlYWd1ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60';

  return (
    <div className="pt-16"> {/* Start content below fixed navbar */}
      
      {/* Page Header */}
      <header className="py-12 md:py-20 bg-[--color-attireo-beige]/40 dark:bg-[--color-attireo-black]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Work With Us
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            Join a team that's redefining fashion.
          </p>
        </div>
      </header>

      {/* Section 1: Intro (Split Layout) */}
      <section className="py-16 md:py-24 bg-attireo-white dark:bg-attireo-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInView
              direction="right"
            >
                <img src={introImageUrl} alt="" className="w-full h-80 md:h-[450px] bg-cover bg-center"/>
            </FadeInView>
            <FadeInView direction="left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Be Part of Our Story
              </h2>
              <p className="text-base md:text-lg mb-4 text-gray-700 dark:text-gray-300">
                Attireo is more than just a clothing brand; it's a movement. We're a team of innovators, creators, and thinkers passionate about making style accessible and inclusive for everyone.
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                We believe in fostering a creative and collaborative environment where every voice is heard. If you're driven by quality, inspired by universal design, and want to make an impact, we'd love to hear from you.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Section 2: Perks & Benefits */}
      <section className="py-16 md:py-24 bg-attireo-beige/40 dark:bg-attireo-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Life at Attireo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PerkCard 
              icon={<FiHeart size={40} className="text-attireo-gold" />}
              title="Health & Wellness"
            >
              Comprehensive medical, dental, and vision insurance. Plus, a monthly wellness stipend.
            </PerkCard>
            <PerkCard 
              icon={<FiTrendingUp size={40} className="text-attireo-gold" />}
              title="Growth & Development"
            >
              A generous annual budget for conferences, courses, and books. We invest in your growth.
            </PerkCard>
            <PerkCard 
              icon={<FiGift size={40} className="text-attireo-gold" />}
              title="Work-Life Balance"
            >
              Flexible remote-work policies, generous paid time off, and an annual company retreat.
            </PerkCard>
          </div>
        </div>
      </section>

      {/* Section 3: Open Positions */}
      <section className="py-16 md:py-24 bg-attireo-white dark:bg-attireo-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <JobOpening 
                key={job.id} 
                title={job.title} 
                department={job.department} 
                location={job.location} 
              />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default CareersPage;