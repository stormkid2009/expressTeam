import React, { Component } from 'react';
import axios from 'axios';

const Reseller = props => (
    <tr>
        <td>{props.reseller.resellerCode}</td>
        <td>{props.reseller.name}</td>
        <td>{props.reseller.address}</td>
        <td>{props.reseller.phone}</td>
    </tr>
)
export default class ResellersList extends Component {
    constructor(props){
        super(props);
        this.state = {
            resellers:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:5000/resellers/")
        .then(res => this.setState({resellers:res.data}))
        .catch(err => console.log(err))
    }
    listOfResellers(){
        return this.state.resellers.map(current =>{
            return <Reseller reseller={current}/>
        })
    }
    render() {
        return (
            <div>
                <h3>list of our resellers</h3>
                
                    <div style={{border:"2px solid black" , margin:"30px 10px" ,padding:"30px"}}>
                        
                        <table className="table">
                            <tr className="thead-light">
                                <th>Reseller Code</th>
                                <th>Reseller Name</th>
                                <th>Reseller address</th>
                                <th>Reseller phone number</th>
                                    
                            </tr>
                            <tbody>
                                {this.listOfResellers()}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}
