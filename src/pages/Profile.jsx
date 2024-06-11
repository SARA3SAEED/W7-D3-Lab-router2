import React from 'react'
import Nav from '../components/Nav.jsx'


export default function Profile() {
  return (
    <>
    <Nav></Nav>
    <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
    <h2 className="card-title">JAVASCRIPT!</h2>
    <p>16 students</p>
    </div>
    <figure><img src="https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.jpg?b=1&s=612x612&w=0&k=20&c=kpQCCaxIActGQP9ToVrFN3qP55MMXA4Sdnomymdr_64=" alt="" /></figure>
    </div>
    </>
  )
}
