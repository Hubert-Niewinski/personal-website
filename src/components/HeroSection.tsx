import { Button } from '@/components/ui/Button';
import { GradientText } from '@/components/ui/GradientText';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8" data-test-id="hero-section">
      {/* Photo and Header Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mb-8 lg:mb-12">
        {/* Photo Section - Modern Rounded Rectangle */}
        <div className="relative" data-test-id="profile-photo">
          <div className="w-72 h-96 sm:w-80 sm:h-[26rem] lg:w-80 lg:h-[28rem] rounded-3xl bg-gradient-to-br from-slate-600 to-slate-700 p-1 shadow-2xl shadow-slate-900/50 hover:shadow-slate-900/70 transition-shadow duration-500">
            <Image
              src="/profile.jpg"
              alt="Hubert Niewiński - Software Engineer and Public Speaker"
              className="w-full h-full rounded-3xl object-cover"
              width={320}
              height={448}
              priority
              fetchPriority="high"
            />
          </div>
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
            <p className="text-base sm:text-lg leading-[1.7] max-w-2xl lg:mx-0 mx-auto text-slate-200 text-pretty">
              Senior Test Automation Engineer and Technical Assessor at Sii Poland. Test automation
              is my core specialization, complemented by hands-on experience in full-stack
              development, DevOps practices, and AI technologies—skills I continuously sharpen
              through side projects and learning. Regular speaker at IT meetups (meet.js, BiałQA)
              and company webinars. Toastmasters International member for 6+ years with multiple
              speech contest wins at club and area levels. Off the court, I&apos;m a huge basketball
              fan and enthusiastic amateur player—passion level: 100%, talent level: debatable at
              best.
            </p>
            <p className="text-sm sm:text-base mt-4 text-slate-300">
              📍 Based in Białystok, Poland • 🗣️ Polish (Native), English (Fluent), German
              (Intermediate)
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
