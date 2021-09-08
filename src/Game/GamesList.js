import React, {useEffect,useState} from 'react';
import { Card,CardText, CardSubtitle,Button,CardImg,CardBody,CardTitle, Container, Row, Col } from 'reactstrap';
import GamesModal from './GamesModal';




const GamesList = (props) =>{
const[games, setGames] = useState([])
const[open, setOpen] = useState(false)





    useEffect(() => {
        fetchGames();
    },[])
    
    const fetchGames = () =>{
        fetch('http://localhost:4000/game/all',{
            method: 'GET',
            headers: new Headers ({
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${props.token}`
            })
        }).then((res) => res.json())
        .then((gameData) => {
            console.log('games',gameData)
            setGames(gameData)
        })
    }


    const GameCard=() =>{ // will recive props value from parent(gamelist)
        return(<Card >
            <CardImg top src="data:image alt="Card image />
            <CardBody>
            <CardTitle tag="h5">{props.game.gameName}</CardTitle> 
            <CardSubtitle tag="h6" className="mb-2 text-muted">Maker:{props.game.maker}</CardSubtitle>
            <CardText>{props.game.info}</CardText>
            <Button setOpen={true}>Button</Button>
            <Button onClick={()=> GamesModal}>review</Button>
            </CardBody>
        </Card>)
    }
        //const[GameName, GameInformation,GameMaker]
        //games.map(game, index) =>{
            console.log('games2', games)
        if(games.length==0){
            return(<div>...loading</div>)
        }else{

        
    
        return(
            <Container fluid>
                <Row>
                    {
games.map((game, index) =>{
        
    return(

    <Col sm="4">
        <GameCard game={game} index={index} /> {/* we are passing properties to the game card component*/}
    </Col>
    
    )
})
                    }
                </Row>
            </Container>
        )
    }
}



export default GamesList