
import{axiosInstance} from '../helpers/axios-config';

const getUsuarios=()=>{
    return axiosInstance.get('usuario', {

        headers : {
            'Content-type': 'application/json'
        }
    })
}

//todo crear, actualizar...

export{
    getUsuarios
}