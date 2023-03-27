import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { MdDeleteForever } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';

const DynamicForm = () => {
    const [formState, setFormState] = useState([{
        firstName: '',
        address: [
            {
                street: '',
            }
        ]
    }
    ]);

    // const handleChange = (event, index) => {
    //     const { name, value } = event.target;
    //     const updatedAddress = [...formState.address];
    //     updatedAddress[index] = {
    //         ...updatedAddress[index],
    //         [name]: value
    //     };

    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //         address: updatedAddress
    //     });
    // };

    const handleAddStudent = () => {
        setFormState([...formState, formState])
        // ...formState,

        // address: [
        //     ...formState.address,
        //     {
        //         street: '',
        //         city: '',
        //         state: '',
        //         zip: ''
        //     }
        // ]
        // });
    };
    const addAddress = (index) => { 

        const newFormState = [...formState]
        newFormState[index].address.push({ street: '' })
    }
    const removeStudent = (index) => {
        console.log(index)
        const newFormState = [...formState]
        newFormState.splice(index, 1)
        setFormState(newFormState)
    }

    return (
        <form>



            {
                formState.map((student, index) => (
                    <div style={{ margin: '20px', border: '2px solid red' }} key={index}>
                        <label>First Name:</label>
                        <input type="text" name="firstName" />
                        {
                            student.address.map((address, i) => (
                           
                                <div style={{ margin: '20px', border: '2px solid green' }} key={i} >
                                    <label>Address:</label>
                                    <input type="text" style={{}} />
                                </div>
                            ))
                        }
                        
                       
                        <MdDeleteForever onClick={() => removeStudent(index)} style={{color:'red', fontSize:'3rem'}}/>
                        <IoMdAdd onClick={() => addAddress(index)} style={{ color: 'green', fontSize: '3rem', height: '20px', width: '20px', backgroundColor: 'orange'}}/>
                    </div>
                ))}


            {/* 
            {formState.address.map((address, index) => (
            <div>
                <label>Address:</label>
                <input type="text" name={`address[${index}].street`} />
                <input type="text" name={`address[${index}].zip`} value={address.zip} onChange={(e) => handleChange(e, index)} />
            </div>
            ))} */}

            <button type="button" onClick={handleAddStudent}>Add Student</button>
        </form>
    );
};

export default DynamicForm;
