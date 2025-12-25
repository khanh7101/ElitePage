import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('vi');
    const [translations, setTranslations] = useState<Translations>({});

    useEffect(() => {
        // Load translations based on current language
        const loadTranslations = async () => {
            try {
                const response = await fetch(`/locales/${language}/common.json`);
                const data = await response.json();
                setTranslations(data);
            } catch (error) {
                console.error('Failed to load translations:', error);
            }
        };

        loadTranslations();
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
