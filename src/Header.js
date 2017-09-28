import React, { Component } from 'react';
import style from './style/header';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div style={style.header} className="row">
                    <div className="col-md-8">
                        <a href="#">
                            <img src={require('./img/handshake-logo.png')} />
                        </a>
                        <p style={style.subtext}>Universal migrant worker contracts on the blockchain</p>
                    </div>

                    <div className="col-md-4">
                        <a style={style.headerLink} href="#">Identity</a>
                        <a style={Object.assign({}, style.headerLink, style.headerLinkActive)} href="#">Dashboard</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;