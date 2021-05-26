import React, { Component } from 'react';
import axios from 'axios';
import {confirm} from 'react-confirm-box';

const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel"
    }
  }
const onClick = async () => {
    const result = await confirm("confirm the operation or cancel",options);
    if (result) {
      console.log("You click yes!");
      return;
    }
    console.log("You click No!");
  };


function Request(props) {
    return (
        <tr>
        <td>{props.request.client}</td>
        <td>{props.request.item}</td>
        <td>{props.request.from}</td>
        <td>{props.request.to}</td>
        <td>{props.request.cost}</td>
        <td>{props.request.date.substring(0,10)}</td>
        <td>{props.request.isActive}</td>
        
    </tr>
    )
}


export default class Update extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            requests:[],
            request:{}
            
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/requests/')
            .then(res => {
                this.setState({requests:res.data})
            })
            .catch(err => console.log(err))
            
        
    }
    
    handleDelete(){
        
        
    }
    handleInput(e){
        this.setState({id:e.target.value});
        console.log(this.state.id);
        
    }
    handleClick(){
        console.log(this.state.requests)
    }
    displayRequest(){
        return this.state.requests.filter(currentRequest => currentRequest._id === this.state.id)
        .map(currentRequest => {return <Request request ={currentRequest} key={currentRequest._id}/>})
        
    }
    render() {
        return (
            <div>
                <h3>Details of  the request</h3>
                <div style={{border:"2px solid black" , margin:"30px 10px" ,padding:"30px"}}>  
                    <table className="table">
                        <tr className="thead-light">
                            <th>Client</th>
                            <th>Item</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Cost</th>
                            <th>Date</th>
                            <th>is Active</th>
                            
                        </tr>
                        <tbody>
                            {this.displayRequest()}
                        </tbody>
                        </table>
                </div>
                <div className="input-group">
                    <div className="form-outline">
                      <input type="search"  className ="form-control" 
                      value={this.state.id} onChange={this.handleInput.bind(this)}/>
                    </div>
                    <button type="button" className="btn btn-outline-primary"
                    onClick={this.handleClick.bind(this)}>
                      Activate Request
                    </button>
                    <button className="btn btn-outline-danger" onClick={onClick}>Delete Request</button>
                </div>   
                
            </div>
        )
    }
}

