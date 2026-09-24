import React from 'react';
import { useTranslation } from 'react-i18next';

const Inicio = () => {
    const { t } = useTranslation();

    return (
        <section 
            id='inicio' 
            className='relative z-10 min-h-[calc(100vh-70px)] w-full flex flex-col items-center justify-center text-center text-white pointer-events-none select-none px-4 sm:px-6 md:px-12 py-12'
        >
            <div className='flex flex-col items-center gap-2 sm:gap-4 max-w-5xl'>
                <h3 className='text-base sm:text-xl md:text-2xl font-medium text-white'>
                    {t('inicio.greeting')}
                </h3>
                <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-title text-white tracking-tight leading-tight'>
                    {t('inicio.name')}
                </h1>
                <h2 className='text-base sm:text-xl md:text-2xl font-normal text-white'>
                    {t('inicio.role')}
                </h2>
            </div>
        </section>
    );
};

export default Inicio;
