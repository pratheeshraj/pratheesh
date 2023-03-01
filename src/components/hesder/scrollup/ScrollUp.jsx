import React from 'react'
import "./scrollup.css"
const ScrollUp = () => {
    window.addEventListener("scroll",function(){
        const scrollup=document.querySelector(".scrollup");
        if(this.scrollY >=560) scrollup.classList.add("show-scrollup")
        else scrollup.classList.remove("show-scrollup")
    })
  return (
   <a href="#" className="scrollup">
    <i className="uil uil-arrow-up scrollup__icon"></i>
   </a>
  )
}

export default ScrollUp