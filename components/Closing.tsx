import React from 'react';
import { Button } from './Button';
import { useI18n } from '../contexts/i18nContext';

export const Closing: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="py-16 px-4 md:py-24 bg-yellow-50/50">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
        <div className="text-center md:text-left space-y-4 flex flex-col justify-center order-1 md:order-none">
          <h2 className="font-display text-3xl md:text-4xl text-stone-800 italic leading-tight">
            {t('closing.title')}
          </h2>
          <p className="text-stone-600 text-sm">
            {t('closing.subtitle')}
          </p>
          <div className="pt-4 flex justify-center">
            <Button className="px-8">
              {t('closing.cta')}
            </Button>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl order-2 md:order-none">
          <img
            alt="Happy couple with balloons"
            className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbhow3mhiULwU5ziGgNXic238rZJm-9va6rAhg4OAhCGUqwhPCIDPF6YSMvkVf6UTrF5B4tEyBTeEzie3gDnXT0dcEBOhY1bpOp44NzYiq0jThUAR6VQK7M6jb0cQVhJbOgX2YQVCEGlgXOAQxczA0bUFzIwQ63ARHp-olFnjEUqevvRikA1P7N_-DYasNZhCXNryesjMETJycZEugvUkkKYCtYrfK9cSAfv34xsDJn1e1XLnZ0UJ8eG3vXCoiiUx51FbzCBUam98"
          />
        </div>
      </div>
    </section>
  );
};