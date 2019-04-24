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
            wasteCategory: "SELECTED",
            position: [52.513961, 13.403421],
            mapZoom: 10
        };

        this.mapRef = React.createRef();
    }


    componentDidMount() {
        if (this.props.match.params.rubbishCategory && this.props.match.params.rubbishCategory !== "default") {
            this.setState({ wasteCategory: this.props.match.params.rubbishCategory })
        } else {
            this.setState({ wasteCategory: "SELECTED" })
        }
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
        let categoryStyle;

        if (this.state.wasteCategory !== "SELECTED") {
            categoryStyle = { fontWeight: "bold" }
        } else {
            categoryStyle = { fontWeight: "normal" }
        }

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
                                <button className="btn btn-outline-secondary btn-sm category-button" key={index}
                                    onClick={() => this.setWasteCategory(item)}>{item}</button>
                            )
                        })}
                    </div>
                    <div className="map-search-hint">
                        Disposal locations accepting the waste category <span style={categoryStyle}>{this.state.wasteCategory.toLowerCase()}</span>:
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
                                        <Marker position={[item.latitude, item.longitude]}
                                            key={index}>
                                            <Popup>
                                                <b>{item.name}</b><br />
                                                {item.address}<br />
                                                <hr />
                                                <b>Opening hours</b><br />
                                                Monday: {item.monday}<br />
                                                Tuesday: {item.tuesday}<br />
                                                Wednesday: {item.wednesday}<br />
                                                Thursday: {item.thursday}<br />
                                                Friday: {item.friday}<br />
                                                Saturday: {item.saturday}<br />
                                                Sunday: {item.sunday}<br />
                                                <hr />
                                                Phone: {item.phone}<br />
                                                Email: {item.email}
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