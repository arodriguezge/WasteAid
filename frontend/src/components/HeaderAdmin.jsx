import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

class HeaderAdmin extends React.Component {
    render() {

        return (

            <React.Fragment>
                <Navbar bg="success" expand="lg">

                    <Navbar.Brand className="pb-0 pt-0">
                        <span className="text-white  d-sm-inline pl-2 specialFont ">Wasteaid</span>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                        <Nav className="">
                            <Nav.Link className="nav-text text-grey" href="/" exact="true" activeclassname="active"><span className="pb-1 hover">Admin Tickets</span></Nav.Link>
                            <Nav.Link className="nav-text text-grey" href="/searchArea/default" activeclassname="active"><span className="pb-1 hover">Tickets Aproved</span></Nav.Link>
                            <Nav.Link className="nav-text text-grey" href="/mapSearch/default" activeclassname="active"><span className="pb-1 hover">Map Tickets</span></Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

            </React.Fragment>
        )
    }
}

export default HeaderAdmin
