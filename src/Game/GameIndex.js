import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';



const GamesIndex = (props) => {
    const[games, setGames] = useState([]);
    const[updateActive, setUpdateActive] = useState(false);
    const[gameToUpdate, setGamesToUpdate] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    
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
                setGame(gameData)
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
    const searchHandler = (searchTerm) => {
        if (searchTerm.length > 0) {
          return game.filter(
            (game) =>
              game.gameName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
          );
        } else {
            return game;
        }
    }
                return (
            
                <Container> 

                <Row>
                    <input
                    type="text"
                    placeholder="Search Games"
                    className="prompt"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Row>

                    <Row>
                        <Col md="3"> 
                            <GameCreate fetchGame={fetchGame} token={props.token}/>
                        </Col> 
                        <Col md="9"> 
                        <GameTable game={game} editUpdateGame={editUpdateGame} updateOn={updateOn}
                        fetchGame={fetchGame} token={props.token}/>
                        </Col> 
                        {updateActive ? <GameEdit gameToUpdate={gameToUpdate}    
                        updateOff={updateOff} token={props.token} fetchGame={fetchGame}/> : <></>}

                    </Row> 
                </Container>     
            )
        
}
export default GameIndex
