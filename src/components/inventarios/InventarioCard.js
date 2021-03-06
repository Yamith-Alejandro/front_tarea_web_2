import React from 'react';
import{Link} from 'react-router-dom';

export const InventarioCard = (props) => {

  const{ inventario } = props;

  return (
    <div className="col">
      <div className="card">
        <img src={inventario.foto} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> Características </h5>
          <hr></hr>
          <p className="card-text">{`Serial: ${inventario.serial}`}</p>
          <p className="card-text">{`Marca: ${inventario.marca.nombre}`}</p>
          <p className="card-text">{`Descripción : ${inventario.descripcion}`}</p>
          <p className="card-text">{`Modelo: ${inventario.modelo}`}</p>
          <p className="card-text">{`Estado: ${inventario.estado_equipo.nombre}`}</p>
          <p className='card-text'></p>
          <Link to={`inventarios/edit/${inventario._id}`}> Ver Mas...</Link>
        </div>
      </div>
    </div>
  )
}
