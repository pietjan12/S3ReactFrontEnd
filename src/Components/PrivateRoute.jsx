import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//private route component used to restrict page access to logged in users only.
const PrivateRoute = ({ component: Component, auth: auth, ...rest }) => (
    <Route
        {...rest}
        render={props =>
        auth.isAuthenticated === true ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
        }
    />
);

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.account
});

export default connect(mapStateToProps)(PrivateRoute);