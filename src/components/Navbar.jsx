import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center fixed place-content-around top-0 left-0 w-screen h-20 bg-red-400">
      <Link className="text-xl font-bold text-white" to="/todolist">
        To-Do List
      </Link>
      <Link className="text-xl font-bold text-white" to="/clickcounter">
        Contador de Cliques
      </Link>
      <Link className="text-xl font-bold text-white" to="/tictactoe">
        Jogo da Velha
      </Link>
      <Link className="text-xl font-bold text-white" to="/calculator">
        Calculadora
      </Link>
      <Link className="text-xl font-bold text-white" to="/cep">
        Buscador de CEP
      </Link>
    </div>
  );
}

export default Navbar;
