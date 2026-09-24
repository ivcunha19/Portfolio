import React from 'react';
import { useTranslation } from 'react-i18next';
import pfpFoto from "../img/pfpPortfolio.jpeg";
import TechStack from '../components/Tecnologias';

const Sobre = () => {
    const { t } = useTranslation();

    return (
        <section id='sobre' className='relative z-10 pointer-events-none min-h-screen w-full flex flex-col py-16 sm:py-24 md:py-32 justify-center items-center px-4 sm:px-6 md:px-8 gap-10 md:gap-14'>
            <h1 className='font-title font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white text-center'>
                {t('sobre.title')}
            </h1>
            
            <div className='grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl items-center gap-8 md:gap-10 pointer-events-auto'>
                <div className='order-2 md:order-1 md:col-span-2 bg-gray-950/90 border border-gray-900 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-xl backdrop-blur-sm'>
                    <p className='text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl text-left leading-relaxed font-sans'>
                        {t('sobre.bio')}
                    </p>
                </div>
                
                <div className='order-1 md:order-2 md:col-span-1 flex justify-center'>
                    <div className='relative group'>
                        <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500'></div>
                        <img 
                            className='relative rounded-full w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover border-2 border-blue-500/40 shadow-2xl' 
                            src={pfpFoto} 
                            alt={t('sobre.altPhoto')}
                        />
                    </div>
                </div>

                <div className='order-3 md:col-span-3 w-full'>
                    <TechStack />
                </div>
            </div>
        </section>
    );
};

export default Sobre;