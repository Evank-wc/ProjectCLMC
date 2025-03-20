'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div style={{ paddingTop: '4rem' }}>
      {/* Contact Header Section */}
      <section className="section-padding" style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))',
        padding: '6rem 0'
      }}>
        <div className="container-custom">
          <h1 className="heading-primary" style={{ 
            fontSize: '3.5rem',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>{t('contactTitle')}</h1>
          <p className="text-body" style={{ 
            textAlign: 'center', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '1.2rem',
            lineHeight: '1.8'
          }}>
            {t('contactDescription')}
          </p>
        </div>
        <br></br>
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {/* Contact Information */}
            <div className="card" style={{
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(255, 193, 7, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 193, 7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 style={{ 
                  color: 'rgb(255, 193, 7)', 
                  marginBottom: '0.5rem',
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}>{t('phone')}</h3>
                <p className="text-body" style={{ fontSize: '1.1rem' }}>+61413953238</p>
              </div>
            </div>

            <div className="card" style={{
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(255, 193, 7, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 193, 7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h3 style={{ 
                  color: 'rgb(255, 193, 7)', 
                  marginBottom: '0.5rem',
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}>{t('email')}</h3>
                <p className="text-body" style={{ fontSize: '1.1rem' }}>mail2clmc@gmail.com</p>
              </div>
            </div>

            <div className="card" style={{
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(255, 193, 7, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 193, 7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 style={{ 
                  color: 'rgb(255, 193, 7)', 
                  marginBottom: '0.5rem',
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}>{t('address')}</h3>
                <p className="text-body" style={{ fontSize: '1.1rem' }}>717 Flinders Street<br />Docklands, VIC 3008<br />Melbourne, Australia</p>
              </div>
            </div>
          </div>
          <div className="container-custom">
          {/* Map Section */}
          <div id="find-us" style={{ marginTop: '6rem' }}>
            <h2 className="heading-secondary" style={{ 
              marginBottom: '2rem',
              fontSize: '2.5rem',
              color: 'white',
              textAlign: 'center'
            }}>{t('findUs')}</h2>
            <div style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.85908105161!2d144.97220859999996!3d-37.80340669999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d50b4afffff%3A0x8390fc0e5d4a87e5!2sCity%20Light%20Methodist%20Church!5e0!3m2!1sen!2sau!4v1742382979078!5m2!1sen!2sau" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 