import React from "react";

const RoundGame = (props) => {
  const { roundPoint, index } = props;
  return (
    <tr className="rounds">
      <td>Round {index + 1} </td>
      <td>
        {" "}
        <input
          type="number"
          id="input-score-player1"
          value={roundPoint.point.player1 || 0}
        />
      </td>
      <td>
        {" "}
        <input
          type="number"
          id="input-score-player2"
          value={roundPoint.point.player2 || 0}
        />{" "}
      </td>
      <td>
        {" "}
        <input
          type="number"
          id="input-score-player3"
          value={roundPoint.point.player3 || 0}
        />{" "}
      </td>
      <td>
        {" "}
        <input
          type="number"
          id="input-score-player4"
          value={roundPoint.point.player || 0}
        />{" "}
      </td>
    </tr>
  );
};

export default RoundGame;
