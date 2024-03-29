import React from 'react'
import { Link } from 'react-router-dom';
import ecom from './../images/ecom.png'
import weatherImg from './../images/weather.png'
import journalistImg from './../images/journalist.png'
import expenseimg from './../images/expense.png'
import healthImg from './../images/healthcoach.png'
import './project.css'
function Project() {
    const projects = [
        {
          id: 1,
          title: "E-Commerce",
          description: "Latest Project",
          image: ecom
          ,link:"https://e-commerce-caip-iy1eb02xy-amanroy7632s-projects.vercel.app/"
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
          title: "Journalist Website",
          description: "A full flesh frontend website for a ex-journalist which started teaching using this website.",
          image: journalistImg
          ,link:"https://journalist-react-app.vercel.app/"
        },
        {
            id: 4,
            title: "Expense Tracker",
            description: "A user friendly web based expense tracker application which provides the ability to manage expense tracking for customers.",
            image: expenseimg
            ,link:"https://amanroy7632.github.io/CodeAlpha-Intern-project/ExpenseTrackerApp/"
          },
          {
            id:5,
            title:"Health Coach App",
            description:"An Application where a health coach guides you to eat healthy foods and stay fit and wealthy in your life.",
            image:healthImg,
            link:"https://health-coach-qlx3i271f-amanroy7632s-projects.vercel.app/"
          }
      ];
  return (
    <div className="projects-container">
    <h1 className='heading mb-10 font-semibold'><span className='span-color'>My </span>Projects</h1>
    <div className="projects">
      {projects.map(project => (
        <div className="project dark:bg-[#323946]" key={project.id}>
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
