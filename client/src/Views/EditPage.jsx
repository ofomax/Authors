import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Form from '../components/Form'

function EditPage(props) {
  const { id } = useParams();
  const [author, setAuthors] = useState([])
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://localhost:8000/api/author/' + id)
        .then(res => {
            setAuthors(res.data);
            setLoaded(true);
        })
}, [])
    const updateAuth =(author)=>{
        axios.put('http://localhost:8000/api/update/' + id, author)
            .then(res=>{
              console.log(res)
              navigate("/")
            })
            
    }



  return (
    <div>
        <Link to="/">Home</Link>
        EditPage
        <Form onSubmitProp={updateAuth} initialFirstName={author.firstName} initialLastName={author.lastName}/>
        
    </div>
  )
}

export default EditPage