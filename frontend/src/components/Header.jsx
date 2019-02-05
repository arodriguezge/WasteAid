import React from 'react';
import component from '../images/Component.png';
// import database from '../images/database.png';
// import recycle from '../images/recycle.png';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        return (
            <React.Fragment>
                <nav>

                    <ul className="nav md-tabs bg-success text-white justify-content-end lighten-1 mx-0 mb-0 mt-1 pt-4 pb-2">

                        <div className="d-flex img-fluid justify-content-start align-items-center">
                            <span className="display-4 text-dark">RECYCLE </span> &nbsp;
                            <img src={component} className=" mx-auto " width="50" height="50" alt="" />
                            &nbsp;
                            <span className="display-4 text-dark"> DATABASE</span>
                        </div>

                        <li className="nav-item ">
                            <a className="nav-link text-white active" href="#!">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#!">Search Area</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#!">Add an Item</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#!">Recommended Links</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#!">About us</a>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default Header;

