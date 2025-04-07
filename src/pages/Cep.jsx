import { useState } from "react";

function Cep() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!cep || cep.length !== 8) {
      setError("Digite um CEP válido (8 dígitos)");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setError("CEP não encontrado");
        setAddress(null);
      } else {
        setAddress(data);
      }
    } catch (err) {
      setError("Erro ao buscar CEP");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-purple-100">
      <div className="flex flex-col items-center w-96 min-h-[400px] bg-white border-3 border-gray-950 rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Buscador de CEP</h1>

        <div className="w-full mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
              placeholder="Digite o CEP (apenas números)"
              maxLength={8}
              className="w-full h-10 border-3 border-gray-950 px-3"
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className="w-24 h-10 border-3 border-gray-950 bg-red-400 hover:bg-red-500 disabled:bg-gray-300"
            >
              {loading ? "Buscando..." : "Buscar"}
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {address && (
          <div className="w-full border-3 border-gray-950 p-4 mt-4">
            <h2 className="text-xl font-bold mb-3">Resultado:</h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">CEP:</span> {address.cep}
              </p>
              <p>
                <span className="font-semibold">Logradouro:</span>{" "}
                {address.logradouro}
              </p>
              <p>
                <span className="font-semibold">Complemento:</span>{" "}
                {address.complemento || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Bairro:</span> {address.bairro}
              </p>
              <p>
                <span className="font-semibold">Cidade/UF:</span>{" "}
                {address.localidade}/{address.uf}
              </p>
              <p>
                <span className="font-semibold">DDD:</span> {address.ddd}
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 text-sm text-gray-600">
          <p>Exemplo de CEP válido: 01001000 (São Paulo/SP)</p>
        </div>
      </div>
    </div>
  );
}

export default Cep;
