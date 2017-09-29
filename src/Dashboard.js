import React, { Component } from 'react';
import style from './style/style';
import CommentBox from './CommentBox';
import Contracts from './Contracts';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div style={ style.dashboard }>
                    <div className="container">
                        <ul style={style.dashboardTabHolder}>
                            <li style={style.dashboardTabs}>Job Orders</li>
                            <li style={style.dashboardTabs}>Contracts</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <Contracts contracts={this.props.contracts} />
                    <CommentBox
                        url='http://localhost:3001/api/comments'
                        pollInterval={2000} />
                </div>
            </div>
        )
    }
}

export default Dashboard;
