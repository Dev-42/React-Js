// code goes here
// do a default export
import React from 'react'

export default function Courses() {
  return (
    <div className='Courses'>
        <div className='partTime'>
            <h2>Full Time Courses</h2>
            <ol>
                <li>
                    fullstackwebdevelopment
                </li>
                <ul>
                    <li>eligibility:18-28yrs</li>
                    <li>Duration : 30 weeks</li>
                </ul>
            </ol>
        </div>
        <div className='partTime'>
            <h2>Part Time Courses</h2>
            <ol>
                <li>
                    Full Stack Web Development
                </li>
                <ul>
                    <li>Eligibility : 18-28yrs</li>
                    <li>Duration : 30 weeks</li>
                </ul>
                <li>
                    <h2>Data Analytics</h2>
                </li>
                <ul>
                    <li>Eligibility : 18-28yrs</li>
                    <li>Duration : 30 weeks</li>
                </ul>
            </ol>
        </div>
    </div>
  )
}

