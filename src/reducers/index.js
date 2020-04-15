// Local imports
import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/index'


const initialState = {

    additionalPrice: 0,
    car: {
        price: 77945,
        name: '2019 CHALLENGER SRT® HELLCAT REDEYE WIDEBODY',
        image:'https://jasongromaski.com/img/2019-dodge-srt-hellcat-redeye-widebody.JPG',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'Painted Satin Black Graphics Package', price: 3495 },
        { id: 2, name: 'Black Hood Pin Kit by Mopar', price: 425 },
        { id: 3, name: 'SRT Performance Spoiler', price: 695 },
        { id: 4, name: 'Technology Group', price: 1295 },
        { id: 5, name: 'Alcantara Appearance Group', price: 1795 },
        { id: 6, name: '3.09 Gear Ratio', price: 1095 }
    ]
}

export const reducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {

        case ADD_FEATURE:
            return {
                ...state,
                car: { ...state.car, features: [...state.car.features, action.payload] },
                additionalPrice: (state.additionalPrice + action.payload.price),
                additionalFeatures: state.additionalFeatures.filter(addOn => addOn.id !== action.payload.id)
            }
        case REMOVE_FEATURE:
            return {
                ...state,
                additionalFeatures: [...state.additionalFeatures, action.payload],
                car: { ...state.car, features: state.car.features.filter(addOn => addOn.id !== action.payload.id) },
                additionalPrice: (state.additionalPrice - action.payload.price)
            }
        default:
            return state
    }
} 