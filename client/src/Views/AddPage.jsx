import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Form from '../components/Form'

function AddPage() {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    // CREATE AUTH
    const createAuth = (author)=>{
        axios.post('http://localhost:8000/api/create', author)
            .then(res =>{
                setAuthors([...authors, res.data]);
                navigate("/")
            })
            .catch(err =>{
                console.log(err)
            })
    }


  return (
    <div>
        <Link to="/">Home</Link>

        AddPage

        <Form onSubmitProp={createAuth} initialFirstName="" initialLastName=""/>
        
    </div>
  )
}

export default AddPage