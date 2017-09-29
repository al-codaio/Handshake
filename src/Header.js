import React, { Component } from 'react';
import style from './style/header';
import { Link } from 'react-router-dom';

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
                        <Link style={style.headerLink} to={{ pathname: '/identity' }}>Identity</Link>
                        <Link style={Object.assign({}, style.headerLink, style.headerLinkActive)} to={{ pathname: '/' }}>Dashboard</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;