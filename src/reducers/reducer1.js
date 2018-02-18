const initialState = {
    inputText: ['0'],
    isRecall:false,
    listOfOperations:[]
};
const addNumber = (state = initialState,action) =>{
    switch (action.type) {
        case 'ADD_NUMBER':{
            if(state.inputText.join('').length < 19){
                if (state.inputText[0] === '0' && state.inputText.length !== 1) {
                    let cache = [...state.inputText];
                    cache[cache.length - 1] = cache[cache.length - 1] + action.number.toString();
                    return {...state,inputText:cache};
                }
                else if (action.number === 0 && state.inputText[0] === '0') {
                    return state;
                }
                else if (state.inputText[0] === '0') {
                    return {...state,inputText:[action.number.toString()]};
                }
                else {
                    let cache = [...state.inputText];
                    cache[cache.length - 1] = cache[cache.length - 1] + action.number.toString();
                    return {...state,inputText:cache};
                }
            }
            else return state;
        }
        case 'ADD_OPERATION':{
            if( state.inputText[state.inputText.length-1].substr(-1) === '+' ||
                state.inputText[state.inputText.length-1].substr(-1) === '-' ||
                state.inputText[state.inputText.length-1].substr(-1) === '/' ||
                state.inputText[state.inputText.length-1].substr(-1) === '*'||
                state.inputText[state.inputText.length-1].substr(-1) === '.'){
                return state;
            }
            return {...state,inputText:[...state.inputText,action.operation]};
        }
        case  'EQUALS':{
            if( state.inputText[state.inputText.length-1].substr(-1) === '+' ||
                state.inputText[state.inputText.length-1].substr(-1) === '-' ||
                state.inputText[state.inputText.length-1].substr(-1) === '/' ||
                state.inputText[state.inputText.length-1].substr(-1) === '*'||
                state.inputText[state.inputText.length-1].substr(-1) === '.'){
                let answer = state.inputText.join('');
                answer = eval(answer.substring(0, answer.length - 1)).toString();
                return {...state,inputText:[answer]};
            }
                let answer = eval(state.inputText.join(''));
                if ((answer ^ 0) !== answer){
                    answer = answer.toFixed(3)
                }
                return {...state,
                    inputText:[answer.toString()],
                    listOfOperations:[...state.listOfOperations,
                        state.inputText.join('').toString()+'='+answer.toString()
                    ]
                };
        }
        case  'DOT':{
            if( state.inputText[state.inputText.length-1].substr(-1) === '+' ||
                state.inputText[state.inputText.length-1].substr(-1) === '-' ||
                state.inputText[state.inputText.length-1].substr(-1) === '/' ||
                state.inputText[state.inputText.length-1].substr(-1) === '*' ||
                state.inputText[state.inputText.length-1].substr(-1) === '.' ||
                state.inputText[state.inputText.length-1].indexOf('.') !== -1){
                return state;
            }
            else {
                let cache = [...state.inputText];
                cache[cache.length-1] = cache[cache.length-1]+'.';
                return {...state,inputText:cache};
            }
        }
        case  'REMOVE_ALL':{
            return {...state,inputText:['0']};
        }

        case  'REMOVE_ONE_SYMBOL':{
            if(state.inputText.length !== 1 || state.inputText[0].length !== 1) {
                if (state.inputText[state.inputText.length - 1].length === 1) {
                    return {...state,inputText:state.inputText.slice(0, state.inputText.length - 1)};
                }
                else {
                    let cache = [...state.inputText];
                    cache[cache.length - 1] = cache[cache.length - 1].substring(0, cache[cache.length - 1].length - 1);
                    return {...state,inputText:cache}
                }
            }
            else return {...state,inputText:['0']};
        }


        case  'CHANGE_IS_RECALL':{
            return {...state,isRecall:!state.isRecall,inputText:['0']};
        }
        case  'CLEAR_LIST_OF_OPERATIONS':{
            return {...state,listOfOperations:[]};
        }


        default:
            return state
    }
};
export default addNumber;