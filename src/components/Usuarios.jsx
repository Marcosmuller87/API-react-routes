import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Usuarios.css";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const obtenerUsuarios = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = await res.data;
    setUsuarios(users);
  };
  // Pasamos un array vacio
  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <div className="app-container">
      <h2 className="app-title">Fundacion de Desarrolladores de Software</h2>
      {usuarios.map((item) => {
        return (
          <div className="user-link" key={item.id}>
            <Link className="user-name" to={`/usuario/${item.id}`}>
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Usuarios;
