import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class PickUp extends Component {
    //get all pending orders here so we can charge what we want to this pickup
    //orders chosen agent state will belong to agent of this pickup with agent code
    //updatemany of mongoose 
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            time:'',
            agentCode:'',
            order1:'',
            order2:'',
            order3:'',
            order4:'',
            order5:'',
            orders:[]
        }
        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleAgentCode = this.handleAgentCode.bind(this);
        this.handleOrder1 = this.handleOrder1.bind(this);
        this.handleOrder2 = this.handleOrder2.bind(this);
        this.handleOrder3 = this.handleOrder3.bind(this);
        this.handleOrder4 = this.handleOrder4.bind(this);
        this.handleOrder5 = this.handleOrder5.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLog = this.handleLog.bind(this);
    }
    handleSubmit(){
        this.setState(state =>({orders:[...state.orders,this.state.order1,this.state.order2,this.state.order3,
            this.state.order4,this.state.order5]}));
        
    }
    handleLog(){
        //we will doing foreach loop to change status with axios
        this.state.orders.forEach(order => console.log(order));
    }
    handleDate=(date)=>{
        this.setState({date:date});
        
    }
    handleTime(e){
        this.setState({time:e.target.value});
    }
    handleAgentCode (e){
        this.setState({agentCode:e.target.value});
    }
    handleOrder1 (e){
        this.setState({order1:e.target.value})
        
    }
    handleOrder2 (e){
        this.setState({order2:e.target.value})
        
    }
    handleOrder3 (e){
        this.setState({order3:e.target.value})
        
    }
    handleOrder4 (e){
        this.setState({order4:e.target.value})
        
    }
    handleOrder5 (e){
        this.setState({order5:e.target.value})
        
    }
    
    render() {
        const {date,time,agentCode,order1,order2,order3,order4,order5} = this.state;
        return (
            <div>
                <h2>list of pending orders</h2>
                <label>Date</label><select></select>
                <label>Res Code</label><select></select>
                <label>Status</label><select></select>
                <div> pending orders will appear here</div>
                <div>
                    <div className="form-group">
                        <label>Date</label>
                        <div>
                            <DatePicker selected={date} onChange={this.handleDate}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Time</label>
                        <input type="text" onChange={this.handleTime} value={time}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Agent Code</label>
                        <input type="text" onChange={this.handleAgentCode} value={agentCode}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Order 1</label>
                        <input type="text" onChange={this.handleOrder1} value={order1}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Order 2</label>
                        <input type="text" onChange={this.handleOrder2} value={order2}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Order 3</label>
                        <input type="text" onChange={this.handleOrder3} value={order3}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Order 4</label>
                        <input type="text" onChange={this.handleOrder4} value={order4}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Order 5</label>
                        <input type="text" onChange={this.handleOrder5} value={order5}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <button  className="btn btn-primary" 
                        onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
                <div>
                    <button onClick={this.handleLog}>log orders</button>
                </div>
            </div>
        )
    }
}
