import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { userContext } from '../utils/Context'
import axios from '../utils/Axios'
import Loading from './Loading'

function UserDetails() {
  const navigate = useNavigate()
  const[val, setVal] = useContext(userContext)
  const req = useParams()
  const needid = req.id
  let [value, setvalue] = useState(null)
  //  let getData = async ()=>{
    //   try {
      //     let data = await axios('/products/'+needid)
      //     setVal(data.data)
      //   } catch (error) {
        //     console.log(error)
        //   }
        //  }
        useEffect(()=>{
          if (!value){
            setvalue(val.filter((p)=> p.id == needid)[0])
  }
},[])

const deleteHandler = (id)=>{
  const filteredProducts = val.filter(p => p.id != id)
  setVal(filteredProducts)
  localStorage.setItem("val",JSON.stringify(filteredProducts))
  navigate("/")
}
  return ( value? 

    <div className='flex h-screen w-[80%] py-[10%] gap-5 m-auto'>
      <img className='h-[80%] w-[40%] object-contain bg-no-repeat' src={value.image} alt="" />
      <div className='mt-10 flex flex-col gap-2 w-[70%]'>
        <h1 className='text-2xl font-bold'>{value.title}</h1>
        <p className='text-zinc-500 text-sm'>{value.category}</p>
        <p className='text-red-500 font-bold'>${value.price}</p>
        <p className='text-xs w-[70%] '>{value.description}</p>
        <div className='flex gap-2 mt-5'>

        {/* <Link className='px-2 bg-blue-500 w-18 text-center text-white font-bold rounded-md'>Edit</Link> */}
        <button onClick={()=>deleteHandler(value.id)} className='px-2 bg-red-500 text-white font-bold w-18 text-center rounded-md'>Delete</button>
        </div>

      </div>
    </div> : <Loading />
  )
}

export default UserDetails