import React, { useState } from 'react'
import "./header.css"
const Header = () => {
    // changing backgound header
    window.addEventListener("scroll",function(){
        const header=document.querySelector(".header");
        if(this.scrollY >=80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
    })
    const [Toggle,showMenu]=useState(false)
const[activeBar,setActiveBar]=useState("#home")
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href='index.html' className='nav__logo'>Pratheesh</a>

            <div className={Toggle ? "nav__menu show-menu" :"nav__menu" }>
                <ul className='nav__list grid'>
                    <li className='nav__item'>
                        <a href='#home'
                         onClick={()=>setActiveBar("#home")}
                        className={activeBar=== "#home" ?"nav__link active-link":"nav__link"}>
                            <i className='uil uil-estate nav__icon'></i>
                        Home</a>
                    </li>
                
                    <li className='nav__item'>
                        <a  onClick={()=>setActiveBar("#skills")}
                        className={activeBar=== "#skills" ?"nav__link active-link":"nav__link"} href='#skills'>
                            <i className='uil uil-file-alt nav__icon'></i>Skills
                        </a>
                    </li> 
                    <li className='nav__item'>
                        <a  onClick={()=>setActiveBar("#portfolio")}
                        className={activeBar=== "#portfolio" ?"nav__link active-link":"nav__link"} href='#portfolio'>
                            <i className='uil uil-scenery nav__icon'></i>Portfolio
                        </a>
                    </li>  <li className='nav__item'>
                        <a  onClick={()=>setActiveBar("#contact")}
                        className={activeBar=== "#contact" ?"nav__link active-link":"nav__link"} href='#contact'>
                            <i className='uil uil-message nav__icon'></i>Contact
                        </a>
                    </li>
                </ul>
                <i className='uil uil-times nav__close 'onClick={()=>showMenu(!Toggle)}></i>
            </div>
            <div className='nav__toggle' onClick={()=>showMenu(!Toggle)}>
                <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header>
  )
}

export default Header