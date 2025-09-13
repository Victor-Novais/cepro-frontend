import React from 'react';
import './Header.css';
// npm install react-icons (to use icons)
import { FaPhoneAlt } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';


interface HeaderProps {
  userName?: string; 
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="header-container">
      
      <div className="top-bar">
        <div className="top-bar-left">
        <a href="/" className="home">Home</a>
        <a href="#">Buscar Vagas</a>
        <a href="#">Minhas Inscrições</a>
        <a href="#">Notificações</a>
        <a href="#">Meu Perfil</a>
        <a href="#">Suporte ao aluno</a>
        </div>

        <div className="contact-info">
              <FaPhoneAlt />
              <span>+55 (71) ****-****</span>
              <img src="/src/assets/us-flag.png" alt="Language" className="flag-icon" />
              <span>English</span>
            </div>
      </div>

      <nav className="main-nav">
        
        <div className="nav-left">
          <img src="/src/assets/cepro.png" alt="CEPRO Logo" className="logo" />
        </div>

        <div className="nav-center">
            <div className="search-bar">
                <IoSearch className="search-icon" />
                <input type="text" placeholder="Título da Vaga, Palavra-chave, Empresa" />
            </div>
        </div>

        <div className="nav-right">
            <div className="auth-buttons">
              {userName ? (
                <span className="welcome-message">Olá, {userName}</span>
              ) : (
                <>
                  <button className="btn-signin">Sign In</button>
                  <button className="btn-signup">Sign Up</button>
                </>
              )}
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;