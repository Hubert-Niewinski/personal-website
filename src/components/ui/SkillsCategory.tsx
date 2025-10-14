import { Skill } from '@/constants/resume';
import { SkillBadge } from './SkillBadge';

interface SkillsCategoryProps {
  title: string;
  skills: Skill[];
  category: Skill['category'];
}

export const SkillsCategory = ({ title, skills, category }: SkillsCategoryProps) => {
  const filteredSkills = skills.filter((s) => s.category === category);

  if (filteredSkills.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-slate-300">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {filteredSkills.map((skill, idx) => (
          <SkillBadge key={idx} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};
