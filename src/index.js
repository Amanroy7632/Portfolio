import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route,RouterProvider,createBrowserRouter,createRoutesFromChildren } from 'react-router-dom';
import Layout from './Layout.js';
import Home from './Components/home/Home.js';
import Service from './Components/service/Service.jsx';
import About from './Components/about/About.jsx';
import Project from './Components/project/Project.jsx';
import Github from './Components/github/Github.jsx';
import Skills from './Components/skills/Skills.jsx';
import Contact from './Components/contact/Contact.jsx';
const router=createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/'  element={<Layout/>} >
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Service/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/github' element={<Github/>} />
      <Route path='/skill' element={<Skills/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<div className=' bg-black'>Page Not Found</div>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
