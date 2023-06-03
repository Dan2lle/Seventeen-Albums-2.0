import { useState } from "react";

export default function Form() {
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>Album Name:
            <input 
                type="text" 
                name="albumName" 
                value={inputs.albumName || ""} 
                onChange={handleChange}
            />
        </label>
        <label>Description:
            <input 
                type="text" 
                name="description" 
                value={inputs.description || ""} 
                onChange={handleChange}
            />
        </label>
        <label>Price:
            <input 
                type="number" 
                name="price" 
                value={inputs.price || ""} 
                onChange={handleChange}
            />
        </label>
        <label>Album Cover:
            <input 
                type="url" 
                name="cover" 
                value={inputs.cover || ""} 
                onChange={handleChange}
            />
        </label>
        <input type="submit" />
    </form>
  )
}
