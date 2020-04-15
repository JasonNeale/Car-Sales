// External imports
import React from 'react'
import { connect } from 'react-redux'


const Header = (props) => {
    
    return (
        <div>
            <figure className="image is-4by3">
                <img src={props.car.image} alt={props.car.name} />
            </figure>
            <h2>{props.car.name}</h2>
            <p>Amount: ${props.car.price + props.additionalPrice}</p>
        </div>
    )
}

function mapStateToProps(state) {
    
    return {
        car: state.car,
        additionalPrice: state.additionalPrice
    }
}

export default connect( mapStateToProps )( Header )