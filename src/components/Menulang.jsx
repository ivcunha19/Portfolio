import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function MenuLang() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'pt', label: 'Português', short: 'PT', flag: '🇧🇷' },
        { code: 'en', label: 'English', short: 'EN', flag: '🇺🇸' }
    ];

    const activeLangCode = (i18n.resolvedLanguage || i18n.language || 'pt').startsWith('en') ? 'en' : 'pt';
    const selectedLanguage = languages.find((lang) => lang.code === activeLangCode) || languages[0];

    const handleSelect = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-gray-900/80 hover:bg-gray-800 border border-gray-800 text-gray-200 hover:text-white transition-all cursor-pointer active:scale-95 text-xs sm:text-sm font-medium"
                aria-label="Selecionar idioma"
                aria-expanded={isOpen}
            >
                <span className="text-base leading-none">{selectedLanguage.flag}</span>
                <span className="hidden sm:inline">{selectedLanguage.label}</span>
                <span className="inline sm:hidden font-semibold">{selectedLanguage.short}</span>
                <span className={`text-[10px] text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-gray-950/95 border border-gray-800 rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden z-50 animate-fadeIn">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            type="button"
                            onClick={() => handleSelect(lang.code)}
                            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-xs sm:text-sm text-left transition hover:bg-gray-800/80 cursor-pointer ${
                                activeLangCode === lang.code ? 'font-semibold text-blue-400 bg-gray-900/60' : 'text-gray-200'
                            }`}
                        >
                            <span className="text-base">{lang.flag}</span>
                            <span>{lang.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}