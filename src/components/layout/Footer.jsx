import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: <FiFacebook size={20} />, href: '#' },
    { icon: <FiInstagram size={20} />, href: '#' },
    { icon: <FiTwitter size={20} />, href: '#' },
    { icon: <FiGithub size={20} />, href: '#' },
  ];

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'Men', href: '/men' },
        { name: 'Women', href: '/women' },
        { name: 'New Arrivals', href: '/new-arrivals' },
        { name: 'Accessories', href: '/shop' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Shipping', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Sustainability', href: '/sustainability' },
      ],
    },
  ];

  return (
    <footer className="bg-attireo-black text-attireo-beige pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand & Socials */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-attireo-white mb-4">Attireo</h3>
            <p className="text-sm max-w-xs mb-6 text-gray-400">
              Modern apparel for every style. Inclusive, high-quality, and designed for you.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-attireo-beige hover:text-attireo-gold transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-attireo-white uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-attireo-gold transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Attireo. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;