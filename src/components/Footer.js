import React from 'react';

import footerStyles from './styling/footer.module.scss';
import logoWhite from './images/logoWhite.png';

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.inner_footer}>
                <img src={logoWhite} alt="white logo"/>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/alec-garcia-4159b0169/" target='_blank' rel="noreferrer">LinkedIn</a>

                    </li>
                    <li>
                        <a href="https://angel.co/u/alec-garcia-5" target='_blank' rel="noreferrer">AngelList</a>
                    </li>
                    <li>
                        <a href="https://github.com/alecbrando" target='_blank' rel="noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/AG153/" target='_blank' rel="noreferrer">Facebook</a>
                    </li>
                </ul>
                <p>@ 2020 Alec Garcia - Have a wonderful Day!</p>
            </div>
        </div>
    );
}

export default Footer;