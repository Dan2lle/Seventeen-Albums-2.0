import api from "../apis/api"

export const addItem = (inputs) => async (dispatch) => {
    const response = await api.post("/albums", inputs)
    console.log(response.data)
    dispatch({
        type: 'ADD_ITEM',
        payload: response.data
    })
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

export const fetchItems = () => async (dispatch) => {
    const response = await api.get("/albums")
    dispatch({
        type: 'FETCH_ITEMS',
        payload: response.data
    })
} 