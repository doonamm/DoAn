export const type = {
    SET_LIST: 'SET_LIST',
    UPDATE_ITEM: 'UPDATE_ITEM',
    ADD_ITEM: 'ADD_ITEM'
};

export const setList = (list) => {
    return{
        type: type.SET_LIST,
        payload: list
    };
};

export const updateItem = (item, role) => {
    return{
        type: type.UPDATE_ITEM,
        payload: {
            item: item,
            role: role
        }
    }
}

export const addItem = (item) => {
    return{
        type: type.ADD_ITEM,
        payload: item
    }
}   