import React from 'react'
import darkgrayBinLabelled from '../images/bin-darkgray-labelled.svg'
import blueBinLabelled from '../images/bin-blue-labelled.svg'
import brownGlassBinLabelled from '../images/bin-brown-glass-labelled.svg'
import brownBinLabelled from '../images/bin-brown-labelled.svg'
import greenBinLabelled from '../images/bin-green-labelled.svg'
import redBinLabelled from '../images/bin-red-labelled.svg'
import whiteBinLabelled from '../images/bin-white-labelled.svg'
import yellowBinLabelled from '../images/bin-yellow-dark-font.svg'



class BinButton extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     }
    // }


    render() {
        return (
            <React.Fragment>
                <div className="container d-inline-flex justify-content-between ">
                    <img src={blueBinLabelled} className=" mx-auto " width="90" height="90" alt="bin" />
                    <img src={brownGlassBinLabelled} className=" mx-auto " width="90" height="90" alt="bin" />
                    <img src={whiteBinLabelled} className=" mx-auto " width="90" height="90" alt="bin" />
                    <img src={greenBinLabelled} className=" mx-auto " width="90" height="90" alt="bin" />
                    <img src={brownBinLabelled} className=" mx-auto " width="90" height="90" alt="bin" />
                    <img src={yellowBinLabelled} className=" mx-auto " width="90" height="90" alt="bin" />
                    <img src={darkgrayBinLabelled} className=" mx-auto " width="90" height="90" alt="bin" />
                    <img src={redBinLabelled} className=" mx-auto " width="90" height="90" alt="bin" />
                </div>

            </React.Fragment>
        )
    }
}

export default BinButton

// img-fluid