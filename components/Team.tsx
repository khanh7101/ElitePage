import React from 'react';
import { Button } from './Button';
import { useI18n } from '../contexts/i18nContext';

export const Team: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="py-12 px-4 md:py-24 bg-[#FFFDF5]">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">

          {/* IMAGE LEFT */}
          <div className="flex-shrink-0 md:-translate-y-16 w-full md:w-auto">
            <div className="aspect-[11/12] w-full max-w-[320px] md:max-w-[389px] mx-auto overflow-hidden rounded-[25px] shadow-lg">
              <img
                alt="Couple holding hands"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVikd6dkCWilIzYB4Xb86nhfgFKOS22HrEpf_3D_B860EfvApMIvOh_5gXHEbeUFDNfMx3_k83VSm2HwxRV0EaOwOARA9KrB8s6GqSbo0YyGP0NUchmn9sGpuz039yw8HP-1nJUhLcLMzXvj9w1ov1VUDbUI3APmTWNxFtg3HEOEHnwcJbFwLsWGq925Y7_C5mKley0OKwgNJelA8tq8h5jOMGQdwBkEYXMPyWKGeD-1aVm0bIXAtDfjN7ZgTL5236LCrnqnocVsg"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* TEXT CENTER */}
          <div className="flex-1 text-center px-2 md:px-4 max-w-xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-stone-800 italic">
              {t('team.title')}
            </h2>

            <p className="font-display text-xl md:text-2xl text-stone-600 mt-2 italic tracking-wide">
              {t('team.subtitle')}
            </p>

            <div className="flex justify-center mb-3 md:mb-4">
              <span className="text-3xl">💌</span>
            </div>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              {t('team.description1')}
            </p>
            <p className="mx-auto [text-align:justify] [text-align-last:center] text-stone-600 text-sm md:text-base leading-relaxed">
              {t('team.description2')}
            </p>

            <div className="pt-4 flex justify-center">
              <Button size="lg" className="shadow-lg">
                {t('team.cta')}
              </Button>
            </div>
          </div>

          {/* IMAGE RIGHT - Hidden on mobile */}
          <div className="hidden md:block flex-shrink-0 translate-y-6 md:translate-y-16">
            <div className="w-[220px] aspect-square rounded-[30px] overflow-hidden shadow-lg">
              <img
                alt="Wedding dinner table"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAysNV6lRbVoASgW3yuNzB1RdEBafrjbLnlozcGYZ6SA8xv6qaITTJ82AnvxDkB0Vf-h4maFm3exmxXeXulb0LxR8uSgUf3vZ_Wz9gCW7OuSxQ5cksRHL0vs1Xf5c0JPXvXnhUpgwuC0KOblYhTu7_gN_Vu4zkicy8CH_bO9kjaalfjjkahLoDr_1Yj7MEMpkCnG8ZJg2rHnk3UJIcY2N5eMxqJbnZisurMhZCOZ_SVZpgk21kDT5K6E4Vz2v3sSjifTy7tbmEU2lw"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>



  );
};