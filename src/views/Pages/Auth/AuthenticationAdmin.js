import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//HOC (Higher-Order Components)
import { Redirect } from "react-router-dom";
export default function (ComposedComponent) {
    class AuthenticationAdmin extends Component {
            static contextTypes = {
             router: PropTypes.object
                }
            componentWillMount() {
                    if (this.props.data) {
                    if (!this.props.data.permission.includes(1)) {
                        this.context.router.history.push('/404');
                                }
                            }
                    }
                componentWillUpdate(nextProps) {
                    if (nextProps.data) {
                            if (!nextProps.data.permission.includes(1)) {
                                this.context.router.history.push('/404');
                                
                                        }
                                    }
                                }

            render() {
                return <ComposedComponent {...this.props} />
                }
                }
        function mapStateToProps(state) {
            return {
            authenticated: state.authReducers.authenticated,
            data: state.authReducers.data
                };
            }
    return connect(mapStateToProps)(AuthenticationAdmin);             
    }