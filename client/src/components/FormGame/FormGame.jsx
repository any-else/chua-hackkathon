import React from "react";
import { debounce } from "lodash-es";
import { GameAPI } from "../../api/gameApi";

import "./FormGame.css";
import { useNavigate } from "react-router-dom";

const randomId = function (length = 6) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

const FormGame = () => {
  const [inputValue, setInputValue] = React.useState({});
  const navigate = useNavigate();
  //Xử lý input change
  const handleOnChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  //Xử lý submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newGame = {
      id: randomId(),
      listPlayer: inputValue,
      rounds: [],
    };

    await GameAPI.postGame(newGame);
    const response = await GameAPI.getById(newGame.id);
    const data = await response.data;

    navigate(`/round/${newGame.id}`, { state: { data } });
  };

  return (
    <div>
      {" "}
      <form action="post" className="add-player" onSubmit={handleSubmit}>
        <h3>Score Keeper</h3>
        <input
          type="text"
          className="input-player1"
          placeholder="Enter Player Name"
          name="player1"
          onChange={debounce(handleOnChange, 1000)}
        />
        <input
          type="text"
          className="input-player2"
          name="player2"
          placeholder="Enter Player Name"
          onChange={debounce(handleOnChange, 1000)}
        />
        <input
          type="text"
          className="input-player3"
          placeholder="Enter Player Name"
          name="player3"
          onChange={debounce(handleOnChange, 1000)}
        />
        <input
          type="text"
          className="input-player4"
          name="player4"
          placeholder="Enter Player Name"
          onChange={debounce(handleOnChange, 1000)}
        />
        <p className="error-player">Thông báo lỗi</p>
        <button type="submit">Create Game</button>
      </form>
    </div>
  );
};

export default FormGame;
