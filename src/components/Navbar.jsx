import React from 'react'
import MenuLang from './Menulang'

const Navbar = () => {
    return (
    <div>
        <header className='grid grid-cols-3 p-4 text-white'>
            <div className='col-start-2 justify-self-center flex gap-8'>
                <a class="inline-block relative after:content-[''] after:absolute after:bottom-12 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:scale-125 transition" href="#sobreMim">Sobre mim </a>
                <a href="#projetos">Projetos </a>
                <a href="#experiencias">Experiências </a>
                <a href="#contato">Contato </a>
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
