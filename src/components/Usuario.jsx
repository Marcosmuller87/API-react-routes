import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Usuarios.css";

const Usuario = () => {
  const [usuario, setUsuario] = useState([]);
  const { id } = useParams();
  const obtenerUsuario = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const users = await res.data;
    setUsuario(users);
  };
  useEffect(() => {
    obtenerUsuario();
  });

  return (
    <div className="user-container">
      <h4 className="user-title">Empleado/a</h4>
      <p className="user-data">Nombre: {usuario.name}</p>
      <p className="user-data">Email: {usuario.email}</p>
      <p className="user-data">Website: {usuario.website}</p>
      <small className="user-data">Telefono: {usuario.phone}</small>
    </div>
  );
};

export default Usuario;
