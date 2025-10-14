import { Certification } from '@/constants/resume';
import { Card } from './Card';
import { ActionButton } from './ActionButton';
import { Icon } from './Icon';

interface CertificationCardProps {
  certification: Certification;
}

export const CertificationCard = ({ certification }: CertificationCardProps) => {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-1 text-white">{certification.name}</h3>
      <p className="text-sm mb-1 text-slate-300">{certification.issuer}</p>
      <p className="text-xs text-slate-400">{certification.date}</p>
      {certification.credentialId && (
        <p className="text-xs mt-2 text-slate-500">ID: {certification.credentialId}</p>
      )}
      <div className="flex gap-2 mt-3">
        {(certification.credentialUrl || certification.certificateFile) && (
          <ActionButton
            href={certification.credentialUrl || certification.certificateFile || '#'}
            icon={<Icon name="document" className="w-4 h-4" />}
          >
            View Certificate
          </ActionButton>
        )}
      </div>
    </Card>
  );
};
