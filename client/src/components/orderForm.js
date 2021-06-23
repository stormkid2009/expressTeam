import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { padding,header,center } from './modules/styles';



export default class Order extends Component {
    constructor(props){
        super(props);
        this.state = {
            resellerID:'',
            item:'',
            recipientName:'',
            recipientAddress:'',
            recipientPhone:'',
            totalCost:0,
            agentID:'default',
            agentCommission:0,
            expressFee:0,
            date: new Date(),
            status:'pending',
            notes:''
            
        }
        this.handleResellerID = this.handleResellerID.bind(this);
        this.handleItem = this.handleItem.bind(this);
        this.handleRecipientName = this.handleRecipientName.bind(this);
        this.handleRecipientAddress = this.handleRecipientAddress.bind(this);
        this.handleRecipientPhone = this.handleRecipientPhone.bind(this);
        this.handleTotalCost = this.handleTotalCost.bind(this);
        this.handleAgentCommission = this.handleAgentCommission.bind(this);
        this.handleExpressFee = this.handleExpressFee.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleNotes = this.handleNotes.bind(this);
        
    }
    

    handleResellerID=(e)=>{
        this.setState({resellerID:e.target.value});
        
    }

    handleItem=(e)=>{
        this.setState({item:e.target.value});
        
    }

    handleRecipientName =(e)=>{
        this.setState({recipientName:e.target.value})
    }

    handleRecipientAddress =(e)=>{
        this.setState({recipientAddress:e.target.value})
    }

    handleRecipientPhone =(e)=>{
        this.setState({recipientPhone:e.target.value})
    }

    handleTotalCost=(e)=>{
        this.setState({totalCost:e.target.value});
        
    }


    handleAgentCommission = (e) =>{
        this.setState({agentCommission:e.target.value})
    }

    handleExpressFee=(e)=>{
        this.setState({expressFee:e.target.value});
        
    }

    handleDate=(date)=>{
        this.setState({date:date});
        
    }

    handleNotes=(e)=>{
        this.setState({notes:e.target.value});
        
    }

    

    handleSubmit = () =>{
        
        const order = {
            resellerID:this.state.resellerID,
            item:this.state.item,
            recipientName:this.state.recipientName,
            recipientAddress:this.state.recipientAddress,
            recipientPhone:this.state.recipientPhone,
            totalCost:this.state.totalCost,
            agentID:this.state.agentID,
            agentCommission:this.state.agentCommission,
            expressFee:this.state.expressFee,
            date:this.state.date,
            status:this.state.status,
            notes:this.state.notes
            
        }
        axios.post('http://localhost:5000/orders/add', order)
        .then(res => console.log(res.data))
        window.location = '/';
    }
    render(){
        const {resellerID,item,recipientName,recipientAddress,recipientPhone,
        totalCost,notes,agentCommission,expressFee,date} = this.state;
        return (
            <div>
                <h4 style={header}>Add new Order</h4>
                <div>
                    
                    
                    <div className="form-group">
                        <div className="form-control">
                        <label style={padding}>Reseller ID</label>
                        <input type="text" onChange={this.handleResellerID} value={resellerID}
                        />
                        <label style={padding}>Item ..</label>
                        <input type="text" onChange={this.handleItem} value={item}/>
                        </div>   
                    </div>
                    
                    
                    <div className="form-group">
                        <div className="form-control">
                            <label style={padding}>Recipient Name</label>
                            <input type="text" onChange={this.handleRecipientName} value={recipientName}/>
                            <label style={padding}>Recipient Adress</label>
                            <input type="text" onChange={this.handleRecipientAddress} value={recipientAddress}/>
                            <label style={padding}>Recipient Phone</label>
                            <input type="text" onChange={this.handleRecipientPhone} value={recipientPhone}/>
                        </div>
                        
                    </div>
                    
                    <div className="form-group">
                        <div className="form-control">
                            <label style={padding}>Total cost</label>
                            <input type="text" onChange={this.handleTotalCost} value={totalCost}/>
                            <label style={padding}>Agent Commission</label>
                            <input type="text" onChange={this.handleAgentCommission} value={agentCommission} />
                            <label style={padding}>Express Fee</label>
                            <input type="text" onChange={this.handleExpressFee} value={expressFee}/>
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <div className="form-control">
                            <label style={padding}>Date of Order</label>
                            
                                <DatePicker selected={date} onChange={this.handleDate}
                                dateFormat="dd/MM/yyyy" 
                                isClearable />
                            
                            <label style={padding}>Notes...</label>
                            <input type="text" onChange={this.handleNotes} value={notes}/>
                        </div>
                        
                    </div>
                    
                    <div className="form-group">
                        <div className="form-control" style={center}>
                            <button  className="btn btn-primary" 
                            onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
    
}


