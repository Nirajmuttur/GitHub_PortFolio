import React from 'react'
import './Header.css'

const Header=(props)=> {
    return (
            <header className="App-header">
                <img src={props.logo} className="App-logo" alt="logo" />
                <h1>My Github Portfolio</h1>
            </header>
    )
}

export default Header
