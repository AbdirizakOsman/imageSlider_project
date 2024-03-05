import React, { useState } from 'react'

function Header() {
    const [isopen, setisopen] = useState(false)

    const handleopen = () =>{
        setisopen(true)
    }
    const handleclose = () => {
        setisopen(false)
    }
  return (
    <div>
        <div className='bg-red-300 py-5 flex justify-between text-white'>
        <h1 className='text-5xl font-bold ml-5'>Tasbih</h1>
        <i style={{display: isopen == true ? "none" : " "}} onClick={handleopen} class="fa-solid fa-bars text-5xl sm:hidden mr-5"></i>
        <i onClick={handleclose} style={{display: isopen == true ? 'block' : "none"}}  class="fa-solid fa-x text-5xl mr-5"></i>
        <ul className='hidden sm:flex gap-16 text-3xl'>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Blogs</li>
        </ul>
    </div>

    <ul style={{display: isopen==true ? "flex" : "" }} className='hidden bg-orange-400 text-white flex-col space-y-5 p-2  absolute w-full  text-3xl'>
            <li className=' hover:bg-black'>Home</li>
            <li className=' hover:bg-black'>About</li>
            <li className=' hover:bg-black'>Service</li>
            <li className=' hover:bg-black'>Blogs</li>
        </ul>

    </div>

   
  )
}

export default Header