import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Pratheesh</h1>
        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>
            <li>
                <a href="#portfolio" className="footer__link">Projects</a>
            </li>
            <li>
                <a href="#home" className="footer__link">Home</a>
                
            </li>
        </ul>
        <div className="footer__social">
                <a href='https://www.instagram.com/ratheesh.raj.7583/' className='footer__social-link' target="_blank">
        <i class="uil uil-instagram"></i>
        </a>
        <a href='https://github.com/pratheeshraj' className='footer__social-link' target="_blank">
        <i class="uil uil-github-alt"></i>
        </a>
        <a href='https://www.linkedin.com/in/rajesh-nsk-63b503258/' className='footer__social-link' target="_blank">
        <i class="uil uil-linkedin-alt"></i>
        </a>
                </div>
                <span className='Footer_word'>@Made with ❤️ by Pratheesh N</span>
    </div>
   </footer>
  )
}

export default Footer