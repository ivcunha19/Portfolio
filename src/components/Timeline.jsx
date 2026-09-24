import React from 'react';
import { useTranslation } from 'react-i18next';
import defaultEvents from '../data/experiencias.json';

const Circle = () => (
    <div className='rounded-full w-4 h-4 bg-blue-500 ring-4 ring-blue-950/90 shadow-[0_0_12px_rgba(59,130,246,0.8)] z-10 shrink-0'></div>
);

const EventCard = ({ titulo, empresa, periodo, descricao, tecnologias }) => {
    return (
        <div className='bg-gray-950/90 border border-gray-800 hover:border-blue-500/50 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 group pointer-events-auto flex flex-col gap-2 text-left w-full'>
            {periodo && (
                <span className='text-[10px] sm:text-xs text-blue-400 font-semibold bg-blue-950/80 border border-blue-800/50 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full w-fit'>
                    {periodo}
                </span>
            )}
            <h3 className='text-base sm:text-lg md:text-xl font-bold text-white font-title group-hover:text-blue-400 transition-colors'>
                {titulo}
            </h3>
            {empresa && (
                <span className='text-xs sm:text-sm text-gray-400 font-medium'>
                    {empresa}
                </span>
            )}
            <p className='text-gray-300 text-xs sm:text-sm leading-relaxed mt-1 whitespace-pre-line'>
                {descricao}
            </p>
            {tecnologias && tecnologias.length > 0 && (
                <div className='flex flex-wrap gap-1.5 mt-2.5 pt-2.5 border-t border-gray-900'>
                    {tecnologias.map((tech, index) => (
                        <span 
                            key={index}
                            className='bg-blue-950/60 text-blue-300 text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-blue-800/40 font-medium'
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

const Timeline = ({ events = defaultEvents }) => {
    const { t } = useTranslation();
    const list = Array.isArray(events) && events.length > 0 ? events : defaultEvents;

    return (
        <div className='relative w-full max-w-5xl mx-auto my-4 sm:my-6 px-3 sm:px-6 pointer-events-auto flex flex-col items-center'>
            {/* Linha Pilar Contínua */}
            <div className='absolute left-[28px] sm:left-[36px] md:left-1/2 top-4 bottom-4 w-0.5 sm:w-1 -translate-x-1/2 bg-linear-to-b from-blue-500 via-blue-600 to-blue-900 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)] z-0' />

            {/* Círculo Inicial do topo */}
            <div className='w-8 flex justify-center items-center relative z-10 self-start md:self-center mb-4 sm:mb-6 md:w-auto'>
                <Circle />
            </div>

            {/* Lista de Eventos */}
            <div className='flex flex-col gap-6 sm:gap-8 md:gap-12 w-full relative z-10'>
                {list.map((event, index) => {
                    const isLeft = event.direction ? event.direction === 'left' : index % 2 === 0;

                    const id = event.id;
                    const titulo = id ? t(`experiencias.items.${id}.titulo`, { defaultValue: event.titulo || event.cabecalho }) : (event.titulo || event.cabecalho);
                    const empresa = id ? t(`experiencias.items.${id}.empresa`, { defaultValue: event.empresa || event.local }) : (event.empresa || event.local);
                    const periodo = id ? t(`experiencias.items.${id}.periodo`, { defaultValue: event.periodo }) : event.periodo;
                    const descricao = id ? t(`experiencias.items.${id}.descricao`, { defaultValue: event.descricao || event.conteudo }) : (event.descricao || event.conteudo);

                    return (
                        <div 
                            key={event.id || index} 
                            className='grid grid-cols-[32px_1fr] md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-3 sm:gap-4 md:gap-8 w-full'
                        >
                            {/* Desktop: Coluna Esquerda */}
                            <div className='w-full hidden md:block'>
                                {isLeft ? (
                                    <EventCard 
                                        titulo={titulo}
                                        empresa={empresa}
                                        periodo={periodo}
                                        descricao={descricao}
                                        tecnologias={event.tecnologias}
                                    />
                                ) : (
                                    <div />
                                )}
                            </div>

                            {/* Nó Central (Círculo) */}
                            <div className='flex justify-center items-center w-full pt-4 md:pt-0'>
                                <Circle />
                            </div>

                            {/* Mobile: Card sempre na Coluna da direita */}
                            <div className='w-full block md:hidden'>
                                <EventCard 
                                    titulo={titulo}
                                    empresa={empresa}
                                    periodo={periodo}
                                    descricao={descricao}
                                    tecnologias={event.tecnologias}
                                />
                            </div>

                            {/* Desktop: Coluna Direita */}
                            <div className='w-full hidden md:block'>
                                {!isLeft ? (
                                    <EventCard 
                                        titulo={titulo}
                                        empresa={empresa}
                                        periodo={periodo}
                                        descricao={descricao}
                                        tecnologias={event.tecnologias}
                                    />
                                ) : (
                                    <div />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Círculo Final da base */}
            <div className='w-8 flex justify-center items-center relative z-10 self-start md:self-center mt-4 sm:mt-6 md:w-auto'>
                <Circle />
            </div>
        </div>
    );
};

export default Timeline;
