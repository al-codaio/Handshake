import React, { Component } from 'react';
import style from './style/style';

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <ul>
                    <li>Contracts</li>
                    <li>Job Orders</li>
                </ul>
            </div>
        )
    }
}

export default Dashboard;