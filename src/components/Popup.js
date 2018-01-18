import React from 'react'
import {connect} from "react-redux";
import {changeIsRecall, clearList} from "../actions/firstAction";
const Popup = ({inputText,isRecall,onClickRecall,listOfOperations,clearList}) =>(

    <div className={'tooManySymbols-container'}
         style={{display: ((inputText.join('').length >= 19) || isRecall) ? "block" : "none"}}
         ref={(input) => { this.manySymbols = input; }}>
        <div className={'listOfOperations'} style={{display:(isRecall) ? "block" : "none"}}>
            {listOfOperations.map((element,i) =>
                <div className={'operations'} key={i}>{element}</div>
            )}
        </div>
        <div className={'clearList'}
             onClick={clearList}
             style={{display:(isRecall) ? "block" : "none"}}>Clear</div>
        <div className={"tooManySymbols-close"} onClick={()=>{this.manySymbols.style.display = "none";onClickRecall()}}>X</div>
        <div className={'tooManySymbols'}
             style={{display:(!isRecall) ? "block" : "none"}}>Too Many Symbols</div>
    </div>
);
function mapStateToProps(state) {
    return {
        inputText: state.inputText,
        isRecall: state.isRecall,
        listOfOperations: state.listOfOperations
    }
}
function mapDispatchToProps(dispatch) {
    return{
        onClickRecall: () => dispatch(changeIsRecall()),
        clearList: () => dispatch(clearList())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Popup)