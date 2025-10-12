'use client';

import { useState } from 'react';
import { CONTAINER_CLASS } from '@/types/styles';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { BackgroundGradient } from '@/components/BackgroundGradient';
import { PageHeader } from '@/components/PageHeader';
import { CollapsibleSection } from '@/components/ui/CollapsibleSection';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { Card } from '@/components/ui/Card';
import { ActionButton } from '@/components/ui/ActionButton';
import { Badge } from '@/components/ui/Badge';
import { IconWithText } from '@/components/ui/IconWithText';
import { 
  experiences,
  education,
  skills,
  certifications,
  publications,
  toastmastersAchievements
} from '@/constants/resume';

export default function ResumePage() {
  const [expandedSections, setExpandedSections] = useState({
    experience: false,
    education: false,
    skills: false,
    certifications: false,
    publications: false,
    toastmasters: false
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className={`${CONTAINER_CLASS} relative overflow-hidden min-h-screen`}>
      {/* Subtle animated gradient overlay */}
      <BackgroundGradient />
      
      <div className="relative z-10">
        <Navigation />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 lg:py-16">
          <PageHeader 
            title="Resume" 
            subtitle="Professional Experience & Qualifications"
            
          />

          {/* Professional Experience Section */}
          <CollapsibleSection
            title="Professional Experience"
            isExpanded={expandedSections.experience}
            onToggle={() => toggleSection('experience')}
          >
            <div className="space-y-8">
              {experiences.map((exp) => (
                <Card key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-white">
                        {exp.title}
                      </h3>
                      {exp.companyUrl ? (
                        <ExternalLink href={exp.companyUrl}>
                          {exp.company}
                        </ExternalLink>
                      ) : (
                        <p className="text-lg text-slate-300">
                          {exp.company}
                        </p>
                      )}
                    </div>
                    <div className="mt-2 sm:mt-0 sm:text-right">
                      <p className="text-sm text-slate-400">
                        {exp.location}
                      </p>
                      <p className="text-sm font-medium text-slate-300">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  
                  <p className="mb-4 text-[#C8C8E0]">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2 text-slate-300">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-slate-500"></span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
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
                <Card key={edu.id}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-white">
                        {edu.degree}
                      </h3>
                      {edu.institutionUrl ? (
                        <ExternalLink href={edu.institutionUrl}>
                          {edu.institution}
                        </ExternalLink>
                      ) : (
                        <p className="text-lg text-slate-300">
                          {edu.institution}
                        </p>
                      )}
                      {edu.description && (
                        <p className="mt-2 text-sm text-[#C8C8E0]">
                          {edu.description}
                        </p>
                      )}
                    </div>
                    <div className="mt-2 sm:mt-0 sm:text-right">
                      <p className="text-sm text-slate-400">
                        {edu.location}
                      </p>
                      <p className="text-sm font-medium text-slate-300">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </Card>
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
                  <Card key={cert.id}>
                    <h3 className="text-lg font-semibold mb-1 text-white">
                      {cert.name}
                    </h3>
                    <p className="text-sm mb-1 text-slate-300">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-slate-400">
                      {cert.date}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs mt-2 text-slate-500">
                        ID: {cert.credentialId}
                      </p>
                    )}
                    <div className="flex gap-2 mt-3">
                      {(cert.credentialUrl || cert.certificateFile) && (
                        <ActionButton 
                          href={cert.credentialUrl || cert.certificateFile || '#'}
                          icon={
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          }
                        >
                          View Certificate
                        </ActionButton>
                      )}
                    </div>
                  </Card>
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
                  <Card key={pub.id}>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {pub.title}
                    </h3>
                    <IconWithText icon="calendar" className="text-sm mb-3 text-slate-300">
                      {pub.event} • {pub.date}
                    </IconWithText>
                    <p className="text-sm mb-3 text-slate-400">
                      {pub.description}
                    </p>
                    {pub.url && (
                      <ActionButton href={pub.url}>
                        View Publication
                      </ActionButton>
                    )}
                  </Card>
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
                Active member for <span className="font-semibold">5+ years</span>, participating in speech contests and leadership development programs.
              </p>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {toastmastersAchievements.map((achievement) => (
                <Card key={achievement.id}>
                  <h3 className="text-lg font-semibold mb-1 text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-sm mb-1 text-slate-300">
                    {achievement.level}
                  </p>
                  <p className="text-xs mb-3 text-slate-400">
                    {achievement.date}
                  </p>
                  <p className="text-sm text-[#C8C8E0]">
                    {achievement.description}
                  </p>
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
              {/* Programming Languages */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-300">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.filter(s => s.category === 'languages').map((skill, idx) => (
                    <Badge key={idx} variant="skill" level={skill.level}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-300">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.filter(s => s.category === 'technical').map((skill, idx) => (
                    <Badge key={idx} variant="skill" level={skill.level}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-300">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.filter(s => s.category === 'tools').map((skill, idx) => (
                    <Badge key={idx} variant="skill" level={skill.level}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Professional Skills */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-300">
                  Professional Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.filter(s => s.category === 'soft').map((skill, idx) => (
                    <Badge key={idx} variant="skill" level={skill.level}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-300">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.filter(s => s.category === 'spokenLanguages').map((skill, idx) => (
                    <Badge key={idx} variant="skill" level={skill.level}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
              </div>
            )}
          </CollapsibleSection>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
}
