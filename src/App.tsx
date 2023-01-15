import React, { useState, useCallback } from "react";
import Input from "./components/input";

interface Usuario {
  cep: string;
  currency : string;
  price : number;
  phone: string;
}

const App: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setUsuario({
        ...usuario,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [usuario]
  );

  return (
    <div>
      <Input placeholder="99999-9999" name="cep" mask="cep" onChange={handleChange} /> 
      <Input prefix="USD" placeholder="price"  name="price" mask="price" onChange={handleChange} /> 
      <Input   placeholder="phone"  name="phone" mask="phone" onChange={handleChange} /> 
      <Input   placeholder="cpf"  name="cpf" mask="cpf" onChange={handleChange} /> 
      <Input   placeholder="cnpj"  name="cnpj" mask="cnpj" onChange={handleChange} /> 
      <button onClick={() => console.log(usuario)}>Salvar</button>
    </div>
  );
};

export default App;
