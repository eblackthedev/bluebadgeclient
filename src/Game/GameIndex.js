import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

const GameIndex = (props) => {
    const[games, setGames] = useState([]);
    const[updateActive, setUpdateActive] = useState(false);
    const[gameToUpdate, setGamesToUpdate] = useState({});

    
    useEffect(() =>{
        fetchGames();
    },[])

    const fetchGames = () => {
            fetch('http://localhost:4000/game', {
                method: 'GET',
                headers: new Headers ({
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${props.token}`
                })
            }).then((res) => res.json())
            .then((gameData) => {
                setGames(gameData)
                console.log('game', gameData)
            })
    }
    
    const editUpdateGame = (game) => {
        setGamesToUpdate(game);
        console.log(game);
    }
        
    const updateOn = () => {
        setUpdateActive(true);
    }
        
    const updateOff = () => {
        setUpdateActive(false);
    }
            
    return(
        
        <Container> 
            <Row>
                <Col md="3"> 
                    <GameCreate fetchGames={fetchGames} token={props.token}/>
                </Col> 
                <Col md="9"> 
                <GameTable games={games} editUpdateGames={editUpdateGame} updateOn={updateOn}
                fetchGames={fetchGames} token={props.token}/>
                </Col> 
                {updateActive ? <GameEdit gameToUpdate={gameToUpdate}    
                updateOff={updateOff} token={props.token} fetchGames={fetchGames}/> : <></>}

            </Row> 
        </Container>     
    )
}
export default Index;
