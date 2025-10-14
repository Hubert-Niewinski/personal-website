import { Education } from '@/constants/resume';
import { Card } from './Card';
import { ExternalLink } from './ExternalLink';

interface EducationCardProps {
  education: Education;
}

export const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <Card>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
        <div>
          <h3 className="text-xl font-semibold mb-1 text-white">{education.degree}</h3>
          {education.institutionUrl ? (
            <ExternalLink href={education.institutionUrl}>{education.institution}</ExternalLink>
          ) : (
            <p className="text-lg text-slate-300">{education.institution}</p>
          )}
          {education.description && (
            <p className="mt-2 text-sm text-[#C8C8E0]">{education.description}</p>
          )}
        </div>
        <div className="mt-2 sm:mt-0 sm:text-right">
          <p className="text-sm text-slate-400">{education.location}</p>
          <p className="text-sm font-medium text-slate-300">{education.period}</p>
        </div>
      </div>
    </Card>
  );
};
