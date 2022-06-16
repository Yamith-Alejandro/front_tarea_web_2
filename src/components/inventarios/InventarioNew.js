import React, { useState, useEffect } from 'react'
import { getUsuarios } from '../../services/UsuarioService';
import { getEstado } from '../../services/EstadoService';
import { getMarca } from '../../services/MarcaService';
import { getTipo } from '../../services/TipoService';
import {crearInventarios} from '../../services/inventarioService';
import Swal from 'sweetalert2';


export const InventarioNew = ({ handleOpenModal, listarInventarios }) => {

    const [usuarios, setUsuarios] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [tipos, setTipos] = useState([]);
    const [estados, setEstados] = useState([]);
    const [valoresForm, setValoresForm] = useState({});
    const {serial = '', modelo = '', descripcion = '', color = '', foto = '', fecha_compra = '', precio = '',usuario,marca,tipo_equipo,estado_equipo} = valoresForm;


    const listarUsuarios = async () => {
        try {           
            const { data } = await getUsuarios();
            setUsuarios(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarUsuarios();
    }, []);

    const listarMarca = async () => {
        try {
            const { data } = await getMarca();
            setMarcas(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarMarca();
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

    const listarTipo = async () => {
        try {
            const { data } = await getTipo();
            setTipos(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarTipo();
    }, []);

    const handleOnChange = ({ target }) => {
        const { name, value } = target
        setValoresForm({...valoresForm, [name]: value });
    }

    const handleOnSubmit= async(e)=>{
        e.preventDefault();
        const inventario ={
            serial,modelo,descripcion,color, foto, fecha_compra, precio,
            usuario:{ _id: usuario},
            marca:{ _id : marca},
            tipo_equipo:{_id: tipo_equipo},
            estado_equipo:{ _id: estado_equipo}            
        }
        console.log(inventario);
        try {
            Swal.fire({
                allowOutsideClick:false,
                text: '...Cargando...'
            });
            Swal.showLoading();
            const {data} = await crearInventarios(inventario);
            console.log(data);
            Swal.close();
            handleOpenModal();
            listarInventarios();            
        } catch (error) {
            console.log(error);
            Swal.close();            
        }
    }

    return (
        <div className='sidebar'>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='sidebar-header'>
                            <h3> Nuevo Inventario </h3>
                            <i className="fa-solid fa-xmark" onClick={handleOpenModal}></i>

                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className='col'>
                        <hr></hr>
                    </div>
                </div>
                <form onSubmit={(e)=>handleOnSubmit(e)}>
                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Serial</label>
                                <input type="text" name='serial'
                                    required
                                    minLength={3}
                                    value={serial}
                                    onChange={(e) => { handleOnChange(e) }}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Modelo</label>
                                <input type="text" name='modelo'
                                    required
                                    value={modelo}
                                    onChange={(e) => {handleOnChange(e)}}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Descripción</label>
                                <input type="text" name='descripcion'
                                    required
                                    value={descripcion}
                                    onChange={(e) => { handleOnChange(e) }}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Color</label>
                                <input type="text" name='color'
                                    required
                                    value={color}
                                    onChange={(e) => { handleOnChange(e) }}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Foto</label>
                                <input type="url" name='foto'
                                    required
                                    value={foto}
                                    onChange={(e) => { handleOnChange(e) }}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Fecha Compra</label>
                                <input type="date" name='fecha_compra'
                                    required
                                    value={fecha_compra}
                                    onChange={(e) => { handleOnChange(e) }}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Precio</label>
                                <input type="number" name='precio'
                                    required
                                    value={precio}
                                    onChange={(e) => { handleOnChange(e) }}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Usuario</label>
                                <select className="form-select"
                                    required
                                    onChange={(e) => { handleOnChange(e) }}
                                    name='usuario'
                                    value={usuario}
                                >
                                    <option value="">-- SELECCIONAR --</option>
                                    {
                                        usuarios.map(({ _id, nombre }) => {
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Marca</label>
                                <select className="form-select"
                                    required
                                    onChange={(e) => { handleOnChange(e) }}
                                    name='marca'
                                    value={marca}
                                >
                                    <option value="">-- SELECCIONAR --</option>
                                    {
                                        marcas.map(({ _id, nombre }) => {
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Tipo de Equipo</label>
                                <select className="form-select"
                                     required
                                     onChange={(e) => { handleOnChange(e) }}
                                     name='tipo_equipo'
                                     value={tipo_equipo}
                                >
                                    <option value="">-- SELECCIONAR --</option>
                                    {
                                        tipos.map(({ _id, nombre }) => {
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        })
                                    }
                                </select>
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
