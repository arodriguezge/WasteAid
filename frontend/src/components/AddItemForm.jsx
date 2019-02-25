import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class FormSubmitHint extends Component {
    render() {
        return (
            <div className="form-submit-hint">
                <p className="close-hint-char" onClick={this.props.hideHint} title="Close pop-up">&#10005;</p><br />
                Thank you!<br />
                Your proposal has been submitted.<br />
                Approval pending.
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
        const name = this.name.current.value;
        const description = this.description.current.value;
        const bin = this.bin.current.value;
        this.props.addItem(name, description, bin);
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
                <div className="footer-fix">
                    <div className="container">
                        <h4>Send us a new item</h4>

                        <form onSubmit={this.handleSubmit} id="add-item-form">
                            <p>Waste Item Name:</p>
                            <input type="text" className="form-control" placeholder="Type name of waste item here..."
                                required={true} ref={this.name} /><br /> {/* required={true} */}

                            <p className="heading">Waste Item Description:</p><br />
                            <textarea type="text" className="form-control" id="exampleFormControlTextarea1" rows="5"
                                placeholder="Type item description here..." ref={this.description} /><br />

                            <p className="heading">Waste Bin:</p><br />
                            <select defaultValue="Choose..." ref={this.bin}>
                                <option value="Choose...">Choose...</option>
                                <option value="blue">blue bin (paper, cardboard)</option>
                                <option value="green">green bin (colored glass)</option>
                                <option value="white">white bin (white glass)</option>
                                <option value="yellow">yellow/orange bin (plastic, metal, Green Dot)</option>
                                <option value="brown">brown bin (biodegradable goods)</option>
                                <option value="grey">grey/black bin (everything else)</option>
                                <option value="none">none of the bins (other waste disposal)</option>
                            </select><br />

                            <button className="btn btn-secondary" type="submit">Add item</button>
                            <button className="btn btn-secondary" onClick={this.clearForm}>Reset form</button>
                        </form>

                        {!this.state.isHidden && <FormSubmitHint hideHint={this.toggleHidden} />}
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default AddItemForm