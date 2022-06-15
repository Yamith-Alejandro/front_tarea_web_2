
import{axiosInstance} from '../helpers/axios-config';

const getTipo=()=>{
    return axiosInstance.get('tipo_equipo', {

        headers : {
            'Content-type': 'application/json'
        }
    })
}

//todo crear, actualizar...

export{
    getTipo
}