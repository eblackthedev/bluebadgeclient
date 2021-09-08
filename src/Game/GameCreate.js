import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';

const GameCreate = (props) => {
    const [gameName, setGameName] = useState('');
    const [maker, setMaker] = useState('');
    const [info, setInfo] = useState('');
    
    
    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log("gameName",gameName,maker,info, props.token )
        fetch('http://localhost:4000/game/game/', { 
            method: 'POST',
            body: JSON.stringify({gameName: gameName, maker: maker, info: info}), 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization':"Bearer " + props.token 
            })
        }).then((res) => res.json())
        .then((gameData) => { 
                console.log(gameData);
                setGameName(''); 
                setMaker(''); 
                setInfo('') 
              //  props.fetchgames(); 
        })
    }
        
    return(
        <Container>
        <h3>My Games</h3>
        <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Label htmlFor="gameName">Game Name </Label>
            <Input  name="mygames" value={gameName} onChange={(e) => setGameName(e.target.value)}> 
            {/*<option value="myFavorite">My Favorite</option>
            <option value="newCollection">Collections</option>
    <option value="newrelease">Add More Games</option>*/}
            </Input>

        </FormGroup>

        <FormGroup>
            <Label htmlFor="maker">Game Maker</Label>
            <Input name="maker" value={maker} onChange={(e) => setMaker(e.target.value)}> 
           {/* <option value="makerName">Game Maker</option>
            <option value="newrelease">New Release</option>*/}
            </Input>
        </FormGroup>

        <FormGroup>
            <Label htmlFor="info">Add Information</Label>
            <Input name="info" value={info} onChange={(e) => setInfo(e.target.value)} /> 
        </FormGroup>

        <Button type="submit">Submit</Button> 
        </Form>
        </Container>
    )

}
export default GameCreate;
