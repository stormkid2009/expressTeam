import React, { Component } from 'react';
import axios from 'axios';
import Pickup from './pickup';
//unique will generate key and we can implement this to all our list over the application
let unique =() => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
export default class PickupsList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             pickups:[],
             orders:[],
             id:""
        }
        this.handleID = this.handleID.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.fetch = this.fetch.bind(this);
    }
    componentDidMount(){
        axios.get('http://localhost:5000/pickups/')
        .then(res => this.setState({pickups:res.data}))
        .catch(err => console.log(err))
    }
    pickupsList(){
        return this.state.pickups.map(current => { return <Pickup pickup = {current} key={unique()}/> ;})
        
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
                    orders: [...prevState.orders, obj[property]]
                  }))
            }
        }
        
         
    }
    fetch =()=>{
        const {orders} = this.state;
        for(let i=0; i< orders.length;i++){
            if(orders[i]=== ""){
                console.log("empty")
            }else{
                axios.get('http://localhost:5000/orders/' + this.state.orders[i])
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
                //console.log(orders[i]);
            }
        }
        this.setState({orders:[]})
    }
    render() {
        return (
            <div>
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
                            <input value={this.state.id}
                            onChange={this.handleID}/>
                <button onClick={this.handleClick}>display</button>
                <button onClick={this.fetch}>click</button>
            </div>
        );
    }
}

