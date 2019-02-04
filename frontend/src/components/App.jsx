import React from 'react';
import ItemProposalFrame from "./AddAnItem"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <React.Fragment>
                <ItemProposalFrame />
            </React.Fragment>
        )
    }
}

export default App;