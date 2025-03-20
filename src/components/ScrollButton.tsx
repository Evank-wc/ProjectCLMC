'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function ScrollButton() {
  const router = useRouter();
  const { t } = useLanguage();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/contact#find-us');
    setTimeout(() => {
      const element = document.getElementById('find-us');
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <a href="/contact#find-us" onClick={handleClick} className="button-primary">
      {t('getDirections')}
    </a>
  );
} 