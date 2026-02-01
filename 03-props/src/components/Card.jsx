import React from 'react'

const Card = (props) => {    
  return (
    <div>
        <div className="card">
            <img src = {props.image} alt = "Profile Picture" />
            <h1>{props.user},{props.age}</h1>
            <p>This is my first react app</p>
            <button>View Profile</button>
        </div>
    </div>
  )
}

export default Card