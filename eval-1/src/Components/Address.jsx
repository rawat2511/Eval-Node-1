import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const Address = () => {

    

    const [address, setAddress] = useState([]);

    useEffect( async () => {

        console.log("Use Effect")
        let data = await (await axios.get("http://localhost:8000/api/addresses")).data;
        setAddress(data);
        
    }, [])
    console.log("Address : ",address);
  return (
    <div>
    {
        address.map((add) => 
            <div key={add.id}>
                <h1>{add.id} - {add.address}</h1>
            </div>
        )
    }
    </div>
  )
}
