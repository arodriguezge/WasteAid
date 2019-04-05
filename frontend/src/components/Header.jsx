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
                        <span className="text-white font-weight-bold d-sm-inline d-none">Waste Disposal Advisor</span>
                    </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={this.onToggleNav}>

                        <img src={menuButton} className="mx-auto" width="30" height="30" alt="menu" />
                        {/* <span className="navbar-toggler-icon"></span> */}
                    </button>
                    <div id="navbarLinks" className={(navCollapsed ? 'collapse justify-content-end' : '') + ' navbar-collapse '}
                    >

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link nav-text text-grey" exact activeClassName="active"><span className="pb-1">Home</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/searchArea" className="nav-link nav-text text-grey" activeClassName="active"><span className="pb-1">Search Area</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/mapSearch" className="nav-link nav-text text-grey" activeClassName="active"><span className="pb-1">Map Search</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/add" className="nav-link nav-text text-grey" activeClassName="active"><span className="pb-1">Add an Item</span></NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to="/recommendedLinks" className="nav-link nav-text text-grey" activeClassName="active"><span className="pb-1">Learn More</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/aboutUs" className="nav-link nav-text text-grey" activeClassName="active"><span className="pb-1">About us</span></NavLink>
                            </li>
                        </ul>


                    </div>

                </nav>
            </React.Fragment>
        )
    }
}

export default Header