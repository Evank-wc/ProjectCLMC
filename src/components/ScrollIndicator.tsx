'use client';

import React from 'react';

const ScrollIndicator = () => {
  return (
    <div style={{
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      animation: 'bounce 2s infinite',
      cursor: 'pointer',
      zIndex: 10
    }}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          opacity: 0.8,
          transition: 'opacity 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '0.8';
        }}
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </div>
  );
};

export default ScrollIndicator; 