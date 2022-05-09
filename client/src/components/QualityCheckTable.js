import { ROLE } from "../helpers/roleType";
import { batchStatus } from "../helpers/statusType";
import useSetGet from '../helpers/useSetGet';
import { FaCheck } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { connect } from "react-redux";
import stateToProps from "../helpers/stateToProps";

function QualityCheckTable(props){
    const list = props.list || [];

    const canAddItem = (props.status === batchStatus.CREATED && props.role === ROLE.MANAGER);
    const openAddForm = useSetGet(false);
    const checkName = useSetGet('');

    function handleOpenAddForm(){
        if(!openAddForm.val)
            openAddForm.set(true);
    }

    function handleAdd(){
        //todo
        props.login.contract.methods.addQualityCheck(props.id, checkName.val)
        .send({from: props.login.account})
        .once('receipt', receipt => console.log(receipt));

        handleCancelAddForm();
    }

    function handleCancelAddForm(){
        checkName.set('');
        openAddForm.set(false);
    }

    const canSet = (props.status === batchStatus.QUAL_CHECK && props.role === ROLE.INSPECTOR);
    const openSetForm = useSetGet(false);
    const setItem = useSetGet({});
    const setIndex = useSetGet(-1);
    const result = useSetGet('');

    function handleOpenSetForm(index){
        setItem.set(list[index]);
        setIndex.set(index);
        openSetForm.set(true);
    }

    function handleSet(){
        //todo
        props.login.contract.methods.setQualityCheckResult(props.id, setIndex.val, result.val)
        .send({from: props.login.account})
        .once('receipt', receipt => console.log(receipt));

        handleCancelSetForm();
    }

    function handleCancelSetForm(){
        result.set('');
        openSetForm.set(false);
    }

    return(
        <div className='table quality-check'>
            <ul className='row header'>
                <li>Quality check</li>
                <li>Check date</li>
                <li>Result</li>
                {canSet && <li></li>}
            </ul>
            {canAddItem && <button className="add-btn" onClick={handleOpenAddForm}>Add item</button>}
            {
                list.map((item, i) => (
                    <ul key={i} className="row">
                        <li>{item.checkName}</li>
                        <li>{item.checkDate !== "0" ? new Date(item.checkDate*1000).toLocaleDateString() : ''}</li>
                        <li>{item.checkResult}</li>
                        {canSet && <li><button className="set-btn" onClick={()=>handleOpenSetForm(i)}>set result</button></li>}
                    </ul>
                ))
            }
            {openAddForm.val && (
                <div className="form add-form">
                    <h4>Add quality check</h4>
                    <label>
                        Check name:<br/>
                        <input type="text" onChange={e => checkName.set(e.target.value)} value={checkName.val}/>
                    </label>
                    <div className="btn-container">
                        <button onClick={handleAdd} className="submit"><span><FaCheck/></span>Add</button>
                        <button onClick={handleCancelAddForm} className="cancel"><span><GiCancel/></span>Cancel</button>
                    </div>
                </div>
            )}
            {openSetForm.val && (
                <div>
                    <div className="form set-form">
                        <h4>Set result</h4>
                        <p>Quality check: <span>{setItem.val.checkName}</span></p>
                        <label>
                            Set result:<br/>
                            <input type="text" onChange={e => result.set(e.target.value)} value={result.val}/>
                        </label>
                        <div className="btn-container">
                            <button onClick={handleSet} className="submit"><span><FaCheck/></span>Set</button>
                            <button onClick={handleCancelSetForm} className="cancel"><span><GiCancel/></span>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default connect(stateToProps('login'))(QualityCheckTable);