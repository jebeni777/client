import * as React from 'react';

export default (props) =>
    (
        <tr>
            <td>{props.name}</td>
            <td><button onClick={() => props.onDeleteAilment(props.name)}>
                Delete Ailment
         </button></td>
        </tr>
    )