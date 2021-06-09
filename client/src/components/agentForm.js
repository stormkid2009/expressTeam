
import React, {Component} from 'react';
import axios from 'axios';


export default class Agent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            phone : '',
            agentCode: '',
            status : ''
        }
        this.handleName = this.handleName.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleAgentCode = this.handleAgentCode.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
    }
    

     handleName =(e)=>{
        this.setState({name:e.target.value});
        
    }

    handlePhone =(e)=>{
        this.setState({phone:e.target.value});
        
    }

    handleAgentCode =(e)=>{
        this.setState({agentCode:e.target.value})
    }


    handleStatus =(e)=>{
        this.setState({status:e.target.value});
        
    }

    
    handleSubmit = () =>{
        
        const agent = {
            name:this.state.name,
            phone:this.state.phone,
            agentCode:this.state.agentCode,
            status:this.state.status,
            
        }
        axios.post('http://localhost:5000/agents/add', agent)
        .then(res => console.log(res.data));

        window.location = '/';

    }
    render(){
        return (
            <div>
                <h3>Add new Agent...</h3>
                <div>
                    <div className="form-group">
                        <label>Agent full name</label>
                        <input type="text" onChange={this.handleName} value={this.state.name}
                        className="form-control" />
                    </div>
                    
                    <div className="form-group">
                        <label>Agent Phone ..</label>
                        <input type="text" onChange={this.handlePhone} value={this.state.phone}
                        className="form-control"  />
                    </div>

                    <div className="form-group">
                        <label>Agent Code ..</label>
                        <input type="text" onChange={this.handleAgentCode} value={this.state.phone}
                        className="form-control"  />
                    </div>

                    
                    <div className="form-group">
                        <label>Status of Agent</label>
                        <input type="text" onChange={this.handleStatus} value={this.state.status}
                        className="form-control"  />
                    </div>
                    
                    <div className="form-group">
                        <button  className="btn btn-primary"
                        onClick={this.handleSubmit}>Submit</button>
                    </div>
    
    
    
                </div>
                
            </div>
        )
    }
    
}


