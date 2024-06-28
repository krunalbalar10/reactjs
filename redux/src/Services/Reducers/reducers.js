import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = {
    cardData: []
};

export default function cartItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cardData: [
                    ...state.cardData,
                    action.data
                ]
            };
        case REMOVE_TO_CART:
            return {
                ...state,
                cardData: state.cardData.slice(0, -1)
            };
        default:
            return state;
    }
}
