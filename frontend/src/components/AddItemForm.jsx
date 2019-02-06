import React, {Component} from 'react'

class AddItemForm extends Component {
    name = React.createRef()
    description = React.createRef()
    bin = React.createRef()

    handleSubmit = event => {
        event.preventDefault();
        const name = this.name.current.value
        const description = this.description.current.value
        const bin = this.bin.current.value
        this.props.addItem(name, description, bin)
        event.currentTarget.reset()
    }

    render() {
        return (
                <div className="container-small p-4 mt-5 text-dark rounded item-form">
                    <h2 className="font-weight-bold text-center m-2 mb-5">Send us a new item</h2>
                    <form onSubmit={this.handleSubmit}>
                        <h5>Waste item name:</h5>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Type name of waste item here..." ref={this.name}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="description">Description</label><br/>
                            <textarea type="text" className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Type item description here..." ref={this.description}/><br/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bin" className="my-1 mr-2">Bin</label><br/>
                            <select className="custom-select my-1 mr-sm-2" ref={this.bin}>
                                <option selected>Choose...</option>
                                <option value="blue">blue bin (paper, cardboard)</option>
                                <option value="green">green bin (colored glass)</option>
                                <option value="white">white bin (white glass)</option>
                                <option value="yellow">yellow/orange bin (plastic, metal, Green Dot)</option>
                                <option value="brown">brown bin (biodegradable goods)</option>
                                <option value="grey">grey/black bin (everything else)</option>
                                <option value="none">none of the bins (other waste disposal)</option>
                            </select>
                        </div>
                        <div className="input-group-append">
                            <button className="btn btn-outline-dark m-1" type="submit" >
                                <i className="fa fa-plus" aria-hidden="true" />&nbsp;Add item
                            </button>
                            <button className="btn btn-outline-dark m-1" onClick={this.props.toggleHidden} >
                                <i className="fa fa-plus" aria-hidden="true" />&nbsp;Cancel
                            </button>
                        </div>
                    </form>
                </div>
        )
    }
}

export default AddItemForm