import React, { Component } from 'react'
import { disposalSites } from '../hardCodedContent/disposalSites'
import Footer from './Footer'
import Header from './Header'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

// corresponding style files: _mapSearch.scss and a link in index.html


class MapSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wasteCategory: "",
            position: [52.513961, 13.403421],
            mapZoom: 10
        };

        this.mapRef = React.createRef();
    }


    componentDidMount() {
        if (this.props.match.params.rubbishCategory && this.props.match.params.rubbishCategory !== "default") {
            this.setState({ wasteCategory: this.props.match.params.rubbishCategory })
        } else {
            this.setState({ wasteCategory: "" })
        }
    }


    getAllWasteCategories() {
        let allCategoryArrays = [];

        disposalSites.forEach(function (arrayItem) {
            allCategoryArrays.push(arrayItem.categories);
        });

        let allCategoriesWithDoubles = allCategoryArrays.flat();
        return [...new Set(allCategoriesWithDoubles)].sort()
    }


    recenterResizeMap() {
        const map = this.mapRef.current;
        map.leafletElement.setView([52.513961, 13.403421], 10);
        map.leafletElement.closePopup()
    }


    setWasteCategory(category) {
        this.setState({ wasteCategory: category });
        this.recenterResizeMap();
    }


    render() {
        return (
            <React.Fragment>
                <Header ref={this.headerRef} />
                <div className="container map-container">

                    <h4 className="pt-4 h4-map-search">Waste Category Search</h4>
                    <p className="p-map-search">
                        Find disposal sites for big garbage amounts and special waste.
                    </p>

                    <div className="kategory-search-buttons">
                        {this.getAllWasteCategories().map((item, index) => {
                            return (
                                <button className="btn btn-secondary btn-sm category-button" key={index}
                                    onClick={() => this.setWasteCategory(item)}>{item}</button>
                            )
                        })}
                    </div>
                    <div className="map-search-hint">
                        Disposal locations accepting waste category <b>{this.state.wasteCategory}</b>:
                    </div>

                    <Map
                        center={this.state.position}
                        zoom={this.state.mapZoom}
                        ref={this.mapRef}
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />

                        {
                            disposalSites.map((item, index) => {
                                if (item.categories.indexOf(this.state.wasteCategory) > -1) {
                                    return (
                                        <Marker position={[item.coordinates.latitude, item.coordinates.longitude]}
                                            key={index}>
                                            <Popup>
                                                <b>{item.name}</b><br />
                                                {item.address}<br />
                                                <hr />
                                                <b>Opening hours</b><br />
                                                Monday: {item.openingHours.monday}<br />
                                                Tuesday: {item.openingHours.tuesday}<br />
                                                Wednesday: {item.openingHours.wednesday}<br />
                                                Thursday: {item.openingHours.thursday}<br />
                                                Friday: {item.openingHours.friday}<br />
                                                Saturday: {item.openingHours.saturday}<br />
                                                Sunday: {item.openingHours.sunday}<br />
                                                <hr />
                                                Phone: {item.contact.phone}<br />
                                                Email: {item.contact.email}
                                            </Popup>
                                        </Marker>
                                    )
                                }
                                return ""
                            })
                        }
                    </Map>

                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default MapSearch