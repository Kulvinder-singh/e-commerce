import React, { useEffect, useState } from 'react'

function Child({setData}) {
const [item1,setItam1] = useState('')
const [item2,setItam2] = useState('')


    useEffect(()=>{
        setData({name:"i am Child Data"})
        console.log('i am mount && update');
        return()=>{
            setData({})
        }
    },[item1])

  return (
    <div>

        <input type='text' onChange={(e)=>setItam1(e.target.value)}/>
        Child
        <input type='text' onChange={(e)=>setItam2(e.target.value)}/>
      
    </div>
  )
}

export default Child
