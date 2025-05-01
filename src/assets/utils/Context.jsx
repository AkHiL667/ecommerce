import axios from "./Axios"
import { createContext, useEffect, useState } from "react"

export const userContext = createContext()
function Context(props) {
  let [val, setVal] = useState('')
  let getData = async ()=>{
    try {
      let data = await axios('/products')
      setVal(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <userContext.Provider value={[ val, setVal ]}>
      {props.children}
    </userContext.Provider>
     )
}

export default Context