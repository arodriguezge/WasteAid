import React, { Component } from 'react'
import HeaderAdmin from './HeaderAdmin'
import Footer from './Footer'
// import { connect } from 'react-redux'
// import { addSite } from '../actions'  // has to be created yet

// corresponding style file: _addItemForm.scss

class FormSubmitHint extends Component {
    render() {
        return (
            <div className="popup-container3">
                <div className="form-submit-hint3">
                    <p className="close-hint-char3" onClick={this.props.hideHint} title="Close pop-up">&#10005;</p>
                    A new disposal site has been created.
                </div>
            </div>
        )
    }
}

class AddSiteForm extends Component {
    state = {
        isHidden: true
    };

    name = React.createRef();
    address = React.createRef();
    latitude = React.createRef();
    longitude = React.createRef();
    phone = React.createRef();
    email = React.createRef();
    categories = React.createRef();
    monday = React.createRef();
    tuesday = React.createRef();
    wednesday = React.createRef();
    thursday = React.createRef();
    friday = React.createRef();
    saturday = React.createRef();
    sunday = React.createRef();

    toggleHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addSite(
            this.name.current.value,
            this.address.current.value,
            this.latitude.current.value,
            this.latitude.current.value,
            this.phone.current.value,
            this.email.current.value,
            this.categories.current.value,
            this.monday.current.value,
            this.tuesday.current.value,
            this.wednesday.current.value,
            this.thursday.current.value,
            this.friday.current.value,
            this.saturday.current.value,
            this.sunday.current.value
        );
        event.currentTarget.reset();
        this.toggleHidden()
    };

    clearForm = () => {
        document.getElementById("add-site-form").reset();
    };

    render() {
        return (
            <React.Fragment>
                <HeaderAdmin />
                <div className="container">
                    <h4 className="h4-3">Create a new disposal site</h4>

                    <form onSubmit={this.handleSubmit} id="add-site-form">
                        <p className="heading3c">Name:</p>
                        <input type="text" className="form-control" placeholder="Type name of disposal site here..."
                               required={true} ref={this.name} />

                        <p className="heading3c">Address:</p>
                        <input type="text" className="form-control" placeholder="Type address of disposal site here..."
                               required={true} ref={this.address} />

                        <p className="heading3c">Latitude:</p>
                        <input type="text" className="form-control" placeholder="Type latitude of disposal site here..."
                               required={true} ref={this.latitude} />

                        <p className="heading3c">Longitude:</p>
                        <input type="text" className="form-control" placeholder="Type longitude of disposal site here..."
                               required={true} ref={this.longitude} />

                        <p className="heading3c">Phone Number:</p>
                        <input type="text" className="form-control" placeholder="Type phone number of disposal site here..."
                               required={true} ref={this.phone} />

                        <p className="heading3c">Email Address:</p>
                        <input type="text" className="form-control" placeholder="Type email address of disposal site here..."
                               required={true} ref={this.email} />


                        <p className="heading3c">Waste Categories (comma-separated):</p>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                                  placeholder="Type waste categories here..." ref={this.categories} /><br />


                        <p className="heading3d"><b>Opening Hours</b></p>
                        <p className="heading3b">Monday:</p>
                        <input type="text" className="form-control" placeholder="Type opening hours on monday here..."
                               required={true} ref={this.monday} />

                        <p className="heading3c">Tuesday:</p>
                        <input type="text" className="form-control" placeholder="Type opening hours on tuesday here..."
                               required={true} ref={this.tuesday} />

                        <p className="heading3c">Wednesday:</p>
                        <input type="text" className="form-control" placeholder="Type opening hours on wednesday here..."
                               required={true} ref={this.wednesday} />

                        <p className="heading3c">Thursday:</p>
                        <input type="text" className="form-control" placeholder="Type opening hours on thursday here..."
                               required={true} ref={this.thursday} />

                        <p className="heading3c">Friday:</p>
                        <input type="text" className="form-control" placeholder="Type opening hours on friday here..."
                               required={true} ref={this.friday} />

                        <p className="heading3c">Saturday:</p>
                        <input type="text" className="form-control" placeholder="Type opening hours on saturday here..."
                               required={true} ref={this.saturday} />

                        <p className="heading3c">Sunday:</p>
                        <input type="text" className="form-control" placeholder="Type opening hours on sunday here..."
                               required={true} ref={this.sunday} />

                        <button className="btn btn-secondary button3" type="submit">Add Disposal Site</button>
                        <button className="btn btn-secondary button3" onClick={this.clearForm}>Reset form</button>
                    </form>

                    {!this.state.isHidden && <FormSubmitHint hideHint={this.toggleHidden} />}

                </div>
                <Footer />
            </React.Fragment >
        )
    }
}

// export default connect(null, { addSite: addSite })(AddSiteForm)
export default AddSiteForm
