import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './List.css'
import { 
    clear, sortByName, sortByPrice, fetchItems } from '../actions';
import { Button } from './styles/Button.styled';
import { ButtonContainer } from './styles/ButtonContainer.styled';
import Card from './Card';

export default function List() {
    const list = useSelector(state => state.list)
    const dispatch = useDispatch()
    const clearList = () => {
        dispatch(clear())
    }

    const sortListByName = () => {
        dispatch(sortByName())
    }

    const sortListByPrice = () => {
        dispatch(sortByPrice())
    }

    useEffect(() => {
        dispatch(fetchItems());
    }, [])

    return (
        <div className='album-list'>
            
            <h2 className='list-header'>Seventeen Album List</h2>
            <h4 className='list-header'>Current # of the albums: {list.length}</h4>
            <ButtonContainer>
                <Button type="button" onClick={clearList}>Clear List</Button>
                <Button type="button" onClick={sortListByName}>Sort List By Name</Button>
                <Button type="button" onClick={sortListByPrice}>Sort List By Price</Button>
            </ButtonContainer>
            <br></br>
            
            <div style={{display:"flex", justifyContent: "center", flexWrap: "wrap"}}>
            {list.map((item) => (
                <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
      );
}