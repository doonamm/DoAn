export const batchStatus = {
    CREATED: "0",
    MAT_CHECK: "1",
    PRODUCE: "2",
    QUAL_CHECK: "3",
    PACK: "4",
    CONFIRM: "5",
    DONE: "6",
    CANCEL: "7"
};

export const numToBatchStatus = [
    'CREATED',
    'MAT_CHECK',
    'PRODUCE',
    'QUAL_CHECK',
    'PACK',
    'CONFIRM',
    'DONE',
    'CANCEL'
];

export const orderStatus = {
    ORDERING: 0,
    ACCEPTED: 1,
    DELIVERING: 2,
    RECEIVED: 3,
    CANCEL: 4,
    DENIED: 5
}

export const numToOrderStatus = [
    'ORDERING',
    'ACCEPTED',
    'DELIVERING',
    'RECEIVED',
    'CANCEL',
    'DENIED'
];