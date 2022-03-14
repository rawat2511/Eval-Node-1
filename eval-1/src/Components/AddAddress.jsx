import axios from 'axios';
import React, {useState} from 'react'

export const AddAddress = () => {

    const [state, setState] = useState({});

    const handelChange = (e) => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const addAddress = async () => {
        const res = await axios.post("http://localhost:8000/api/addresses", state);
        console.log(res);
    }

  return (
    <div>
        <h1>AddAddress</h1>
        <input onChange={handelChange} type="number" name="id" placeholder='ID' />
        <input onChange={handelChange} type="text" name="address" placeholder='ADDRESS' />
        <button onClick={addAddress}>ADD ADDRESS</button>
    </div>
  )
}
