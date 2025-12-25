import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { useI18n } from '../contexts/i18nContext';

export const Footer: React.FC = () => {
  const { t } = useI18n();

  // Get array values with safety checks
  const venuesItems = t('footer.venues.items');
  const servicesItems = t('footer.services.items');
  const supportItems = t('footer.support.items');

  return (
    <footer className="bg-background-light py-12 px-4 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Footer Links */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 text-xs md:text-sm text-stone-600 flex-grow">
            <div className="space-y-3">
              <h4 className="font-bold text-stone-900 text-sm mb-2">{t('footer.venues.title')}</h4>
              {Array.isArray(venuesItems) && venuesItems.map((item: string, index: number) => (
                <p key={index} className="cursor-pointer hover:text-primary transition-colors">{item}</p>
              ))}
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-stone-900 text-sm mb-2">{t('footer.services.title')}</h4>
              {Array.isArray(servicesItems) && servicesItems.map((item: string, index: number) => (
                <p key={index} className="cursor-pointer hover:text-primary transition-colors">{item}</p>
              ))}
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-stone-900 text-sm mb-2">{t('footer.support.title')}</h4>
              {Array.isArray(supportItems) && supportItems.map((item: string, index: number) => (
                <p key={index} className="cursor-pointer hover:text-primary transition-colors">{item}</p>
              ))}
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex md:flex-col justify-center md:justify-start items-center md:items-end gap-4 md:gap-3 text-stone-600">
            <a href="#" className="hover:text-primary hover:scale-110 transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-primary hover:scale-110 transition-all">
              <Twitter size={20} />
            </a>
            <a href="https://www.pinterest.com/ellieweddingplanner/" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:scale-110 transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.657-.895 3.023-2 3.708V19" />
              </svg>
            </a>
            <a href="#" className="hover:text-primary hover:scale-110 transition-all">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <p className="text-center text-[10px] md:text-xs text-stone-400 mt-10">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};