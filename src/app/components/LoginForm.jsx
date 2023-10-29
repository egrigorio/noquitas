// LoginForm.jsx

"use client";
import { useState } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  async function verificarLogin() {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        console.log("deu")
        Swal.fire({
          title: 'Sucesso!',
          text: 'Logado com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        setAuthenticated(true);
        // Router.push("/dashboard"); // Descomente esta linha se quiser redirecionar o usuário
      } else {
        Swal.fire({
          title: 'Erro!',
          text: 'Utilizador ou senha incorreta.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        console.error("Falha na autenticação");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  }

  if (authenticated) {
    // Se o usuário já está autenticado, você pode redirecioná-lo para a página desejada
    // Router.push("/dashboard");
  }

  return (
    <div className="m-auto">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              senha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="m-auto bg-blue-500 hover.bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={verificarLogin}
            >
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Marque o componente como um "Client Component"

export default LoginForm;
