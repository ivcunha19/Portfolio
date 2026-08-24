import React from 'react'
import MenuLang from './Menulang'

const Navbar = () => {
    return (
    <div>
        <header className='relative scroll-smooth z-10 grid pointer-events-auto grid-cols-3 p-4 text-white'>
            <div className='col-start-2 justify-self-center flex gap-8'>
                <a className="inline-block relative hover:scale-125 transition" href="#sobre">Sobre mim </a>
                <a className="inline-block relative hover:scale-125 transition" href="#projetos">Projetos </a>
                <a className="inline-block relative hover:scale-125 transition" href="#experiencias">Experiências </a>
                <a className="inline-block relative hover:scale-125 transition" href="#contato">Contato </a>
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
