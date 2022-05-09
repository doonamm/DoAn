import { batchStatus, orderStatus } from "./statusType";

export const batchListData = [
    {
        id: 1,
        productName: 'product AAA',
        amount: 111,
        createdDate: Date.now(),
        finishedDate: 0,
        status: batchStatus.CREATED,
        material_list: [],
        qualityCheck_list: [],
    },
    {
        id: 2,
        productName: 'product BBB',
        amount: 222,
        createdDate: Date.now(),
        finishedDate: 0,
        status: batchStatus.MAT_CHECK,
        material_list: [
            {
                materialName: 'mat AA',
                supplier: 'sup A',
                quality: ''
            },
            {
                materialName: 'mat BB',
                supplier: 'sup B',
                quality: ''
            },
            {
                materialName: 'mat CC',
                supplier: 'sup C',
                quality: ''
            },
        ],
        qualityCheck_list: [
            {
                checkName: 'check A',
                checkDate: 0,
                checkResult: ''
            },
            {
                checkName: 'check B',
                checkDate: 0,
                checkResult: ''
            },
            {
                checkName: 'check C',
                checkDate: 0,
                checkResult: ''
            },
            {
                checkName: 'check D',
                checkDate: 0,
                checkResult: ''
            },
        ],
    },
    {
        id: 3,
        productName: 'product CCC',
        amount: 333,
        createdDate: Date.now(),
        finishedDate: 0,
        status: batchStatus.PRODUCE,
        material_list: [
            {
                materialName: 'mat AA',
                supplier: 'sup A',
                quality: '80/100'
            },
            {
                materialName: 'mat BB',
                supplier: 'sup B',
                quality: '90/100'
            },
            {
                materialName: 'mat CC',
                supplier: 'sup C',
                quality: '100/100'
            },
        ],
        qualityCheck_list: [
            {
                checkName: 'check A',
                checkDate: 0,
                checkResult: ''
            },
            {
                checkName: 'check B',
                checkDate: 0,
                checkResult: ''
            },
            {
                checkName: 'check C',
                checkDate: 0,
                checkResult: ''
            },
            {
                checkName: 'check D',
                checkDate: 0,
                checkResult: ''
            },
        ],
    },
    {
        id: 4,
        productName: 'product DDD',
        amount: 444,
        createdDate: Date.now(),
        finishedDate: 0,
        status: batchStatus.QUAL_CHECK,
        material_list: [
            {
                materialName: 'mat AA',
                supplier: 'sup A',
                quality: '80/100'
            },
            {
                materialName: 'mat BB',
                supplier: 'sup B',
                quality: '90/100'
            },
            {
                materialName: 'mat CC',
                supplier: 'sup C',
                quality: '100/100'
            },
        ],
        qualityCheck_list: [
            {
                checkName: 'check A',
                checkDate: 0,
                checkResult: ''
            },
            {
                checkName: 'check B',
                checkDate: 0,
                checkResult: ''
            },
            {
                checkName: 'check C',
                checkDate: 0,
                checkResult: ''
            },
            {
                checkName: 'check D',
                checkDate: 0,
                checkResult: ''
            },
        ],
    },
    {
        id: 5,
        productName: 'product EEE',
        amount: 555,
        createdDate: Date.now(),
        finishedDate: 0,
        status: batchStatus.PACK,
        material_list: [
            {
                materialName: 'mat AA',
                supplier: 'sup A',
                quality: '80/100'
            },
            {
                materialName: 'mat BB',
                supplier: 'sup B',
                quality: '90/100'
            },
            {
                materialName: 'mat CC',
                supplier: 'sup C',
                quality: '100/100'
            },
        ],
        qualityCheck_list: [
            {
                checkName: 'check A',
                checkDate: Date.now(),
                checkResult: 'result A'
            },
            {
                checkName: 'check B',
                checkDate: Date.now(),
                checkResult: 'result B'
            },{
                checkName: 'check C',
                checkDate: Date.now(),
                checkResult: 'result C'
            },{
                checkName: 'check D',
                checkDate: Date.now(),
                checkResult: 'result D'
            },
        ],
    },
    {
        id: 6,
        productName: 'product FFF',
        amount: 666,
        createdDate: Date.now(),
        finishedDate: 0,
        status: batchStatus.CONFIRM,
        material_list: [
            {
                materialName: 'mat AA',
                supplier: 'sup A',
                quality: '80/100'
            },
            {
                materialName: 'mat BB',
                supplier: 'sup B',
                quality: '90/100'
            },
            {
                materialName: 'mat CC',
                supplier: 'sup C',
                quality: '100/100'
            },
        ],
        qualityCheck_list: [
            {
                checkName: 'check A',
                checkDate: Date.now(),
                checkResult: 'result A'
            },
            {
                checkName: 'check B',
                checkDate: Date.now(),
                checkResult: 'result B'
            },
            {
                checkName: 'check C',
                checkDate: Date.now(),
                checkResult: 'result C'
            },
            {
                checkName: 'check D',
                checkDate: Date.now(),
                checkResult: 'result D'
            },
        ],
    },
    {
        id: 7,
        productName: 'product GGG',
        amount: 777,
        createdDate: Date.now(),
        finishedDate: Date.now(),
        status: batchStatus.DONE,
        material_list: [
            {
                materialName: 'mat AA',
                supplier: 'sup A',
                quality: '80/100'
            },
            {
                materialName: 'mat BB',
                supplier: 'sup B',
                quality: '90/100'
            },
            {
                materialName: 'mat CC',
                supplier: 'sup C',
                quality: '100/100'
            },
        ],
        qualityCheck_list: [
            {
                checkName: 'check A',
                checkDate: Date.now(),
                checkResult: 'result A'
            },
            {
                checkName: 'check B',
                checkDate: Date.now(),
                checkResult: 'result B'
            },
            {
                checkName: 'check C',
                checkDate: Date.now(),
                checkResult: 'result C'
            },
            {
                checkName: 'check D',
                checkDate: Date.now(),
                checkResult: 'result D'
            },
        ],
    },
];

export const materialOrderData = [
    {
        id: 1,
        materialName: 'mat A',
        supplierName: 'sup A',
        amount: 111,
        createdDate: Date.now(),
        finishedDate: 0,
        status: orderStatus.ORDERING
    }
];