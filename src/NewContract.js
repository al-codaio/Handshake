import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import style from './style/contracts';

class NewContract extends Component {
    constructor(props){
      super(props)

      this.state = {
        inputs: {
          name: '',
          site: ''
        }
      };
    }

    setInput(event){
      this.setState({
        inputs: {
          [event.target.id]: event.target.value
        }
      })
    }

    createNewContract(){
      const jsonString = JSON.stringify(this.state.inputs);
      console.log(jsonString);
      console.log(this.props.appContext.userAccount);
      console.log(this.state.inputs);
      this.props.appContext.handshakeContractInstance
        .createLaborContract(jsonString, {from: this.props.appContext.userAccount, gas: 4000000});
    }

    render() {
        return (
            <div className="container">
                <h2>New Contract</h2>
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" value={this.state.inputs.name} id="name" onChange={(e) => this.setInput(e)}></input>
                </div>
                <div>
                  <label htmlFor="site">Site</label>
                  <input type="text" value={this.state.inputs.site} id="site" onChange={(e) => this.setInput(e)}></input>
                </div>
                <button onClick={() => this.createNewContract()}>Create</button>
                <Link to={{ pathname: '/' }}><p>Back to Dash</p></Link>
            </div>
        )
    }
}

export default NewContract;
