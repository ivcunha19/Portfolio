import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import MenuLang from './Menulang';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef(null);

    const activeLangCode = (i18n.resolvedLanguage || i18n.language || 'pt').startsWith('en') ? 'en' : 'pt';

    const handleScroll = (e, id) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        {
            id: 'sobre',
            label: t('nav.sobre'),
            icon: (
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            id: 'projetos',
            label: t('nav.projetos'),
            icon: (
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            id: 'experiencias',
            label: t('nav.experiencias'),
            icon: (
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 'contato',
            label: t('nav.contato'),
            icon: (
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <header ref={navRef} className='sticky top-0 z-50 w-full bg-black/85 backdrop-blur-xl border-b border-white/10 pointer-events-auto transition-all'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between text-white'>
                {/* Logo / Título */}
                <a 
                    href="#inicio" 
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsMobileMenuOpen(false);
                    }}
                    className='font-title font-bold text-xl sm:text-2xl tracking-tight hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer select-none'
                >
                    <span>Ivo</span>
                </a>

                {/* Navegação Desktop (md:flex) */}
                <nav className='hidden md:flex items-center gap-8'>
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            className='inline-block relative text-sm lg:text-base font-medium text-gray-300 hover:text-white hover:scale-105 transition-all cursor-pointer py-1'
                            href={`#${link.id}`}
                            onClick={(e) => handleScroll(e, link.id)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Lado Direito: Seletor de Idioma e Botão Hambúrguer Mobile */}
                <div className='flex items-center gap-2.5 sm:gap-4'>
                    <div className="linguagensContainer" id="linguagensContainer">
                        <MenuLang />
                    </div>

                    {/* Botão Hambúrguer Mobile */}
                    <button
                        type='button'
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        className='md:hidden p-2 rounded-xl bg-gray-900/90 border border-gray-800 text-gray-200 hover:text-white hover:bg-gray-800 active:scale-95 transition-all cursor-pointer flex items-center justify-center'
                        aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Menu Móvel Expansível (Mobile Drawer) */}
            {isMobileMenuOpen && (
                <div className='md:hidden bg-gray-950/95 border-b border-gray-800/90 backdrop-blur-2xl px-4 py-5 flex flex-col gap-4 shadow-2xl animate-fadeIn'>
                    {/* Lista de Links em formato de Cards */}
                    <nav className='flex flex-col gap-2'>
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                className='flex items-center justify-between px-4 py-3.5 rounded-xl bg-gray-900/60 hover:bg-gray-850 border border-gray-800/70 hover:border-blue-500/40 text-gray-200 hover:text-white transition-all active:scale-[0.99] cursor-pointer'
                                href={`#${link.id}`}
                                onClick={(e) => handleScroll(e, link.id)}
                            >
                                <div className='flex items-center gap-3'>
                                    <span className='p-2 rounded-lg bg-gray-800/80 border border-gray-700/50 flex items-center justify-center'>
                                        {link.icon}
                                    </span>
                                    <span className='font-medium text-base text-white font-title tracking-wide'>
                                        {link.label}
                                    </span>
                                </div>
                                <span className='text-gray-500 text-sm'>➜</span>
                            </a>
                        ))}
                    </nav>

                    {/* Alternador Rápido de Idioma dentro do Menu Mobile */}
                    <div className='pt-3 border-t border-gray-800/80 flex flex-col gap-2'>
                        <span className='text-xs uppercase tracking-wider text-gray-400 font-semibold px-1 font-sans'>
                            {activeLangCode === 'pt' ? 'Idioma' : 'Language'}
                        </span>
                        <div className='grid grid-cols-2 gap-2 bg-gray-900/80 p-1.5 rounded-xl border border-gray-800'>
                            <button
                                type='button'
                                onClick={() => i18n.changeLanguage('pt')}
                                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition cursor-pointer ${
                                    activeLangCode === 'pt'
                                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                <span>🇧🇷</span>
                                <span>Português</span>
                            </button>
                            <button
                                type='button'
                                onClick={() => i18n.changeLanguage('en')}
                                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition cursor-pointer ${
                                    activeLangCode === 'en'
                                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                <span>🇺🇸</span>
                                <span>English</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
