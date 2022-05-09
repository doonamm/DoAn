import { connect } from "react-redux";
import stateToProps from '../helpers/stateToProps';
import BatchListTable from "./BatchListTable";
import { useEffect } from "react";
import useSetGet from '../helpers/useSetGet';
import {batchRule} from '../helpers/rules';

function DefaultPage(props){
    const selectedTabIndex = useSetGet(0);
    const tabs = useSetGet({});    
    const role = props.login.role;

    useEffect(()=>{
        const tabsData = {
            0: [],
            1: []
        };

        props.data.list.forEach(item => {
            if(batchRule[role].findIndex(status => status === item.status) > -1){
                tabsData[0].push(item);
            }
            else{
                tabsData[1].push(item);
            }
        });

        tabs.set(tabsData);
    }, [props.data.list]);

    return(
        <div className="page fix-table">
            <ul className="row tab">
                <li className={selectedTabIndex.val === 0 ? 'selected' : ''} onClick={()=>selectedTabIndex.set(0)}>Doing</li>
                <li className={selectedTabIndex.val === 1 ? 'selected' : ''} onClick={()=>selectedTabIndex.set(1)}>Finished</li>
            </ul>
            <BatchListTable list={tabs.val[selectedTabIndex.val]}/>
        </div>
    );
}

export default connect(stateToProps('login', 'data'))(DefaultPage);