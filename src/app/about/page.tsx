'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const churchLeaders = [
    {
      name: t('MICname'),
      role: t('MICrole'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974',
      contact: 'jsukong@gmail.com'
    },
    {
      name: t('LPname'),
      role: t('LProle'),
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974',
      contact: 'thomasling@ktling.com.au'
    },
    {
      name: t('CPname'),
      role: t('CProle'),
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
      contact: 'gareth@ddh.com.au'
    },
    {
      name: t('LLname'),
      role: t('LLrole'),
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974',
      contact: 'amylinghy@gmail.com'
    }
  ];

  return (
    <div style={{ paddingTop: '4rem' }}>
      {/* History Section */}
      <section className="section-padding" style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))'
      }}>
        <div className="container-custom">
          <h1 className="heading-primary">{t('aboutTitle')}</h1>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            marginBottom: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 className="heading-secondary" style={{ 
                marginBottom: '2rem',
                background: 'linear-gradient(to right, rgb(var(--accent-yellow)), rgb(var(--accent-red)))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {t('ourHistory')}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p className="text-body" style={{ textAlign: 'justify' }}>
                  {t('historyText1')}
                </p>
                <p className="text-body" style={{ textAlign: 'justify' }}>
                  {t('historyText2')}
                </p>
                <p className="text-body" style={{ textAlign: 'justify' }}>
                  {t('historyText3')}
                </p>
              </div>
            </div>
            <div style={{ 
              position: 'relative', 
              height: '400px', 
              borderRadius: '1rem', 
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              <Image
                src="/ProjectCLMC/images/churchban.jpg"
                alt="Church history"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Church Organization Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-primary">{t('currentOrganization')}</h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* Minister in Charge */}
            <div
              className="card"
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                maxWidth: '400px',
                width: '100%'
              }}
            >
              <div style={{
                position: 'relative',
                width: '220px',
                height: '220px',
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: '1rem',
                border: '4px solid rgba(255, 193, 7, 0.3)',
                boxShadow: '0 4px 20px rgba(255, 193, 7, 0.2)'
              }}>
                <Image
                  src='/ProjectCLMC/images/revjk.jpg'
                  alt={churchLeaders[0].name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'white',
                marginBottom: '0.5rem'
              }}>
                {churchLeaders[0].name}
              </h3>
              <p style={{
                color: 'rgb(255, 193, 7)',
                fontWeight: 500,
                fontSize: '1.1rem',
                marginBottom: '1rem'
              }}>
                {churchLeaders[0].role}
              </p>
              <a
                href={`mailto:${churchLeaders[0].contact}`}
                style={{
                  color: 'rgb(var(--text-secondary))',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {churchLeaders[0].contact}
              </a>
            </div>

            {/* Other Leaders */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              width: '100%'
            }}>
              {churchLeaders.slice(1).map((leader) => (
                <div
                  key={leader.name}
                  className="card"
                  style={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '2rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'white',
                    marginBottom: '0.5rem'
                  }}>
                    {leader.name}
                  </h3>
                  <p style={{
                    color: 'rgb(255, 193, 7)',
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                  }}>
                    {leader.role}
                  </p>
                  <a
                    href={`mailto:${leader.contact}`}
                    style={{
                      color: 'rgb(var(--text-secondary))',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.375rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {leader.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding" style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))'
      }}>
        <div className="container-custom">
          <h2 className="heading-primary">{t('ourVision')}</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {[
              {
                key: 'spiritualGrowth',
                title: t('visionItems.spiritualGrowth.title'),
                description: t('visionItems.spiritualGrowth.description')
              },
              {
                key: 'missionWork',
                title: t('visionItems.missionWork.title'),
                description: t('visionItems.missionWork.description')
              },
              {
                key: 'communityOutreach',
                title: t('visionItems.communityOutreach.title'),
                description: t('visionItems.communityOutreach.description')
              },
              {
                key: 'nextGeneration',
                title: t('visionItems.nextGeneration.title'),
                description: t('visionItems.nextGeneration.description')
              }
            ].map((value) => (
              <div key={value.key} className="card" style={{
                padding: '2rem',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: 'rgb(255, 193, 7)'
                }}>
                  {value.title}
                </h3>
                <p className="text-body" style={{ fontSize: '1.1rem' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 