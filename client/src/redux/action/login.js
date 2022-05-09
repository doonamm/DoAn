export const type = {
    SET_ROLE: 'SET_ROLE',
    SET_ACCOUNT: 'SET_ACCOUNT',
    SET_CONTRACT: 'SET_CONTRACT'
};

export const setRole = (role) => {
    return {
        type: type.SET_ROLE,
        payload: role
    };
};

export const setAccount = (account) => {
    return {
        type: type.SET_ACCOUNT,
        payload: account
    };
};

export const setContract = (contract) => {
    return {
        type: type.SET_CONTRACT,
        payload: contract
    };
};