import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import style from './style/contracts';


class Contracts extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>Agency Name</h1>
                        <p>Verified!</p>
                    </div>

                    <div className="col-md-4">
                        <Link to={{ pathname: '/contract/new' }}><div style={ style.btnDropdownMain }>New Contract</div></Link>
                    </div>
                </div>

                <div>
                    <table>
                      <thead>
                        <tr>
                            <th>#</th>
                            <th>Contract Name</th>
                            <th>Job Site</th>
                            <th>Job Type</th>
                            <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>1</td>
                            <td><a href="#">Home caretaker for elderly home</a></td>
                            <td>Hospital 7, Saudia Arabia</td>
                            <td>caretaker</td>
                            <td>unsigned</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Contracts;
