import { useState } from "react";
import { addItem } from "../actions";
import { useDispatch } from 'react-redux';
import { Button } from "./styles/Button.styled";
import './Form.css';
import { ButtonContainer } from "./styles/ButtonContainer.styled";

export default function Form() {
    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addItem(inputs))
    }

    const clearForm = () => {
        setInputs("")
    }

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Album Name:
                        <input 
                            type="text" 
                            name="album" 
                            value={inputs.album || ""} 
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Description:
                        <input 
                            type="text" 
                            name="description" 
                            value={inputs.description || ""} 
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Title Song:
                        <input 
                            type="text" 
                            name="title" 
                            value={inputs.title || ""} 
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Price:
                        <input 
                            type="number" 
                            name="price" 
                            value={inputs.price || ""} 
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Year of Release:
                        <input 
                            type="text" 
                            name="released" 
                            value={inputs.released || ""} 
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Album Cover:
                        <input 
                            type="url" 
                            name="image" 
                            value={inputs.image || ""} 
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <ButtonContainer>
                    <Button type="submit">Add Album</Button>
                    <Button type="button"
                    onClick={clearForm}>Clear Form</Button>
                </ButtonContainer>
            </form>
        </div>
    )
}
