import React, { createContext, useState } from 'react'
import {BrowserRouter as Router,Routes,Route}from'react-router-dom'
import Home from './Home'
import { About } from './About'
import Shop from './Shop'
import Contact from './Contact'
import { Myaccount } from './Myaccount'
import Login from './Component/Login'
import Signup from './Signup'


 export const myContext=createContext()





const App = () => {
  const[user,setUser]=useState([])

  return (
    <div>
      <myContext.Provider value={{user,setUser}}>
      
      
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Myaccount' element={<Myaccount/>}/>
        </Routes>
      </Router>
      </myContext.Provider>
      



    </div>
  )
}

export default App