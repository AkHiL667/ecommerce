import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../utils/Context'

function Nav() {
 const [val] = useContext(userContext);
 const getCategory = val.reduce((acc, current)=> [...acc, current.category],[]);
 const uniqueCategory = [...new Set(getCategory)];
  return (
    <nav className="h-screen flex flex-col items-center p-2   bg-zinc-100 w-[15%]">
    <a
      href="/create"
      className="text-xl mt-2 text-white font-bold bg-blue-400 px-10 py-2 mb-2  rounded-sm "
    >
      Add item
    </a>
    <div className='flex items-start flex-col'>
      <h1 className="text-2xl font-semibold">category</h1>

    {uniqueCategory.map((item, index)=>{
      return(
        <Link to={`/category/${item}`} key={index}
        className="">
        <div className="text-md flex gap-2  font-semibold">
          <div className="w-3 inline-block mt-[7px] mr-2 h-3 rounded-full bg-orange-500 "></div>
          <div>{item}</div>
        </div>
      </Link>
      )
    })}
    </div>
  </nav>
  )
}

export default Nav