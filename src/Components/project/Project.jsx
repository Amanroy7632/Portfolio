import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import studentImg from "./../images/student.png"
import {connect,ecom,bus,weatherImg ,journalistImg,healthImg,expenseimg} from "./../images/index.js"
import './project.css'
function Project() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce",
      description: "A full stack web application for ecommerce similar to myntra.",
      image: ecom
      ,link:"https://e-commerce-caip.vercel.app/",
      techUsed:"JavaScript React js , Tailwind CSS",
      isNew:true
    },
    {
      id: 11,
      title: "Book My-Adventure",
      description: "A full stack web application for booking the tickets of buses online similar to make-my-trip.",
      image: bus
      ,link:"https://book-my-adventure.vercel.app/",
      techUsed:"JavaScript React js , Tailwind CSS,Node js, Express js and MongoDb",
      isNew:true
    },
    {
      id: 2,
      title: "Weather App",
      description: "Description of Project 2",
      image: weatherImg
      ,link:"https://my-wather-app-ten.vercel.app/",
      techUsed:"React js Tailwind CSS",
      isNew:true
    },
    {
      id: 22,
      title: "Connect - 4 Dots",
      description: "A 4 x 4 dot connecting game of two player .",
      image: connect
      ,link:"https://connect-4-dots.vercel.app/",
      techUsed:"React js Tailwind CSS",
      isNew:true
    },
    {
      id: 3,
      title: "Journalist Website",
      description: "A full flesh frontend website for a ex-journalist which started teaching using this website.",
      image: journalistImg
      ,link:"https://journalist-react-app.vercel.app/",
      techUsed:"React js , Tailwind CSS",
      isNew:true
    },
    {
        id: 4,
        title: "Expense Tracker",
        description: "A user friendly web based expense tracker application which provides the ability to manage expense tracking for customers.",
        image: expenseimg
        ,link:"https://amanroy7632.github.io/CodeAlpha-Intern-project/ExpenseTrackerApp/",
        techUsed:"HTML, CSS, JavaScript",
        isNew:false
      },
      {
        id:5,
        title:"Health Coach App",
        description:"An Application where a health coach guides you to eat healthy foods and stay fit and wealthy in your life.",
        image:healthImg,
        link:"https://health-coach-qlx3i271f-amanroy7632s-projects.vercel.app/",
        techUsed:"HTML, CSS, JavaScript",
        isNew:false
      },
      {
        id:6,
        title:"Student Database Management",
        description:"An Application where a student can login and access their results assignments and see their attendence . It is managed by an administrator of the College.",
        image:studentImg,
        link:"https://github.com/Amanroy7632/Student-Database-System/",
        techUsed:"C++",
        isNew:false
      }
  ];
  const [name,setName]=useState("")
  const [data,setData]=useState([])
  useEffect(()=>{
    // console.log(name);
    if(!name){
      setData(projects)
    }else if(name==="latest"){

      setData(projects.filter((item)=>item.isNew))
    }
     else{
       setData(projects.filter((item)=>item.techUsed.includes(name)))

     }
  //  const setRef= setTimeout(() => {  
  //     }, 1000);
  //     return ()=>{
  //       clearTimeout(setRef)
  //     }
  },[name])
  const handleChange=(e)=>{
    setName(e.target.value)
  }
    
  return (
    <div className="projects-container">
    <h1 className='heading mb-10 font-semibold'><span className='span-color'>My </span>Projects</h1>
    <select name="" id="" className=' relative pb-2 rounded-l-md top-0 left-0 bg-transparent dark:bg-[#323946]' onChange={handleChange}>
      <option value="">Filter out</option>
      <option value="latest">Latest</option>
      <option value="React">React js</option>
      <option value="HTML">HTML,CSS</option>
      <option value="C++">C++</option>
    </select>
    <div className="projects">
      {data.map(project => (
        <div className="project dark:bg-[#323946]" key={project.id}>
          {/* <img src={require(`${project.image}`).default}  alt={project.title} /> */}
       <Link to={project.link}> <img src={project.image}  alt={project.title} /> </Link>  
          <div className="project-info">
            <h2 className='title'>{project.title}</h2>
            <p>{project.description}</p>
            <p>Tech Used: {project.techUsed}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Project
