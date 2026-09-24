import React from 'react';
import { useTranslation } from 'react-i18next';

const Inicio = () => {
    const { t } = useTranslation();

    return (
        <section 
            id='inicio'
            className='relative z-10 justify-self-center px-6 py-40 sm:px-12 sm:py-60 lg:px-24 lg:py-96 text-white pointer-events-none'
        >
            <h3 className='text-lg sm:text-xl lg:text-2xl'>{t('inicio.greeting')}</h3>
            <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-title'>{t('inicio.name')}</h1>
            <h2 className='text-lg sm:text-xl lg:text-2xl'>{t('inicio.role')}</h2>
        </section>
    );
};

export default Inicio;
