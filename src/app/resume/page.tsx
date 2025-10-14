'use client';

import { PageLayout } from '@/components/PageLayout';
import { PageHeader } from '@/components/PageHeader';
import { CollapsibleSection } from '@/components/ui/CollapsibleSection';
import { Card } from '@/components/ui/Card';
import { ExperienceCard } from '@/components/ui/ExperienceCard';
import { EducationCard } from '@/components/ui/EducationCard';
import { CertificationCard } from '@/components/ui/CertificationCard';
import { PublicationCard } from '@/components/ui/PublicationCard';
import { SkillsCategory } from '@/components/ui/SkillsCategory';
import { useCollapsibleSections } from '@/hooks/useCollapsibleSections';
import {
  experiences,
  education,
  skills,
  certifications,
  publications,
  toastmastersAchievements,
} from '@/constants/resume';

export default function ResumePage() {
  const [expandedSections, toggleSection] = useCollapsibleSections([
    'experience',
    'education',
    'skills',
    'certifications',
    'publications',
    'toastmasters',
  ]);

  return (
    <PageLayout>
      <PageHeader title="Resume" subtitle="Professional Experience & Qualifications" />

      {/* Professional Experience Section */}
      <CollapsibleSection
        title="Professional Experience"
        isExpanded={expandedSections.experience}
        onToggle={() => toggleSection('experience')}
      >
        <div className="space-y-8">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </CollapsibleSection>

      {/* Education Section */}
      <CollapsibleSection
        title="Education"
        isExpanded={expandedSections.education}
        onToggle={() => toggleSection('education')}
      >
        <div className="space-y-6">
          {education.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </CollapsibleSection>

      {/* Certifications Section */}
      {certifications.length > 0 && (
        <CollapsibleSection
          title="Certifications"
          isExpanded={expandedSections.certifications}
          onToggle={() => toggleSection('certifications')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* Publications Section */}
      {publications.length > 0 && (
        <CollapsibleSection
          title="Publications & Presentations"
          isExpanded={expandedSections.publications}
          onToggle={() => toggleSection('publications')}
        >
          <div className="space-y-6">
            {publications.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* Toastmasters Achievements */}
      <CollapsibleSection
        title="Toastmasters International"
        isExpanded={expandedSections.toastmasters}
        onToggle={() => toggleSection('toastmasters')}
      >
        {expandedSections.toastmasters && (
          <>
            <Card hover={false} className="mb-6">
              <p className="text-lg text-[#C8C8E0]">
                Active member for <span className="font-semibold">6 years</span>, participating in
                speech contests and leadership development programs.
              </p>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {toastmastersAchievements.map((achievement) => (
                <Card key={achievement.id}>
                  <h3 className="text-lg font-semibold mb-1 text-white">{achievement.title}</h3>
                  <p className="text-sm mb-1 text-slate-300">{achievement.level}</p>
                  <p className="text-xs mb-3 text-slate-400">{achievement.date}</p>
                  <p className="text-sm text-[#C8C8E0]">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </>
        )}
      </CollapsibleSection>

      {/* Skills Section */}
      <CollapsibleSection
        title="Skills"
        isExpanded={expandedSections.skills}
        onToggle={() => toggleSection('skills')}
      >
        {expandedSections.skills && (
          <div className="space-y-8">
            <SkillsCategory title="Programming Languages" skills={skills} category="programming" />
            <SkillsCategory title="Technical Skills" skills={skills} category="technical" />
            <SkillsCategory title="Tools & Technologies" skills={skills} category="tools" />
            <SkillsCategory title="Professional Skills" skills={skills} category="soft" />
            <SkillsCategory title="Languages" skills={skills} category="language" />
          </div>
        )}
      </CollapsibleSection>
    </PageLayout>
  );
}
