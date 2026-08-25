import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MinhasRedes = () => {
    return (
        <div className='pointer-events-auto flex flex-col items-center gap-3'>
            <h2 className='text-base md:text-lg font-semibold text-gray-300 font-title tracking-wide'>
                Minhas Redes
            </h2>
            <div className='flex gap-5 items-center'>
                <a 
                    href="https://www.linkedin.com/in/ivo-cunha-6a7a55351" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-gray-900/80 border border-gray-800 hover:border-blue-500/50 rounded-full text-gray-300 hover:text-blue-400 hover:scale-110 shadow-lg transition-all duration-300 text-xl"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>

                <a 
                    href="https://github.com/ivcunha19" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-gray-900/80 border border-gray-800 hover:border-blue-500/50 rounded-full text-gray-300 hover:text-blue-400 hover:scale-110 shadow-lg transition-all duration-300 text-xl"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
            </div>
        </div>
    );
};

export default MinhasRedes;
