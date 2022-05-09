import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaPen } from 'react-icons/fa';
import { numToBatchStatus } from "../helpers/statusType";

function BatchListItem(props){
    const navigate = useNavigate();
    const d = props.data || [];

    return(
        <ul className="row">
            <li>{d.id}</li>
            <li>{d.productName}</li>
            <li>{d.amount}</li>
            <li>{new Date(d.createdDate*1000).toLocaleDateString()}</li>
            <li>{numToBatchStatus[d.status]}</li>
            <li><button className="edit-btn" onClick={()=>navigate("/batch/" + d.id)}><FaPen/></button></li>
        </ul>
    );
}

export default connect()(BatchListItem);