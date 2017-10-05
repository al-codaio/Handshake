import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import style from './style/contracts';


class Contracts extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>{this.props.appContext.userDetails.name}</h1>
                    </div>

                    <div className="col-md-4">
                        <Link to={{ pathname: '/contract/new' }}><div style={Object.assign({}, style.btnDropdownMain, style.dashBtn)}>New Contract</div></Link>
                        {/* <Link to={{ pathname: '/agency/new' }}><div style={Object.assign({}, style.btnDropdownMain, style.dashBtn)}>Create Agency</div></Link> */}
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
                            <th>No. of signees</th>
                        </tr>
                      </thead>

                      <tbody>
                        {this.props.contracts.map((contract,index) => <tr key={index}>
                          <td><span style={style.contractNum}>{index+1}</span></td>
                          <td><Link style={style.contractLink} to={{ pathname: '/contract/' + contract.address }}>{contract.name}</Link></td>
                          <td>{contract.site}</td>
                          <td>{contract.type}</td>
                          <td>0</td>
                        </tr>)}
                      </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Contracts;
