import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ModalFiltros = ({ 
    isOpen, 
    onClose, 
    allTechs, 
    selectedTech, 
    setSelectedTech, 
    totalResults 
}) => {
    const { t } = useTranslation();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 pointer-events-auto animate-fadeIn"
            onClick={onClose}
        >
            <div 
                className="bg-gray-950 border border-gray-800 text-white rounded-2xl w-full max-w-lg p-6 shadow-2xl relative flex flex-col gap-6 border-blue-500/20"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Cabeçalho */}
                <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                        <h2 className="font-title font-bold text-2xl text-white">{t('projetos.filterTitle')}</h2>
                    </div>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-white bg-gray-900 hover:bg-gray-800 p-2 rounded-full transition-colors w-9 h-9 flex items-center justify-center font-bold cursor-pointer"
                        aria-label={t('projetos.close')}
                    >
                        ✕
                    </button>
                </div>

                {/* Seleção de Tecnologias */}
                <div className="flex flex-col gap-3">
                    <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                        {t('projetos.selectTech')}
                    </label>
                    <div className="flex flex-wrap gap-2.5 max-h-56 overflow-y-auto no-scrollbar p-1">
                        {allTechs.map((tech) => (
                            <button
                                key={tech}
                                onClick={() => setSelectedTech(tech)}
                                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                                    selectedTech === tech
                                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105'
                                        : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
                                }`}
                            >
                                {tech === 'Todos' ? t('projetos.allTechs') : tech}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Status de Resultados e Ações */}
                <div className="flex items-center justify-between border-t border-gray-800 pt-4 mt-2">
                    <span className="text-xs text-gray-400">
                        {t('projetos.projectCount', { count: totalResults })}
                    </span>

                    <div className="flex items-center gap-2">
                        {selectedTech !== 'Todos' && (
                            <button
                                onClick={() => setSelectedTech('Todos')}
                                className="text-xs text-gray-400 hover:text-white px-3 py-2 transition-colors cursor-pointer"
                            >
                                {t('projetos.reset')}
                            </button>
                        )}
                        <button 
                            onClick={onClose}
                            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2 rounded-xl transition-colors cursor-pointer"
                        >
                            {t('projetos.viewResults', { count: totalResults })}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalFiltros;
