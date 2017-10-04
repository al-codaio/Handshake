import React, { Component } from 'react';
import style from './style/header';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div style={style.header} className="row">
                    <div className="col-md-8 logo">
                        <Link to={{ pathname: '/' }}>
                            <img alt="Handshake logo" src={require('./img/handshake-logo.png')} />
                            <p style={style.subtext}>Universal migrant worker contracts on the blockchain</p>
                        </Link>
                    </div>

                    <div className="col-md-4">
                        <NavLink style={style.headerLink} to={{ pathname: '/identity' }} activeClassName='header-active'>Identity</NavLink>
                        <NavLink exact style={style.headerLink} to={{ pathname: '/dashboard' }} activeClassName='header-active'>Dashboard</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
