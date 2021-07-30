import React from 'react'
import { IoIosSpeedometer } from 'react-icons/io'
import ThemeToggler from './ThemeToggler'

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="https://aykutsarac.github.io/github-rater" className="logo"><IoIosSpeedometer className="icon" size={28} /> GitHub Rater</a>
            <ThemeToggler />
        </div>
    )
}

export default Navbar
