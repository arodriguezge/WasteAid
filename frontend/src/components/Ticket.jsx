import React, {Component} from 'react'
import { connect } from 'react-redux'
import EditTicket from './EditTicket'
import { removeItem, approveTicket } from '../actions/index'

// corresponding style file: _ticket.scss

function ItemDescription (props) {
        return <div>{props.descr}</div>
}

class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemDescrVisible: false,
            toggleSwitchChar: String.fromCharCode(9660),
            toggleHint: "show item description",
            isHidden: true
        };
        this.toggleItemDescr = this.toggleItemDescr.bind(this);
    }

    toggleHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
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
            <div className="item-card5">
                <table className="table5">
                    <tbody>
                    <tr>
                        <td>
                            <div className="desrc-toggle-switch" onClick={this.toggleItemDescr} title={this.state.toggleHint}>
                                {this.state.toggleSwitchChar}
                            </div>
                            <div className="card-title5">{this.props.item.name}</div>
                        </td>
                        <td className="buttons-and-icon5">
                            <button className="button5" onClick={() => {this.props.approveTicket(this.props.item._id)}}>approve</button>
                            <button className="button5" onClick={this.toggleHidden.bind(this)}>edit</button>
                            {!this.state.isHidden && <EditTicket item={this.props.item} editItem={this.props.editItem} toggleHidden={this.toggleHidden}/>}
                            <button className="button5" onClick={() => {this.props.removeItem(this.props.item._id)}}>remove</button>
                            <img className="wastebin-icon5" src={this.binIconPath()} alt="wastebin icon" title={this.binIconTitle()}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            {this.state.itemDescrVisible ? <ItemDescription descr={this.props.item.description} /> : null}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(null, { 
    removeItem: removeItem,
    approveTicket: approveTicket
})(Ticket)