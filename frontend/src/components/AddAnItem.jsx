import React, {Component} from 'react';
import UserForm from './UserForm';
import FormMessage from './FormMessage';

class AddAnItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUserForm: true,
            showFormMessage: false
        };
        this.hideFormShowMessage = this.hideFormShowMessage.bind(this);
        this.hideMessageShowForm = this.hideMessageShowForm.bind(this);
    }

    // inverse data flow from child component "UserForm"
    hideFormShowMessage() {
        this.setState({
            showUserForm: false,
            showFormMessage: true
        });
    }

    // inverse data flow from child component "FormMessage"
    hideMessageShowForm() {
        this.setState({
            showUserForm: true,
            showFormMessage: false
        });
    }

    render() {
        return (
            <div className="container">
                { this.state.showUserForm ? <UserForm formSubmitted={this.hideFormShowMessage} /> : null }
                { this.state.showFormMessage ? <FormMessage newProposalWanted={this.hideMessageShowForm} /> : null }
            </div>
        )
    }
}

export default AddAnItem;