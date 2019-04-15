import React from 'react'
import logo from '../images/WDA-Logo-grey-orange-green-blue.svg'
//import menuButton from '../images/menu-button.svg'
//import { NavLink } from 'react-router-dom'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'



class Header2 extends React.Component {
    render() {

        return (

            <React.Fragment>
                <Navbar bg="success" expand="lg">

                    <Navbar.Brand className="pb-0 pt-0">
                        <img src={logo} className="mx-auto" width="50" height="50" alt="logo" />&nbsp; &nbsp;
                        <span className="text-white font-weight-bold d-sm-inline d-none">Waste Disposal Advisor</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                        <Nav className="">
                            <Nav.Link className="nav-text text-grey" href="/" exact activeClassName="active"><span className="pb-1 hover">Home</span></Nav.Link>
                            <Nav.Link className="nav-text text-grey" href="/searchArea"><span className="pb-1 hover">Search Area</span></Nav.Link>
                            <Nav.Link className="nav-text text-grey" href="/mapSearch"><span className="pb-1 hover">Map Search</span></Nav.Link>
                            <Nav.Link className="nav-text text-grey" href="/add"><span className="pb-1 hover">Add an Item</span></Nav.Link>


                            <NavDropdown alignRight title="Learn More" className="nav-text text-grey" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/learnMore">FAQ</NavDropdown.Item>
                                <NavDropdown.Item href="/aboutUs">About Us</NavDropdown.Item>


                            </NavDropdown>


                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header2