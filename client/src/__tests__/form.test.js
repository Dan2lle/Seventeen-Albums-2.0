import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../components/Form'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

beforeEach(() => {
    const initialState = {list: []}
    const mockStore = configureStore()
    let store = mockStore(initialState)
    render(
        <Provider store={store}>
            <Form />
        </Provider>
    )
});

test('should render add button', () => { 
    const addButton = screen.getByText('Add Album')
    expect(addButton).toBeInTheDocument()
})

test('should render clear form button', () => {
    const clearButton = screen.getByText('Clear Form')
    expect(clearButton).toBeInTheDocument()
})

test('should render name label', () => {
    const nameLabel = screen.getByText('Album Name:')
    expect(nameLabel).toBeInTheDocument()
})

test('should render Description label', () => {
    const descriptionLabel = screen.getByLabelText('Description:')
    expect(descriptionLabel).toBeInTheDocument()
})

test('should render Title Song label', () => {
    const titleLabel = screen.getByLabelText('Title Song:')
    expect(titleLabel).toBeInTheDocument()
})

test('should render Price label', () => {
    const priceLabel = screen.getByLabelText('Price:')
    expect(priceLabel).toBeInTheDocument()
})

test('should render released label', () => {
    const releasedLabel = screen.getByLabelText('Year of Release:')
    expect(releasedLabel).toBeInTheDocument()
})

test('should render cover label', () => {
    const imageLabel = screen.getByLabelText('Album Cover:')
    expect(imageLabel).toBeInTheDocument()
})