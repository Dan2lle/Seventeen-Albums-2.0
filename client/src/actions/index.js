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
    await api.delete(`/albums/${id}`)
    dispatch({
        type: 'REMOVE_ITEM',
        payload: id
    })
}

export const sortByName = () => async (dispatch) => {
    const response = await api.get("/albums/?sortBy=name")
    dispatch({
        type: 'FETCH_ITEMS',
        payload: response.data
    })
}

export const sortByPrice = () => async (dispatch) => {
    const response = await api.get("/albums/?sortBy=price")
    dispatch({
        type: 'FETCH_ITEMS',
        payload: response.data
    })
} 

export const fetchItems = () => async (dispatch) => {
    const response = await api.get("/albums")
    dispatch({
        type: 'FETCH_ITEMS',
        payload: response.data
    })
} 