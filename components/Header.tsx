import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useI18n } from '../contexts/i18nContext';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageToggle = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
      <div className="relative px-4 py-3 flex justify-between items-center max-w-5xl mx-auto w-full">
        {/* Logo */}
        <Link to="/" className="flex items-baseline gap-1 z-10 drop-shadow-lg hover:opacity-80 transition-opacity">
          <span className="font-display font-bold text-xl text-primary">Ellie</span>
          <span className="font-script2 text-2xl text-white italic">Wedding</span>
        </Link>

        {/* Centered Navigation */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className="text-sm font-medium text-white/90 hover:text-white transition-colors drop-shadow"
          >
            {t('header.nav.services')}
          </a>
          <a
            href="#stories"
            onClick={(e) => handleNavClick(e, 'stories')}
            className="text-sm font-medium text-white/90 hover:text-white transition-colors drop-shadow"
          >
            {t('header.nav.stories')}
          </a>
          <a
            href="#packages"
            onClick={(e) => handleNavClick(e, 'packages')}
            className="text-sm font-medium text-white/90 hover:text-white transition-colors drop-shadow"
          >
            {t('header.nav.packages')}
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 z-10">
          {/* Language Switcher - Visible on all screens */}
          <div
            className="relative flex bg-white/20 backdrop-blur-sm rounded-full p-1 cursor-pointer select-none items-center mr-1 hover:bg-white/30 transition-all duration-300"
            onClick={handleLanguageToggle}
          >
            {/* Sliding background */}
            <div
              className={`absolute w-7 h-7 bg-white rounded-full shadow-lg transition-transform duration-300 ease-in-out ${language === 'en' ? 'translate-x-7' : 'translate-x-0'
                }`}
            />

            {/* VI Button */}
            <div className={`relative z-10 rounded-full w-7 h-7 flex items-center justify-center text-[10px] font-bold transition-colors duration-300 ${language === 'vi' ? 'text-stone-900' : 'text-white/70'}`}>
              VI
            </div>

            {/* EN Button */}
            <div className={`relative z-10 rounded-full w-7 h-7 flex items-center justify-center text-[10px] font-bold transition-colors duration-300 ${language === 'en' ? 'text-stone-900' : 'text-white/70'}`}>
              EN
            </div>
          </div>

          {/* Contact Button - Hidden on mobile */}
          <Link to="/contact" className="hidden md:block bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg active:scale-95 transition-all w-[100px] text-center">
            {t('header.contact')}
          </Link>

          {/* Hamburger Menu - Hidden on Desktop/Tablet (md and larger) */}
          <button className="md:hidden text-stone-600 p-1 hover:bg-black/5 rounded-full transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};