

import React from 'react'
import Profile from '../pages/Profile.jsx'

export default function Nav() {
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a href='/' className="btn btn-ghost text-xl">BootCamp</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/Profile'>Details</a></li>
      <li><a href='/Login'>Login</a></li>
    </ul>
  </div>
</div>
  )
}
