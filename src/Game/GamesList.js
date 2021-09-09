

import React, {useEffect, useState} from 'react';
import {Card, CardText, CardSubtitle, Button, CardImg, CardBody, CardTitle, Container, Row, Col, Label
} from 'reactstrap';
import GamesModal from './GamesModal'


const GamesList = (props) => {
    const [games, setGames] = useState([])
    const [open, setOpen] = useState(false)
    const [gameId, setGameId]= useState
  const [externalGames, setExternalGames] = useState([])
    const [errorMessage, setErrormessage]= useState('')


        


      


  // useEffect(() => {
  //   fetchGames();
  // }, []);
  const GamesList = (props) => {
    const [games, setGames] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
      fetchGames();
      ExternalGameApi();
    }, []);

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
  }, []);

  const fetchGames = () => {
    fetch("http://localhost:4000/game/all", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((gameData) => {
        console.log("games", gameData);
        setGames(gameData);
      });
  };

  const GameCard = () => {
    // will recive props value from parent(gamelist)
    return (
      <Card>
        <CardImg top src="data:image alt=" Card image />
        <CardBody>
          <CardTitle tag="h5">{props.game.gameName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Maker:{props.game.maker}
          </CardSubtitle>
          <CardText>{props.game.info}</CardText>
          <Button setOpen={true}>Button</Button>
          <Button onClick={() => GamesModal}>review</Button>
        </CardBody>
      </Card>
    );
  };
  //const[GameName, GameInformation,GameMaker]
  //games.map(game, index) =>{
  console.log("games2", games);
  if (games.length == 0) {
    return <div>...loading</div>;
  } else {
    const fetchGames = () => {
      fetch("http://localhost:4000/game/all", {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.token}`,
        }),
      })
        .then((res) => res.json())
        .then((gameData) => {
          console.log("games", gameData);
          setGames(gameData);
        });
    };

    useEffect(() => {
        fetchGames();
    }, []) 
  GamesApi();
        }, [])

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
    const GameCard = () => {
      // will recive props value from parent(gamelist)
      return games.map((game, index) => {
        return (
          <div>
            <p>{game.gameName}</p>

            <Card key={index} className="mb-3">
              <CardImg top src="" alt="Card image cap" />

              <CardBody>
                <CardTitle tag="h5"> {game.gameName}</CardTitle>

                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {" "}
                  Maker: {game.maker}{" "}
                </CardSubtitle>
                <CardText> {game.info} </CardText>
                <Button> Show more like this </Button>
              </CardBody>
            </Card>
          </div>
        );
      });
    };
    //const[GameName, GameInformation,GameMaker]
    //games.map(game, index) =>{
    console.log("games2", games);
    return (
      <div>
        {games.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div>
            <GameCard />
          </div>
        )}
      </div>
    );
  }


  //     {if (games.length === 0) {


  //         <div> ...loading </div>

    //     const img = document.createElement('img')
    //    const body = document.querySelector('body')
    // img.src = json.url;
    // body.append(img)
    //     }
    // }}
    const GameCard = () => { // will recive props value from parent(gamelist)
        return (
            games.map((game, index) => {
       setGameId(game.id)
                return (
                    <div>

                        <p>{game.gameName}</p>

                        <Card key={index} className="mb-3" >
                            <CardImg top src="" alt="Card image cap" />

                            <CardBody >
                                <CardTitle tag="h5" > game name: {
                                    game.gameName
                                }
                                </CardTitle>

                                <CardSubtitle tag="h6"
                                    className="mb-2 text-muted" > Maker: {
                                        game.maker
                                    } </CardSubtitle>
                                <CardText > information {
                                    game.info
                                } </CardText>
                                <CardText> review:
                                    {game.review}
                                </CardText>
                                <CardText> rating:
                                    {game.rating}
                                </CardText>

                                


                                <GamesModal gameId={gameId} fetchgames={fetchGames}/>
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
    return (
        <div>
            {games.length === 0 ? <div>Loading...</div> :
                <div>
                    <GameCard />
                </div>}
        </div>
    )


  //    }else {
  //             (
  //                <Container fluid >


  //                <Row> {
  //                    games.map((game, index) => {

  //                        return (

  //                            <Col sm = "4" >
  //                            <GameCard />

}


        const deleteGame=(game) => {
        
            fetch(`http://localhost:4000/game/${game.id}`, {
                    method: 'DELETE',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${props.token}`
                    })
                }).then((res) => {console.log('resDelete', res)
                setErrormessage(`${game.gameName} is removed`)}).catch(error=>{
                    console.log("Delete error",error)
                })
                
        }
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

        const GamesApi = async(games) => {
                
                  // GamesApi = games.thisWeek;
                    //console.log()
                    const rawgApi = `https://api.rawg.io/api/games?key=45f7b9ef58a74645928a3f24a6e174e6&dates=2019-09-01,2019-09-30&platforms=18,1,7`
                
                        const response = await fetch(rawgApi)
                        const json = await response.json()
                        console.log('game3', json.results)
                        setExternalGames(json.results)

                       // const games = document.createElement('card')
                      //  const body = document.querySelector('body')
                      //  body.games = json.url;
                      //  body.append(Card)
                    
                    
                }
                const ExternalGameCard = () => { // will recive props value from parent(gamelist)
                    return (<Container>
                        
                        <Row>
                        <Label style={{color:"red"}}>{errorMessage}</Label>
                        { externalGames.map((game,index) => {
                            return(
                            
                                <Col xs="4">
                                   {/*  <p>{game.gameName}</p> */}
                                
                            <Card key={index}  className = "mb-3" >
                                <CardImg top width="100%" src = {game.background_image} alt = "Card image cap" />
                                <CardBody >
                                <CardTitle tag = "h5" > {game.name}{game.id}</CardTitle>
                                    
                                <CardSubtitle tag = "h6" className = "mb-2 text-muted" > Maker: {game.maker} </CardSubtitle> 
                                <CardText > {game.info} </CardText> 
                                <Button>Review</Button> 
                                <Button color="danger" onClick={()=>deleteGame(game)}>Remove Game</Button>
                            
                        
                                </CardBody> 
                            </Card>
                                </Col>
                            )
                        })}
                        </Row>
                        </Container>
                    )
                }

                    const GameCard = () => { // will recive props value from parent(gamelist)
                        return (<Container>
                            
                            <Row>
                            <Label style={{color:"red"}}>{errorMessage}</Label>
                            { games.map((game,index) => {
                                return(
                                
                                    <Col xs="4">
                                        
                                       {/*  <p>{game.gameName}</p> */}
                                    
                                <Card key={index}  className = "mb-3" >
                                    <CardImg top width="100%" src = "https://pyxis.nymag.com/v1/imgs/df5/886/c83f87835f58591a8e53c8f479c76c1ae0-best-video-games-year-july.rhorizontal.w700.jpg" alt = "Card image cap" />
                                    <CardBody >
                                    <CardTitle tag = "h5" > {game.gameName}{game.id}</CardTitle>
                                        
                                    <CardSubtitle tag = "h6" className = "mb-2 text-muted" > Maker: {game.maker} </CardSubtitle> 
                                    <CardText > {game.info} </CardText> 
                                    <Button>Review</Button> 
                                    <Button color="danger" onClick={()=>deleteGame(game)}>Remove Game</Button>
                                    </CardBody> 
                                </Card>
                                    </Col>
                                )
                            })}
                            </Row>
                            </Container>
        
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
                            <ExternalGameCard />
                        
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

        //}




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
};
export default GamesList;
