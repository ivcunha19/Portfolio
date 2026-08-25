import React from 'react';
import pfpFoto from "../img/pfpPortfolio.jpeg";
import TechStack from '../components/Tecnologias';

const Sobre = () => {
    return (
        <div id='sobre' className='relative z-10 pointer-events-none min-h-screen w-full flex flex-col py-48 justify-center items-center px-8 gap-12'>
            <h1 className='font-title font-bold text-8xl text-white'>Sobre</h1>
            
            <div className='grid grid-cols-3 w-full max-w-6xl items-center gap-10'>
                <div className='col-span-2 bg-gray-950 p-8 rounded-2xl'>
                    <p className='text-white text-2xl text-left leading-relaxed'>
                        Sou um estudante de Engenharia de Software de Belo Horizonte, Minas Gerais. Apaixonado por tecnologia e pelo impacto que ela gera na sociedade. 
                        Busco oportunidades que me permitam contribuir com dedicação, desenvolver soluções de qualidade e, ao mesmo tempo, expandir meus conhecimentos. 
                    </p>
                </div>
                
                <div className='col-span-1 flex justify-center'>
                    <img className='rounded-full w-80 h-80 object-cover' src={pfpFoto} alt="Foto minha"/>
                </div>
                <TechStack></TechStack>
            </div>
        </div>
    );
};

export default Sobre;