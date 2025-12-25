import React from 'react';
import { Button } from './Button';
import { useI18n } from '../contexts/i18nContext';

export const Intro: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="py-16 px-4 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8 md:flex md:items-center md:gap-12 md:space-y-0">

        {/* Images */}
        <div className="relative h-80 w-full md:w-1/2 mb-12 md:mb-0 shrink-0">
          <div className="absolute top-0 left-0 w-3/4 h-64 rounded-2xl overflow-hidden shadow-xl z-0 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              alt="Wedding cake detail"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt9Eft9S5AOlzieximmPeUhh7dV8naRo8TCQT9LR4vOWEDW90z753pbN9vB2ikYAoVEJPuSDLCII-hQ1hLVaWrJpd88G34QWmNFX_4thUqhSS6BdwTj3IOdlXYOluWucgRKuM3J-_yYB95ROV_ZiM4WQqdpcSR5d1r2fS2XbNsAnwMfXc4L-pRPtd8w5Wq4narikcpn0Ddw2RFdASEpVj_XWfXQ3J35hXHwJUmHKw8isVJfG1G3Tj8xlUR6oLnvDDbDq7xk0CDpOE"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-3/4 h-56 rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-background-light transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              alt="Table setting with flowers"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAM93D7UMHQwQHOeSc9i2lav0SA4iDc8DAjILm4MvIXbGnmQWSJHuZWtM_1wlDmCptJXiudk6Kkn2GnOca0fqz8crcbDvWjDJfwnxejdjyq4c0_rBY0ty-pMfAW7_jpkuu9VQpScL7_-UOSNgSL-DZqqfKgdhQQUGkXMtyu196b7vMa1iK0iSNW3QIWnT23imKKa2XGyeGDzTsGbthZ8tz5F7z40aNj1JRJogahou7fPYeKNbs_AYBbOuiv3yZbPHeIgYq5HVpwOE"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h2 className="font-display text-2xl md:text-3xl text-stone-800 italic">
            {t('intro.title')}
          </h2>
          <div className="space-y-4 text-stone-600 text-sm leading-relaxed text-justify md:text-left">
            <p>
              {t('intro.paragraph1')}
            </p>
            <p>
              {t('intro.paragraph2')}
            </p>
          </div>
          <div className="pt-2 flex justify-center">
            <Button>{t('intro.cta')}</Button>
          </div>
        </div>

      </div>
    </section>
  );
};