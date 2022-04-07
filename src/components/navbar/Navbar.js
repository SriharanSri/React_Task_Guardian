import React from 'react';
import Styles from './Navbar.module.css'
import {useHistory} from "react-router-dom";


const Navbar = () => {
    const navigator = useHistory()
    return (
        <div className='headercontainerApp'>
            {/* <div className='header'>
                <h2 className={Styles.appName}>Guardian Task</h2>
            </div> */}
            <div className='subHeader' >
                <h3 className='headertext' style={{margin: "0 10px"}} onClick={()=>navigator.push("/")}>Go to Home</h3>     
                <h3 className='headertext' style={{margin: "0 10px"}}  onClick={()=>navigator.push("/MainFile")}>Search Posts</h3>
                <h3 className='headertext' style={{margin: "0 10px"}}  onClick={()=>navigator.push("/Discard")}>Dashboard</h3>
                <br></br>
                {/* <h3 style={{margin: "0 10px"}}  onClick={()=>navigator.push("/todo")}>Todo</h3> */}
            </div>
            

        </div>
    );
};


export default Navbar;


const bodyStyle ={
    padding: "0px",
    marginRight: "10px"
}