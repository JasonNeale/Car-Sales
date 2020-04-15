// External imports
import React from 'react'
import CurrencyFormat from 'react-currency-format';


const Total = (props) => {
    
    
    
    return (
        <div className="content">
            <h6>Base Price:&nbsp;
            <CurrencyFormat value={props.car.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </h6>
            <h4>Total (w/add-ons): &nbsp;
            <CurrencyFormat value={props.car.price + props.additionalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </h4>
        </div>
    )
}

export default Total