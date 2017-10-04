import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AgencyBox from './AgencyBox';
// import style from './style/style';

class NewAgency extends Component {
    render() {
        return (
            <div className="container">
                <h1>Register Your Agency</h1>
                <div>
                    <AgencyBox
                      url='http://localhost:3001/api/agencies'
                      pollInterval={2000} />
                </div>
                <Link to={{ pathname: '/' }}><p>Back to Dash</p></Link>
            </div>

        )
    }
}

export default NewAgency;
