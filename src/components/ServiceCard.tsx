import { Service } from '@/constants/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const isPrimary = service.level === 'primary';
  
  return (
    <div 
      className={`group relative p-5 sm:p-6 lg:p-8 rounded-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-3 perspective-card backdrop-blur-sm hover:shadow-2xl ${
        isPrimary 
          ? 'bg-gradient-to-br from-blue-900/30 to-slate-900/40 border-2 border-blue-500/50 hover:border-blue-400/70 hover:shadow-blue-500/30' 
          : 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/40 hover:border-slate-500/70 hover:shadow-slate-400/20'
      }`}
      data-test-id={service.testId}
      data-animate="fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Primary expertise badge */}
      {isPrimary && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          ⭐ Primary Expertise
        </div>
      )}
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        <div className="absolute inset-0 animate-shimmer"></div>
      </div>
      
      {/* Icon */}
      <div className={`relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl mb-4 sm:mb-5 lg:mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
        isPrimary 
          ? 'bg-blue-700/30 text-blue-300 group-hover:bg-blue-600/40 group-hover:text-blue-200' 
          : 'bg-slate-700/20 text-slate-400 group-hover:bg-slate-600/30 group-hover:text-slate-300'
      }`}>
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
        </svg>
      </div>

      {/* Title */}
      <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 transition-colors duration-300 ${
        isPrimary ? 'text-blue-100 group-hover:text-blue-50' : 'text-white group-hover:text-slate-300'
      }`}>
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm leading-[1.7] mb-4 sm:mb-5 lg:mb-6 text-[#C8C8E0]">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
        {service.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center">
            <div className="w-1.5 h-1.5 rounded-full mr-2 sm:mr-3 bg-slate-500"></div>
            {feature}
          </li>
        ))}
      </ul>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-slate-700/5 to-slate-800/5"></div>
    </div>
  );
}
