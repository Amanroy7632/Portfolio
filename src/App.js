// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import data from './navbarData';
import iconData from './iconData';
import servicesData from './servicesData';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';

function App() {
  const [navDatas] = useState(data);
  const [iconDatas] = useState(iconData);
  const [servicesDatas]=useState(servicesData);
  const[check,setCheck]=useState([{id:1,entry:false},{id:2,entry:false},{id:3,entry:false},{id:4,entry:false}]);
  let num=0;
  function getId(id_no){
    console.log("Hello I am Working",id_no);
    if(id_no==2){
    }
    num=id_no;
    return id_no;
    // setCheck(check.filter((e)={
    //    return e!==id_no
    // }));
  }
  return (
    // <div>
    <Router>
    <Header navDatas={navDatas} getId={getId}>
    </Header>
    <Routes>
    <Route  path="/" element={<Home iconDatas={iconDatas}/>}/>

    <Route exact path='/about'  element={<About/>}/>
    <Route exact path='/services' element={<Services servicesDatas={servicesDatas}/>}/>
    <Route></Route>
    </Routes>
    
     {/* <About className="about-selected"/>
     <Services servicesDatas={servicesDatas}/> */}
    


    </Router>
    // </div>
  );
}

export default App;
