import { useDispatch } from 'react-redux';
import './List.css' 
import { CardButton } from './styles/CardButton.styled';
import Modal from './Modal';
import { useState } from 'react';
import { removeItem } from '../actions';

export default function Card(props) {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const removeHandler = (id) => {
        dispatch(removeItem(id))
    }
    
    return (
        <div className='li-item' key={props.item.description}>
            <br></br>
            <span style={{ fontWeight: 'bold' }}>Album Name</span>: {props.item.album} 
            <br></br>
            <br></br>
            <span style={{ fontWeight: 'bold' }}>Album Cover</span>: <img className='album-cover' src={props.item.image} alt='album cover'/>
            <div>
                <CardButton onClick={() => setIsOpen(true)}>View Album Details</CardButton>
                <CardButton onClick={() => removeHandler(props.item.id)}>Delete Album</CardButton>
                <div>
                    <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>{props.item.album} Details</span>
                            <br></br>
                            <br></br>
                            <span style={{ fontWeight: 'bold' }}>Description</span>: {props.item.description} 
                            <br></br>
                            <span style={{ fontWeight: 'bold' }}>Price</span>: ${props.item.price} 
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}