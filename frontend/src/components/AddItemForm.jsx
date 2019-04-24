import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import { addItem } from '../actions'

// corresponding style file: _addItemForm.scss

class FormSubmitHint extends Component {
    render() {
        return (
            <div className="popup-container3">
                <div className="form-submit-hint3">
                    <p className="close-hint-char3" onClick={this.props.hideHint} title="Close pop-up">&#10005;</p>
                    Thank you!<br />
                    Your proposal has been submitted.<br />
                    Approval pending.
                </div>
            </div>
        )
    }
}

class AddItemForm extends Component {
    state = {
        isHidden: true
    };

    name = React.createRef();
    description = React.createRef();
    bin = React.createRef();

    toggleHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.name.current.value, this.description.current.value, this.bin.current.value)
        event.currentTarget.reset();
        this.toggleHidden()
    };

    clearForm = () => {
        document.getElementById("add-item-form").reset();
    };

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container">


                    <h4 className="pt-4 h4-3">Send us a new item</h4>

                    <form onSubmit={this.handleSubmit} id="add-item-form">
                        <p className="heading3b">Waste Item Name:</p>
                        <input type="text" className="form-control" placeholder="Type name of waste item here..."
                            required={true} ref={this.name} /><br /> {/* required={true} */}

                        <p className="heading3">Waste Item Description:</p><br />
                        <textarea type="text" className="form-control" id="exampleFormControlTextarea1" rows="5"
                            placeholder="Type item description here..." ref={this.description} /><br />

                        <p className="heading3">Waste Bin:</p><br />

                        <select className="form-control" defaultValue="Choose..." ref={this.bin}>
                            <option value="Choose...">Choose...</option>
                            <option value="blue">blue bin (paper, cardboard)</option>
                            <option value="green">green bin (colored glass)</option>
                            <option value="white">white bin (white glass)</option>
                            <option value="yellow">yellow/orange bin (plastic, metal, Green Dot)</option>
                            <option value="brown">brown bin (biodegradable goods)</option>
                            <option value="grey">grey/black bin (everything else)</option>
                            <option value="none">none of the bins (other waste disposal)</option>
                        </select>

                        <button className="btn btn-outline-secondary button3" type="submit">Add item</button>
                        <button className="btn btn-outline-secondary button3" onClick={this.clearForm}>Reset form</button>
                    </form>

                    {!this.state.isHidden && <FormSubmitHint hideHint={this.toggleHidden} />}

                </div>
                <Footer />
            </React.Fragment >
        )
    }
}

export default connect(null, { addItem: addItem })(AddItemForm)

