import React from 'react';
import { useTranslation } from 'react-i18next';

const Inicio = () => {
    const { t } = useTranslation();

    return (
        <section 
            id='inicio' 
            className='relative z-10 min-h-[calc(100vh-70px)] w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 text-white pointer-events-none text-center select-none py-12'
        >
            <div className='flex flex-col items-center gap-2 sm:gap-4 max-w-4xl'>
                <h3 className='text-sm sm:text-lg md:text-xl font-medium text-blue-400 tracking-widest uppercase'>
                    {t('inicio.greeting')}
                </h3>
                <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold font-title tracking-tight leading-tight'>
                    {t('inicio.name')}
                </h1>
                <h2 className='text-sm sm:text-lg md:text-xl font-light text-gray-300 max-w-xl leading-relaxed'>
                    {t('inicio.role')}
                </h2>
            </div>
        </section>
    );
};

export default Inicio;
