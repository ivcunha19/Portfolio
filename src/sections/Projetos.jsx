import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import CardProjeto from '../components/CardProjeto';
import ModalProjeto from '../components/ModalProjeto';
import ModalFiltros from '../components/ModalFiltros';
import listProjetos from '../data/projetos.json';

const Projetos = () => {
    const { t } = useTranslation();
    const [selectedTech, setSelectedTech] = useState('Todos');
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [selectedProjeto, setSelectedProjeto] = useState(null);
    const scrollContainerRef = useRef(null);

    const allTechs = ['Todos', ...Array.from(new Set(listProjetos.flatMap(p => p.Tecnologias || [])))];

    const filteredProjetos = listProjetos.filter((p) => {
        return selectedTech === 'Todos' || (p.Tecnologias && p.Tecnologias.includes(selectedTech));
    });

    const handleScroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const cardWidth = 340;
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id='projetos' className='relative z-10 min-h-screen w-full flex flex-col justify-center items-center px-4 py-20 gap-8 overflow-hidden'>
            <h1 className='font-title font-bold text-6xl md:text-8xl text-white text-center'>
                {t('projetos.title')}
            </h1>

            {/* Botão para Abrir o Modal de Filtros */}
            <div className='flex flex-wrap justify-center items-center gap-3 pointer-events-auto z-20'>
                <button
                    onClick={() => setIsFilterModalOpen(true)}
                    className='bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-full text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:scale-105 cursor-pointer'
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    <span>{t('projetos.filterBtn')}</span>
                    {selectedTech !== 'Todos' && (
                        <span className='bg-white text-blue-600 text-xs px-2 py-0.5 rounded-full font-bold'>
                            {t('projetos.active')}
                        </span>
                    )}
                </button>

                {/* Exibição da tecnologia ativa se houver */}
                {selectedTech !== 'Todos' && (
                    <span className='bg-gray-900 border border-gray-800 text-blue-300 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5'>
                        {t('projetos.techLabel')} <strong>{selectedTech}</strong>
                        <button 
                            onClick={() => setSelectedTech('Todos')}
                            className='hover:text-white ml-1 cursor-pointer'
                            title={t('projetos.removeFilter')}
                        >
                            ✕
                        </button>
                    </span>
                )}
            </div>

            {/* Container da Exibição Horizontal */}
            <div className='relative w-full max-w-7xl pointer-events-auto my-4 group/carousel'>
                {/* Botões de Rolagem Manual */}
                <button 
                    onClick={() => handleScroll('left')}
                    className='hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-gray-950/90 hover:bg-blue-600 text-white p-3.5 rounded-full border border-gray-800 shadow-2xl transition-all hover:scale-110 cursor-pointer items-center justify-center'
                    aria-label={t('projetos.scrollLeft')}
                >
                    ❮
                </button>
                <button 
                    onClick={() => handleScroll('right')}
                    className='hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-gray-950/90 hover:bg-blue-600 text-white p-3.5 rounded-full border border-gray-800 shadow-2xl transition-all hover:scale-110 cursor-pointer items-center justify-center'
                    aria-label={t('projetos.scrollRight')}
                >
                    ❯
                </button>

                {/* Esteira de Rolagem Horizontal */}
                <div 
                    ref={scrollContainerRef}
                    className='w-full overflow-x-auto no-scrollbar py-6 scroll-smooth'
                >
                    {filteredProjetos.length > 0 ? (
                        <div className='flex gap-6 px-16 min-w-full justify-center flex-nowrap py-2'>
                            {filteredProjetos.map((projeto) => (
                                <CardProjeto 
                                    key={projeto.id || projeto.name} 
                                    projeto={projeto} 
                                    onClick={() => setSelectedProjeto(projeto)}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className='text-center text-gray-400 py-12 w-full'>
                            {t('projetos.noResults')}
                        </div>
                    )}
                </div>
            </div>

            {/* Modal de Filtros */}
            <ModalFiltros 
                isOpen={isFilterModalOpen}
                onClose={() => setIsFilterModalOpen(false)}
                allTechs={allTechs}
                selectedTech={selectedTech}
                setSelectedTech={setSelectedTech}
                totalResults={filteredProjetos.length}
            />

            {/* Modal de Exibição Completa do Projeto */}
            {selectedProjeto && (
                <ModalProjeto 
                    projeto={selectedProjeto} 
                    onClose={() => setSelectedProjeto(null)} 
                />
            )}
        </section>
    );
};

export default Projetos;
