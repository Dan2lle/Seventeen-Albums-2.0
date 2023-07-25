import { render, screen, cleanup, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../components/Form'
import Main from '../pages/main'
import List from '../components/List'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import userEvent from '@testing-library/user-event'

beforeEach(() => {
    // const initialState = {list: []}
    // const middlewares = [thunk]
    // const mockStore = configureMockStore(middlewares)
    // let store = mockStore(initialState)
    // render(
    //     <Provider store={store}>
    //         <Main />
    //     </Provider>
    // )
    const initialState = {list: []}
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    let store = mockStore(initialState)
    render(
        <Provider store={store}>
            <List />
        </Provider>
    )
});

afterEach(() => {
    jest.clearAllMocks();
    cleanup()
})

test('should render name button', () => { 
    const nameButton = screen.getByText('Sort List By Name')
    expect(nameButton).toBeInTheDocument()
})

test('should render price button', () => { 
    const priceButton = screen.getByText('Sort List By Price')
    expect(priceButton).toBeInTheDocument()
})

test('should render year button', () => { 
    const yearButton = screen.getByText('Sort List By Year')
    expect(yearButton).toBeInTheDocument();
})

test('should render title', () => { 
    const title = screen.getByText('Seventeen Album List')
    expect(title).toBeInTheDocument();
})

// test('form makes a post api call with proper inputs', async () => {
//     userEvent.type(screen.getByText('Album Name:'), 'FML')
//     userEvent.type(screen.getByText('Description:'), '10th mini album')
//     userEvent.type(screen.getByText('Title Song:'), 'Super')
//     userEvent.type(screen.getByText('Price:'), 40)
//     userEvent.type(screen.getByText('Year of Release:'), '2023')
//     userEvent.type(screen.getByText('Album Cover:'), 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Seventeen_-_FML.png')

//     await act (async() => {
//         userEvent.click(screen.getByText('Add Album'))
//     })
//     // userEvent.click(await screen.getByText('Add Album'))
//     userEvent.click(screen.getByText('Clear Form'))

//     // expect(response).toEqual([
//     //     expect.objectContaining({
//     //       name: 'FML',
//     //       descripton: '10th mini album',
//     //       title: 'Super',
//     //       price: 40,
//     //       released: '2023',
//     //       image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Seventeen_-_FML.png'
//     //     }),
//     //   ]);

//     const newCard = screen.getByText('FML') 
//     expect(newCard).toBeInTheDocument()
// })

