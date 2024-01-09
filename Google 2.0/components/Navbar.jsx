import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<div className="p-5 flex flex-wrap pb-0 sm:justify-center">
<div className="flex justify-center items-center">
  <Link to='/'>
    <p className='text-2xl '>
      Goggl 🔍
    </p>
  </Link>
</div>

</div>

    )
}

export default Navbar