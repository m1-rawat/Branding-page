import React from 'react'

const Header = () => {
    return (
    <nav className='navi container'>
    <div className='logo'>
        <img src="/images/image.png" alt="logo" />
        </div>
        <ul className='gap'>
            <a href ="#">Home</a>
            <a href ="#">About</a>
            <a href ="#">Location</a>
            <a href ="#">Conatct</a>
        </ul>
        <button className='btn'>Login</button> 
    </nav>
  )
}

export default Header