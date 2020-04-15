// External imports
import React from 'react'

// Local imports
import Header from './components/Header'
import AddedFeatures from './components/AddedFeatures'
import AdditionalFeatures from './components/AdditionalFeatures'
import Total from './components/Total'

// Action imports
import { addFeature, removeFeature } from './actions/index'
import { connect } from 'react-redux'


const App = ( props ) => {

    const removeFeature = ( item ) => {props.removeFeature( item )}
    const buyItem = item => {props.addFeature(item)}

    return (
        <div className="boxes">
            <div className="box">
                <Header car={props.car} {...console.log(props.car)} />
                <AddedFeatures car={props.car} removeFeature={removeFeature} />
            </div>
            <div className="box">
                <AdditionalFeatures store={props.store} addFeature={buyItem} />
                <Total car={props.car} additionalPrice={props.additionalPrice} />
            </div>
        </div>
    )
}

function mapStateToProps( state ) {
    return {
        car: state.car,
        store: state.store,
        additionalPrice: state.additionalPrice
    }
}

export default connect( mapStateToProps, { addFeature, removeFeature } )( App )