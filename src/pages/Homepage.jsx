import Nav from '../components/Nav.jsx'


import React from 'react'

export default function Homepage() {
  return (
    <>
    <Nav></Nav>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Bootcamp Twuaiq Academy</h1>
        <p className="py-6">JavaScript.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  </>
  )
}
