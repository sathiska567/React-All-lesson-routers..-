import React from 'react'
import "./TopicBox.css"

export default function Main(props) {

  return (
    <div>
      <div className="topicBox">
         <span className='text'>
            <p>My favourite food is {props.food} the price is {props.price}</p>
            {props.children}
         </span>


      </div>
    </div>
  )
}
