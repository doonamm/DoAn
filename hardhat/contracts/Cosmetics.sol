//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Cosmetics{
    enum OrderStatus{
        ORDERING,
        ACCEPTED,
        DELIVERING,
        RECEIVED,
        CANCEL,
        DENIED
    }

    enum BatchStatus{
        CREATED,
        MAT_CHECK,
        PRODUCE,
        QUAL_CHECK,
        PACK,
        CONFIRM,
        DONE,
        CANCEL
    }

    //def - struct
    struct Material{
        string materialName;
        string supplier;
        string quality;
    }

    struct QualityCheck{
        string checkName;
        uint checkDate;
        string checkResult;
    }

    struct Batch{
        uint id;
        string productName;
        uint amount;
        uint createdDate;
        uint finishedDate;
        BatchStatus status;
        Material[] material_list;
        QualityCheck[] qualityCheck_list;
    }

    struct MaterialOrder{
        uint id;
        string materialName;
        string supplierName;
        uint amount;
        uint createdDate;
        uint finishedDate;
        OrderStatus status;
    }

    struct ProductOrder{
        uint id;
        string productName;
        string retailerName;
        uint amount;
        uint createdDate;
        uint finishedDate;
        OrderStatus status;
    }
    //end  - struct

    //def - global var
    uint public _batch_count = 0;
    mapping(uint => Batch) public _batch_list;

    uint public _materialOrder_count = 0;
    mapping(uint => MaterialOrder) public _materialOrder_list;

    uint public _productOrder_count = 0;
    mapping(uint => ProductOrder) public _productOrder_list;

    address private deployer;
    //end - globalvar
    constructor(){
        deployer = msg.sender;
    }

    //def - modifier
    modifier onlyProducer{
        require(msg.sender == deployer, "Only producer");        
        _;
    }
    //end - modifier

    //def - event
    event e_createBatch(Batch batch);
    event e_updateBatch(Batch batch);
    //end - event

    //def - function
    //func - Batch
    function createBatch(string memory productName, uint amount) public{
        Batch storage b = _batch_list[++_batch_count];
        b.id = _batch_count;
        b.productName = productName;
        b.amount = amount;
        b.createdDate = block.timestamp;
        b.finishedDate = 0;
        b.status = BatchStatus.CREATED;
        emit e_createBatch(b);
    }

    function addMaterial(uint batchId, string memory materialName, string memory supplier) public{
        _batch_list[batchId].material_list.push(Material(materialName, supplier, ""));
        emit e_updateBatch(_batch_list[batchId]);
    }

    function addQualityCheck(uint batchId, string memory checkName) public{
        _batch_list[batchId].qualityCheck_list.push(QualityCheck(checkName, 0, ""));
        emit e_updateBatch(_batch_list[batchId]);
    }

    function goMatCheck(uint batchId) public{
        _batch_list[batchId].status = BatchStatus.MAT_CHECK;
        emit e_updateBatch(_batch_list[batchId]);
    }

    function setMaterialQuality(uint batchId, uint matIndex, string memory quality) public {
        _batch_list[batchId].material_list[matIndex].quality = quality;
        emit e_updateBatch(_batch_list[batchId]);
    }

    function goProduce(uint batchId) public{
        _batch_list[batchId].status = BatchStatus.PRODUCE;
        emit e_updateBatch(_batch_list[batchId]);
    }

    function goQualCheck(uint batchId) public{
        _batch_list[batchId].status = BatchStatus.QUAL_CHECK;
        emit e_updateBatch(_batch_list[batchId]);
    }

    function setQualityCheckResult(uint batchId, uint checkIndex, string memory checkResult) public{
        _batch_list[batchId].qualityCheck_list[checkIndex].checkDate = block.timestamp;
        _batch_list[batchId].qualityCheck_list[checkIndex].checkResult = checkResult;
        emit e_updateBatch(_batch_list[batchId]);
    }

    function goPack(uint batchId) public{
        _batch_list[batchId].status = BatchStatus.PACK;
        emit e_updateBatch(_batch_list[batchId]);
    }

    function goConfirm(uint batchId) public{
        _batch_list[batchId].status = BatchStatus.CONFIRM;
        emit e_updateBatch(_batch_list[batchId]);
    }

    function goDone(uint batchId) public{
        _batch_list[batchId].status = BatchStatus.DONE;
        _batch_list[batchId].finishedDate = block.timestamp;
        emit e_updateBatch(_batch_list[batchId]);
    }

    function goCancel(uint batchId) public{
        _batch_list[batchId].status = BatchStatus.CANCEL;
        emit e_updateBatch(_batch_list[batchId]);
    }

    function getBatchList() public onlyProducer view returns (Batch[] memory){
        Batch[] memory list = new Batch[](_batch_count);

        for(uint i=1; i <= _batch_count; i++){
            list[i-1] = _batch_list[i];
        }

        return list;
    }
    //end func - Batch

    function createProductOrder(string memory retailerName, string memory productName, uint amount) public{
        ProductOrder storage a = _productOrder_list[++_productOrder_count];
        a.id = _productOrder_count;
        a.productName = productName;
        a.retailerName = retailerName;
        a.amount = amount;
        a.createdDate = block.timestamp;
        a.finishedDate = 0;
        a.status = OrderStatus.ORDERING;
    }

    function createMaterialOrder(string memory supplierName, string memory materialName, uint amount) public{
        _materialOrder_list[++_materialOrder_count] = MaterialOrder(
            _materialOrder_count,
            materialName,
            supplierName,
            amount,
            block.timestamp,
            0,
            OrderStatus.ORDERING
        );
    }

    function acceptMaterialOrder(uint materialOrderId) public {
        _materialOrder_list[materialOrderId].status = OrderStatus.DELIVERING;
    }

    function receiveMaterialOrder(uint materialOrderId) public {
        _materialOrder_list[materialOrderId].status = OrderStatus.RECEIVED;
        _materialOrder_list[materialOrderId].finishedDate = block.timestamp;
    }

    function acceptProductOrder(uint productOrderId) public {
        _productOrder_list[productOrderId].status = OrderStatus.DELIVERING;
    }

    function receiveProductOrder(uint productOrderId) public {
        _productOrder_list[productOrderId].status = OrderStatus.RECEIVED;
        _productOrder_list[productOrderId].finishedDate = block.timestamp;
    }

    function getMaterialOrder() public onlyProducer view returns (MaterialOrder[] memory){
        MaterialOrder[] memory list = new MaterialOrder[](_materialOrder_count);

        for(uint i=1; i <= _materialOrder_count; i++){
            list[i-1] = _materialOrder_list[i];
        }

        return list;
    }

    function getProductOrder() public onlyProducer view returns (ProductOrder[] memory){
        ProductOrder[] memory list = new ProductOrder[](_productOrder_count);

        for(uint i=1; i <= _productOrder_count; i++){
            list[i-1] = _productOrder_list[i];
        }

        return list;
    }
    //end  - function
}