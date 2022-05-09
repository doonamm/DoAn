import { ROLE } from '../../helpers/roleType';
import { type } from '../action/login';

const defaultState = {
    role: ROLE.NONE,
    account: '',
    contract: null
}

export default function reducer(state = defaultState, action){
    switch(action.type){
        case type.SET_ROLE: 
            const role = ROLE[action.payload];
            return {
                ...state,
                role: role || ROLE.NONE
            };
        case type.SET_ACCOUNT:
            return {
                ...state,
                account: action.payload
            };
        case type.SET_CONTRACT:
            return {
                ...state,
                contract: action.payload
            };
        default:
            return state;
    }
}