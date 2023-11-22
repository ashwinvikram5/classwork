import React, { useState } from 'react';
import { TextField, Autocomplete, Button } from '@mui/material';
import styled from 'styled-components';

const Fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

const FruitSurvey = () => {

    const [name, setName] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
    };


    return (
        <Form onSubmit={handleSubmit}>
            <h1>Enter your name favourite friut :</h1>
            <TextField
                style={{ marginBottom: '10px' }}
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
                data-testid="name"
            />
            <Autocomplete
                style={{ width: '250px', marginBottom: '10px' }}
                value={selectedValue}
                onChange={(_, newValue) => setSelectedValue(newValue)}
                options={Fruits}
                renderInput={(params) => (
                    <TextField {...params} label="Fruits" variant="outlined" />
                )}
                data-testid="autocomplete"
            />
            <Button type='submit' variant='contained' style={{ width: '150px' }} data-testid="button">Submit</Button>
        </Form>
    );
};

const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin: 10px 0 0 10px;
`;

export default FruitSurvey;