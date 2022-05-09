import '../style/Nav.scss';
import { connect } from "react-redux";
import stateToProps from '../helpers/stateToProps';

function Nav(props){

    return(
        <div className="nav">
            <p>ROLE: {props.login.role}</p>
        </div>
    );
}

export default connect(stateToProps('login'))(Nav);