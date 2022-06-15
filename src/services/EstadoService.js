
import{axiosInstance} from '../helpers/axios-config';

const getEstado=()=>{
    return axiosInstance.get('estado_equipo', {

        headers : {
            'Content-type': 'application/json'
        }
    })
}

//todo crear, actualizar...

export{
    getEstado
}