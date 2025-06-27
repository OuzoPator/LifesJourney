import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../organisms/navbar.comp";
import Footer from "../organisms/footer.comp";
import { GameContext } from "../contexts/game.context.jsx";

export default function LobbyPage() {
  const navigate = useNavigate();
  const { setLobbyConfig, setPlayers } = useContext(GameContext);

  // Lokal im Formular:
  const [numPlayers, setNumPlayers] = useState(2);
  const [names, setNames] = useState(["", ""]);
  const [colors, setColors] = useState(["red", "blue"]);

  useEffect(() => {
    setNames((prev) =>
      prev.length === numPlayers
        ? prev
        : Array.from({ length: numPlayers }, (_, i) => prev[i] || "")
    );
    setColors((prev) =>
      prev.length === numPlayers
        ? prev
        : Array.from({ length: numPlayers }, (_, i) => prev[i] || "red")
    );
  }, [numPlayers]);

  const handleStart = () => {
    setLobbyConfig({ numPlayers });
    setPlayers(
      names.map((n, i) => ({
        name: n || `Spieler ${i + 1}`,
        color: colors[i],
        positionId: 0,
      }))
    );

    navigate("/game");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div
        className="min-h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: 'url("/img/background.webp")' }}
      >
        <Navbar />

        <main className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white bg-opacity-95 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Lobby-Einstellungen
            </h2>

            <label className="block mb-2 text-gray-900">
              Anzahl Spieler:
              <select
                className="ml-2 border rounded p-1"
                value={numPlayers}
                onChange={(e) => setNumPlayers(Number(e.target.value))}
              >
                {[2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>

            {Array.from({ length: numPlayers }, (_, i) => (
              <div key={i} className="mb-4 flex gap-2 items-center">
                <input
                  type="text"
                  placeholder={`Name Spieler ${i + 1}`}
                  className="flex-1 border rounded p-2 text-gray-900 placeholder-gray-400"
                  value={names[i]}
                  onChange={(e) =>
                    setNames((arr) => {
                      const copy = [...arr];
                      copy[i] = e.target.value;
                      return copy;
                    })
                  }
                />
                <input
                  type="color"
                  title="Farbe wählen"
                  value={colors[i]}
                  onChange={(e) =>
                    setColors((arr) => {
                      const copy = [...arr];
                      copy[i] = e.target.value;
                      return copy;
                    })
                  }
                />
              </div>
            ))}

            <button
              className="mt-4 w-full btn btn-primary"
              onClick={handleStart}
            >
              Spiel starten
            </button>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
