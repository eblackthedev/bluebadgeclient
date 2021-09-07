import React, {useEffect,useState} from 'react';
import { Card,CardText, CardSubtitle,Button,CardImg,CardBody,CardTitle, Container, Row, Col } from 'reactstrap';
import { Button, Modal, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap';




const GamesList = (props) =>{
const[games, setGames] = useState([])




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
    const GameCard=(props) =>{ // will recive props value from parent(gamelist)
        return(<Card >
            <CardImg top src="data:image alt="Card image cap" />
            <CardBody>
            <CardTitle tag="h5">{props.game.gameName}</CardTitle> 
            <CardSubtitle tag="h6" className="mb-2 text-muted">Maker:{props.game.maker}</CardSubtitle>
            <CardText>{props.game.info}</CardText>
            <Button>Button</Button>
            </CardBody>
        </Card>)
    }
        //const[GameName, GameInformation,GameMaker]
        //games.map(game, index) =>{
            console.log('games2', games)
        if(games.length==0){
            return(<div>...loading</div>)
        }else{

        
        let gameGridValue= games.map((game, index) =>{
        
            return(

            <Col sm="4">
                <GameCard game={game} index={index} /> {/* we are passing properties to the game card component*/}
            </Col>
            
            )
        })
        return(
            <Container fluid>
                <Row>
                    {gameGridValue}
                </Row>
            </Container>
        )
    }
}




const ModalFocusAfterClose = (props) => {
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);

    const toggle = () => setOpen(!open);
    const handleSelectChange = ({target: { value }}) => {
        setFocusAfterClose(JSON.parse(value));
    }

    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <FormGroup>
                    <Label for="focusAfterClose">Focus After Close</Label>
                    <Input className="mx-2" type="select" id="focusAfterClose" onChange={handleSelectChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </Input>
                </FormGroup>
                <Button color="danger" onClick={toggle}>Open</Button>
            </Form>
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
                <ModalBody>
                    Observe the "Open" button. It will be focused after close when "returnFocusAfterClose" is true and will not be focused if "returnFocusAfterClose" is false.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}


export default GamesList