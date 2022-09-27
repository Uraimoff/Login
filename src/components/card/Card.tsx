import "./style.css";

interface types {
  title: any,
  txt: any,
  text: any
}

const Card=({title, txt, text}: types)=> {
  return (
    <>
    <div className='globalContainer'>

     <div className='card'>
        <div className='card_image'><img src="https://picsum.photos/300/200" alt="assd" /></div>
        <div className='card_txt'>
            <div className='card_title'>{title}</div>
            <p className='card_p'>{txt}</p>
            <p>{text}</p>
        </div>
        <button>View more</button>
     </div>
    </div>
    </>
  )
}

export default Card