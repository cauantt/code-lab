import React from 'react';
import './Header.css'; 
import Logo from '../header/Logo';
import Search from '../header/Search';

function Header() {
  return (
        <header className='header'>
           <Logo />
           <Search type="text" placeholder="Pesquisar no blog"/>

        </header>
  );
}

export default Header;
