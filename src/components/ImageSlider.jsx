import {React,  useState } from 'react'

function ImageSlider() {
    const [index,setindex] = useState(0)

    const handleNext =() =>{

        if(index < images.length -1){
            setindex(index +1)
        }
       
        
    }

    const handleprev = () =>{
        if(index > 0){
          setindex(index -1)
        }
        
    }

    const images = [
        "https://img.freepik.com/free-photo/new-york-city_649448-1679.jpg?t=st=1709551380~exp=1709554980~hmac=3c63c8393d457370169fefbb5d0bcc03dbfb141f5abda83a47c1568f9d81d973&w=900",
        "https://img.freepik.com/free-photo/skyline-downtown-new-york-new-york-usa_268835-773.jpg?t=st=1709552188~exp=1709555788~hmac=69c5a2db7f94a855d57f7435cfc6eeab5a28f0506c1e774e77ad7947badb2b3e&w=900",
        "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?w=900",
        "https://img.freepik.com/free-photo/sunset-manhattan_1368-6223.jpg?t=st=1709553785~exp=1709557385~hmac=b5efea8f2b94e1b42dbd1384f577bcd228f75cc9ce6d759db590e9f03213bb46&w=900"
    ]
  return (
    <div className='text-center mt-16'>
        <img  className='w-[800px] ml-[400px] rounded' src={images[index]} />
        <button onClick={handleNext} className='bg-orange-500 text-3xl px-4 py-3 rounded text-white mt-5'>Next</button>
        <button onClick={handleprev} className='bg-orange-500 text-3xl px-4 py-3 rounded text-white ml-4'>Prev</button>
    </div>

    
  )
}

export default ImageSlider