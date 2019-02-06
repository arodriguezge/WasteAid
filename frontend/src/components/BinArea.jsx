import React from 'react'
import BinButton from './BinButton'

class BinArea extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     }
    // }


    render() {
        return (
            <React.Fragment>
                <p className="text-center">
                    Click on the bins to see what goes on which one:
                    </p>
                <div className="d-flex mt-3">
                    <BinButton />
                </div>
                <hr />
            </React.Fragment>
        )
    }
}

export default BinArea