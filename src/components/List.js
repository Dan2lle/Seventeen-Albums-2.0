import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './List.css'
import { ListButton } from './styles/ListButton.styled';
import Modal from './Modal';
import { useState } from 'react';
import { removeItem, clear, sortByName, sortByPrice } from '../actions';
import { Button } from './styles/Button.styled';
import { ButtonContainer } from './styles/ButtonContainer.styled';

export default function List() {
    const list = useSelector(state => state.list)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    let removeHandler = (album) => {
        dispatch(removeItem(album))
    }

    const clearList = () => {
        dispatch(clear())
    }

    const sortListByName = () => {
        dispatch(sortByName())
    }

    const sortListByPrice = () => {
        dispatch(sortByPrice())
    }

    return (
        <div className='album-list'>
            
            <h2 className='list-header'>Seventeen Album List</h2>
            <h4 className='list-header'>Current # of the albums: {list.length}</h4>
            <ButtonContainer>
                <Button type="button" onClick={clearList}>Clear List</Button>
                <Button type="button" onClick={sortListByName}>Sort List By Name</Button>
                <Button type="button" onClick={sortListByPrice}>Sort List By Price</Button>
            </ButtonContainer>
            
            <div style={{display:"flex", justifyContent: "center", flexWrap: "wrap"}}>
            {list.map((item) => (
                <div className='li-item' key={item.description}>
                    Album Name: {item.album} 
                    <br></br>
                    Album Cover: <img className='album-cover' src={item.image} alt='album cover'/>
                    <div>
                        <ListButton onClick={() => setIsOpen(true)}>View Album Details</ListButton>
                        <ListButton onClick={() => removeHandler(item.album)}>Delete Album</ListButton>
                        <div>
                            <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
                                <div>
                                    Description: {item.description} 
                                    <br></br>
                                    Price: {item.price} 
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
      );
}