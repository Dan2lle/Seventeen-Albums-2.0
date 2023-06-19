import api from "../apis/api"

export const addItem = (inputs) => async (dispatch) => {
    const response = await api.post("/albums", inputs)
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

export const removeItem = (id) => async (dispatch) => {
    const response = await api.delete(`/albums/${id}`)
    dispatch({
        type: 'REMOVE_ITEM',
        payload: id
    })
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