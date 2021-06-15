import React from 'react'

export default function Order(props) {
    return (
        
             <tr >
            
                <td>{props.order.item}</td>
                <td>{props.order.resellerCode}</td>
                <td>{props.order.recipientName}</td>
                <td>{props.order.recipientAddress}</td>
                <td>{props.order.recipientPhone}</td>
                <td>{props.order.totalCost}</td>
                <td>{props.order.agentID}</td>
                <td>{props.order.agentCommission}</td>
                <td>{props.order.expressFee}</td>
                <td>{props.order.date.substring(0,10)}</td>
                <td>{props.order.notes}</td>
                <td >{props.order._id}</td>
                
            </tr>
)
}
