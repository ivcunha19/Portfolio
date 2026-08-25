import React from 'react';
import { useTranslation } from 'react-i18next';
import pfpFoto from "../img/pfpPortfolio.jpeg";
import TechStack from '../components/Tecnologias';

const Sobre = () => {
    const { t } = useTranslation();

    return (
        <div id='sobre' className='relative z-10 pointer-events-none min-h-screen w-full flex flex-col py-48 justify-center items-center px-8 gap-12'>
            <h1 className='font-title font-bold text-8xl text-white'>{t('sobre.title')}</h1>
            
            <div className='grid grid-cols-3 w-full max-w-6xl items-center gap-10'>
                <div className='col-span-2 bg-gray-950 p-8 rounded-2xl'>
                    <p className='text-white text-2xl text-left leading-relaxed'>
                        {t('sobre.bio')}
                    </p>
                </div>
                
                <div className='col-span-1 flex justify-center'>
                    <img className='rounded-full w-80 h-80 object-cover' src={pfpFoto} alt={t('sobre.altPhoto')}/>
                </div>
                <TechStack></TechStack>
            </div>
        </div>
    );
};

export default Sobre;