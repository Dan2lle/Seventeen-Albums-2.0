// referenced from: https://www.youtube.com/watch?v=CUyU_ySLnIM

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../components/Form.css';
import { ButtonContainer } from "../components/styles/ButtonContainer.styled";
import { Button } from "../components/styles/Button.styled";
 
const Update = () => {
    const {id} = useParams()
    const [values, setValues] = useState({
        album: '',
        title: '',
        description: '',
        price: '',
        released: '',
        image: ''
    })
    const baseURL = "http://localhost:3002"

    useEffect(() => {
        axios.get(`${baseURL}/albums/${id}`)
        .then(res => {
            setValues({
                ...values, 
                album: res.data.album, 
                title: res.data.title,
                description: res.data.description,
                price: res.data.price,
                released: res.data.released,
                image: res.data.image
            })
        }).catch(
            err => console.log(err)
        )
    }, [])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${baseURL}/albums/${id}`, values)
        .then(res => {
            navigate('/main')
        }).catch(
            err => console.log(err)
        )
    }

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Album Name:
                        <input 
                            type="text" 
                            name="album" 
                            value={values.album || ""} 
                            onChange={
                                e => setValues({
                                    ...values, 
                                    album: e.target.value
                                })
                            }
                        />
                    </label>
                </div>
                <div>
                    <label>Description:
                        <input 
                            type="text" 
                            name="description" 
                            value={values.description || ""} 
                            onChange={
                                e => setValues({
                                    ...values,
                                    description: e.target.value
                                })
                            }
                        />
                    </label>
                </div>
                <div>
                    <label>Title Song:
                        <input 
                            type="text" 
                            name="title" 
                            value={values.title || ""} 
                            onChange={
                                e => setValues({
                                    ...values,
                                    title: e.target.value
                                })
                            }
                        />
                    </label>
                </div>
                <div>
                    <label>Price:
                        <input 
                            type="number" 
                            name="price" 
                            value={values.price || ""} 
                            onChange={
                                e => setValues({
                                    ...values, 
                                    price: e.target.value
                                })
                            }
                        />
                    </label>
                </div>
                <div>
                    <label>Year of Release:
                        <input 
                            type="text" 
                            name="released" 
                            value={values.released || ""} 
                            onChange={
                                e => setValues({
                                    ...values,
                                    released: e.target.value
                                })
                            }
                        />
                    </label>
                </div>
                <div>
                    <label>Album Cover:
                        <input 
                            type="url" 
                            name="image" 
                            value={values.image || ""} 
                            onChange={
                                e => setValues({
                                    ...values, 
                                    image: e.target.value
                                })
                            }
                        />
                    </label>
                </div>
                <ButtonContainer>
                    <Button type="submit">Update Album</Button>
                </ButtonContainer>
            </form>
        </div>
    );
};
 
export default Update;