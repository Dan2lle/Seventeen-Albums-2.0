const initialState = {
    list: [
        {
          album: "17 CARAT",
          description: "1st mini album",
          price: "29",
          image: "https://upload.wikimedia.org/wikipedia/en/2/21/Seventeen-17_Carat_%28EP%29.jpg",
        },
        {
          album: "BOYS BE",
          description: "2nd mini album",
          price: "27",
          image: "https://upload.wikimedia.org/wikipedia/en/d/dc/Boys_Be_EP.png",
        },
        {
          album: "LOVE&LETTER",
          description: "1st full album",
          price: "35",
          image: "https://upload.wikimedia.org/wikipedia/en/d/de/Seventeen_-_Love_and_Letter.jpg"
        },
        {
          album: "Going Seventeen",
          description: "3rd mini album",
          price: "39",
          image: "https://upload.wikimedia.org/wikipedia/en/f/f5/Going_Seventeen_EP.jpg"
        }
      ]
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
              list: state.list.filter(item => item.album !== action.payload)
            }
          case 'SORT_NAME':
            return {
              ...state,
              list: state.list.slice().sort((a, b) => a.album.localeCompare(b.album))
            }
          case 'SORT_PRICE':
            return {
              ...state,
              list: state.list.slice().sort((a, b) => a.price.localeCompare(b.price))
            }
        default:
            return state;
    }
}

export default listReducer;
