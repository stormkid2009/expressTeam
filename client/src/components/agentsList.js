import React,{Component} from 'react';
import axios from 'axios';
import Agent from './agent';


export default class AgentsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            agents:[]
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/agents/")
        .then(response => this.setState({agents:response.data}))
        .catch(err => console.log(err))
    }
    busyAgentsList(){
        return this.state.agents.filter(currentAgent => currentAgent.status === "busy").map(currentAgent =>{
            return <Agent agent={currentAgent} />;
        })
    }
    freeAgentsList(){
        return this.state.agents.filter(currentAgent => currentAgent.status === "free").map(currentAgent =>{
            return <Agent agent={currentAgent} />;
        })
    }
    render(){
        return (
            <div>
                <h3>List of busy agents</h3>
                    <div style={{border:"2px solid black" , margin:"30px 10px" ,padding:"30px"}}>
                        
                        <table className="table">
                            <tr className="thead-light">
                                <th>Agent code</th>
                                <th>Agent Name</th>
                                <th>Agent Phone Number</th>
                                <th>Agent status</th>
                                
                            </tr>
                            <tbody>
                                {this.busyAgentsList()}
                            </tbody>
                            </table>
                    </div>
                    <h3>List of free agents</h3>
                    <div style={{border:"2px solid black" , margin:"30px 10px" ,padding:"30px"}}>
                        
                        <table className="table">
                            <tr className="thead-light">
                                <th>Agent code</th>
                                <th>Agent Name</th>
                                <th>Agent Phone Number</th>
                                <th>Agent status</th>
                                
                                
                            </tr>
                            <tbody>
                                {this.freeAgentsList()}
                            </tbody>
                            </table>
                    </div>
            </div>
        )
    }
    
}


