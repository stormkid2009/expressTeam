import React from 'react';
//declare a function which accepts props from parent component
function Pickup(props) {
    return(
        <tr>
        <td>{props.pickup.date.substring(0,10)}</td>
        <td>{props.pickup.notes}</td>
        <td>{props.pickup.agentID}</td>
        <td>{props.pickup._id}</td>
        
    </tr>
    );
    
}

export default Pickup
