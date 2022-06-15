import React,{useState,useEffect} from 'react'
import { getUsuarios} from '../../services/UsuarioService';
import {getEstado} from '../../services/EstadoService';
import {getMarca} from '../../services/MarcaService';
import {getTipo} from '../../services/TipoService';


export const InventarioNew = ({ handleOpenModal }) => {

    const[usuarios,setUsuarios]= useState([]);
    const[marcas,setMarcas]= useState([]);
    const[tipos,setTipos]= useState([]);
    const[estados,setEstados]= useState([]);

    useEffect( async()=>{
        try {
            const{data} = await getUsuarios();
            setUsuarios(data);
            
        } catch (error) {    
            console.log(error);        
        }        
    
    },[])

    
    useEffect( async()=>{
        try {
            const{data} = await getMarca();
            setMarcas(data);
            
        } catch (error) {    
            console.log(error);        
        }        
    
    },[])

    
    useEffect( async()=>{
        try {
            const{data} = await getEstado();
            setEstados(data);
            
        } catch (error) {    
            console.log(error);        
        }        
    
    },[])

    
    useEffect( async()=>{
        try {
            const{data} = await getTipo();
            setTipos(data);
            
        } catch (error) {    
            console.log(error);        
        }        
    
    },[])
    
    return (
        <div className='sidebar'>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='sidebar-header'>
                            <h3> Nuevo Inventario </h3>
                            <i className="fa-solid fa-xmark" on onClick={handleOpenModal}></i>

                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className='col'>
                        <hr></hr>
                    </div>
                </div>
                <form>
                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Serial</label>
                                <input type="text" name='serial' className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Modelo</label>
                                <input type="text" name='modelo' className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Descripción</label>
                                <input type="text" name='descripcion' className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Color</label>
                                <input type="text" name='color' className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Foto</label>
                                <input type="text" name='foto' className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Fecha Compra</label>
                                <input type="date" name='fecha_compra' className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Precio</label>
                                <input type="number" name='precio' className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Usuario</label>
                                <select className="form-select">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Marca</label>
                                <input type="text" name='marca' className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Tipo de Equipo</label>
                                <input type="text" name='tipo_equipo' className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Estado del Equipo</label>
                                <input type="text" name='estado_equipo' className="form-control" />
                            </div>
                        </div>
                    </div>


                </form>

            </div>

        </div>
    )
}
