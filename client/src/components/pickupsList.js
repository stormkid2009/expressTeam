import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Pickup from './pickup';
import Order from './order';
import {flex} from './modules/styles';
import unique from './modules/key';
//unique will generate key and we can implement this to all our list over the application
//we already made a function unique as a module




export default class PickupsList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             pickups:[],
             orders:[],
             ordersList:[],
             list:[],
             date:new Date(),
             id:""
        }
        this.handleID = this.handleID.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.displayOrders = this.displayOrders.bind(this);
        this.handleDate = this.handleDate.bind(this);
    }
    componentDidMount(){
        axios.get('http://localhost:5000/pickups/')
        .then(res => this.setState({pickups:res.data}))
        .catch(err => console.log(err))

        axios.get('http://localhost:5000/orders/')
                .then(res => this.setState({orders : res.data}))
                .catch(err => console.log(err))
    }

    pickupsList(){
        //Date.parse to change the date into number of milliseconds from january 1970
        return this.state.pickups.filter(current => Date.parse(current.date) > Date.parse(this.state.date)).map(current => { return <Pickup pickup = {current} key={unique()}/> ;})
        
    }

    handleDate=(date)=>{
        this.setState({date:date});
        
    }

    handleID =(e)=>{
        this.setState({id:e.target.value});
    }

    handleClick =()=>{
        
        let item = this.state.pickups.filter(current => current._id === this.state.id);
        let obj = item[0];
        let regex = (/[a-z]+[0-9]/i);
        
        for(let property in obj){
            if(property.match(regex)){
                this.setState(prevState => ({
                    ordersList: [...prevState.ordersList, obj[property]]
                  }))
            }
        }
        this.setState({id:''});
         
    }

    displayOrders =()=>{
        //we need to map over the orders and retrieve the values of orders with ids in the orderList
        const {ordersList,orders}=this.state;
        let list =[];
        for(let i=0; i<ordersList.length; i++){
            if(ordersList[i]===''){
                console.log('empty value!!')
            }else{
                
                let add =orders.filter(current => current._id === ordersList[i]);
                list = [...list,add];
            }
        }
       
        return list.flat().map(current =>{
            return <Order order = {current} key={unique()} />;
        })
        
         
    }
    
    render() {
        return (
            <div>
                <div className="form-control" style={flex}>
                    <label >search pickups after ........</label>
                    <DatePicker selected={this.state.date} onChange={this.handleDate} 
                     dateFormat="dd/MM/yyyy"  isClearable />
                     <button onClick={
                        ()=> window.location.reload()
                    } className="btn btn-danger">Refresh</button>
                </div>
                
                                
                <table className="table table-hover table-dark table-bordered ">
                    <thead className="table-secondary">
                        <tr > 
                            <th>Date</th>
                            <th>Notes</th>
                            <th>Agent ID</th>
                            <th>pickup ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.pickupsList()}
                    </tbody>
                </table>
                <div className="form-control" style={flex}>
                    
                    <label >enter pick up id...</label>
                    <input value={this.state.id} onChange={this.handleID} />
                    
                    <button onClick={this.handleClick} className="btn btn-primary">display Orders</button>
                    
                </div>
                
                <table className="table table-hover table-dark table-bordered " >
                    <thead className="table-secondary">
                        <tr>
                            
                            <th>Res ID</th>
                            <th>Item</th>
                            <th>Client</th>
                            <th>Address..</th>
                            <th>Phone</th>
                            <th>Total cost</th>
                            <th>Agent ID</th>
                            <th>Comission..</th>
                            <th>Exp-Fee</th>
                            <th>Date</th>
                            <th>Notes..</th>
                            <th>order ID</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.displayOrders()}
                    </tbody>
                </table>
                
            </div>
        );
    }
}

