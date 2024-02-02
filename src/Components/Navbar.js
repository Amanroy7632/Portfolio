import Item from "./Item";
// import {NavLink} from 'react-router'
function Navbar({navDatas}){
    
    return (
        <div className="navbar">
            { 
                navDatas.map((navData)=>{
                    return <Item {...navData}></Item>;
                  })
            }        
        </div>
    );
}
export default Navbar;