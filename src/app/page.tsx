'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollIndicator from '@/components/ScrollIndicator';
import ScrollButton from '@/components/ScrollButton';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div style={{ paddingTop: '4rem' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}>
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Church building"
            fill
            style={{ objectFit: 'cover', filter: 'brightness(0.5)' }}
            priority
          />
        </div>
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: 'white',
          padding: '0 1rem'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            background: 'linear-gradient(to right, rgb(var(--accent-yellow)), rgb(var(--accent-orange)), rgb(var(--accent-red)))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {t('welcomeTitle')}
          </h1>
          <p style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            maxWidth: '42rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'rgb(var(--text-secondary))'
          }}>
            {t('welcomeSubtitle')}
          </p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Service Times Section */}
      <section className="section-padding" style={{
        background: 'rgb(var(--background))',
        position: 'relative'
      }}>
        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          <h2 className="heading-primary">{t('joinUs')}</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {[
              {
                id: 'prayer-meeting',
                day: t('wednesday'),
                time: '8:00 PM',
                title: t('prayerMeeting'),
                description: t('prayerMeetingDesc')
              },
              {
                id: 'sunday-worship',
                day: t('sunday'),
                time: '11:00 AM',
                title: t('sundayWorship'),
                description: t('sundayWorshipDesc')
              },
              {
                id: 'youth-group',
                day: t('sunday'),
                time: '1.30 PM',
                title: t('youthGroup'),
                description: t('youthGroupDesc')
              }
            ].map((service) => (
              <div
                key={service.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, rgb(var(--card-bg)), rgba(var(--accent-red), 0.1))'
                }}
              >
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  background: 'linear-gradient(to right, rgb(var(--accent-yellow)), rgb(var(--accent-orange)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {service.day}
                </div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: 'rgb(var(--text-primary))'
                }}>
                  {service.time}
                </div>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'rgb(var(--text-primary))'
                }}>
                  {service.title}
                </div>
                <p className="text-body" style={{ marginBottom: '1rem' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <ScrollButton />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding" style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))'
      }}>
        <div className="container-custom">
          <h2 className="heading-primary">{t('aboutOurChurch')}</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <p className="text-body" style={{ marginBottom: '1.5rem', textAlign: 'justify' }}>
                {t('aboutDescription1')}
              </p>
              <p className="text-body" style={{ marginBottom: '2rem', textAlign: 'justify' }}>
                {t('aboutDescription2')}
              </p>
              <Link href="/about" className="button-primary">
                {t('learnMore')}
              </Link>
            </div>
            <div style={{ 
              position: 'relative', 
              height: '400px', 
              borderRadius: '1rem', 
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(var(--accent-red), 0.2)'
            }}>
              <Image
                src="/ProjectCLMC/images/church1.jpg"
                alt="Church interior"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="section-padding" style={{
        background: 'rgb(var(--background))'
      }}>
        <div className="container-custom">
          <h2 className="heading-primary">{t('ourMinistries')}</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            textAlign: 'justify'
          }}>
            {[
              {
                title: t('sundayWorship'),
                description: t('sundayWorshipDesc'),
                image: 'https://images.unsplash.com/photo-1611513940806-80d6ed9fd7cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: t('youthGroup'),
                description: t('youthGroupDesc'),
                image: 'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: t('prayerMeeting'),
                description: t('prayerMeetingDesc'),
                image: 'https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
            ].map((ministry) => (
              <div
                key={ministry.title}
                style={{
                  background: 'linear-gradient(145deg, rgb(var(--card-bg)), rgba(var(--accent-red), 0.1))',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  transition: 'transform 0.2s',
                  border: '1px solid rgba(var(--card-border))'
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
                    marginBottom: '0.5rem',
                    background: 'linear-gradient(to right, rgb(var(--accent-yellow)), rgb(var(--accent-orange)))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {ministry.title}
                  </h3>
                  <p style={{ color: 'rgb(var(--text-secondary))' }}>{ministry.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/ministries" className="button-primary">
              {t('viewAllMinistries')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 