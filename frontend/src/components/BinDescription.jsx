import React, {Component} from 'react'
import {binDescriptions} from '../hardCodedContent/binDescriptions'

// corresponding style file: _binDescription.scss

function BinDescrText(props) {
    return (
        <div>
            <b>German name:</b> {props.descrTxt.germanName}<br/>
            <b>Allowed:</b> {props.descrTxt.allowed}<br/>
            <b>Not allowed:</b> {props.descrTxt.forbidden}<br/>
            <b>Hint:</b> {props.descrTxt.hints}
        </div>
    )
}

class BinDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            binDescrVisible: true,
            toggleSwitchChar: String.fromCharCode(9650),
            toggleHint: "hide bin description"
        };
        this.toggleBinDescr = this.toggleBinDescr.bind(this);
    }

    // this is required in order to have the bin description always visible
    // if clicking another bin icon, even if it has been hidden beforehand
    componentWillReceiveProps() {
        this.setState({
            binDescrVisible: true,
            toggleSwitchChar: String.fromCharCode(9650),
            toggleHint: "hide bin description"
        })
    }

    toggleBinDescr() {
        if (this.state.binDescrVisible === true) {
            this.setState({
                binDescrVisible: false,
                toggleSwitchChar: String.fromCharCode(9660),
                toggleHint: "show bin description"
            })
        } else {
            this.setState({
                binDescrVisible: true,
                toggleSwitchChar: String.fromCharCode(9650),
                toggleHint: "hide bin description"
            })
        }
    }

    binIconPath() {
        switch (this.props.binColor) {
            case 'blue':
                return "../images/bin2-blue-no-label.svg";
            case 'green':
                return "../images/bin2-green-no-label.svg";
            case 'white':
                return "../images/bin2-white-no-label.svg";
            case 'yellow':
                return "../images/bin2-yellow-no-label.svg";
            case 'brown':
                return "../images/bin2-brown-no-label.svg";
            case 'grey':
                return "../images/bin2-grey-no-label.svg";
            case 'none':
                return "../images/bin2-white-traffic-sign.svg";
            default:
                return null;
        }
    };

    binIconTitle() {
        switch (this.props.binColor) {
            case 'blue':
                return "bin for paper and cardboard";
            case 'green':
                return "bin for green glass";
            case 'white':
                return "bin for white glass";
            case 'yellow':
                return "bin for plastic, metal, Green Dot";
            case 'brown':
                return "bin for bio waste";
            case 'grey':
                return "bin for residual waste";
            case 'none':
                return "none of the bins, separate disposal";
            default:
                return null;
        }
    };

    binSecondClassName() {
        switch (this.props.binColor) {
            case 'blue':
                return "blueBackground";
            case 'green':
                return "greenBackground";
            case 'white':
                return "whiteBackground";
            case 'yellow':
                return "yellowBackground";
            case 'brown':
                return "brownBackground";
            case 'grey':
                return "greyBackground";
            case 'none':
                return "noneBackground";
            default:
                return null;
        }
    }

    render() {
        let binTitle;
        if (this.props.binColor === "none") {
            binTitle = this.props.binColor + " of the waste bins"
        } else {
            binTitle = this.props.binColor + " waste bin"
        }

        return (
            <div className={`bin-descr-card-2 ${this.binSecondClassName()}`} id="bin-description">
                <table className="table2">
                    <tbody>
                    <tr>
                        <td>
                            <div className="desrc-toggle-switch2" onClick={this.toggleBinDescr}
                                 title={this.state.toggleHint}>
                                &nbsp;{this.state.toggleSwitchChar}
                            </div>
                            <div className="card-title2">{binTitle}</div>
                        </td>
                        <td>
                            <div className="button-container-2">
                                <img className="wastebin-icon2" src={this.binIconPath()} alt="wastebin icon"
                                     title={this.binIconTitle()}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            {this.state.binDescrVisible ?
                                <BinDescrText descrTxt={binDescriptions[this.props.binColor]}/> : null}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BinDescription