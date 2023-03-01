import React, { useEffect, useState } from 'react'
import { projectNav, projectsData } from './Data'
import WorksItems from './WorksItems'

const Work = () => {
  const [item,setitem]=useState({name:"all"})
  const [projects,setProjects]=useState([])
  const [active,setactive]=useState(0)

  useEffect(()=>{
    if(item.name==="all"){
      setProjects(projectsData)
    }
    else{
      const newProjects=projectsData.filter((project)=>{
        return project.category===item.name
      })
      setProjects(newProjects)
    }
  },[item])

const handleClick= (e,index)=>{
  setitem({name:e.target.textContent})
  setactive(index)
}
  return (
<div>
<div className="work__filters">
    {projectNav.map((item,index)=>{
      return(
        <span onClick={(e)=>{
          handleClick(e,index);
        }} className={`${active === index ?'active-work': "" } work__item`} 
        key={index}>{item.name}</span>

      )
    })}
   </div>
  <div className="work__container container grid ">
    {projects.map((item)=>{
return <WorksItems item={item} key={item.id}/>
    })}
  </div>
</div>
  )
}

export default Work