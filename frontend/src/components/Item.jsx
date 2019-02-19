import React, {Component} from 'react'

// corresponding style file: _itemCard.scss

class ItemDescription extends Component {
    render() {
        return (
            <div>
                {this.props.descr}
            </div>
        )
    }
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
                return "../images/bin-blue-no-label.svg";
            case 'green':
                return "../images/bin-green-no-label.svg";
            case 'white':
                return "../images/bin-white-no-label.svg";
            case 'yellow':
                return "../images/bin-yellow-no-label.svg";
            case 'brown':
                return "../images/bin-brown-no-label.svg";
            case 'grey':
                return "../images/bin-darkgray-no-label.svg";
            case 'none':
                return "../images/bin-red-no-label-no-hole.svg";
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
            <div className="item-card" id="search-result">
                <div>
                    <div className="card-title">{this.props.item.name}</div>
                    <div className="desrc-toggle-switch" onClick={this.toggleItemDescr} title={this.state.toggleHint}>
                        &nbsp;{this.state.toggleSwitchChar}
                    </div>
                    { this.state.itemDescrVisible ? <ItemDescription descr={this.props.item.description}/> : null }

                </div>
                <div>
                    <img className="wastebin-icon" src={this.binIconPath()} alt="wastebin icon" title={this.binIconTitle()}/>
                </div>
            </div>
        )
    }
}

export default Item