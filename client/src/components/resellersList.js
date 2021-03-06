import React, { Component } from 'react';
import axios from 'axios';
import { header,flex, padding, danger } from './modules/styles';
import unique from './modules/key'
//declare a function accepts props from parent
const Reseller = props => (
    <tr>
        
        <td>{props.reseller.name}</td>
        <td>{props.reseller.address}</td>
        <td>{props.reseller.phone}</td>
        <td>{props.reseller._id}</td>
        <td>{props.reseller.credit}</td>
    </tr>
)
export default class ResellersList extends Component {
    constructor(props){
        super(props);
        this.state = {
            resellers:[],
            id:""
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleID = this.handleID.bind(this);
    }
    componentDidMount(){
        axios.get("http://localhost:5000/resellers/")
        .then(res => this.setState({resellers:res.data}))
        .catch(err => console.log(err))
    }
    handleDelete =()=>{
        axios.delete("http://localhost:5000/resellers/" + this.state.id)
        .then(res =>console.log(res.data))
        .catch(err => console.log(err))
        window.location= "/";
    }
    handleID =(e)=>{
        this.setState({id:e.target.value});
    }
    listOfResellers(){
        return this.state.resellers.map(current =>{
            return <Reseller reseller={current} key={unique()} />
        })
    }
    render() {
        const {id} = this.state;
        return (
            <div>
                <h5 style={header}>list of current resellers</h5>
                    <div >
                        <table className="table table-hover table-dark table-bordered ">
                            <thead className="table-secondary">
                                <tr >
                                    <th>Reseller Name</th>
                                    <th>Reseller address</th>
                                    <th>Reseller phone number</th>
                                    <th>Reseller ID</th>
                                    <th>Reseller Credit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.listOfResellers()}
                            </tbody>
                        </table>
                    </div>
                    <div style={flex}>
                        <div >
                            <label style={padding}> Reseller ID ....</label>
                            <input value={id} onChange={this.handleID}/>
                        </div>
                        <div>
                            <span style={danger}>Be careful this reseller will be removed permenantly</span>
                        </div>
                        <div>
                            <button className="btn btn-outline-danger" onClick={this.handleDelete}>Delete Reseller</button>
                        </div>
                        </div>
            </div>
        )
    }
}
