import React, { Component } from 'react';
import propTypes from 'prop-types';
class SearchBar extends Component {
    constructor(props){
        super(props);
    }
    static propTypes ={
        onSearchTermChange:propTypes.func.isRequired,
        placeholder:propTypes.string
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default SearchBar;