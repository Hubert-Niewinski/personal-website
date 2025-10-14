import { Experience } from '@/constants/resume';
import { Card } from './Card';
import { ExternalLink } from './ExternalLink';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <Card>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-1 text-white">{experience.title}</h3>
          {experience.companyUrl ? (
            <ExternalLink href={experience.companyUrl}>{experience.company}</ExternalLink>
          ) : (
            <p className="text-lg text-slate-300">{experience.company}</p>
          )}
        </div>
        <div className="mt-2 sm:mt-0 sm:text-right">
          <p className="text-sm text-slate-400">{experience.location}</p>
          <p className="text-sm font-medium text-slate-300">{experience.period}</p>
        </div>
      </div>

      <p className="mb-4 text-[#C8C8E0]">{experience.description}</p>

      <ul className="space-y-2 text-slate-300">
        {experience.achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-slate-500"></span>
            <span className="text-sm">{achievement}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};
