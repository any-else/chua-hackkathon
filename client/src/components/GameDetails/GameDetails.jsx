import React from "react";
import "./GameDetails.css";
import { GameAPI } from "../../api/gameApi";
import { useLocation, useParams } from "react-router-dom";
import RoundGame from "../RoundGame/RoundGame";
const GameDetails = () => {
  const params = useParams();
  const location = useLocation();
  let game = location.state.data;
  const [games, setGames] = React.useState(game);
  const [total, setTotal] = React.useState(0);
  const [round, setRound] = React.useState([]);
  const [isCall, setIsCall] = React.useState(true);
  const point = {
    player1: 0,
    player2: 0,
    player3: 0,
    player4: 0,
  };

  const handleAddRound = async (e) => {
    e.preventDefault();
    const newRound = {
      id: round.length + 1,
      point: { ...point },
    };

    //thuc hien tao new => add data vao state route
    let updateGame = {
      ...games,
      rounds: [...games.rounds, newRound],
    };
    //dua len server
    const response = await GameAPI.postRoundGame(updateGame);
    const data = response.data;
    setGames(data);
    setRound([...round, newRound]);
  };

  React.useEffect(() => {
    const handleCallById = async () => {
      const response = await GameAPI.getById(params.id);
      const data = await response.data;
      setGames(data);
      setRound(data.rounds);
    };
    if (isCall) {
      setTimeout(() => {
        handleCallById();
      }, 1000);
    }
    return () => {
      setIsCall(false);
    };
  }, [isCall]);

  return (
    <div className="wrapper">
      <table className="main-table">
        <thead>
          <tr className="thead-top">
            <th className="number-no">#</th>
            <th className="player-name1">{games.listPlayer.player1}</th>
            <th className="player-name2">{games.listPlayer.player2}</th>
            <th className="player-name3">{games.listPlayer.player3}</th>
            <th className="player-name4">{games.listPlayer.player4}</th>
          </tr>
          <tr className="thead-bot">
            <th className="scores">
              Sum of course <span className="total-score">{total}</span>
            </th>
            <th className="score-play-1">
              {games.rounds.reduce((prev, next) => {
                return prev + next.point.player1;
              }, 0) || point.player1}
            </th>
            <th className="score-play-2">
              {" "}
              {games.rounds.reduce((prev, next) => {
                return prev + next.point.player2;
              }, 0) || point.player2}
            </th>
            <th className="score-play-3">
              {" "}
              {games.rounds.reduce((prev, next) => {
                return prev + next.point.player3;
              }, 0) || point.player3}
            </th>
            <th className="score-play-4">
              {" "}
              {games.rounds.reduce((prev, next) => {
                return prev + next.point.player4;
              }, 0) || point.player4}
            </th>
          </tr>
        </thead>
        <tbody>
          {round.length != 0 &&
            round.map((roundPoint, index) => {
              return (
                <RoundGame
                  roundPoint={roundPoint}
                  games={games}
                  setGames={setGames}
                  index={index}
                  setIsCall={setIsCall}
                />
              );
            })}
        </tbody>
      </table>
      <button className="btn-add-round" onClick={handleAddRound}>
        Add Round
      </button>
    </div>
  );
};

export default GameDetails;
