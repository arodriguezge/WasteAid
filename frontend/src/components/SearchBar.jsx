import React from 'react';

class SearchBar extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     }
    // }


    render() {
        return (
            <React.Fragment>

                <div className="container  p-5">
                    <form class="form-inline justify-content-center  my-2 my-lg-0">
                        <input class="form-control mr-sm-2 rounded-pill" type="search" placeholder="Type item name, please" aria-label="Search" />
                        <button class="btn btn-outline-success my-1 my-sm-0" type="submit">Go</button>
                    </form>
                </div>


            </React.Fragment>
        )
    }
}

export default SearchBar;