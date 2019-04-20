import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

class Header extends React.Component {
    render() {

        return (

            <React.Fragment>
                <Navbar bg="success" expand="lg">

                    <Navbar.Brand className="pb-0 pt-0">
                        <img src="../images/logo.svg" className="d-inline-block align-top m-1" width="50" height="50" alt="logo" /> &nbsp;
                        <span className="d-sm-inline d-none text-white pl-1 specialFont">Wasteaid</span>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                        <Nav className="">
                            <Nav.Link className="nav-text text-grey" href="/" exact="true" activeclassname="active"><span className="pb-1 hover">Home</span></Nav.Link>
                            <Nav.Link className="nav-text text-grey" href="/searchArea/default" activeclassname="active"><span className="pb-1 hover">Search</span></Nav.Link>
                            <Nav.Link className="nav-text text-grey" href="/mapSearch/default" activeclassname="active"><span className="pb-1 hover"><img src="../images/pin.svg" className="mx-auto" width="25" height="25" alt="logo" /> Map</span></Nav.Link>
                            <Nav.Link className="nav-text text-grey" href="/add" activeclassname="active"><span className="pb-1 hover">Add an Item</span></Nav.Link>
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

export default Header