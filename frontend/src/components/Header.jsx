import React from 'react';

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
                        <li className="nav-item ">
                            <a className="nav-link text-white active" href="#!">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#!">Search area</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#!">Add an Item</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#!">Recommended links</a>
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

