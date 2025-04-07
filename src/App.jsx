import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ClickCounter from "./pages/ClickCounter";
import TodoList from "./pages/TodoList";
import TicTacToe from "./pages/TicTacToe";
import Calculator from "./pages/Calculator";
import Cep from "./pages/Cep";
import Navbar from "./components/Navbar";
import "./App.css";

// Set-ExecutionPolicy RemoteSigned –Scope Process

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/clickcounter" element={<ClickCounter />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/cep" element={<Cep />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
