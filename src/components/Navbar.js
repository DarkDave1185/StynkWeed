import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className="Header">
            <nav class="navbar navbar-light bg-light">
        <div>
        <a class="navbar-brand" href="/">LOGO</a>
        </div>
        <div>
          <ul class="nav justify-content-end">
            <Link to="/home">
            <li class="nav-item">
                <a class="nav-link" href="/home">Home</a>
            </li>
            </Link>
            <Link to="/daily">
            <li class="nav-item">
                <a class="nav-link" href="/daily">DailyReview</a>
            </li>
            </Link>
            <Link to="/stats">
            <li class="nav-item">
                <a class="nav-link" href="/stats">Stats</a>
            </li>
            </Link>
            <Link to="/about">
            <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
            </li>
            </Link>
        </ul>
        </div>
        <div>
            <a class="nav-item nav-link" href="/auth#">Login/Logout</a>
        </div>
      </nav>
        </div>
    )
}

export default Navbar
