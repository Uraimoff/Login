import { Button } from 'antd';
import React, {useState} from 'react'
import {Link } from "react-router-dom";
import Login from '../login/Login'
import Modall from '../modal/Modal'
import "./style.css"


function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
    <div className='Home_header globalContainer'>
        <ul className="header_ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Info">Info</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <button  onClick={()=> setVisible(true)}>
            Login
          </button>
            {visible ? <Modall children={<Login setVisible={setVisible}/>}  /> : null}

    </div>
    </>
  )
}

export default Navbar