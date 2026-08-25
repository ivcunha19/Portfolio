import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function MenuLang() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'pt', label: 'Português', flag: '🇧🇷' },
        { code: 'en', label: 'English', flag: '🇺🇸' }
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
                className="flex items-center gap-2 transition cursor-pointer hover:opacity-80"
            >
                <span>{selectedLanguage.flag}</span>
                <span className="font-medium">{selectedLanguage.label}</span>
                <span className={`text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-gray-950/95 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md overflow-hidden z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            type="button"
                            onClick={() => handleSelect(lang.code)}
                            className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-left transition hover:bg-gray-800/80 cursor-pointer ${
                                activeLangCode === lang.code ? 'font-semibold text-blue-400 bg-gray-900/60' : 'text-white'
                            }`}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}