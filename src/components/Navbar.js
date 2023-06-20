import React from "react";

class Navbar extends React.Component {
    
    render () {
        return (
            <div className="nav">
                <div className="search-container">
                    <input placeholder="search for movies here" />
                    <button className="search-btn">search</button>
                </div>
            </div>
        );
    }
}

export default Navbar;
