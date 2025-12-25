import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';
import { useI18n } from '../contexts/i18nContext';

export const Packages: React.FC = () => {
  const { t } = useI18n();

  // Get array values with safety checks
  const fullBeforeWeddingItems = t('packages.full.beforeWedding.items');
  const fullOnWeddingDayItems = t('packages.full.onWeddingDay.items');
  const fullAfterWeddingItems = t('packages.full.afterWedding.items');
  const coordinationScopeItems = t('packages.coordination.scope.items');
  const coordinationForCouplesItems = t('packages.coordination.forCouples.items');

  return (
    <section id="packages" className="py-16 px-4 md:py-24">
      <h2 className="font-display text-3xl md:text-4xl text-center text-stone-800 italic mb-10">
        {t('packages.title')}
      </h2>
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">

        {/* Full Package (Gold) */}
        <div className="bg-primary rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <h3 className="font-display text-2xl font-bold mb-2">{t('packages.full.name')}</h3>
          <p className="text-white/80 text-xs mb-8">{t('packages.full.description')}</p>

          <div className="space-y-8 text-sm flex-grow">
            <div>
              <h4 className="font-bold mb-3 text-white/90 uppercase text-xs tracking-wider border-b border-white/20 pb-1 inline-block">{t('packages.full.beforeWedding.title')}</h4>
              <ul className="space-y-2.5">
                {Array.isArray(fullBeforeWeddingItems) && fullBeforeWeddingItems.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3"><span className="text-white/70 mt-0.5"><Check size={14} /></span> <span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-white/90 uppercase text-xs tracking-wider border-b border-white/20 pb-1 inline-block">{t('packages.full.onWeddingDay.title')}</h4>
              <ul className="space-y-2.5">
                {Array.isArray(fullOnWeddingDayItems) && fullOnWeddingDayItems.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3"><span className="text-white/70 mt-0.5"><Check size={14} /></span> <span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-white/90 uppercase text-xs tracking-wider border-b border-white/20 pb-1 inline-block">{t('packages.full.afterWedding.title')}</h4>
              <ul className="space-y-2.5">
                {Array.isArray(fullAfterWeddingItems) && fullAfterWeddingItems.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3"><span className="text-white/70 mt-0.5"><Check size={14} /></span> <span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <Button variant="white-outline" fullWidth className="mt-7">
            {t('packages.full.cta')}
          </Button>
        </div>

        {/* Coordination Package (Light) */}
        <div className="bg-surface-light border border-primary/30 rounded-2xl p-6 md:p-8 text-stone-800 shadow-lg relative transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
          <div className="absolute inset-0 border-2 border-primary/20 border-dashed rounded-2xl m-2 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col flex-grow">
            <h3 className="font-display text-2xl font-bold mb-2">{t('packages.coordination.name')}</h3>
            <p className="text-stone-500 text-xs mb-8">{t('packages.coordination.description')}</p>

            <div className="space-y-8 text-sm flex-grow">
              <div>
                <h4 className="font-bold mb-3 text-stone-700 uppercase text-xs tracking-wider border-b border-primary/20 pb-1 inline-block">{t('packages.coordination.scope.title')}</h4>
                <ul className="space-y-2.5 text-stone-600">
                  {Array.isArray(coordinationScopeItems) && coordinationScopeItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3"><span className="text-primary mt-0.5"><Check size={14} /></span> <span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-stone-700 uppercase text-xs tracking-wider border-b border-primary/20 pb-1 inline-block">{t('packages.coordination.forCouples.title')}</h4>
                <ul className="space-y-2.5 text-stone-600">
                  {Array.isArray(coordinationForCouplesItems) && coordinationForCouplesItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3"><span className="text-primary mt-0.5"><Check size={14} /></span> <span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <Button variant="outline" fullWidth className="mt-7">
              {t('packages.coordination.cta')}
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};