
import React, { useState, useEffect } from 'react';
import { getEstado } from '../../services/EstadoService';
import { getUsuarios, crearUsuarios, editUsuarios } from '../../services/UsuarioService';
import Swal from 'sweetalert2';



export const UsuarioView = () => {

  const [usuario, setUsuarios] = useState([]);
  const [valoresForm, setValoresForm] = useState({});
  const [estados, setEstados] = useState([]);
  const { nombre = '', email = '', estado_equipo = '' } = valoresForm;

  const listarUsuarios = async () => {
    try {
      const { data } = await getUsuarios();
      setUsuarios(data);
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarUsuarios();
  }, []);

  const listarEstado = async () => {
    try {
      const { data } = await getEstado();
      setEstados(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarEstado();
  }, []);

  const handleOnChange = ({ target }) => {
    const { name, value } = target
    setValoresForm({ ...valoresForm, [name]: value });
    console.log(setValoresForm);
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const usuario = { nombre, email, estado_equipo }
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: '...Cargando...'
      });
      Swal.showLoading();
      const { data } = await getUsuarios(usuario);
      console.log(data);
      Swal.close();
      listarUsuarios();
    } catch (error) {
      console.log(error);
      Swal.close();
      let mensaje;
      if (error && error.response && error.response.data) {
        mensaje = error.response.data;
      } else {
        mensaje = 'Ocurrio un error, porfavor verifique su conexion e intente de nuevo';
      }
      Swal.fire('error', mensaje, 'error');

    }
  }

  return (
    <div className='sidebar'>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <div className='sidebar-header'>
              <h3> Usuarios </h3>
              <i className="fa-solid fa-xmark"></i>

            </div>
          </div>

        </div>
        <div className='row'>
          <div className='col'>
            <hr></hr>
          </div>
        </div>
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <div className='row'>
            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" name='nombre'
                  required
                  minLength={3}
                  value={nombre}
                  onChange={(e) => { handleOnChange(e) }}
                  className="form-control" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label className="form-label"> Email</label>
                <input type="email" name='email'
                  required
                  value={email}
                  onChange={(e) => { handleOnChange(e) }}
                  className="form-control" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Estado del Equipo</label>
                <select className="form-select"
                  required
                  onChange={(e) => { handleOnChange(e) }}
                  name='estado_equipo'
                  value={estado_equipo}
                >
                  <option value="">-- SELECCIONAR --</option>
                  {
                    estados.map(({ _id, nombre }) => {
                      return <option key={_id} value={_id}>{nombre}</option>
                    })
                  }
                </select>
                <table className="table-primary" required id='tabla'
                  onChange={(e) => {
                    var datos = [setUsuarios];
                    var html = '<table><tr><th>Nombre</th><th>Email</th><th>Estado</th>';
                    for (var i = 0; i < datos.length; i++) {
                      html += `<td>${datos[i]}</td`;
                    }
                    html += '</tr></table>';
                    document.getElementById("contenedor").innerHTML = html
                  }}
                >
                </table>
                <div className='container-fluid' id='contenedor'></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <button className=' btn btn-primary'> Guardar </button>
            </div>

          </div>
        </form>
      </div>
    </div>

  )
}



