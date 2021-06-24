import React from 'react';
//function which accepts props from the parent
 const Agent = props =>(
    <tr>
        
        <td>{props.agent.name}</td>
        <td>{props.agent.phone}</td>
        <td>{props.agent.status}</td>
        <td>{props.agent._id}</td>
    </tr>
)

export default Agent