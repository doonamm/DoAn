import '../style/BatchPage.scss';
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import stateToProps from "../helpers/stateToProps";
import {ROLE} from '../helpers/roleType';
import { batchStatus, numToBatchStatus } from "../helpers/statusType";
import MaterialTable from './MaterialTable';
import QualityCheckTable from './QualityCheckTable';
import {FaLongArrowAltLeft} from 'react-icons/fa';
import { batchRule } from '../helpers/rules';
import { useEffect } from 'react';

function BatchPage(props){
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        if(props.login.role === ROLE.NONE){
            navigate('/');  
        }
    }, []);

    const role = props.login.role;
    const d = props.data.list.find(item => item.id === id.toString()) || {};
    const canChangeStatus = batchRule[role].findIndex(status => status === d.status) > -1;
    const canCancelBatch = (d.status !== batchStatus.DONE && d.status !== batchStatus.CANCEL && role === ROLE.MANAGER);

    function handleChangeStatus(){
        let func = '';
        switch(d.status){
            case batchStatus.CREATED:
                func = 'goMatCheck';
                break;
            case batchStatus.MAT_CHECK:
                func = 'goProduce';
                break;
            case batchStatus.PRODUCE:
                func = 'goQualCheck';
                break;
            case batchStatus.QUAL_CHECK:
                func = 'goPack';
                break;
            case batchStatus.PACK:
                func = 'goConfirm';
                break;
            case batchStatus.CONFIRM:
                func = 'goDone';
                break;
        }
        if(func !== ''){
            props.login.contract.methods[func](id)
            .send({from: props.login.account})
            .once('receipt', receipt => console.log(receipt));
        }
    }

    function handleCancelBatch(){
        props.login.contract.methods.goCancel(id)
        .send({from: props.login.account})
        .once('receipt', receipt => console.log(receipt));
    }

    return(
        <div className="page batch-page">
            <button onClick={()=>navigate('/')} className='back-btn'><span><FaLongArrowAltLeft/></span>Back</button>
            <h3 className='id'>Id: {d.id}</h3>
            <div className="info">
                <p>Product: <span>{d.productName}</span></p>
                <p>Amount: <span>{d.amount}</span></p>
                <p>Created at: <span>{new Date(d.createdDate*1000).toLocaleDateString()}</span></p>
                {d.finishedDate !== "0" && <p>Finished at: <span>{new Date(d.finishedDate*1000).toLocaleDateString()}</span></p>}
                <p>Status: <span>{numToBatchStatus[d.status]}</span></p>
                <div className='btn-container'>
                    {canChangeStatus && <button className='change-status-btn' onClick={handleChangeStatus}>{numToBatchStatus[parseInt(d.status) + 1]}</button>}
                    {canCancelBatch && <button className='change-status-btn cancel' onClick={handleCancelBatch}>{numToBatchStatus[batchStatus.CANCEL]}</button>}
                </div>

            </div>
            <div className='detail'>
                <MaterialTable id={id} role={role} status={d.status} list={d.material_list}/>
                <QualityCheckTable id={id} role={role} status={d.status} list={d.qualityCheck_list}/>
            </div>
        </div>
    );
}

export default connect(stateToProps('login', 'data'))(BatchPage);