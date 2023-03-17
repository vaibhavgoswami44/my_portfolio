import React  from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='sticky-top' style={{ height: '50px' }}>
                <nav className="navbar fixed-top sticky-top navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="/">Vaibhav Goswami</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ filter: 'invert(1)' }} >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to='/'>Home</Link>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/projects">Projects</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar