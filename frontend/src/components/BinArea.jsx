import React from 'react';
import BinButton from './BinButton';

class BinArea extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     }
    // }


    render() {
        return (
            <React.Fragment>
                <div className="d-flex mt-3">
                    <BinButton />
                </div>
            </React.Fragment>
        )
    }
}

export default BinArea;