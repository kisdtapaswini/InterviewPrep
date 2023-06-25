import { ADD_TO_CART } from '../constants'
const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    console.log("444 actions" + action.data);

    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer",action)
            console.log("555 actions" + action.data);

            return [
                ...state,
                {cardData: action.data}
            ]
        default:
            console.log("666actions" + action.data);

            return state
    }


}
