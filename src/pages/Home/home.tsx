import React from 'react'
import Card from '../../components/card/Card'
import Login from '../../components/login/Login'
import Navbar from '../../components/navbar/navbar'
import videoBg from '../../assets/videoBg.mp4'
import "./style.css"
import Modall from '../../components/modal/Modal'
import Calc from '../../components/Calc/Calc'
import Result from '../../components/Calc/Result/Result'

function home() {

  
  return (
    <>
    <div >
      <video id="myVideo" autoPlay loop muted src={videoBg}/>
    </div>
  
  
    <div className='Cards globalContainer'>
    <Navbar/>
        <div className='cards globalContainer'>
        <Card title={"asdas"} txt={"asdsadasdasdasd"} text={"asadwdcsdfdsfcscecfe"}/>
        <Card title={"asdas"} txt={"asdsadasdasdasd"} text={"asadwdcsdfdsfcscecfe"}/>
        <Card title={"asdas"} txt={"asdsadasdasdasd"} text={"asadwdcsdfdsfcscecfe"}/>
        <Card title={"asdas"} txt={"asdsadasdasdasd"} text={"asadwdcsdfdsfcscecfe"}/>
        </div>
        <Calc/>
        <Result/>
        
    </div>

    </>
  )
}

export default home