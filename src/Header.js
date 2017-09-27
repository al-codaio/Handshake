import React, { Component } from 'react';
import style from './style/header';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <a href="#">
                            <img src={require('./img/handshake-logo.png')} />
                        </a>
                        <p>Universal migrant worker contracts on the blockchain</p>
                    </div>

                    <div className="col-md-4">
                        <a href="#">Dashboard</a>
                        <a href="#">Identity</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;