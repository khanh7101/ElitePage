import React from 'react';
import { Button } from './Button';
import { ServiceItem } from '../types';
import { useI18n } from '../contexts/i18nContext';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Photographers",
    subtitle: "Find your look",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBohxZxG2qapbrlkXsBpuTg0TWyLpFEkLM80KbO9A8k9PNUyD2qgSqeTtIzv4xbCNnu8IDz7VXhfde2KSdmIpoXl0O8_VJmb6fXpZEAxynNpp_fKPP-O-XTkwT69rrHjIY5Gx4_WQB-aumSItrl9qoQAIkZ8vl1OcpEnsGfpb9Fc7LRey-GPkJamoOAWwTU9_9pnNuWpv8fA5_1Qmipbx_QMOL39Z8VSi4kzxdgv7hJyrjE1QDMnmn_p3XGDA6cD9YxN_Y2E85zxL0"
  },
  {
    id: 2,
    title: "Planning",
    subtitle: "Perfect details",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHAocKZi3QfF2XjQq5C9LzE69H-a77pK8z-X9Y1QcD3X4g26YiLiN5-FAbiHEVMN7yh7VZQJQ07AkJcw_xU8LqWavqEVPnBkhDH-mnCyqJtEQSGhf0PpGRzt9NmPN3Da4Ijzrac40fUr8rcT_jyGQuX6d70Vi7Cog4-PCqwnNdWw-0OHBSfL7VGFafqsZux1SS0qn2KqIL_ut1_-RB7hb7YaDrRSSSGm6KEKF0tnAgdvI1JUZuW7Za2RgvDK0IxDWuf6pJouvEzcA"
  },
  {
    id: 3,
    title: "Decorations",
    subtitle: "Style your venue",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-LUrV72tM4cZWwjJZQbzVrt6uWZuCXsHawqrbOEmfcb8nf5MnF0y6vffZT2VknUrOGWTlFf1JlZkCyZyuQI_cYItYU_RbVnEXQgwdBOS7gkLD5oYmXU4KkHWir1Cv21hrQweQJqkexWgn1oKVQEJ9KHNoiYzGGp2AK8QMU-9qDWm6EMDkS1n19HiCt3yzoSOSKwagTDOgHvc-hLI8Hem6Hv2TbjE23gA2EmJ-54FnmdrcipEEgfgaw0sU_lXkujg4JjeF3VPUjLs"
  }
];

export const Services: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="services" className="py-12 px-4 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center text-stone-800 italic mb-8 md:mb-10">
          {t('services.title')}
        </h2>

        <div className="flex overflow-x-auto gap-3 md:gap-4 pb-8 no-scrollbar snap-x snap-mandatory md:justify-center px-2 md:px-0 -mx-2 md:mx-0">
          {services.map((service, index) => (
            <div key={service.id} className="snap-center shrink-0 w-[280px] md:w-72 relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <img
                alt={service.title}
                className="w-full h-[360px] md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                src={service.image}
              />
              <div className="absolute inset-x-3 md:inset-x-4 bottom-3 md:bottom-4 bg-white/80 backdrop-blur-md p-3 md:p-4 rounded-lg text-center shadow-lg border border-white/20">
                <h3 className="font-display text-lg md:text-xl italic text-stone-800 mb-1">
                  {t(`services.items.${index}.title`)}
                </h3>
                <p className="text-xs uppercase tracking-widest text-stone-500">
                  {t(`services.items.${index}.subtitle`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 md:mt-6">
          <Button size="lg" className="rounded-full px-8">{t('services.cta')}</Button>
        </div>
      </div>
    </section>
  );
};