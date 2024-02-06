import "./styles.css";
import { useState } from "react";

export default function App() {
  const [gameRunning, setGameRunning] = useState(false);

  const handleSubmit = () => {
    setGameRunning(gameRunning ? false : true);
  };

  return (
    <div>
      <button className="video-game-button" onClick={handleSubmit}>
        {gameRunning ? "Pause" : "Play"}
      </button>
    </div>
  );
}
