import React from 'react'
import Card from './card'
import { useRef } from 'react';
function Foreground() {
    const ref = useRef(null);
    const data=[
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize: ".9mb",
            close: false,
            tag:{isOpen:true, tagTitle:"Download Now!", tagColor:"blue"}
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize: ".9mb",
            close: false,
            tag:{isOpen:true, tagTitle:"Download Now!", tagColor:"green"}
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize: ".9mb",
            close: false,
            tag:{isOpen:true, tagTitle:"Download Now!", tagColor:"green"}
        }
    ]
  return (
      <div ref = {ref} className='absolute z-[3] top-10 left-0 h-screen w-full flex gap-5 flex-wrap'>
       {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
       ))}
       </div>
  )
}

export default Foreground
