
import{axiosInstance} from '../helpers/axios-config';

const getMarca=()=>{
    return axiosInstance.get('marca', {

        headers : {
            'Content-type': 'application/json'
        }
    })
}

//todo crear, actualizar...

export{
    getMarca
}