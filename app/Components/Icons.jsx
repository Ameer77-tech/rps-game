import React from 'react'




const Icons = (props) => {
 
  return (
    <div className="bg-white h-25 w-25 rounded-full  overflow-hidden p-3 cursor-pointer hover:opacity-80" onClick={props.onClick}>
      <img src={props.icon}className='object-cover object-top h-full w-full'/>
      
    </div>
  )
}

export default Icons