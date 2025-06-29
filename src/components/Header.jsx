import React from 'react'

const header = () => {
  return (
    <header className= "header">
            <img src= "/src/assets/brand_logo.png" alt="logo image"/>
        <ul className='options'>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>

        <button>Login   </button>

    </header>
  )
}

export default header