import { services, stats } from '@/constants/services';
import { ServiceCard } from './ServiceCard';
import { GradientText } from '@/components/ui/GradientText';

export function ServicesSection() {
  return (
    <>
      {/* Services/Offers Section */}
      <section
        className="max-w-6xl mx-auto mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-8"
        data-test-id="services-section"
      >
        <div className="text-center mb-6 sm:mb-8 lg:mb-12" data-animate="fade-in">
          <GradientText
            as="h2"
            gradient="slate"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
            data-test-id="services-title"
          >
            What I Can Help You With
          </GradientText>
          <p
            className="text-base sm:text-lg max-w-3xl mx-auto leading-[1.7] text-[#C8C8E0]"
            data-test-id="services-subtitle"
          >
            Comprehensive solutions for your testing, development, and DevOps needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Simple text CTA */}
        <div className="text-center mt-16">
          <p className="text-lg leading-[1.7] text-[#C8C8E0]">
            Ready to improve your testing and development processes?
          </p>
          <p className="text-sm mt-2 leading-[1.7] text-slate-400">
            If I&apos;m not available or the project isn&apos;t in my area of expertise, I&apos;m
            happy to recommend trusted professionals from my network.
          </p>
          <p className="text-sm mt-1 leading-[1.7] text-slate-500">
            Scroll down to learn more about my experience and approach.
          </p>
        </div>
      </section>

      {/* Quick Stats & Achievements */}
      <div
        className="max-w-4xl mx-auto mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-8"
        data-test-id="achievements-section"
      >
        <div className="text-center mb-6 sm:mb-8 lg:mb-10 text-gray-300" data-animate="fade-in">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
            Experience & Impact
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-4 sm:p-5 lg:p-6 rounded-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 cursor-default bg-slate-800/40 border border-slate-700/20 hover:border-slate-600/40 hover:shadow-xl hover:shadow-slate-500/30"
              data-animate="fade-in"
              style={{ animationDelay: stat.delay }}
            >
              <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 transition-all duration-300 text-slate-300 group-hover:text-slate-200 group-hover:scale-125">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm transition-colors duration-300 text-gray-400 group-hover:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
