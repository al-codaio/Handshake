import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import style from './style/contracts';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

class NewContract extends Component {
    constructor(props){
      super(props)

      this.state = {
        inputs: {
          name: '',
          site: '',
          type: ''
        }
      };
    }

    setInput(event){
      let currentInputs = this.state.inputs;
      currentInputs[event.target.id] = event.target.value;
      this.setState({
        inputs: currentInputs
      });
    }

    createNewContract(){
      const jsonString = JSON.stringify(this.state.inputs);
      this.props.appContext.handshakeContractInstance
        .createLaborContract(jsonString, {from: this.props.appContext.userAccount, gas: 4000000});

        window.location.href= "/";
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
                      <div class="mui-checkbox">
                        <label>
                          <input onChange={(e) => this.setInput(e)} id="transport" type="checkbox" value="transport" />
                          Free Transport
                        </label>
                      </div>

                      <div class="mui-checkbox">
                        <label>
                          <input onChange={(e) => this.setInput(e)} id="food" type="checkbox" value="food" />
                          Free Food
                        </label>
                      </div>

                      <div class="mui-checkbox">
                        <label>
                          <input onChange={(e) => this.setInput(e)} id="housing" type="checkbox" value="housing" />
                          Free Housing
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
