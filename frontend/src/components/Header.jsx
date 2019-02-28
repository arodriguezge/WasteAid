import React from 'react'
import component from '../images/bin-red-no-label-no-lines.svg'
import component2 from '../images/bin-yellow-no-label.svg'
import { NavLink } from 'react-router-dom'


class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md bg-success">
                    <span className="navbar-brand">
                        <img src={component} className="mx-auto" width="30" height="30" alt="something" />
                        <img src={component2} className="mx-auto" width="40" height="30" alt="something" />
                        <img src={component} className=" mx-auto " width="30" height="30" alt="something" />
                    </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <img src={component} className="mx-auto" width="30" height="30" alt="something" />
                        {/* <span className="navbar-toggler-icon"></span> */}
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarLinks">

                        <ul className="navbar-nav  ">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link nav-text text-white active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/searchArea" className="nav-link nav-text text-white">Search Area</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/add" className="nav-link nav-text text-white">Add an Item</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to="/recommendedLinks" className="nav-link nav-text text-white">Recommended Links</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/aboutUs" className="nav-link nav-text text-white">About us</NavLink>
                            </li>
                        </ul>


                    </div>

                </nav>
            </React.Fragment>
        )
    }
}

export default Header


