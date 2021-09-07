import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const GameCreate = (props) => {
    const [gameName, setGameName] = useState('');
    const [maker, setMaker] = useState('');
    const [info, setInfo] = useState('');
    
    const handleSubmit = (e) => { 
        e.preventDefault();
        fetch('http://localhost:4000/game/', { 
            method: 'POST',
            body: JSON.stringify({game: {gameName: gameName, maker: maker, info: info}}), 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token 
            })
        }).then((res) => res.json())
        .then((gameData) => { 
                console.log(gameData);
                setGameName(''); 
                setMaker(''); 
                setInfo('') 
                props.fetchgames(); 
        })
    }
        
    return(
        <>
        <h3>My Games</h3>
        <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Label htmlFor="gameName"/>
            <Input name="gameName" value={gameName} onChange={(e) => setGameName(e.target.value)}/> 
            <option value="newrelease">New Release</option>
        </FormGroup>

        <FormGroup>
            <Label htmlFor="maker"/>
            <Input type="select" name="maker" value={info} onChange={(e) => setMaker(e.target.value)}> 
            <option value="makerName">Game Maker Name</option>
            <option value="newrelease">New Release</option>
            </Input>
        </FormGroup>

        <FormGroup>
            <Label htmlFor="info"/>
            <Input name="info" value={info} onChange={(e) => setInfo(e.target.value)} /> 

        </FormGroup>

        <Button type="submit">Submit</Button> 
        </Form>
        </>
    )

}
export default GameCreate;
