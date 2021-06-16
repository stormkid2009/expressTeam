import React, { Component } from 'react';
import axios from 'axios';
import Order from './order'

const center = {
    display:'flex',
    justifyContent:'center'
};


export default class Credit extends Component {
    constructor(props){
        super(props);
        this.state = {
            orders:[],
            resellerID:'',
            list:'',
            credit:0
            
        }
        this.handleList = this.handleList.bind(this);
        this.handleResellerID = this.handleResellerID.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCredit = this.handleCredit.bind(this);
    }
    componentDidMount(){
        axios.get('http://localhost:5000/orders/')
            .then(res => {
                this.setState({orders:res.data})
            })
            .catch(err => console.log(err))
            
        
    }
    handleList =(e)=>{
        this.setState({list:e.target.value});
    }

    handleResellerID =(e)=>{
        this.setState({resellerID:e.target.value});
    }
    
    handleCredit =(e)=>{
        this.setState({credit:e.target.value});
    }

    handleClick =()=>{
        axios.post('http://localhost:5000/resellers/update/' + this.state.resellerID,{credit:this.state.credit})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        
        window.location = '/';
    }
    deliveredList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "delivered" && currentOrder.resellerCode === this.state.resellerID)
        .map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }
    refusedList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "refused" && currentOrder.resellerCode === this.state.resellerID)
        .map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }

    rejectedList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "rejected" && currentOrder.resellerCode === this.state.resellerID)
        .map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }
    render() {
        const {list,resellerID,credit} = this.state;
        return (
            <div>
                <div className="form-control" style={{
                    display:'flex',justifyContent:'space-between',color:'blue'}}>
                    <div>
                        <label style={{padding:'8px'}}>Enter reseller ID</label>
                        <input value={resellerID} onChange={this.handleResellerID}/>
                    </div>
                
                        <select onChange={this.handleList}>
                        <option selected>choose via order status</option>
                        <option value="delivered">Delivered</option>
                        <option value="rejected">Rejected</option>
                        <option value="refused">Refused</option>
                        </select>
                </div>
                <div >
                    <table className="table table-hover table-dark table-bordered " >
                        <thead className="table-secondary">
                        <tr >
                        
                            <th>Item</th>
                            <th>Res Code</th>
                            <th>Client</th>
                            <th>..Address</th>
                            <th>..Phone</th>
                            <th>Total cost</th>
                            <th>Agent ID</th>
                            <th>..Comission</th>
                            <th>Exp-Fee</th>
                            <th>Date</th>
                            <th>Notes..</th>
                            <th>order ID</th>
                            </tr>
                        </thead>
                        <tbody >
                            {list === "pending"? this.pendingList():list === "charged" ? this.chargedList():
                            list === "delivered" ? this.deliveredList():list === "rejected" ? this.rejectedList():
                            list === "refused" ? this.refusedList():console.log("nothing to display")}
                        </tbody>
                        </table>
                </div>
                <div className="form-control" style={center}>
                    <input value={credit} onChange={this.handleCredit}/>
                    <button onClick={this.handleClick} className="btn btn-danger">Register new Credit</button>
                </div>
            </div>
                
            
        )
    }
}

