export const CONTRACT_ADDRESS= '0x5FbDB2315678afecb367f032d93F642f64180aa3';

export const CONTRACT_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "productName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "createdDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "finishedDate",
            "type": "uint256"
          },
          {
            "internalType": "enum Cosmetics.BatchStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "materialName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "supplier",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "quality",
                "type": "string"
              }
            ],
            "internalType": "struct Cosmetics.Material[]",
            "name": "material_list",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "checkName",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "checkDate",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "checkResult",
                "type": "string"
              }
            ],
            "internalType": "struct Cosmetics.QualityCheck[]",
            "name": "qualityCheck_list",
            "type": "tuple[]"
          }
        ],
        "indexed": false,
        "internalType": "struct Cosmetics.Batch",
        "name": "batch",
        "type": "tuple"
      }
    ],
    "name": "e_createBatch",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "productName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "createdDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "finishedDate",
            "type": "uint256"
          },
          {
            "internalType": "enum Cosmetics.BatchStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "materialName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "supplier",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "quality",
                "type": "string"
              }
            ],
            "internalType": "struct Cosmetics.Material[]",
            "name": "material_list",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "checkName",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "checkDate",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "checkResult",
                "type": "string"
              }
            ],
            "internalType": "struct Cosmetics.QualityCheck[]",
            "name": "qualityCheck_list",
            "type": "tuple[]"
          }
        ],
        "indexed": false,
        "internalType": "struct Cosmetics.Batch",
        "name": "batch",
        "type": "tuple"
      }
    ],
    "name": "e_updateBatch",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "_batch_count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "_batch_list",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "productName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "createdDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "finishedDate",
        "type": "uint256"
      },
      {
        "internalType": "enum Cosmetics.BatchStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_materialOrder_count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "_materialOrder_list",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "materialName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "supplierName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "createdDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "finishedDate",
        "type": "uint256"
      },
      {
        "internalType": "enum Cosmetics.OrderStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_productOrder_count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "_productOrder_list",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "productName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "retailerName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "createdDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "finishedDate",
        "type": "uint256"
      },
      {
        "internalType": "enum Cosmetics.OrderStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "materialOrderId",
        "type": "uint256"
      }
    ],
    "name": "acceptMaterialOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "productOrderId",
        "type": "uint256"
      }
    ],
    "name": "acceptProductOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batchId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "materialName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "supplier",
        "type": "string"
      }
    ],
    "name": "addMaterial",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batchId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "checkName",
        "type": "string"
      }
    ],
    "name": "addQualityCheck",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "productName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "createBatch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "supplierName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "materialName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "createMaterialOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "retailerName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "productName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "createProductOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBatchList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "productName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "createdDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "finishedDate",
            "type": "uint256"
          },
          {
            "internalType": "enum Cosmetics.BatchStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "materialName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "supplier",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "quality",
                "type": "string"
              }
            ],
            "internalType": "struct Cosmetics.Material[]",
            "name": "material_list",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "checkName",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "checkDate",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "checkResult",
                "type": "string"
              }
            ],
            "internalType": "struct Cosmetics.QualityCheck[]",
            "name": "qualityCheck_list",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Cosmetics.Batch[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMaterialOrder",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "materialName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "supplierName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "createdDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "finishedDate",
            "type": "uint256"
          },
          {
            "internalType": "enum Cosmetics.OrderStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "internalType": "struct Cosmetics.MaterialOrder[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getProductOrder",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "productName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "retailerName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "createdDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "finishedDate",
            "type": "uint256"
          },
          {
            "internalType": "enum Cosmetics.OrderStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "internalType": "struct Cosmetics.ProductOrder[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batchId",
        "type": "uint256"
      }
    ],
    "name": "goCancel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batchId",
        "type": "uint256"
      }
    ],
    "name": "goConfirm",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batchId",
        "type": "uint256"
      }
    ],
    "name": "goDone",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batchId",
        "type": "uint256"
      }
    ],
    "name": "goMatCheck",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batchId",
        "type": "uint256"
      }
    ],
    "name": "goPack",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batchId",
        "type": "uint256"
      }
    ],
    "name": "goProduce",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batchId",
        "type": "uint256"
      }
    ],
    "name": "goQualCheck",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "materialOrderId",
        "type": "uint256"
      }
    ],
    "name": "receiveMaterialOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "productOrderId",
        "type": "uint256"
      }
    ],
    "name": "receiveProductOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batchId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "matIndex",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "quality",
        "type": "string"
      }
    ],
    "name": "setMaterialQuality",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batchId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "checkIndex",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "checkResult",
        "type": "string"
      }
    ],
    "name": "setQualityCheckResult",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];