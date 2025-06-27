import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext, positions } from "../contexts/game.context.jsx";
import PlayerIcon from "../contexts/PlayerIcon.jsx";

export default function GamePage() {
  const navigate = useNavigate();
  const { players, movePlayer, addEvent } = useContext(GameContext);

  const [currentPlayer, setCurrentPlayer] = useState(0);

  const handleRoll = () => {
    const roll = Math.ceil(Math.random() * 6);
    //  Spieler bewegen
    movePlayer(currentPlayer, roll);
    //  Event loggen
    addEvent({
      type: "roll",
      playerIndex: currentPlayer,
      value: roll,
      timestamp: Date.now(),
    });
    // Nächster Spieler ist dran
    setCurrentPlayer((prev) => (prev + 1) % players.length);
  };
  const handleDebugRoll = () => {
    const roll = 1;
    movePlayer(currentPlayer, roll);
    addEvent({
      type: "roll",
      playerIndex: currentPlayer,
      value: roll,
      timestamp: Date.now(),
    });
    setCurrentPlayer((cp) => (cp + 1) % players.length);
  };

  return (
    <div className="min-h-screen w-full bg-neutral flex items-center justify-center">
      <div className="relative w-[1200px] h-[900px]">
        <img
          src="/img/field.webp"
          alt="Spielfeld"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {players.map((player, i) => {
          const pos = positions[player.positionId];
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: pos.x - 12,
                top: pos.y - 12,
              }}
            >
              <PlayerIcon color={player.color} size={24} />
            </div>
          );
        })}

        <button
          onClick={() => navigate("/lobby")}
          className="
            absolute top-4 left-4
            px-4 py-2
            bg-red-600 hover:bg-red-500
            text-white font-semibold rounded
            cursor-pointer transition
          "
        >
          Aufgeben
        </button>

        {players.map((player, i) => {
          const pos = positions[player.positionId];
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: pos.x - 12,
                top: pos.y - 12,
              }}
            >
              <PlayerIcon color={player.color} size={24} />
            </div>
          );
        })}

        <button
          onClick={handleRoll}
          className="
     absolute
     cursor-pointer
     w-30 h-30            
     rounded-full          
     flex items-center justify-center text-white font-bold  "
          style={{ left: 650, top: 400 }}
        ></button>
        {/* Debug-Wurf: immer 1 */}
        <button
          onClick={handleDebugRoll}
          className="absolute top-4 right-4 btn btn-sm bg-yellow-500 hover:bg-yellow-400 text-black"
        >
          Roll 1
        </button>
      </div>
    </div>
  );
}
