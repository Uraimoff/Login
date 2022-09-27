import React from 'react'
import "./Calc.css"
import { useState } from "react"
import { Interface } from 'readline'



function Calc() {
    const [count, setCount] = useState(1)
    const [counts, setCounts] = useState(1)
    const [price, setPrice] = useState(120)
    const [prices, setPrices] = useState(150)
    const onClickPlus=()=>{
        
        setCount( count + 1)
    }
    const onClickPluss=()=>{
        
        setCounts(counts + 1)
    }
    const onClickMinus=()=>{
        if(count===1){
            return count
        }
        setCount( count - 1)
    }
    const onClickMinuss=()=>{
        if(counts===1){
            return counts
        }
        setCounts(counts - 1)
    }
    const total=()=>{
        return price * count
    }
    const totals=()=>{
        return prices * counts
    }

  return (
    <>
    <div className='calc'>
        <div className='display'>
        <div>
            <div>{price}</div>
        </div>
        <div>
        <div className='veriable'>{count}</div>
        <div className='buttons'>
            <button onClick={()=>onClickPlus()} className='add'>Plus</button>
            <button onClick={()=>onClickMinus()} className='remove'>Minus</button>
        </div>
        </div>
        <div>
            <div>{total()}</div>
        </div>
        </div>
        {/* <iframe src='https://my.mail.ru/video/embed/9196199513939771771' width='626' height='367' frameBorder='0' scrolling='no' allowFullScreen  ></iframe> */}
    </div>

    <div className='calc'>
        <div className='display'>
        <div>
            <div>{prices}</div>
        </div>
        <div>
        <div className='veriable'>{counts}</div>
        <div className='buttons'>
            <button onClick={onClickPluss} className='add'>Plus</button>
            <button onClick={onClickMinuss} className='remove'>Minus</button>
        </div>
        </div>
        <div>
            <div>{totals()}</div>
        </div>
        </div>
        {/* <iframe src='https://my.mail.ru/video/embed/9196199513939771771' width='626' height='367' frameBorder='0' scrolling='no' allowFullScreen  ></iframe> */}
    </div>
    </>
  )
}

export default Calc