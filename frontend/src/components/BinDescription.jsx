import React, {Component} from 'react'
import { binDescriptions } from '../binDescriptions'

// corresponding style file: _binDescription.scss

class BinDescrText extends Component {
    render() {
        return (
            <div>
                {this.props.descrTxt}
            </div>
        )
    }
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
        switch(this.props.binColor) {
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
        switch(this.props.binColor) {
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

    render() {
        let binTitle;
        if (this.props.binColor === "none") {
            binTitle = this.props.binColor + " of the waste bins"
        } else {
            binTitle = this.props.binColor + " waste bin"
        }

        return (
            <div className="bin-descr-card2" id="bin-description">
                <div>
                    <div className="desrc-toggle-switch2" onClick={this.toggleBinDescr} title={this.state.toggleHint}>
                        &nbsp;{this.state.toggleSwitchChar}
                    </div>
                    <div className="card-title2">{binTitle}</div>
                    { this.state.binDescrVisible ? <BinDescrText descrTxt={binDescriptions[this.props.binColor]}/> : null }

                </div>
                <div>
                    <img className="wastebin-icon2" src={this.binIconPath()} alt="wastebin icon" title={this.binIconTitle()}/>
                </div>
            </div>
        )
    }
}

export default BinDescription