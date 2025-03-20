'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(8px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      color: 'rgb(209, 213, 219)'
    }}>
      <div className="container-custom section-padding">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            color: 'rgb(209, 213, 219)',
            fontSize: '0.875rem'
          }}>
            <p>&copy; {new Date().getFullYear()} City Light Methodist Church</p>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 