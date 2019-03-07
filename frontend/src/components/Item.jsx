import React, {Component} from 'react'

// corresponding style file: _item.scss

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
        switch(this.props.item.bin) {
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
        switch(this.props.item.bin) {
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
            <div className="item-card1" id="search-result">
                <div>
                    <div className="desrc-toggle-switch1" onClick={this.toggleItemDescr} title={this.state.toggleHint}>
                        &nbsp;{this.state.toggleSwitchChar}
                    </div>
                    <div className="card-title1">{this.props.item.name}</div>
                    {this.state.itemDescrVisible ? <ItemDescription descr={this.props.item.description}/> : null}

                </div>
                <div>
                    <img className="wastebin-icon1" src={this.binIconPath()} alt="wastebin icon" title={this.binIconTitle()}/>
                </div>
            </div>
        )
    }
}

export default Item