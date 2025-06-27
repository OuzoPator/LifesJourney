import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import "./App.css";

import HomePage from "./components/pages/home.page.jsx";
import SignInPage from "./components/pages/signin.page.jsx";
import SignUpPage from "./components/pages/signup.page";
import LobbyPage from "./components/pages/lobby.page";
import GamePage from "./components/pages/game.page";
import { DefaultLayout } from "./components/layouts/default.layout";
import { GameLayout } from "./components/layouts/game.layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<SignInPage />} path="/signin/*" />
        <Route element={<SignUpPage />} path="/signup/*" />
        <Route element={<LobbyPage />} path="/lobby" />
        <Route element={<GamePage />} path="/game" />
      </Routes>
    </>
  );
}

export default App;
