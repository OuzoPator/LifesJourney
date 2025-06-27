import { createContext, useState, useEffect } from "react";

export const positions = [
  { x: 450, y: 800 },
  { x: 450, y: 720 },
  { x: 450, y: 640 },
  { x: 450, y: 560 },
  { x: 450, y: 480 },
  { x: 530, y: 480 },
  { x: 610, y: 480 },
  { x: 690, y: 480 },
  { x: 770, y: 480 },
  { x: 770, y: 400 },
  { x: 770, y: 320 },
  { x: 690, y: 320 },
  { x: 610, y: 320 },
  { x: 530, y: 320 },
  { x: 530, y: 240 },
  { x: 530, y: 160 },
  { x: 610, y: 160 },
  { x: 690, y: 160 },
  { x: 770, y: 160 },
  { x: 850, y: 160 },
  { x: 930, y: 160 },
  { x: 930, y: 240 },
  { x: 930, y: 320 },
  { x: 930, y: 400 },
  { x: 930, y: 480 },
];

export const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [lobbyConfig, setLobbyConfig] = useState({
    numPlayers: 2,
    startCash: 1000,
  });

  const [players, setPlayers] = useState(
    Array.from({ length: lobbyConfig.numPlayers }, () => ({
      name: "",
      color: "red",
      positionId: 0,
    }))
  );

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function loadEvents() {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:3000/events");
        if (!res.ok) throw new Error("Fetch fehlgeschlagen");
        setEvents(await res.json());
        setIsError(false);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    loadEvents();
  }, []);

  const addEvent = async (event) => {
    setEvents((prev) => [...prev, event]);
    try {
      await fetch("http://localhost:3000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
      });
    } catch (err) {
      console.error("Fehler beim Speichern:", err);
    }
  };

  const resetGame = () => {
    setEvents([]);
    setPlayers((prev) => prev.map((p) => ({ ...p, positionId: 0 })));
  };

  const movePlayer = (playerIndex, steps) => {
    setPlayers((ps) =>
      ps.map((p, i) =>
        i === playerIndex
          ? {
              ...p,
              positionId: Math.min(p.positionId + steps, positions.length - 1),
            }
          : p
      )
    );
  };

  return (
    <GameContext.Provider
      value={{
        lobbyConfig,
        setLobbyConfig,
        players,
        setPlayers,
        events,
        addEvent,
        isLoading,
        isError,
        resetGame,
        movePlayer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
