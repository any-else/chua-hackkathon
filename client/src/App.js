import { Route, Routes } from "react-router-dom";
import FormGame from "./components/FormGame/FormGame";
import GameDetails from "./components/GameDetails/GameDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormGame />} />
      <Route path="/round/:id" element={<GameDetails />} />
    </Routes>
  );
}

export default App;
