import { setRole } from '../redux/action/login';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROLE } from '../helpers/roleType';
import useSetGet from '../helpers/useSetGet';
import '../style/LoginPage.scss';
import { useEffect } from 'react';
import stateToProps from '../helpers/stateToProps';

function LoginPage(props){
    const navigate = useNavigate();

    useEffect(()=>{
        if(props.login.role !== ROLE.NONE){
            navigate("/");
        }
    }, []);

    const selection = useSetGet(ROLE.MANAGER);

    function login(e){
        e.preventDefault();
        
        props.setRole(selection.val);
        navigate("/");
    }

    return(
        <div className="login-page">
            <form onSubmit={login}>
                <select onChange={e => selection.set(e.target.value)}>
                    <option value={ROLE.MANAGER}>Manager</option>
                    <option value={ROLE.PRODUCER}>Producer</option>
                    <option value={ROLE.INSPECTOR}>Inspector</option>
                    <option value={ROLE.PACKER}>Packer</option>
                </select>
                <button type='submit'>login</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    setRole
}

export default connect(stateToProps('login'), mapDispatchToProps)(LoginPage);