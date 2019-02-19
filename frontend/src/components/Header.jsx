import React from 'react'
import component from '../images/Component.png'
import { NavLink } from 'react-router-dom'


class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-inverse bg-success">
                    <div className="container-fluid md-tabs ">
                        <div className="d-flex img-fluid justify-content-start align-items-center">
                            <span className="display-4 text-dark">RECYCLE </span> &nbsp;
                            <img src={component} className=" mx-auto " width="50" height="50" alt="" />
                            &nbsp;
                            <span className="display-4 text-dark"> DATABASE</span>
                        </div>

                        <ul className="nav  text-white justify-content-end lighten-1 mx-0 mb-0 mt-1 pt-4 pb-2">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link nav-text text-white">Home</NavLink>
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


