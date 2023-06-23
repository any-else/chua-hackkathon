import React from "react";
import "./GameDetails.css";
const GameDetails = () => {
  return (
    <div className="wrapper">
      <table className="main-table">
        <thead>
          <tr className="thead-top">
            <th className="number-no">#</th>
            <th className="player-name1">Minh Cường</th>
            <th className="player-name2">Thiên Phú</th>
            <th className="player-name3">Xuân Bách</th>
            <th className="player-name4">Xuân Bách</th>
          </tr>
          <tr className="thead-bot">
            <th className="scores">
              Sum of course <span className="total-score">(30)</span>
            </th>
            <th className="score-play-1">8</th>
            <th className="score-play-2">10</th>
            <th className="score-play-3">10</th>
            <th className="score-play-4">10</th>
          </tr>
        </thead>
        <tbody>
          <tr class="rounds">
            <td class="round-name">Round 1</td>
            <td class="">
              <input type="number" id="input-score-player1" value="0" />
            </td>
            <td class="">
              <input type="number" id="input-score-player2" value="0" />
            </td>
            <td class="">
              <input type="number" id="input-score-player3" value="0" />
            </td>
            <td class="">
              <input type="number" id="input-score-player4" value="0" />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn-add-round">Add Round</button>
    </div>
  );
};

export default GameDetails;
