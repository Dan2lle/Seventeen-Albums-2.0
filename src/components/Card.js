import { useDispatch } from 'react-redux';
import './List.css' 
import { CardButton } from './styles/CardButton.styled';
import Modal from './Modal';
import { useState } from 'react';
import { removeItem } from '../actions';


export default function Card(props) {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    let removeHandler = (album) => {
        dispatch(removeItem(album))
    }

    return (
        <div className='li-item' key={props.item.description}>
            Album Name: {props.item.album} 
            <br></br>
            Album Cover: <img className='album-cover' src={props.item.image} alt='album cover'/>
            <div>
                <CardButton onClick={() => setIsOpen(true)}>View Album Details</CardButton>
                <CardButton onClick={() => removeHandler(props.item.album)}>Delete Album</CardButton>
                <div>
                    <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
                        <div>
                            Description: {props.item.description} 
                            <br></br>
                            Price: ${props.item.price} 
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}