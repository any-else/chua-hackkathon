import React from "react";
import "./FormGame.css";

const FormGame = () => {
  return (
    <div>
      {" "}
      <form action="post" className="add-player">
        <h3>Score Keeper</h3>
        <input
          type="text"
          className="input-player1"
          placeholder="Enter Player Name"
        />
        <input
          type="text"
          className="input-player2"
          placeholder="Enter Player Name"
        />
        <input
          type="text"
          className="input-player3"
          placeholder="Enter Player Name"
        />
        <input
          type="text"
          className="input-player4"
          placeholder="Enter Player Name"
        />
        <p className="error-player">Thông báo lỗi</p>
        <button type="submit">Create Game</button>
      </form>
    </div>
  );
};

export default FormGame;
