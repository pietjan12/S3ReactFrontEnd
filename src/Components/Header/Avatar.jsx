import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AvatarImage from 'img/tempavatar.png';
import './Avatar.css'

class Avatar extends Component {
    render() {
        return (
        <div className="avatar">
            <div>
                <Link to="/Login">
                <img src={AvatarImage} alt="avatar" />
                </Link>
            </div>
            <span>Name</span>
        </div>
        );
    }
}

export default Avatar;