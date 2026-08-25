import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contato = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const response = await fetch('https://formspree.io/f/xkjwlbnp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    nome: formData.nome,
                    email: formData.email,
                    mensagem: formData.mensagem,
                    _replyto: formData.email
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ nome: '', email: '', mensagem: '' });
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 6000);
            } else {
                const data = await response.json();
                if (data && data.errors) {
                    setErrorMessage(data.errors.map((err) => err.message).join(', '));
                } else {
                    setErrorMessage(t('contato.defaultError'));
                }
            }
        } catch {
            setErrorMessage(t('contato.connError'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id='contato' className='relative z-10 min-h-screen w-full flex flex-col justify-center items-center px-4 py-20 gap-10 pointer-events-auto'>
            <div className='text-center max-w-2xl'>
                <h1 className='font-title font-bold text-6xl md:text-8xl text-white mb-4'>
                    {t('contato.title')}
                </h1>
                <p className='text-gray-400 text-sm md:text-base leading-relaxed'>
                    {t('contato.subtitle')}
                </p>
            </div>

            <div className='w-full max-w-2xl bg-gray-950/90 border border-gray-800 hover:border-blue-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md transition-all duration-300'>
                {isSubmitted ? (
                    <div className='flex flex-col items-center justify-center py-10 gap-4 text-center animate-fade-in'>
                        <FaCheckCircle className='text-emerald-400 text-6xl animate-bounce' />
                        <h2 className='text-2xl font-bold text-white font-title'>{t('contato.submittedTitle')}</h2>
                        <p className='text-gray-300 text-sm max-w-md'>
                            {t('contato.submittedMsg')}
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className='flex flex-col gap-6 text-left'>
                        {errorMessage && (
                            <div className='flex items-center gap-3 bg-red-950/60 border border-red-800/60 text-red-400 px-4 py-3 rounded-xl text-sm'>
                                <FaExclamationCircle className='text-lg shrink-0' />
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <div className='flex flex-col gap-2'>
                            <label htmlFor='nome' className='text-sm font-semibold text-gray-300 font-sans'>
                                {t('contato.labelName')}
                            </label>
                            <input
                                type='text'
                                id='nome'
                                name='nome'
                                required
                                value={formData.nome}
                                onChange={handleChange}
                                placeholder={t('contato.placeholderName')}
                                className='w-full bg-gray-900/90 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor='email' className='text-sm font-semibold text-gray-300 font-sans'>
                                {t('contato.labelEmail')}
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={t('contato.placeholderEmail')}
                                className='w-full bg-gray-900/90 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor='mensagem' className='text-sm font-semibold text-gray-300 font-sans'>
                                {t('contato.labelMessage')}
                            </label>
                            <textarea
                                id='mensagem'
                                name='mensagem'
                                required
                                rows={5}
                                value={formData.mensagem}
                                onChange={handleChange}
                                placeholder={t('contato.placeholderMessage')}
                                className='w-full bg-gray-900/90 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none'
                            />
                        </div>

                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='w-full mt-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50'
                        >
                            {isSubmitting ? (
                                <span className='animate-pulse'>{t('contato.sending')}</span>
                            ) : (
                                <>
                                    <span>{t('contato.sendBtn')}</span>
                                    <FaPaperPlane className='text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contato;
