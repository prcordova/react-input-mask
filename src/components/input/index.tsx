import React, { InputHTMLAttributes, useCallback } from "react";
import { cep, price, currency, phone, cpf, cnpj } from "./masks";
import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "cep" | "currency" | "price" | "phone"| "cpf"| "cnpj";
  prefix?: string;
}

const Input: React.FC<InputProps> = ({ mask,prefix, ...props }) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "cep") {
        cep(e);
      }
      if (mask === "price") {
        price(e);
      }
      if (mask === "currency") {
        currency(e);
      }
      if (mask === "phone") {
        phone(e);
      }
      if (mask === "cpf") {
        cpf(e);
      }
      if (mask === "cnpj") {
        cnpj(e);
      }
    },
    [mask]
  );

  return (
    <div className="input-group prefix">
    {prefix && <span className="prefix-span">{prefix}</span>}
      <input {...props} onKeyUp={handleKeyUp} />
    </div>
  );
};

export default Input;
