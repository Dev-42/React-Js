// Your code goes here
// do a deafult export
import React from 'react'
// import './title.css'
export default function Title() {
  let style = {
      color:'teal'
  }
  return (
    <div className='Title'>
        <h1 style={style}>Users Display</h1>
    </div>
  )
}


