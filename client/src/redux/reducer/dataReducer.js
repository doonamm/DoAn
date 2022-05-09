import { ROLE } from '../../helpers/roleType';
import { batchRule } from '../../helpers/rules';
import {type} from '../action/data';

const defaultState = {
    list: []
}

export default function dataReducer(state = defaultState, action){
    switch(action.type){
        case type.SET_LIST:
            return {
                list: action.payload
            };
        case type.UPDATE_ITEM:{
            const itemData = action.payload.item;
            const role = action.payload.role;
            const index = state.list.findIndex(item => item.id === itemData.id);
            if(index > -1){
                const newList = state.list.map((item, i) => {
                    if(index === i)
                        return itemData;
                    return item;
                });
                return {
                    list: newList
                };
            }
            else if(role !== ROLE.NONE && itemData.status >= batchRule[role][0]){
                return{
                    list: [...state.list, itemData]
                };
            }
            return state;
        }
        case type.ADD_ITEM:
            const isExist = state.list.findIndex(item => item.id === action.payload.id) > -1;
            if(!isExist)
                return{
                    list: [...state.list, action.payload]
                };
            return state;
        default:
            return state;
    }   
}