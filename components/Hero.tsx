import React from 'react';
import { Button } from './Button';
import { useI18n } from '../contexts/i18nContext';

export const Hero: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Beautiful wedding setup with flowers and arch"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAGcmkfcwrALre6Ow_9kLHN8gaZTAGmjQgWjr7ygEBnXovRiWJ3ySaN3ZoYPqjJ0wyuMMAmXLZoC4at2s3kmRk7ag9G4O9z0wnxoIJGdIDBBhHdTHlzdJifkELVMDpotMXpw8nL-kiEoIhOgBOEwWq2k1A0RW_b6auRfHk0_ZlxtLNz_lCvGqzuRe5jY3_4CBbwH9othLYLzVXl95c4dCoDa5ffac8mhwcgSjSBcY_KVDPskbpW7UckbyIDYyd2wMLD-QCKdRiiaw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-white mb-6 italic leading-tight drop-shadow-md">
          {t('hero.title')}
        </h1>
        <p className="text-stone-100 mb-10 max-w-sm md:max-w-lg mx-auto text-sm md:text-base font-bold tracking-wide drop-shadow">
          {t('hero.subtitle')}
        </p>
        <Button size="lg" className="rounded-full">
          {t('hero.cta')}
        </Button>
      </div>
    </section>
  );
};