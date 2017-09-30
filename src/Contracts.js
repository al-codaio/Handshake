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
                        <Link to={{ pathname: '/agency/new' }}><div style={ style.btnDropdownMain }>Create Agency</div></Link>
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
                        {this.props.contracts.map((contract,index) => <tr key={index}>
                          <td>{index+1}</td>
                          <td><a href="#">{contract.name}</a></td>
                          <td>{contract.site}</td>
                          <td>{contract.type}</td>
                          <td>{contract.status}</td>
                        </tr>)}
                      </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Contracts;
