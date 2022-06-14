import React, { useState, useEffect } from 'react'
import { getInventarios } from '../../services/inventarioService'

export const InventarioView = () => {
  const [inventarios, setInventarios] = useState([]);
  const listarInventarios = async () => {
    try {
      const { data } = await getInventarios();
      console.log(data);
      setInventarios(data);

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    listarInventarios();
  }, []);

  return (
    <div className="container-fluid">
     <div className="row row-cols-1 row-cols-md-2 g-4">
      {
        inventarios.map((inventario)=>{
          return (
            <div className="col" key={inventario._id}>
            <div className="card">
              <img src={inventario.foto} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{inventario.serial}</h5>
                <p className="card-text">{inventario.descripcion}</p>
              </div>
            </div>
          </div>
          )
        })
      }
     </div>
    </div>
  )
}
