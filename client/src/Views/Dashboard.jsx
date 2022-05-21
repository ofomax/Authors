import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Dashboard(props) {
  const [authors, setAuthors] = useState([]);

    // FUNCTION TO DELETE
  const removeItem = authorId =>{
    setAuthors(authors.filter(author => author._id !== authorId))
  }
    const deleteHandler = authorId =>{
        axios.delete('http://localhost:8000/api/delete/' + authorId).then(res =>{
            removeItem(authorId)
        })
    }

    // CALL TO GET ALL AUTH
  useEffect(()=>{
    axios.get('http://localhost:8000/api/all').then(res =>{
      setAuthors(res.data)
    })
  },[])

    
    
  return (
    <div>
        Dashboard
        <Link to="/add">Add Author</Link>
        {authors.map((name, index)=>(
            <div key={index}>
                <h3>{name.firstName} {name.lastName}</h3>
                <Link to={`/edit/${name._id}`}>Edit</Link>
                <button type="submit"  onClick={()=>deleteHandler(name._id)}>Delete</button>

            </div>
        ))}
    </div>
  )
}

export default Dashboard