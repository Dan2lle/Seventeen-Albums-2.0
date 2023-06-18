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

export const sortByName = () => {
    return {
        type: 'SORT_NAME'
    }
}

export const sortByPrice = () => {
    return {
        type: 'SORT_PRICE'
    }
}

export const setItems = (albums) => {
    return {
        type: 'SET_ITEMS',
        payload: albums
    }
}