export const addItem = (inputs) => {
    return {
        type: 'ADD_ITEM',
        payload: inputs
    }
}

export const clear = () => {
    return {
        type: 'CLEAR'
    }
}

export const removeItem = (album) => {
    return {
        type: 'REMOVE_ITEM',
        payload: album
    }
}