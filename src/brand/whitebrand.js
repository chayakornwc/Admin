import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './white-brand.png';

class Whitebrand extends Component {
   
    render() {
        const {styles} = this.props;
        return (
            <div>
            <img style={styles} src={logo} alt="lpru"  />
            </div>
        );
    }
}
export default Whitebrand;
