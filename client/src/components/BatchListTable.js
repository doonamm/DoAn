import { FaCheck } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { connect } from "react-redux";
import { ROLE } from "../helpers/roleType";
import stateToProps from "../helpers/stateToProps";
import useSetGet from "../helpers/useSetGet";
import BatchListItem from "./BatchListItem";

function BatchListTable(props){
    const list = props.list || [];
    const canCreateBatch = props.login.role === ROLE.MANAGER;
    const openForm = useSetGet(false);
    const productName = useSetGet('');
    const amount = useSetGet(0);

    function handleOpen(){
        openForm.set(true);
    }

    function handleCreate(){
        //todo
        props.login.contract.methods.createBatch(productName.val, amount.val)
        .send({from: props.login.account})
        .once('receipt', receipt => console.log(receipt));

        productName.set('');
        amount.set(0);
        openForm.set(false);
    }

    function handleCancel(){
        productName.set('');
        amount.set(0);
        openForm.set(false);
    }

    return(
        <div className="table manager">
            <ul className="row header">
                <li>ID</li>
                <li>Product</li>
                <li>Amount</li>
                <li>Created at</li>
                <li>Status</li>
                <li></li>
            </ul>
            {canCreateBatch && <button className="create-btn" onClick={handleOpen}>Create batch</button>}
            {
                list.map(item => <BatchListItem key={item.id} data={item}/>)
            }
            {openForm.val && (
                <div className="form">
                    <h4 className="title">Create batch</h4>
                    <label>
                        Product name:
                        <input type="text" onChange={e => productName.set(e.target.value)} value={productName.val}/>
                    </label>
                    <label>
                        Amount:
                        <input type="number" onChange={e => amount.set(e.target.value)} value={amount.val}/>
                    </label>
                    <div className="btn-container">
                        <button className="submit" onClick={handleCreate}><span><FaCheck/></span>Create</button>
                        <button className="cancel" onClick={handleCancel}><span><GiCancel/></span>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default connect(stateToProps('login'))(BatchListTable);