import React from "react";
import { debounce } from "lodash-es";

const RoundGame = (props) => {
  const { roundPoint, index, onChangePoint } = props;
  const [pointValue, setPointValue] = React.useState(roundPoint);

  React.useEffect(() => {
    onChangePoint(pointValue);
  }, [pointValue]);

  const handleOnChange = (e) => {
    setPointValue({
      ...pointValue,
      point: { ...pointValue.point, [e.target.name]: Number(e.target.value) },
    });
  };

  return (
    <tr className="rounds">
      <td>Round {index + 1} </td>
      <td>
        <input
          type="number"
          id="input-score-player1"
          name="player1"
          value={pointValue.point.player1 || 0}
          onChange={handleOnChange}
        />
      </td>
      <td>
        {" "}
        <input
          type="number"
          name="player2"
          id="input-score-player2"
          value={pointValue.point.player2}
          onChange={handleOnChange}
        />{" "}
      </td>
      <td>
        {" "}
        <input
          type="number"
          id="input-score-player3"
          name="player3"
          value={pointValue.point.player3}
          onChange={handleOnChange}
        />{" "}
      </td>
      <td>
        {" "}
        <input
          type="number"
          name="player4"
          id="input-score-player4"
          value={pointValue.point.player4}
          onChange={handleOnChange}
        />{" "}
      </td>
    </tr>
  );
};

export default RoundGame;
