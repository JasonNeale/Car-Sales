// External imports
import React from 'react'
import { useDispatch } from 'react-redux'
import { addFeature } from '../actions/index'


const AdditionalFeature = ( props ) => {

    const dispatch = useDispatch()
    
    const handleOnClick = (feature) => {
        dispatch(addFeature(feature))
        //e.target.setAttribute("disabled", "disabled")
    }

    return (
        <li>
            <button onClick={(e) => handleOnClick(props.feature)} className="button">+</button>
            {props.feature.name} (+{props.feature.price})
        </li>
    )
}

export default AdditionalFeature