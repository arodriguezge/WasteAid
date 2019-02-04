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
        const messageStyle = {
            width: 340,
            backgroundColor: "lightblue",
            textAlign: "center",
            padding: 5
        };
        const BtnStyle = {width: 340};

        return (
            <React.Fragment>
                <p style={messageStyle}>Your proposal has been submitted.<br/>Approval pending.</p>
                <button type="button" style={BtnStyle} onClick={this.createNewProposal}>Propose another waste item</button>
            </React.Fragment>
        )
    }
}

export default FormMessage;