import React from 'react'

const WorksItems = ({item}) => {
  return (
  <div className="work__card" key={item.id}>
    <img src={item.image} alt="" className="work__img"></img>
    <h3 className="work__title">{item.title}</h3>
   <div className='work__button__flex'>
   <a href={item.demo_link} className="work__button" target="_blank" rel="noreferrer noopener" >
    Demo <i className="bx bx-right-arrow-alt work__button-icon"></i></a>
    <a href={item.gitFE} className="work__button__1" target="_blank" rel="noreferrer noopener">
    FECode<i className="bx bx-right-arrow-alt work__button-icons1"></i> </a>
    <a href={item.gitBE} className="work__button" target="_blank" rel="noreferrer noopener">
    <i className="bx bx-left-arrow-alt work__button-icons"></i>BECode</a>
   </div>
  </div>
  )
}

export default WorksItems