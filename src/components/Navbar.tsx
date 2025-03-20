'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/ministries', label: t('ministries') },
    { href: '/contact', label: t('contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <nav className={styles.nav}>
      <div className="container-custom">
        <div className={styles.container}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoContainer}>
              <Image
                src="/ProjectCLMC/images/logo.png"
                alt="Church logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <span className={styles.churchName}>
              {t('churchName')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className={styles.languageButton}
            >
              {language === 'en' ? '中文' : 'English'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.mobileMenuButton}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className={styles.languageButton}
            >
              {language === 'en' ? '中文' : 'English'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 