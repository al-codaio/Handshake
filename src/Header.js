import React, { Component } from 'react';
import style from './style/header';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div style={style.header} className="row">
                    <div className="col-md-8 logo">
                        <Link to={{ pathname: '/' }}>
                            <img src={require('./img/handshake-logo.png')} />
                            <p style={style.subtext}>Universal migrant worker contracts on the blockchain</p>
                        </Link>
                    </div>

                    <div className="col-md-4">
                        <Link style={style.headerLink} to={{ pathname: '/identity' }} activeStyle={{ fontWeight: '700' }}>Identity</Link>
                        <Link style={style.headerLink} to={{ pathname: '/' }} activeStyle={{ fontWeight: '700' }}>Dashboard</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;