import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import AboutUs from './AboutUs'
import RecommendedLinks from './RecommendedLinks'
import SearchArea from './SearchArea'
import AddItemForm from './AddItemForm'
import ItemsList from './ItemsList'
import TicketList from './TicketList'
import axios from 'axios'

const withProps = (Component, props) => {
    return (matchProps) => {
        return <Component {...props} {...matchProps} />
    }
}

const URI = `http://localhost:5000` //WE HAVE TO REPLACE WITH IT IN AXIOS CALLS

class Router extends React.Component {
    state = {
        items: {}
    }

    loadItems = () => {
        axios.get(`http://localhost:5000/api/items/`)
            .then((res) => {
                this.setState({
                    items: { ...res.data }
                })
            })
    }

    addItem = (name, description, bin) => {
        const item = {
            name: name,
            description: description,
            bin: bin
        }
        axios.post(`http://localhost:5000/api/items/create`, item)
            .then(res => {
                console.log(res.data);
            })
    }
    editItem = (id, name, description, bin) => {
        const item = {
            name: name,
            description: description,
            bin: bin
        }
        axios.patch(`http://localhost:5000/api/items/edit/${id}`, item)
            .then(res => {
                this.loadItems()
            })
    }
    approveItem = (id) => {
        const item = {
            approved: true
        }
        axios.patch(`http://localhost:5000/api/items/edit/${id}`, item)
            .then(res => {
                this.loadItems()
            })
    }
    removeItem = (id) => {
        axios.delete(`http://localhost:5000/api/items/remove/${id}`)
            .then(res => {
                this.loadItems()
            })
    }

    componentDidMount = () => {
        this.loadItems()
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={withProps(App, { items: this.state.items, loadItems: this.loadItems })} />
                    <Route path="/aboutUs" component={AboutUs} />
                    <Route path="/recommendedLinks" component={RecommendedLinks} />

                    <Route path="/add" component={withProps(AddItemForm, { addItem: this.addItem })} />
                    <Route path="/items" component={withProps(ItemsList, { items: this.state.items })} />
                    <Route path="/admin/tickets" component={withProps(TicketList, { items: this.state.items, editItem: this.editItem, removeItem: this.removeItem, approveItem: this.approveItem })} />
                    <Route path="/searchArea" component={withProps(SearchArea, { items: this.state.items })} />
                    <Route path="/add" component={withProps(AddItemForm, { addItem: this.addItem })} />
                    <Route path="/items" component={withProps(ItemsList, { items: this.state.items })} />
                    <Route path="/admin/tickets" component={withProps(TicketList, { items: this.state.items, editItem: this.editItem, removeItem: this.removeItem, approveItem: this.approveItem })} />

                    {/* <Route path="/adminFrame" component={AdminFrame} /> */}
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router