
import React, { useEffect, useState } from "react";


import React, {useEffect,useState} from 'react';
import { Card,CardText, CardSubtitle,Button,CardImg,CardBody,CardTitle, Container, Row, Col } from 'reactstrap';
import GamesModal from './GamesModal';




const GamesList = (props) => {
  // const [games, setGames] = useState([]);


  // useEffect(() => {
  //   fetchGames();
  // }, []);
const GamesList = (props) =>{
const[games, setGames] = useState([])
const[open, setOpen] = useState(false)



        useEffect(() => {
            fetchGames();
            ExternalGameApi();
        }, [])

  // const fetchGames = () => {
  //   fetch("http://localhost:4000/game/all", {
  //     method: "GET",
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${props.token}`,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((gameData) => {
  //       console.log("games", gameData);
  //       setGames(gameData);
  //     });
  // };
  const GameCard = (props) => {
    // will recive props value from parent(gamelist)
    return (
      <Card>
        <CardImg top src /*add new photo*/ alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.game.gameName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Maker:{props.game.maker}
          </CardSubtitle>
          <CardText>{props.game.info}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    );
  };


  //const[GameName, GameInformation,GameMaker]
  //games.map(game, index) =>{
  console.log("games2", props.games);
  if (props.games.length == 0) {
    return <div>...loading</div>;
  } else {
    return (
      <Container fluid>
        <Row>
          {props.games.map((game, index) => {
            return (
              <Col sm="4">
                <GameCard game={game} index={index} />{" "}
                {/* we are passing properties to the game card component*/}
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
};


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

        const fetchGames = () => {
            fetch('http://localhost:4000/game/all', {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${props.token}`
                    })
                }).then((res) => res.json())
                .then((gameData) => {
                    console.log('games', gameData)
                    setGames(gameData)
                })
        }

        // const ExternalGameApi = () => {
        //         function gameApi(games) {
        //             gameApi = games.thisweek;
        //             //console.log()
        //             const Api = 
        //             const gameApi = async () => {
        //                 const response = await fetch(gameApi)
        //                 const json = await response.json()
        //                 console.log('game2', json)


                        //     const img = document.createElement('img')
                        //    const body = document.querySelector('body')
                        // img.src = json.url;
                        // body.append(img)
                //     }
                // }}
                    const GameCard = () => { // will recive props value from parent(gamelist)
                        return ( 
                            games.map((game,index) => {
                                return(
                                    <div>
                                        
                                        <p>{game.gameName}</p>
                                    
                                <Card key={index}  className = "mb-3" >
                                 <CardImg top src = ""alt = "Card image cap" />
                                
                             <CardBody >
                             <CardTitle tag = "h5" > {
                                    game.gameName
                                } 
                                </CardTitle>
                                
                                <CardSubtitle tag = "h6"
                                className = "mb-2 text-muted" > Maker: {
                                       game.maker
                                    } </CardSubtitle> 
                                    <CardText > {
                                           game.info
                                        } </CardText> 
                                        <Button > Show more like this </Button> 
                                        
                                        </CardBody> 
                                        </Card>
                                        </div>
                                        )
                                    })
                            )
                        }
                        //const[GameName, GameInformation,GameMaker]
                        //games.map(game, index) =>{
                        console.log('games2', games)
                        return(
                            <div>
                        {games.length === 0 ? <div>Loading...</div> :
                           <div>
                            <GameCard />
                           </div>}
                            </div>
                         )   
                
                 
                }              
                


            //     {if (games.length === 0) {

            //         <div> ...loading </div>
               
            //    }else {
            //             ( 
            //                <Container fluid >
                           
            //                <Row> {
            //                    games.map((game, index) => {

            //                        return (

            //                            <Col sm = "4" >
            //                            <GameCard />
                                       
            //                            {/* GameCard game = {
            //                                game
            //                            }
            //                            index = {f
            //                                index
            //                            } */}
                                        
            //                            </Col>

            //                        )
            //                    })
            //                } 
            //                </Row> 
            //                </Container>
            //            )
            //        }

        }
export default GamesList

