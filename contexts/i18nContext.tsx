import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import viTranslations from '../locales/vi/common.json';
import enTranslations from '../locales/en/common.json';

type Language = 'vi' | 'en';

interface Translations {
    [key: string]: any;
}

interface I18nContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translationsMap: Record<Language, Translations> = {
    vi: viTranslations,
    en: enTranslations
};

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('vi');
    const [translations, setTranslations] = useState<Translations>(viTranslations);

    useEffect(() => {
        // Load translations based on current language
        setTranslations(translationsMap[language]);
    }, [language]);

    // Translation function - supports nested keys like "header.nav.services"
    const t = (key: string): any => {
        const keys = key.split('.');
        let value: any = translations;

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return value !== undefined ? value : key;
    };

    return (
        <I18nContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </I18nContext.Provider>
    );
};

export const useI18n = (): I18nContextType => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
};
