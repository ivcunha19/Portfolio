import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ModalProjeto = ({ projeto, onClose }) => {
    const { t } = useTranslation();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!projeto) return null;

    const { id, name, imagem, Tecnologias, Descricao, DescricaoEstendida } = projeto;

    const translatedName = id ? t(`projetos.items.${id}.name`, { defaultValue: name }) : name;
    const translatedDesc = id ? t(`projetos.items.${id}.descricao`, { defaultValue: Descricao }) : Descricao;
    const translatedFullDesc = id ? t(`projetos.items.${id}.descricaoEstendida`, { defaultValue: DescricaoEstendida }) : DescricaoEstendida;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 pointer-events-auto animate-fadeIn"
            onClick={onClose}
        >
            <div 
                className="bg-gray-950 border border-gray-800 text-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative flex flex-col gap-5 border-blue-500/20"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botão de Fechar */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-900 hover:bg-gray-800 p-2 rounded-full transition-colors w-10 h-10 flex items-center justify-center text-xl font-bold cursor-pointer"
                    aria-label={t('projetos.close')}
                >
                    ✕
                </button>

                {/* Imagem / Placeholder no Modal */}
                <div className="w-full h-64 bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center border border-gray-800 mt-2">
                    {imagem ? (
                        <img 
                            src={imagem} 
                            alt={translatedName} 
                            className="w-full h-full object-cover rounded-xl"
                        />
                    ) : (
                        <div className="flex flex-col items-center gap-3 text-gray-500 p-6 text-center">
                            <svg className="w-12 h-12 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span className="text-sm font-medium uppercase tracking-wider">{t('projetos.modalImageSpace')}</span>
                        </div>
                    )}
                </div>

                {/* Título e Tecnologias */}
                <div>
                    <h2 className="font-title font-bold text-3xl md:text-4xl text-white mb-3">
                        {translatedName}
                    </h2>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                        {Tecnologias && Tecnologias.map((tech, index) => (
                            <span 
                                key={index}
                                className="bg-blue-950/80 text-blue-300 text-xs px-3 py-1 rounded-md border border-blue-800/50 font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Resumo */}
                <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-800">
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">{t('projetos.summary')}</h4>
                    <p className="text-gray-200 text-base leading-relaxed">
                        {translatedDesc}
                    </p>
                </div>

                {/* Descrição Detalhada / Estendida */}
                {translatedFullDesc && (
                    <div className="bg-blue-950/20 p-5 rounded-xl border border-blue-900/40">
                        <h4 className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">{t('projetos.fullDescription')}</h4>
                        <p className="text-gray-200 text-sm md:text-base leading-relaxed whitespace-pre-line">
                            {translatedFullDesc}
                        </p>
                    </div>
                )}

                {/* Rodapé com botão de fechar */}
                <div className="mt-2 flex justify-end">
                    <button 
                        onClick={onClose}
                        className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                        {t('projetos.close')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalProjeto;
