// Your code goes here
// do a default export
import React from 'react'
// import './usercard.css'
export default function UserCard(props) {
  let style = {
    borderRadius:"50%"
  }
  return (
    <div className='UserCard'>
        <div className='imgContent'>
            <img src={props.avatar} style={style} alt="Alf" />
        </div>
        <div className='mainBody'>
            <h2 data-testid = 'user_name'>{props.name}</h2>
            <p data-testid = 'user_address'>{props.address}</p>
            <h3>Posts</h3>
            <p><span data-testid='user_posts'>{props.posts}</span></p>
            <h3>Followers</h3>
            <p data-testid = 'user_followers'>{props.followers}</p>
        </div>
        <div className="userBtn">
            <button id='btn'>following</button>
        </div>
        <div>

        </div>

    </div>
  )
}

