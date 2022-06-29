import { types } from "../../types";

export const getNumberAction = (number) => {
    return {
        type: types.GET_NUMBER,
        payload: number
    }
}

export const getInputNumber = (numb) => {
    return {
        type: types.GET_INPUT,
        payload: numb
    }
}