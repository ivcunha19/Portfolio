import React from 'react';

const CardProjeto = ({ projeto, onClick }) => {
    if (!projeto) return null;

    const { name, imagem, Tecnologias, Descricao } = projeto;

    return (
        <div 
            onClick={onClick}
            className='w-72 md:w-80 flex-shrink-0 bg-gray-950/90 border border-gray-800 hover:border-blue-500/60 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/20 cursor-pointer group pointer-events-auto select-none'
        >
            <div>
                {/* Espaço da Imagem / Placeholder */}
                <div className='w-full h-44 bg-gray-900 rounded-xl overflow-hidden mb-4 flex items-center justify-center border border-gray-800 group-hover:border-gray-700 transition-colors relative'>
                    {imagem ? (
                        <img 
                            src={imagem} 
                            alt={name} 
                            className='w-full h-full object-cover rounded-xl' 
                        />
                    ) : (
                        <div className='flex flex-col items-center gap-2 text-gray-500 group-hover:text-gray-400 transition-colors p-4 text-center'>
                            <svg className="w-10 h-10 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span className='text-xs font-medium uppercase tracking-wider'>Espaço para Imagem</span>
                        </div>
                    )}
                </div>

                {/* Título */}
                <h3 className='font-title font-bold text-2xl text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-1'>
                    {name}
                </h3>

                {/* Tecnologias */}
                <div className='flex flex-wrap gap-1.5 mb-3'>
                    {Tecnologias && Tecnologias.map((tech, index) => (
                        <span 
                            key={index}
                            className='bg-blue-950/60 text-blue-300 text-xs px-2.5 py-1 rounded-md border border-blue-800/40 font-medium'
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Descrição Normal (limitada a 3 linhas para manter altura uniforme) */}
                <p className='text-gray-300 text-sm leading-relaxed line-clamp-3 mb-2'>
                    {Descricao}
                </p>
            </div>

            {/* Rodapé com indicação de clique para modal */}
            <div className='mt-4 pt-3 flex items-center justify-between text-xs text-gray-400 border-t border-gray-900 group-hover:text-blue-400 transition-colors'>
                <span className='font-semibold'>Ver detalhes</span>
                <span className='text-sm transform group-hover:translate-x-1 transition-transform'>➜</span>
            </div>
        </div>
    );
};

export default CardProjeto;
