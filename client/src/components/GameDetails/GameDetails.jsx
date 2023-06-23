import React from "react";
import "./GameDetails.css";
import { GameAPI } from "../../api/gameApi";
import { useLocation, useParams } from "react-router-dom";
import RoundGame from "../RoundGame/RoundGame";
const GameDetails = () => {
  const location = useLocation();
  const game = location.state.data;
  const [roundGame, setRoundGame] = React.useState(game);
  const [total, setTotal] = React.useState(0);
  const [round, setRound] = React.useState([]);
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

    setRound([...round, newRound]);

    //thuc hien tao new => add data vao state route
    game.rounds = [...round, newRound];
    //dua len server
    const response = await GameAPI.postRoundGame(game);
    const data = response.data;
    setRoundGame(data);
  };

  return (
    <div className="wrapper">
      <table className="main-table">
        <thead>
          <tr className="thead-top">
            <th className="number-no">#</th>
            <th className="player-name1">{roundGame.listPlayer.player1}</th>
            <th className="player-name2">{roundGame.listPlayer.player2}</th>
            <th className="player-name3">{roundGame.listPlayer.player3}</th>
            <th className="player-name4">{roundGame.listPlayer.player4}</th>
          </tr>
          <tr className="thead-bot">
            <th className="scores">
              Sum of course <span className="total-score">{total}</span>
            </th>
            <th className="score-play-1">{point.player1}</th>
            <th className="score-play-2">{point.player2}</th>
            <th className="score-play-3">{point.player3}</th>
            <th className="score-play-4">{point.player4}</th>
          </tr>
        </thead>
        <tbody>
          {round.length != 0 &&
            round.map((roundPoint, index) => {
              return <RoundGame roundPoint={roundPoint} index={index} />;
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
