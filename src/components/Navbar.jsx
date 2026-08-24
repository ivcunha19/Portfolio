import React from 'react'
import MenuLang from './Menulang'

const Navbar = () => {
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
                <a className="inline-block relative hover:scale-125 transition cursor-pointer" href="#sobre" onClick={(e) => handleScroll(e, 'sobre')}>Sobre mim </a>
                <a className="inline-block relative hover:scale-125 transition cursor-pointer" href="#projetos" onClick={(e) => handleScroll(e, 'projetos')}>Projetos </a>
                <a className="inline-block relative hover:scale-125 transition cursor-pointer" href="#experiencias" onClick={(e) => handleScroll(e, 'experiencias')}>Experiências </a>
                <a className="inline-block relative hover:scale-125 transition cursor-pointer" href="#contato" onClick={(e) => handleScroll(e, 'contato')}>Contato </a>
            </div>
            <div className='col-start-3'>
                <div className="linguagensContainer" id="linguagensContainer">
                    <MenuLang></MenuLang>
                </div>
            </div>
        </header>
    </div>
    )
}

export default Navbar

