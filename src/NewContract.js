import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import style from './style/contracts';

class NewContract extends Component {
    constructor(props){
      super(props)

      this.state = {
        inputs: {
          name: '',
          site: '',
          type: '',
          vacation: '',
          sick: '',
          transport: false,
          food: false,
          housing: false
        }
      };
    }

    setInput(event){
      let currentInputs = this.state.inputs;
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      currentInputs[event.target.id] = value;

      this.setState({
        inputs: currentInputs
      });
    }

    createNewContract(){
      const jsonString = JSON.stringify(this.state.inputs);
      this.props.appContext.handshakeContractInstance
        .createLaborContract(jsonString, {from: this.props.appContext.userAccount, gas: 2000000});

      this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className="container newContract" style={style.newContract}>
              <form className="mui-form">
                <h2>New Contract</h2>

                <div className="container">

                  <div className="row">
                    <h3>Job Details</h3>
                    <div className="col-md-6">
                      <div className="mui-textfield">
                        <input type="text" value={this.state.inputs.name} id="name" onChange={(e) => this.setInput(e)}></input>
                        <label htmlFor="name">Contract Name (for your records)</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mui-textfield">
                        <input type="text" value={this.state.inputs.site} id="site" onChange={(e) => this.setInput(e)}></input>
                        <label htmlFor="site">Site of Employment</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mui-textfield">
                        <input type="text" value={this.state.inputs.type} id="type" onChange={(e) => this.setInput(e)}></input>
                        <label htmlFor="type">Employee Position</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mui-textfield">
                        <input type="text" value={this.state.inputs.duration} id="duration" onChange={(e) => this.setInput(e)}></input>
                        <label htmlFor="type">Contract Duration</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mui-textfield">
                        <input type="text" value={this.state.inputs.salary} id="salary" onChange={(e) => this.setInput(e)}></input>
                        <label htmlFor="type">Monthly Salary</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mui-textfield">
                        <input type="text" value={this.state.inputs.hours} id="hours" onChange={(e) => this.setInput(e)}></input>
                        <label htmlFor="type">Hours per Day (max)</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mui-textfield">
                        <input type="text" value={this.state.inputs.days} id="days" onChange={(e) => this.setInput(e)}></input>
                        <label htmlFor="type">Days per Week (max)</label>
                      </div>
                    </div>
                  </div>


                  <div className="row">
                    <h3>Benefits</h3>

                    <div className="col-md-6">
                      <div className="mui-textfield">
                        <input type="text" value={this.state.inputs.vacation} id="vacation" onChange={(e) => this.setInput(e)}></input>
                        <label htmlFor="vacation">Vacation Leave</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mui-textfield">
                        <input type="text" value={this.state.inputs.sick} id="sick" onChange={(e) => this.setInput(e)}></input>
                        <label htmlFor="sick">Sick Leave</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mui-textfield">
                        <input type="text" value={this.state.inputs.termination} id="termination" onChange={(e) => this.setInput(e)}></input>
                        <label htmlFor="termination">Termination Advance</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mui-textfield">
                        <input type="text" value={this.state.inputs.insurance} id="insurance" onChange={(e) => this.setInput(e)}></input>
                        <label htmlFor="insurance">Insurance Details</label>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="mui-checkbox">
                        <label>
                          <input onChange={(e) => this.setInput(e)} id="transport" type="checkbox" value="true" checked={this.state.inputs.transport} />
                          Free Transport
                        </label>
                      </div>

                      <div className="mui-checkbox">
                        <label>
                          <input onChange={(e) => this.setInput(e)} id="food" type="checkbox" value="true" checked={this.state.inputs.food} />
                          Free Food
                        </label>
                      </div>

                      <div className="mui-checkbox">
                        <label>
                          <input onChange={(e) => this.setInput(e)} id="housing" type="checkbox" value="true" checked={this.state.inputs.housing} />
                          Free Housing
                        </label>
                      </div>

                      <div className="mui-checkbox">
                        <label>
                          <input onChange={(e) => this.setInput(e)} id="medical" type="checkbox" value="true" checked={this.state.inputs.medical} />
                          Free Emergency Medical
                        </label>
                      </div>

                      <div className="mui-checkbox">
                        <label>
                          <input onChange={(e) => this.setInput(e)} id="dental" type="checkbox" value="true" checked={this.state.inputs.dental} />
                          Free Emergency Dental
                        </label>
                      </div>
                    </div>

                  </div>
                </div>

                <button type="button" style={Object.assign({}, style.btnDropdownMain, style.centerBtn) } onClick={() => this.createNewContract()}>Create Contract</button>

                <p><Link to={{ pathname: '/' }}></Link></p>
              </form>
            </div>
        )
    }
}

export default NewContract;
