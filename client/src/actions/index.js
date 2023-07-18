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

export const sortByName = (page) => async (dispatch) => {
    const response = await api.get(`/albums/?sortBy=name`)
    // const response = await api.get(`/albums/?sortBy=name&page=${page}`)
    dispatch({
        type: 'FETCH_ITEMS',
        payload: response.data
    })
}

export const sortByPrice = (page) => async (dispatch) => {
    const response = await api.get(`/albums/?sortBy=price`)
    // const response = await api.get(`/albums/?sortBy=price&page=${page}`)
    dispatch({
        type: 'FETCH_ITEMS',
        payload: response.data
    })
} 

export const sortByYear = (page) => async (dispatch) => {
    const response = await api.get(`/albums/?sortBy=year`)
    // const response = await api.get(`/albums/?sortBy=year&page=${page}`)
    dispatch({
        type: 'FETCH_ITEMS',
        payload: response.data
    })
} 

export const fetchItems = (page) => async (dispatch) => {
    const response = await api.get(`/albums`)
    // const response = await api.get(`/albums/?page=${page}`)
    dispatch({
        type: 'FETCH_ITEMS',
        payload: response.data
    })
} 