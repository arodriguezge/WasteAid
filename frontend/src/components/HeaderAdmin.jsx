import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class HeaderAdmin extends React.Component {
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
                            <Nav.Link className="nav-text text-grey" href="/admin/tickets" exact="true" activeclassname="active"><span className="pb-1 hover">Admin Tickets</span></Nav.Link>
                            <Nav.Link className="nav-text text-grey" href="/items" activeclassname="active"><span className="pb-1 hover">Tickets Approved</span></Nav.Link>
                            {/* map is disabled, because I am not sure what to display */}
                            <Nav.Link className="nav-text text-grey" eventKey="/mapSearch/default" activeclassname="active" ><span className="pb-1 hover">Map Tickets</span></Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

            </React.Fragment>
        )
    }
}

export default HeaderAdmin
