import { Publication } from '@/constants/resume';
import { Card } from './Card';
import { ActionButton } from './ActionButton';
import { IconWithText } from './IconWithText';

interface PublicationCardProps {
  publication: Publication;
}

export const PublicationCard = ({ publication }: PublicationCardProps) => {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-2 text-white">{publication.title}</h3>
      <IconWithText icon="calendar" className="text-sm mb-3 text-slate-300">
        {publication.event} • {publication.date}
      </IconWithText>
      <p className="text-sm mb-3 text-slate-400">{publication.description}</p>
      {publication.url && <ActionButton href={publication.url}>View Publication</ActionButton>}
    </Card>
  );
};
