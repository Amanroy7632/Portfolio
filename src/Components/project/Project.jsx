import React from 'react'
import { Link } from 'react-router-dom';
import ecom from './../images/ecom.png'
import weatherImg from './../images/weather.png'
import './project.css'
function Project() {
    const projects = [
        {
          id: 1,
          title: "E-Commerce",
          description: "Latest Project",
          image: ecom
          ,link:"https://e-commerce-caip-dm562z76a-amanroy7632s-projects.vercel.app"
        },
        {
          id: 2,
          title: "Weather App",
          description: "Description of Project 2",
          image: weatherImg
          ,link:"https://my-wather-app-ten.vercel.app/"
        },
        {
          id: 3,
          title: "Currency Convertor",
          description: "Description of Project 3",
          image: ""
          ,link:""
        },
        {
            id: 4,
            title: "Blog App",
            description: "Description of Project 3",
            image: ""
            ,link:""
          }
      ];
  return (
    <div className="projects-container">
    <h1>My Projects</h1>
    <div className="projects">
      {projects.map(project => (
        <div className="project" key={project.id}>
          {/* <img src={require(`${project.image}`).default}  alt={project.title} /> */}
       <Link to={project.link}> <img src={project.image}  alt={project.title} /> </Link>  
          <div className="project-info">
            <h2 className='title'>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Project
