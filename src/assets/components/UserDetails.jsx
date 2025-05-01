import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { userContext } from '../utils/Context'
import axios from '../utils/Axios'
import Loading from './Loading'

function UserDetails() {
  const req = useParams()
  const needid = req.id
 const [val, setVal] = useState('')
 let getData = async ()=>{
  try {
    let data = await axios('/products/'+needid)
    setVal(data.data)
    console.log(data.data)
  } catch (error) {
    console.log(error)
  }
 }
 useEffect(()=>{
  getData()
 },[])
  return ( val? 

    <div className='flex h-screen w-[80%] py-[10%] gap-5 m-auto'>
      <img className='h-[80%] w-[40%] object-contain bg-no-repeat' src={val.image} alt="" />
      <div className='mt-10 flex flex-col gap-2 w-[70%]'>
        <h1 className='text-2xl font-bold'>{val.title}</h1>
        <p className='text-zinc-500 text-sm'>{val.category}</p>
        <p className='text-red-500 font-bold'>${val.price}</p>
        <p className='text-xs w-[70%] '>{val.description}</p>
        <div className='flex gap-2 mt-5'>

        <Link className='px-2 bg-blue-500 w-18 text-center text-white font-bold rounded-md'>Edit</Link>
        <Link className='px-2 bg-red-500 text-white font-bold w-18 text-center rounded-md'>Delete</Link>
        </div>

      </div>
    </div> : <Loading />
  )
}

export default UserDetails