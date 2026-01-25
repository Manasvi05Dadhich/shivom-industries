import React from 'react';
import { cn } from '@/app/components/ui/utils';
import { motion } from 'framer-motion';

const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
  const icons = {
    website: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" x2="22" y1="12" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    address: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  };
  return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, ...props }, ref) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 30, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={cn(
          'relative flex w-full min-h-screen flex-col overflow-hidden bg-background text-foreground md:flex-row',
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Left: Content */}
        <div className="flex w-full flex-col justify-between p-10 md:w-1/2 md:p-16 lg:w-3/5 lg:p-20 xl:p-24">
          <div>
            <motion.header className="mb-16" variants={itemVariants}>
              {logo && (
                <div className="flex items-center">
                  <img src={logo.url} alt={logo.alt} className="mr-3 h-10 object-contain" />
                  <div>
                    {logo.text && <p className="text-xl font-bold text-foreground">{logo.text}</p>}
                    {slogan && <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">{slogan}</p>}
                  </div>
                </div>
              )}
            </motion.header>

            <motion.main variants={containerVariants}>
              <motion.h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl xl:text-8xl mb-8" variants={itemVariants}>
                {title}
              </motion.h1>
              <motion.div className="my-8 h-1.5 w-24 bg-gradient-to-r from-[var(--rich-cerulean)] to-[var(--icy-blue)]" variants={itemVariants} />
              <motion.p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground" variants={itemVariants}>
                {subtitle}
              </motion.p>
              <motion.a
                href={callToAction.href}
                className="group inline-flex items-center gap-3 text-xl font-bold tracking-[0.15em] uppercase text-primary transition-all duration-300 hover:text-[var(--rich-cerulean)] hover:gap-4"
                variants={itemVariants}
              >
                <span className="relative">
                  {callToAction.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--rich-cerulean)] transition-all duration-300 group-hover:w-full"></span>
                </span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.main>
          </div>

          <motion.footer className="mt-16 w-full" variants={itemVariants}>
            <div className="grid grid-cols-1 gap-8 text-sm text-muted-foreground sm:grid-cols-3">
              <div className="flex items-center group">
                <div className="mr-3 transition-transform duration-300 group-hover:scale-110">
                  <InfoIcon type="website" />
                </div>
                <span className="transition-colors duration-300 group-hover:text-foreground">{contactInfo.website}</span>
              </div>
              <div className="flex items-center group">
                <div className="mr-3 transition-transform duration-300 group-hover:scale-110">
                  <InfoIcon type="phone" />
                </div>
                <span className="transition-colors duration-300 group-hover:text-foreground">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center group">
                <div className="mr-3 transition-transform duration-300 group-hover:scale-110">
                  <InfoIcon type="address" />
                </div>
                <span className="transition-colors duration-300 group-hover:text-foreground">{contactInfo.address}</span>
              </div>
            </div>
          </motion.footer>
        </div>

        {/* Right: Image with gradient overlay */}
        <motion.div
          className="relative w-full min-h-[300px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--prussian-blue)]/20 via-transparent to-transparent" />
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = 'HeroSection';

export { HeroSection };
