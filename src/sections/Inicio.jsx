import React from 'react';
import { useTranslation } from 'react-i18next';

const Inicio = () => {
    const { t } = useTranslation();

    return (
        <div className='relative z-10 justify-self-center px-24 py-96 text-white pointer-events-none'>
            <h3 className='text-2xl'>{t('inicio.greeting')}</h3>
            <h1 className='text-9xl font-bold font-title'>{t('inicio.name')}</h1>
            <h2 className='text-2xl'>{t('inicio.role')}</h2>
        </div>
    );
};

export default Inicio;
