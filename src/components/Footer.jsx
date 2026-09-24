import React from 'react';
import { useTranslation } from 'react-i18next';
import MinhasRedes from './MinhasRedes';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className='relative z-10 w-full bg-gray-950/90 border-t border-gray-900/80 py-8 sm:py-10 px-4 pointer-events-auto'>
            <div className='max-w-6xl mx-auto flex flex-col items-center gap-5 sm:gap-6 text-center'>
                <MinhasRedes />

                <div className='w-20 sm:w-24 h-0.5 bg-linear-to-r from-transparent via-blue-500/50 to-transparent my-1' />

                <div className='flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 font-sans'>
                    <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
