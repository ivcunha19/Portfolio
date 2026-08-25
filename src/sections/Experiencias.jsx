import React from 'react';
import Timeline from '../components/Timeline';

const Experiencias = () => {
    return (
        <section id='experiencias' className='relative z-10 min-h-screen w-full flex flex-col justify-center items-center px-4 gap-12'>
            <h1 className='font-title font-bold text-6xl md:text-8xl text-white text-center'>
                Experiências
            </h1>

            <div className='w-full max-w-5xl pointer-events-auto'>
                <Timeline />
            </div>
        </section>
    );
};

export default Experiencias;
