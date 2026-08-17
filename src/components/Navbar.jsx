import React from 'react'

const Navbar = () => {
    return (
    <div>
        <header class=''>
            <a href="#sobreMim">Sobre mim</a>
            <a href="#projetos">Projetos</a>
            <a href="#experiencias">Experiências</a>
            <a href="#contato">Contato</a>
            <div class="linguagensContainer" id="linguagensContainer">
            <button class="dropdown-btn" id="dropdownBtn">PT-BR</button>
                <div class="linguagensMenu" id="linguagensMenu">
                    <div class="itemLingugagens"><button onclick="alterarLinguagem('port')">PT-BR</button></div>
                    <div class="itemLingugagens"><button onclick="alterarLinguagem('eng')">ENG</button></div>
                </div>
            </div>
        </header>
    </div>
    )
}

export default Navbar
