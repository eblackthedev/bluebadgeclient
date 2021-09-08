
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import GameCreate from "./GameCreate";
import GamesList from "./GamesList";
import GameEdit from "./GameEdit";

const GameIndex = (props) => {
  const [games, setGames] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [gamesToUpdate, setGamesToUpdate] = useState({});
  const [searchTerm, setSearchTerm] = useState("");



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
        setGames(gameData);
        console.log("game", gameData);
      });
  };

  const editUpdateGame = (game) => {
    setGamesToUpdate(game);
    console.log(game);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  const searchHandler = (games) => {
    if (searchTerm.length > 0) {
      return games.filter(
        (game) =>
          game.gameName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
    } else {
      return games;
    }
  };
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
          <GameCreate fetchGames={fetchGames} token={props.token} />
        </Col>
        <Col md="9">
          <GamesList
            games={searchHandler(games)}
            editUpdateGames={editUpdateGame}
            updateOn={updateOn}
            fetchGames={fetchGames}
            token={props.token}
          />
        </Col>
        {updateActive ? (
          <GameEdit
            gameToUpdate={gamesToUpdate}
            updateOff={updateOff}
            token={props.token}
            fetchGames={fetchGames}
          />
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};
export default GameIndex;
