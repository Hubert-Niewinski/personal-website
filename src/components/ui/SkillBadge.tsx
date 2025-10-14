import { StarRating } from './StarRating';

interface SkillBadgeProps {
  name: string;
  level?: number;
  showRating?: boolean;
}

export const SkillBadge = ({ name, level = 0, showRating = true }: SkillBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/30 border border-slate-600/40 text-sm font-medium text-slate-300">
      <span>{name}</span>
      {showRating && level > 0 && (
        <div className="ml-1">
          <StarRating level={level} />
        </div>
      )}
    </div>
  );
};
