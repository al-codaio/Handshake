import React, { Component } from 'react';
import style from './style/style';

class Dashboard extends Component {
    render() {
        return (
            <div style={ style.dashboard }>
                <div className="container">
                    <ul style={style.dashboardTabHolder}>
                        <li style={style.dashboardTabs}>Job Orders</li>
                        <li style={style.dashboardTabs}>Contracts</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Dashboard;