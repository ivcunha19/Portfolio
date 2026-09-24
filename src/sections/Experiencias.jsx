import React from 'react';
import { useTranslation } from 'react-i18next';
import Timeline from '../components/Timeline';

const Experiencias = () => {
    const { t } = useTranslation();

    return (
        <section id='experiencias' className='relative z-10 min-h-screen w-full flex flex-col justify-center items-center px-3 sm:px-6 py-16 sm:py-24 gap-8 sm:gap-12'>
            <h1 className='font-title font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white text-center'>
                {t('experiencias.title')}
            </h1>

            <div className='w-full max-w-5xl pointer-events-auto'>
                <Timeline />
            </div>
        </section>
    );
};

export default Experiencias;
