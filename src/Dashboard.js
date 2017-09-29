import React, { Component } from 'react';
import style from './style/style';
import CommentBox from './CommentBox';
import Contracts from './Contracts';

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
                <Contracts />
                <CommentBox
                    url='http://localhost:3001/api/comments'
                    pollInterval={2000} />
            </div>
        )
    }
}

export default Dashboard;