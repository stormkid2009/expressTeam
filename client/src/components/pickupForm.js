import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Order from './order';

export default class PickUp extends Component {
    //get all pending orders here so we can charge what we want to this pickup
    //orders chosen agent state will belong to agent of this pickup with agent code
    //updatemany of mongoose 
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            notes:'',
            agentID:'',
            order1:'',
            order2:'',
            order3:'',
            order4:'',
            order5:'',
            order6:'',
            orders:[]
            
        }
        this.handleDate = this.handleDate.bind(this);
        this.handleNotes = this.handleNotes.bind(this);
        this.handleAgentID = this.handleAgentID.bind(this);
        this.handleOrder1 = this.handleOrder1.bind(this);
        this.handleOrder2 = this.handleOrder2.bind(this);
        this.handleOrder3 = this.handleOrder3.bind(this);
        this.handleOrder4 = this.handleOrder4.bind(this);
        this.handleOrder5 = this.handleOrder5.bind(this);
        this.handleOrder6 = this.handleOrder6.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.chargeOrders = this.chargeOrders.bind(this);
        
    }

    componentDidMount() {
        axios.get("http://localhost:5000/orders/")
        .then(res => this.setState({orders:res.data}))
        .catch(err => console.log(err))
    }

    chargeOrders =()=>{
        
      //we will doing foreach loop to change status with axios
      const {order1,order2,order3,order4,order5,order6,agentID,date}= this.state;
      const list=[order1,order2,order3,order4,order5,order6];
      for(let i=0;i<list.length;i++){
          if(list[i]===""){
              console.log("invalid id")
          }else{
            axios.post('http://localhost:5000/orders/agentID/' + list[i],{ agentID:agentID})
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            axios.post('http://localhost:5000/orders/status/' +list[i],{status:"charged"})
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            axios.post('http://localhost:5000/orders/date/' +list[i],{date:date})
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
          }
        
      }
        axios.post('http://localhost:5000/agents/update/' + agentID,{status:"hired"})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
         
        
      
      
    }

    handleSubmit =()=>{
        
        const pickup = {
            date: this.state.date,
            notes: this.state.notes,
            agentID: this.state.agentID,
            order1:  this.state.order1,
            order2:  this.state.order2,
            order3:  this.state.order3,
            order4:  this.state.order4,
            order5:  this.state.order5,
            order6:  this.state.order6
        
    }
      axios.post('http://localhost:5000/pickups/add' , pickup)
      .then(res => console.log(res.data))  
        window.location='/';
    }

    handleDate=(date)=>{
        this.setState({date:date});
        
    }

    handleNotes =(e)=>{
        this.setState({notes:e.target.value});
    }

    handleAgentID =(e)=>{
        this.setState({agentID:e.target.value});
    }

    handleOrder1 =(e)=>{
        this.setState({order1:e.target.value});
        
        
    }

    handleOrder2 =(e)=>{
        this.setState({order2:e.target.value})
        
    }

    handleOrder3 =(e)=>{
        this.setState({order3:e.target.value})
        
    }

    handleOrder4 =(e)=>{
        this.setState({order4:e.target.value})
        
    }

    handleOrder5 =(e)=>{
        this.setState({order5:e.target.value})
        
    }

    handleOrder6 =(e)=>{
        this.setState({order6:e.target.value})
        
    }
    pendingList =()=> {
        return this.state.orders.filter(currentOrder => currentOrder.status === "pending").map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }
    
    render() {
        const {date,notes,agentID,order1,order2,order3,order4,order5,order6} = this.state;
        return (
            <div>
                <h5 style={{color:"purple",textAlign:"center"}}>list of pending orders</h5>
                <table className="table table-hover table-dark table-bordered " >
                        <thead className="table-secondary">
                        <tr >
                        
                            <th>Item</th>
                            <th>Res ID</th>
                            <th>Client</th>
                            <th>..Address</th>
                            <th>..Phone</th>
                            <th>Total cost</th>
                            <th>Agent Code</th>
                            <th>..Comission</th>
                            <th>Exp-Fee</th>
                            <th>Date</th>
                            <th>Notes..</th>
                            <th>order ID</th>
                        </tr>
                        </thead>
                        <tbody >
                            {this.pendingList()}
                        </tbody>
                        </table>
                
                <div className="form-group">
                    <div className="form-control" style={{
                        display:'flex',justifyContent:'space-around'
                    }}>
                        <label>Date</label>
                        <DatePicker selected={date} onChange={this.handleDate}
                        dateFormat="dd/MM/yyyy"  isClearable />
                        <label>Notes</label>
                        <input type="text" onChange={this.handleNotes} value={notes}/>
                        <label>Agent Code</label>
                        <input type="text" onChange={this.handleAgentID} value={agentID}/>
                    </div>
                    
                    
                    <div className="form-control" style={{
                        display:'flex',justifyContent:'space-around'
                    }}>
                        <label>Order1</label>
                        <input type="text" onChange={this.handleOrder1} value={order1}/>
                        <label>Order2</label>
                        <input type="text" onChange={this.handleOrder2} value={order2}/>
                        <label>Order3</label>
                        <input type="text" onChange={this.handleOrder3} value={order3}/>
                    </div>
                    
                    <div className="form-control" style={{
                        display:'flex',justifyContent:'space-around'
                    }}>
                        <label>Order4</label>
                        <input type="text" onChange={this.handleOrder4} value={order4}/>
                        <label>Order5</label>
                        <input type="text" onChange={this.handleOrder5} value={order5}/>
                        <label>Order6</label>
                        <input type="text" onChange={this.handleOrder6} value={order6}/>
                    </div>
                    
                    <div className="form-control" style={{
                        display:'flex',justifyContent:'center'
                    }}>
                        <button className="btn btn-secondary" 
                        onClick={this.chargeOrders}> charge orders</button>
                        <button  className="btn btn-primary" 
                        onClick={this.handleSubmit}>Register PickUp</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
