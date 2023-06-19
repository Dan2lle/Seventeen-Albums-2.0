import { useDispatch } from 'react-redux';
import './List.css' 
import { CardButton } from './styles/CardButton.styled';
import Modal from './Modal';
import { useState } from 'react';
import { removeItem } from '../actions';
import axios from 'axios';

export default function Card(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [album, setAlbum] = useState('')
    const dispatch = useDispatch()
    const baseURL = "http://localhost:3002"

    const removeHandler = (id) => {
        dispatch(removeItem(id))
    }

    const fetchAlbum = (id) => {
        axios.get(`${baseURL}/albums/${id}`)
        .then(res => {
            setAlbum(res.data)
        }).catch(
            err => console.log(err)
        )
    }

    return (
        <div className='li-item' key={props.item.description}>
            <br></br>
            <span style={{ fontWeight: 'bold' }}>Album Name</span>: {props.item.album} 
            <br></br>
            <br></br>
            <span style={{ fontWeight: 'bold' }}>Album Cover</span>: <img className='album-cover' src={props.item.image} alt='album cover'/>
            <div>
                <CardButton onClick={() => {setIsOpen(true); fetchAlbum(props.item.id)}}>View Album Details</CardButton>
                <CardButton onClick={() => removeHandler(props.item.id)}>Delete Album</CardButton>
                <div>
                    <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>{album.album} Details</span>
                            <br></br>
                            <br></br>
                            <span style={{ fontWeight: 'bold' }}>Description</span>: {album.description} 
                            <br></br>
                            <span style={{ fontWeight: 'bold' }}>Price</span>: ${album.price} 
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}