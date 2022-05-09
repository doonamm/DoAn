import { ROLE } from "../helpers/roleType";
import { batchStatus } from "../helpers/statusType";
import useSetGet from '../helpers/useSetGet';
import { FaCheck } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { connect } from "react-redux";
import stateToProps from '../helpers/stateToProps';

function MaterialTable(props){
    const list = props.list || [];
    const canAddItem = (props.status === batchStatus.CREATED && props.role === ROLE.MANAGER);
    const openForm = useSetGet(false);
    const materialName = useSetGet('');
    const suppiler = useSetGet('');

    function handleOpenAddForm(){
        if(!openForm.val)
            openForm.set(true);
    }

    function handleAdd(){
        props.login.contract.methods.addMaterial(props.id, materialName.val, suppiler.val)
        .send({from: props.login.account})
        .once('receipt', receipt => console.log(receipt));

        handleCancelAddForm();
    }

    function handleCancelAddForm(){
        materialName.set('');
        suppiler.set('');
        openForm.set(false);
    }

    const canSet = (props.status === batchStatus.MAT_CHECK && props.role === ROLE.INSPECTOR);
    const openSetForm = useSetGet(false);
    const setItem = useSetGet({});
    const setIndex = useSetGet(-1);
    const quality = useSetGet('');

    function handleOpenSetForm(index){
        setItem.set(list[index]);
        setIndex.set(index);
        openSetForm.set(true);
    }

    function handleSet(){
        //todo
        props.login.contract.methods.setMaterialQuality(props.id, setIndex.val, quality.val)
        .send({from: props.login.account})
        .once('receipt', receipt => console.log(receipt));

        handleCancelSetForm();
    }

    function handleCancelSetForm(){
        quality.set('');
        openSetForm.set(false);
    }

    return(
        <div className='table material'>
            <ul className='row header'>
                <li>Material</li>
                <li>Supplier</li>
                <li>Quality</li>
                {canSet && <li></li>}
            </ul>
            {canAddItem && <button onClick={handleOpenAddForm} className="add-btn">Add item</button>}
            {
                list.map((item, i) => (
                    <ul key={i} className="row">
                        <li>{item.materialName}</li>
                        <li>{item.supplier}</li>
                        <li>{item.quality}</li>
                        {canSet && <li><button className="set-btn" onClick={()=>handleOpenSetForm(i)}>set quality</button></li>}
                    </ul>
                ))
            }
            {openForm.val && (
                <div className="form add-item-form">
                    <h4>Add material</h4>
                    <label>
                        Material name:<br/>
                        <input type="text" onChange={e => materialName.set(e.target.value)} value={materialName.val}/>
                    </label>
                    <label>
                        Supplier:<br/>
                        <input type="text" onChange={e => suppiler.set(e.target.value)} value={suppiler.val}/>
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
                        <p>Material: <span>{setItem.val.materialName}</span></p>
                        <p>Supplier: <span>{setItem.val.supplier}</span></p>
                        <label>
                            Set quality:<br/>
                            <input type="text" onChange={e => quality.set(e.target.value)} value={quality.val}/>
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

export default connect(stateToProps('login'))(MaterialTable);