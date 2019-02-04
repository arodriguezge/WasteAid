import React, {Component} from 'react';

class FormMessage extends Component {
    constructor(props) {
        super(props);
        this.createNewProposal = this.createNewProposal.bind(this)
    }

    // inverse data flow to parent component
    createNewProposal(event) {
        this.props.newProposalWanted(event)
    }

    render() {
        /*
        const messageStyle = {
            width: 340,
            backgroundColor: "lightblue",
            textAlign: "center",
            padding: 5
        };
        const BtnStyle = {width: 340};
        */

        return (
            <div >
                <p className="alert alert-success">Your proposal has been submitted.<br/>Approval pending.</p>
                <button type="button" className="btn btn-primary" onClick={this.createNewProposal}>Propose another waste item</button>
            </div>
        )
    }
}

export default FormMessage;