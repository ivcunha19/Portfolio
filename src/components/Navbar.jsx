import React from 'react'
import { useTranslation } from 'react-i18next'
import MenuLang from './Menulang'

const Navbar = () => {
    const { t } = useTranslation();

    const handleScroll = (e, id) => {
        e.preventDefault();
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <header className='relative z-10 grid pointer-events-auto grid-cols-3 p-4 text-white'>
                <div className='col-start-2 justify-self-center flex gap-8'>
                    <a className="inline-block relative hover:scale-125 transition cursor-pointer" href="#sobre" onClick={(e) => handleScroll(e, 'sobre')}>{t('nav.sobre')}</a>
                    <a className="inline-block relative hover:scale-125 transition cursor-pointer" href="#projetos" onClick={(e) => handleScroll(e, 'projetos')}>{t('nav.projetos')}</a>
                    <a className="inline-block relative hover:scale-125 transition cursor-pointer" href="#experiencias" onClick={(e) => handleScroll(e, 'experiencias')}>{t('nav.experiencias')}</a>
                    <a className="inline-block relative hover:scale-125 transition cursor-pointer" href="#contato" onClick={(e) => handleScroll(e, 'contato')}>{t('nav.contato')}</a>
                </div>
                <div className='col-start-3'>
                    <div className="linguagensContainer" id="linguagensContainer">
                        <MenuLang />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
