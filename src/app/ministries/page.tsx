'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Ministries() {
  const { t } = useLanguage();
  const ministries = [
    {
      title: t('sundayWorship'),
      description: t('sundayWorshipDesc'),
      image: 'https://images.unsplash.com/photo-1611513940806-80d6ed9fd7cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      schedule: t('Sunday1100')
    },
    {
      title: t('youthGroup'),
      description: t('youthGroupDesc'),
      image: 'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      schedule: t('Sunday130')
    },
    {
      title: t('prayerMeeting'),
      description: t('prayerMeetingDesc'),
      image: 'https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      schedule: t('Wednesday200')
    },
    {
      title: t('childrenSundaySchool'),
      description: t('childrenSundaySchoolDesc'),
      image: 'https://images.unsplash.com/photo-1621354899945-0f48366151a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      schedule: t('Sunday1100')
    },
    {
      title: t('badminton'),
      description: t('badmintonDesc'),
      image: 'https://images.unsplash.com/photo-1612677257608-90309859bbec?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      schedule: t('Sunday0400')
    }
  ];

  return (
    <div style={{ paddingTop: '4rem' }}>
      <section className="section-padding">
        <div className="container-custom">
          <h1 className="heading-primary">{t('ministriesTitle')}</h1>
          <p className="text-body" style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto 3rem' }}>
            {t('ministriesSubtitle')}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem'
          }}>
            {ministries.map((ministry) => (
              <div
                key={ministry.title}
                style={{
                  backgroundColor: 'rgb(31, 41, 55)',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  transition: 'transform 0.2s'
                }}
              >
                <div style={{ position: 'relative', height: '200px' }}>
                  <Image
                    src={ministry.image}
                    alt={ministry.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem'
                  }}>
                    {ministry.title}
                  </h3>
                  <p style={{
                    color: 'rgb(156, 163, 175)',
                    marginBottom: '1rem'
                  }}>
                    {ministry.description}
                  </p>
                  <p style={{
                    color: 'rgb(209, 213, 219)',
                    fontSize: '0.875rem'
                  }}>
                    {ministry.schedule}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 