import * as types from "../Constant";

const initState = {};

const QrterminalReducer = (state = {}, action) => {

    switch (action.type) {
        case types.QRTERMINAL_ADD:
            return {
                ...state,
                listDeal: action.payload
            }
        case types.QRTERMINAL_EDIT:
            return {
                ...state,
                listDeal: action.payload
            }

        default:
            return state

    }
}
export default QrterminalReducer
