import React, { Component } from 'react'

// import axios from 'axios';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: "",
            itemDescription: "",
            binColor: "none"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    //add a new item
    handleSubmit(event) {
        event.preventDefault();
        let itemNameProposal = this.state.itemName.trim();
        let itemDescrProposal = this.state.itemDescription.trim();

        // this.setState({
        //     itemName: '',
        //     itemDescription: '',
        //     binColor: "none"
        // });

        /*
        axios
            .get('http://localhost:3001/api/tempWasteItems/add', {
                params: {
                    itemName: itemNameProposal,
                    itemDescription: itemDescrProposal,
                    binColor: this.state.binColor
                }
            })
            .then(() => {
                this.setState({
                    itemName: '',
                    itemDescription: '',
                    binColor: "none"
                });
            })
            .catch((error) => {
                console.log(error)
            });
            */

        console.log("item name:", itemNameProposal);
        console.log("item description:", itemDescrProposal);
        console.log("bin color:", this.state.binColor);

        // inverse data flow to parent component "ItemProposalFrame"
        this.props.formSubmitted(event)
    }

    render() {
        // const submitBtnStyle = {width: 340};
        // const selectStyle = {height: 31};

        return (
            <div>
                <h2>Propose a Waste Item</h2>

                <form onSubmit={this.handleSubmit}>
                    <b>Waste item name:</b><br />
                    <input type="text" name="itemName" placeholder="Type name of waste item here." required={true}
                        value={this.state.itemName} onChange={this.handleChange} size="36" maxLength="30" autoFocus
                        className="form-control" />
                    <br />
                    <b>Waste item description:</b><br />
                    <textarea name="itemDescription" placeholder="Type item description here."
                        value={this.state.itemDescription} onChange={this.handleChange} cols="35"
                        className="form-control" /><br />

                    <b>Select color of waste bin:</b><br />
                    <select name="binColor" value={this.state.binColor} onChange={this.handleChange}
                        className="form-control">
                        <option value="blue">blue bin (paper, cardboard)</option>
                        <option value="green">green bin (colored glass)</option>
                        <option value="white">white bin (white glass)</option>
                        <option value="yellow">yellow/orange bin (plastic, metal, Green Dot)</option>
                        <option value="brown">brown bin (biodegradable goods)</option>
                        <option value="grey">grey/black bin (everything else)</option>
                        <option value="none">none of the bins (other waste disposal)</option>
                    </select><br />

                    <input type="submit" value="Submit proposal" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

export default UserForm