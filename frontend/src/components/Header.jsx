import React from 'react'
import logoText from '../images/WDA-Label-153-153-153.svg'
import logo from '../images/WDA-Logo-grey-orange-green-blue.svg'
import menuButton from '../images/menu-button.svg'
import { NavLink } from 'react-router-dom'


class Header extends React.Component {
    state = {
        navCollapsed: true
    }

    onToggleNav = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
    }

    render() {
        const { navCollapsed } = this.state

        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg bg-success">
                    <span className="navbar-brand pb-0 pt-0">
                        <img src={logo} className="mx-auto" width="50" height="50" alt="logo" />&nbsp; &nbsp;
                        <img src={logoText} className="mx-auto d-sm-inline d-none" width="250" height="50" alt="logo" />
                    </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks"

                        aria-expanded="false" aria-label="Toggle navigation" onClick={this.onToggleNav}>

                        <img src={menuButton} className="mx-auto" width="30" height="30" alt="something" />
                        {/* <span className="navbar-toggler-icon"></span> */}
                    </button>
                    <div id="navbarLinks" className={(navCollapsed ? 'collapse justify-content-end' : '') + ' navbar-collapse '}
                    >

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link nav-text text-white active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/searchArea" className="nav-link nav-text text-white">Search Area</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/mapSearch" className="nav-link nav-text text-white">Map Search</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/add" className="nav-link nav-text text-white">Add an Item</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to="/recommendedLinks" className="nav-link nav-text text-white">Learn More</NavLink>
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