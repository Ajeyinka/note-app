import React from 'react'

const Header=({ handleToggleDarkMode })=>{
  return (
    <div className='header'>
       <h1>My Note</h1>
       <button className='save'
       onClick ={()=> handleToggleDarkMode((previousDarkMode)=> !previousDarkMode)}>Toggle</button>
    </div>
  )
}

export default Header;