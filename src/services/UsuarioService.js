
import{axiosInstance} from '../helpers/axios-config';

const getUsuarios=()=>{
    return axiosInstance.get('usuarios', {

        headers : {
            'Content-type': 'application/json'
        }
    })
}

//todo crear, actualizar...

export{
    getUsuarios
}