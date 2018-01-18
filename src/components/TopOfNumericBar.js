import React from 'react'
import {removeOneSymbol,changeIsRecall} from "../actions/firstAction";
import {connect} from "react-redux";

const TopOfNumericBar = ({onClickRemove,onClickRecall}) =>(
    <div className={'topOfNumericBar'}>
        <div className={'recall'} onClick={onClickRecall}>RECALL</div>
        <div className={'flax-element dark'} onClick={onClickRemove}>C</div>
    </div>
);

function mapDispatchToProps(dispatch) {
    return{
        onClickRemove: () => dispatch(removeOneSymbol()),
        onClickRecall: () => dispatch(changeIsRecall())
    }
}

export default connect(null,mapDispatchToProps)(TopOfNumericBar);