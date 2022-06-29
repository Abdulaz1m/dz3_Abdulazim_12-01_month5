import { types } from "../../types"

const initialState = {
    number: 0,
    numbers: []
}

export const getNumberReducer = (state = initialState, action) => {
    switch(action.type){
        case(types.GET_NUMBER):
            return {...state, numbers: [...state.numbers, +action.payload + 10]}
        case(types.GET_INPUT):
            return {...state, number: action.payload}
        default:
            return state
    }
}