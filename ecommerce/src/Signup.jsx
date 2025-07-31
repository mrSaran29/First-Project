
import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from './App'



const Signup = () => {
   const val=useContext(myContext)
  const navigate=useNavigate()

  const fnameref=useRef()
  const lnameref=useRef()
  const unameref=useRef()
  const mailref=useRef()
  const mobileref=useRef()
  const passref=useRef()
  const cpassref=useRef()

  const Submit=(e)=>{
    e.preventDefault()
    val.setUser((cur)=>[
      ...cur,{
        fname:fnameref.current.value,
        lname:lnameref.current.value,
        uname:unameref.current.value,
        mail:mailref.current.value,
        mobile:mobileref.current.value,
        password:passref.current.value,
        cpassword:cpassref.current.value

      }
    ])
    navigate('/')
           
  }
  return (
    <div>
      <form >
        <label>First Name</label>
        <input type="text" ref={fnameref} />
        <label>Last Name</label>
        <input type="text"  ref={lnameref}/>
        <label>User Name</label>
        <input type="text" ref={unameref} />
        <label>Mail</label>
        <input type="text" ref={mailref} />
        <label>Mobile</label>
        <input type="text" ref={mobileref}/>
        <label>Password</label>
        <input type="text" ref={passref}/>
        <label>Cpassword</label>
        <input type="text" ref={cpassref} />
        <button onClick={(e)=>Submit(e)}>Signup</button>
      </form>
    </div>
  )
}

export default Signup