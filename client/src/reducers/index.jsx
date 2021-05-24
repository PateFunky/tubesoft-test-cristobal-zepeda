import {GET_RECORDS,ADD_RECORD} from '../actions/index';


const initialState = {
    records: []
}

function rootReducer(state = initialState, action){
    if(action.type=== GET_RECORDS){
        return {
            ...state,
            records: action.payload
        }
    }
    if(action.type=== ADD_RECORD){
        return {
            ...state,
            records: [action.payload,...state.records]
        }
    }
    return state;
}


export default rootReducer;