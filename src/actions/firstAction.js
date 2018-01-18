export const addNumber = (number) => {
    return {
        type: 'ADD_NUMBER',
        number
    }
};

export const addOperation = (operation) => {
    return {
        type: 'ADD_OPERATION',
        operation
    }
};

export const equals = () => {
    return {
        type: 'EQUALS'
    }
};
export const dot = () => {
    return {
        type: 'DOT'
    }
};
export const removeAll = () => {
    return {
        type: 'REMOVE_ALL'
    }
};
export const removeOneSymbol = () => {
    return {
        type: 'REMOVE_ONE_SYMBOL'
    }
};
export const changeIsRecall = () => {
    return {
        type: 'CHANGE_IS_RECALL'
    }
};
export const clearList = () => {
    return {
        type: 'CLEAR_LIST_OF_OPERATIONS'
    }
};