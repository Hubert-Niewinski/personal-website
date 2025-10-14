'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PageLayout } from '@/components/PageLayout';
import { PageHeader } from '@/components/PageHeader';
import { speakingEvents, speakingIntro } from '@/constants/speaking';
import { Card } from '@/components/ui/Card';
import { ActionButton } from '@/components/ui/ActionButton';
import { IconWithText } from '@/components/ui/IconWithText';
import { Icon } from '@/components/ui/Icon';

export default function SpeakingPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <>
      <PageLayout>
        <PageHeader
          title={speakingIntro.title}
          subtitle={speakingIntro.subtitle}
          description={speakingIntro.description}
          subtitleSize="xl"
          className="max-w-4xl mx-auto"
        />

        {/* Events Gallery - Grouped by Event */}
        <div className="space-y-8 mb-16">
          {speakingEvents.map((event) => (
            <Card key={event.id} hover={false}>
              {/* Event Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 text-white">{event.title}</h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm mb-3 text-slate-300">
                    <IconWithText icon="location">
                      {event.event} • {event.location}
                    </IconWithText>
                    <IconWithText icon="calendar" className="text-slate-400">
                      {event.date}
                    </IconWithText>
                  </div>
                  <p className="text-base mb-4 text-slate-300">{event.description}</p>
                  {event.url && (
                    <ActionButton href={event.url} size="sm">
                      View Event
                    </ActionButton>
                  )}
                </div>
              </div>

              {/* Photo Grid - inside same card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-slate-700/40">
                {event.photos.map((photo, index) => (
                  <div
                    key={`${event.id}-photo-${index}`}
                    className="group relative overflow-hidden rounded-lg transition-all duration-300 cursor-pointer bg-slate-700/40 hover:bg-slate-700/60"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={photo}
                        alt={`${event.title} - Photo ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center bg-slate-900/80">
                        <svg
                          className="w-12 h-12 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card hover={false} className="max-w-3xl mx-auto text-center p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            Interested in Having Me Speak?
          </h2>
          <p className="text-base sm:text-lg mb-6 text-slate-300">
            I&apos;m available for technical conferences, meetups, and corporate training sessions
            on test automation, AI testing, and public speaking.
          </p>
          <ActionButton
            href="mailto:niewinskihubert@gmail.com"
            icon={<Icon name="email" className="w-5 h-5" />}
          >
            Get in Touch
          </ActionButton>
        </Card>
      </PageLayout>

      {/* Lightbox Modal for full-size image */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <Icon name="close" className="w-8 h-8" size={32} />
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedPhoto}
              alt="Speaking event photo"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
