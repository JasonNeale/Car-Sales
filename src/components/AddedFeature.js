// External imports
import React from 'react'


const AddedFeature = (props) => {
    
    return (
        <li>
            <button onClick={() => props.remove(props.feature)} className="button">X</button>
            {props.feature.name}
        </li>
    )
}

export default AddedFeature