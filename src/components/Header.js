import React, { useState, useEffect } from 'react';

import headerStyles from './styling/header.module.scss';
import logoWhite from './images/logoWhite.png';

function useWindowSize() {    
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      
      window.addEventListener("resize", handleResize);
      
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []); 
  
    return windowSize;
}

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [show, setShow] = useState(false);
    const size = useWindowSize();

    useEffect(() => {
        if(typeof window !== 'undefined') {
            if(
                typeof window !== 'undefined' &&
                typeof window.addEventListener !== 'undefined'
            ) {
                window.addEventListener('scroll', scrolling);
            }
        }
    });

    const scrolling = () => {
        window.scrollY > 0 ? setScroll(true) : setScroll(false) ;
    };

    return (
        <nav className={headerStyles.header}>
            <div className={headerStyles.inner_header}>
                <a href="#"><img src={logoWhite} alt="white header logo"/></a>
                <button onClick={() => setShow(!show)} className={headerStyles.hamburger}>
                    <i className="fas fa-bars"></i>
                </button>
                <ul className={`${show && size.width < 620 ? headerStyles.show : headerStyles.header_anchors}`}>
                    <li><a href='#projects' rel="noopener noreferrer">Projects</a></li>
                    <li><a href='#about'rel="noopener noreferrer">About</a></li>
                    <li><a href='https://github.com/alecbrando' target='_blank' rel="noopener noreferrer">GitHub</a></li>
                </ul>
            </div>
            <a href="/#">
                <i className={`${headerStyles.message} fas fa-long-arrow-alt-up ${scroll ? headerStyles.active : ''}`}></i>
            </a>
        </nav>
    );
}

export default Header;