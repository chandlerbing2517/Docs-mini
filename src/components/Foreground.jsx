import React from 'react'
import Card from './card'
function Foreground() {
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
      <div className='absolute z-[3] top-0 left-0 h-screen w-full flex gap-5 flex-wrap'>
       {data.map((item,index)=>(
        <Card data={item}/>
       ))}
       </div>
  )
}

export default Foreground
