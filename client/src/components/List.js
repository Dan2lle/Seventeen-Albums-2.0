import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './List.css'
import { 
    clear, sortByName, sortByPrice, setItems } from '../actions';
import { Button } from './styles/Button.styled';
import { ButtonContainer } from './styles/ButtonContainer.styled';
import Card from './Card';
import axios from 'axios';

export default function List() {
    const list = useSelector(state => state.list)
    const dispatch = useDispatch()
    const baseURL = "http://localhost:3002/albums/"

    const clearList = () => {
        dispatch(clear())
    }

    const sortListByName = () => {
        dispatch(sortByName())
    }

    const sortListByPrice = () => {
        dispatch(sortByPrice())
    }

    const fetchAlbums = async() => {
        const response = await axios.get(baseURL).catch((err) => {
            console.log("Err", err)
        })
        dispatch(setItems(response.data))
    }

    useEffect(() => {
        fetchAlbums();
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
                <Card key={item.description} item={item} />
                ))}
            </div>
        </div>
      );
}