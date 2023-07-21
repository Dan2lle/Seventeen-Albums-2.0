import { useDispatch } from 'react-redux';
import './List.css' 
import { CardButton } from './styles/CardButton.styled';
import Modal from './Modal';
import { useState } from 'react';
import { removeItem } from '../actions';
import axios from 'axios';
import { ButtonLink } from './navbar/NavBarElements';

export default function Card(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [album, setAlbum] = useState('')
    const dispatch = useDispatch()
    const baseURL = "https://seventeen-albums-right-here.onrender.com/"

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
        <div className='li-item'>
            <br></br>
            <span style={{ fontWeight: 'bold' }}>Album Name</span>: {props.item.album} 
            <br></br>
            <br></br>
            <span style={{ fontWeight: 'bold' }}>Album Cover</span>: <img className='album-cover' src={props.item.image} alt='album cover'/>
            <div>
                <ButtonLink to={`/update/${props.item._id}`}>
                    <CardButton>
                        Update Album
                    </CardButton>
                </ButtonLink>
                <CardButton onClick={() => {setIsOpen(true); fetchAlbum(props.item._id)}}>View Album Details</CardButton>
                <CardButton onClick={() => removeHandler(props.item._id)}>Delete Album</CardButton>
                <div>
                    <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
                        <div>
                            <span style={{ fontWeight: 'bold' }}> &lt; {album.album} &gt; Details</span>
                            <br></br>
                            <br></br>
                            <span style={{ fontWeight: 'bold' }}>Title Song</span>: {album.title} 
                            <br></br>
                            <span style={{ fontWeight: 'bold' }}>Description</span>: {album.description} 
                            <br></br>
                            <span style={{ fontWeight: 'bold' }}>Price</span>: ${album.price}
                            <br></br>
                            <span style={{ fontWeight: 'bold' }}>Year of Release</span>: {album.released}  
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}