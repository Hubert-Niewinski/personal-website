import { Button } from '@/components/ui/Button';
import { GradientText } from '@/components/ui/GradientText';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12 lg:py-16" data-test-id="hero-section">
      {/* Photo and Header Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-8 lg:mb-12">
        {/* Photo Section - Modern Rounded Rectangle */}
        <div className="relative" data-test-id="profile-photo">
          <div className="w-48 h-60 sm:w-56 sm:h-72 lg:w-72 lg:h-96 rounded-3xl bg-gradient-to-br from-slate-600 to-slate-700 p-1 shadow-2xl shadow-slate-900/50 hover:shadow-slate-900/70 transition-shadow duration-500">
            <Image
              src="/profile.jpeg"
              alt="Hubert Niewiński - Software Engineer and Public Speaker"
              className="w-full h-full rounded-3xl object-cover"
              width={288}
              height={384}
              priority
            />
          </div>
          {/* Subtle accent dots - static but glowing with softer blur */}
          <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 bg-slate-500 rounded-full shadow-2xl shadow-slate-500/40 blur-[0.5px]"></div>
          <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-4 h-4 sm:w-6 sm:h-6 bg-slate-600 rounded-full shadow-2xl shadow-slate-600/40 blur-[0.5px]"></div>
        </div>

        {/* Header and Info */}
        <div className="text-center lg:text-left px-4 sm:px-0">
          <GradientText
            as="h1"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left mb-6 lg:mb-8"
            data-test-id="hero-title"
          >
            Hubert Niewiński
          </GradientText>

          <div className="mb-6" data-test-id="hero-subtitle">
            <p
              className={`text-lg sm:text-xl lg:text-2xl mb-4 font-semibold text-slate-400 text-balance`}
            >
              Software Engineer and Public Speaker
            </p>
            <p className="text-base sm:text-lg leading-[1.7] max-w-2xl lg:mx-0 mx-auto text-[#C8C8E0] text-pretty">
              Senior Test Automation Engineer and Technical Assessor at Sii Poland. While test
              automation is my core specialization, I bring hands-on experience in full-stack
              development, DevOps practices, and AI technologies—skills I actively develop in side
              projects and continuous learning. Active speaker at IT meetups (meet.js, BiałQA) and
              company webinars. Toastmasters International member for 6 years with multiple speech
              contest wins at club and area levels. Off the court, I&apos;m a huge basketball fan
              and enthusiastic amateur player—passion level: 100%, talent level: debatable at best.
            </p>
          </div>
        </div>
      </div>

      {/* Single CTA */}
      <div className="flex justify-center mt-8" data-test-id="hero-cta">
        <Button href="mailto:niewinskihubert@gmail.com" testId="cta-main">
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
