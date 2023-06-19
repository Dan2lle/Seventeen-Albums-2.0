const initialState = {
    list: []
    };

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { // returning a copy of orignal state 
                ...state, //spreading the original state
                list: [...state.list, action.payload] // new todos array
              }; //add to list
        case 'CLEAR':
            return {
              list: []
            };
        case 'REMOVE_ITEM':
            return {
              ...state,
              list: state.list.filter(item => item.id !== action.payload)
            }
          case 'SORT_NAME':
            return {
              ...state,
              list: state.list.slice().sort((a, b) => a.album.localeCompare(b.album))
            }
          case 'FETCH_ITEMS': 
            return {
              ...state,
              list: action.payload
            }
        default:
            return state;
    }
}

export default listReducer;
