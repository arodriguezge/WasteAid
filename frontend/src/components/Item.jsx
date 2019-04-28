import React, {Component} from 'react'
// import {NavLink} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

// corresponding style files: _item.scss, _ticket.scss

function ItemDescription(props) {
    return <div>{props.descr}</div>
}

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemDescrVisible: false,
            toggleSwitchChar: String.fromCharCode(9660),
            toggleHint: "show item description"
        };
        this.toggleItemDescr = this.toggleItemDescr.bind(this);
        this.goToMap = this.goToMap.bind(this);
    }

    toggleItemDescr() {
        if (this.state.itemDescrVisible === false) {
            this.setState({
                itemDescrVisible: true,
                toggleSwitchChar: String.fromCharCode(9650),
                toggleHint: "hide item description"
            })
        } else {
            this.setState({
                itemDescrVisible: false,
                toggleSwitchChar: String.fromCharCode(9660),
                toggleHint: "show item description"
            })
        }
    }


    goToMap() {
        if (this.props.item.category) {
            this.props.history.push(`/mapSearch/${this.props.item.category}`)
        }
    }


    binIconPath() {
        //console.log(this.props.item.description);
        switch (this.props.item.bin) {
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
        switch (this.props.item.bin) {
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
        return (
            <div className="item-card5" id="search-result">
                <table className="table1">
                    <tbody>
                    <tr>
                        <td>
                            <div className="desrc-toggle-switch-1" onClick={this.toggleItemDescr}
                                 title={this.state.toggleHint}>
                                {this.state.toggleSwitchChar}
                            </div>
                            <div className="card-title5">{this.props.item.name}</div>
                        </td>
                        <td>
                            <div className="button-container-1">
                                <button className="btn btn-outline-secondary btn-sm" title="show disposal sites in map" onClick={this.goToMap}>
                                    Map
                                </button>
                                <img className="wastebin-icon5" src={this.binIconPath()} alt="wastebin icon"
                                     title={this.binIconTitle()}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            {this.state.itemDescrVisible ?
                                <ItemDescription descr={this.props.item.description}/> : null}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withRouter(Item)