import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{width:'100%',height:'80px',backgroundColor:'black'}}>
        <ul style={{display:'flex',justifyContent:'flex-end',paddingTop:'20px',margin:'5px',fontSize:'20px'}}>
           <li style={{margin:'10px',listStyle:'none'}}><Link style={{color:'white',textDecoration:'none'}} to='/Home'>Home</Link></li>
           <li style={{margin:'10px'}}><Link style={{color:'white',textDecoration:'none'}} to='/About'>About</Link></li>
            <li style={{margin:'10px'}}><Link style={{color:'white',textDecoration:'none'}}  to='/Shop'>Shop</Link></li>
           <li style={{margin:'10px'}}><Link style={{color:'white',textDecoration:'none'}} to='/Contact'>Contact</Link></li>
            <li style={{margin:'10px'}}> <img style={{width:'25px',height:'23px',margin:'1px'}} src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png" alt="" /><Link style={{color:'white',textDecoration:'none',position:'relative',bottom:'8px'}} to='/Myaccount'>Myaccount</Link></li>
        </ul>
       
 
    </div>
  )
}

export default Navbar