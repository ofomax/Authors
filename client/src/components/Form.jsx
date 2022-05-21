import React, { useState, useEffect } from 'react'

function Form(props) {

    const [ firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[firstNameErr, setFirstNameErr] = useState({});
    const[lastNameErr, setLastNameErr] = useState({})
    const {onSubmitProp, initialFirstName, initialLastName} = props
    useEffect(()=>{
        setLastName(initialLastName);
        setFirstName(initialFirstName);
    },[props])

    const onSubmit = (e)=>{
        e.preventDefault();
        const isValid = validate();
        onSubmitProp({firstName, lastName})
    }

    const validate =()=>{
        const firstNameErr = {}
        const lastNameErr = {}
        let isValid = true;

        if(firstName.trimEnd().length < 3){
            firstNameErr.fErr = "First name must be greater than 3 characters";
            isValid = false;
        }
        if(lastName.trimEnd().length < 3){
            lastNameErr.fErr = "Last name must be greater than 3 characters";
            isValid = false;
        }
        setFirstNameErr(firstNameErr)
        setLastNameErr(lastNameErr)
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
            {Object.keys(firstNameErr).map((key)=>{
                return <h4 style={{color: "red"}}>{firstNameErr[key]}</h4>
            })}
            <br></br>
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
            {Object.keys(lastNameErr).map((key)=>{
                return <h4 style={{color: "red"}}>{lastNameErr[key]}</h4>
            })}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form