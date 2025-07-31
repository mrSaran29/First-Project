import React, { useContext, useRef, useState } from 'react'
import { myContext } from './App'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const val=useContext(myContext)
  const unameref=useRef()
  const passref=useRef()
  const navigate=useNavigate()
  const[msg,setMsg]=useState('')

  const Submit=(e)=>{
    e.preventDefault()
    val.user.forEach((cur)=>{
      if(cur.uname===unameref.current.value && cur.password===passref.current.value){
        navigate('/Home')
      }else{
           setMsg('invaild password or username')
      }

    })

  }
  return (
    <div>
      <form >
        <label >User Name</label>
        <input type="text" ref={unameref} />
        <label >Password</label>
        <input type="text" ref={passref} />
        <button onClick={(e)=>Submit(e)}>Login</button>
        {
          msg && <p>{msg}</p>

        }
        <p onClick={()=>navigate('/Signup')}>Create new account</p>
      </form>

    </div>
  )
}

export default Login