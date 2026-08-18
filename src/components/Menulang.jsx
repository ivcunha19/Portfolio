import { useState, useRef, useEffect } from 'react';

export default function MenuLang() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('pt');
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'pt', label: 'Português', flag: '🇧🇷' },
        { code: 'en', label: 'English', flag: '🇺🇸' }
    ];

    const selectedLanguage = languages.find((lang) => lang.code === currentLang);

    const handleSelect = (code) => {
        setCurrentLang(code);
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
            className="flex items-center gap-2 transition"
        >
            <span>{selectedLanguage.flag}</span>
            <span className="font-medium">{selectedLanguage.label}</span>
            <span className={`text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            ▼
            </span>
        </button>

        {isOpen && (
            <div className="absolute right-0 mt-2 w-36">
            {languages.map((lang) => (
                <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-left transition ${
                    currentLang === lang.code ? 'font-semibold' : 'text-white'
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