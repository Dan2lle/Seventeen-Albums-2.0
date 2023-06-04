import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './List.css'
import { ListButton } from './styles/ListButton.styled';
import Modal from './Modal';
import { useState } from 'react';
import { removeItem } from '../actions';

export default function List() {
    const list = useSelector(state => state.list)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    let removeHandler = (album) => {
        dispatch(removeItem(album))
    }

    return (
        <div className='album-list'>
            
            <h2 className='list-header'>Seventeen Album List</h2>
            
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
      );
}