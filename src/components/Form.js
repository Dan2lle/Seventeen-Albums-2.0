import { useState } from "react";
import { addItem, clear } from "../actions";
import { useDispatch } from 'react-redux';
import { Button } from "./styles/Button.styled";
import './Form.css';

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

    const clearList = () => {
        dispatch(clear())
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
                    <label>Album Cover:
                        <input 
                            type="url" 
                            name="image" 
                            value={inputs.image || ""} 
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <Button type="submit">Add Item</Button>
                <Button type="button"
                onClick={clearForm}>Clear Form</Button>
                <Button type="button"
                onClick={clearList}>Clear List</Button>
            </form>
        </div>
    )
}
