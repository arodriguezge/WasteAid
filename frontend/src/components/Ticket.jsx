import React, {Component} from 'react'
import { connect } from 'react-redux'
import EditTicket from './EditTicket'
import {disposalSites} from '../hardCodedContent/disposalSites'
import { removeItem, editItem, approveTicket } from '../actions/ticketActions'


// corresponding style files: _ticket.scss and _addItemForm.scss

function ItemDescription(props) {
        return <div>{props.descr}</div>
}

class CategoryHint extends Component {
    render() {
        return (
            <div className="popup-container-ticket">
                <div className="category-hint">
                    <p className="close-hint-char-ticket" onClick={this.props.hideHint} title="Close pop-up">&#10005;</p>
                    Please set a CATEGORY<br/>before editing or approving!
                </div>
            </div>
        )
    }
}

class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemDescrVisible: false,
            toggleSwitchChar: String.fromCharCode(9660),
            toggleHint: "show item description",
            isHidden: true,
            categoryHintHidden: true
        };
        this.toggleItemDescr = this.toggleItemDescr.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.category = React.createRef()
    }


    getAllWasteCategories() {
        let allCategoryArrays = [];
        disposalSites.forEach(function (arrayItem) {
            allCategoryArrays.push(arrayItem.categories);
        });

        // join arrays, and remove spaces only around commas
        let allCategoriesWithDoubles = allCategoryArrays.join().replace(/\s*,\s*/g, ",");
        let allCategoriesWithoutDoubles = Array.from(new Set(allCategoriesWithDoubles.split(','))).toString();

        return allCategoriesWithoutDoubles.split(",").sort();
    }

    handleChange() {
        this.props.editItem(
            this.props.item._id,
            this.props.item.name,
            this.props.item.description,
            this.props.item.bin,
            this.category.current.value
        );
        console.log(this.category.current.value)
    }

    // allows item approvement only if category is given
    confirmTicket() {
        if (this.props.item.category) {
            this.props.approveTicket(this.props.item._id)
        } else {
            this.setState({categoryHintHidden: false})
        }
    }

    // allows item editing only if category is given
    editTicket() {
        if (this.props.item.category) {
            this.toggleHidden()
        } else {
            this.setState({categoryHintHidden: false})
        }
    }

    toggleCategoryHint = () => {
        this.setState({
            categoryHintHidden: !this.state.categoryHintHidden
        })
    }

    // show / hide edit form
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
                        <td>
                            <div className="button-container-5">
                                <select className="form-control select-ticket" defaultValue={this.props.item.category} onChange={this.handleChange} ref={this.category}>
                                    <option value="">Select a category</option>
                                    {this.getAllWasteCategories().map((item, index) => {
                                        return <option value={item} key={index}>{item}</option>
                                    })}
                                </select>

                                {!this.state.categoryHintHidden && <CategoryHint hideHint={this.toggleCategoryHint}/>}
                                <button className="btn btn-outline-secondary btn-sm button5" onClick={() => {this.confirmTicket()}}>approve</button>
                                <button className="btn btn-outline-secondary btn-sm button5" onClick={() => {this.editTicket()}}>edit</button>
                                {!this.state.isHidden && <EditTicket item={this.props.item} editItem={this.props.editItem} toggleHidden={this.toggleHidden}/>}
                                <button className="btn btn-outline-secondary btn-sm button5" onClick={() => {this.props.removeItem(this.props.item._id)}}>remove</button>
                                <img className="wastebin-icon5" src={this.binIconPath()} alt="wastebin icon" title={this.binIconTitle()}/>
                            </div>
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
    editItem: editItem,
    approveTicket: approveTicket
})(Ticket)