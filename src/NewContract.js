import React, { Component } from 'react';
import style from './style/contracts';

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
      console.log('would add contract to Ethereum here.')
    }

    render() {
        return (
            <div className="container">
                <h2>New Contract</h2>
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" value={this.state.name} id="name" onChange={(e) => this.setInput(e)}></input>
                </div>
                <div>
                  <label htmlFor="site">Site</label>
                  <input type="text" value={this.state.site} id="site" onChange={(e) => this.setInput(e)}></input>
                </div>
                <button onClick={() => this.createNewContract()}>Create</button>
            </div>
        )
    }
}

export default NewContract;
