import React from 'react'

export default function Movies({title, imageUri}) {
 //console.log(imageUri)
  return (
    <div className='border grid grid-cols-1 h-full hover:bg-green-400'>
        <div className='bg-blue-800 w-full'>
            <img src={imageUri} alt='' className='object-cover w-full h-full'/>    
        </div>  
        <div classname='p-4'>
            <h2 className='font-bold text-l'>{title}</h2>
        </div>      
    </div>
  )
}
