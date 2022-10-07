import { useEffect, useRef, useState } from "react"
import { reqRespApi } from "../../api/reqRes"
import { ReqRespUsuarioListado, Usuario } from "../../interfaces/reqResp"

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const ficRefPage= useRef(0);
    useEffect(() => {
        // Llamar función de carga de usuarios.
        ficFnCargaUsuarios();
    }, [])

    const ficFnCargaUsuarios = async () => {
        const ficResponse = await
        // Llamado de la API
        reqRespApi.get<ReqRespUsuarioListado>('/users', {
            params: {
                page: ficRefPage.current
            }
        })
        .then(resp => {
            //console.log(resp);
            //console.log(resp.data);
            //console.log(resp.data.data);
            //console.log(resp.data.data[0].first_name);
            //console.log(resp.data.data);
            if( resp.data.data.length > 0 ){
                setUsuarios(resp.data.data);
                ficRefPage.current++;
            }else{
                alert('No hay más registros.');
            }
        })
        .catch(err => console.log(err))
    }
    const ficFnPaginaSiguiente = () => {
        ficRefPage.current++;
        ficFnCargaUsuarios();
    }
    const ficFnPaginaAnterior = () => {
        if(ficRefPage.current > 1){
            ficRefPage.current--;
            ficFnCargaUsuarios();
        }
    }

    return {
        usuarios,
        //ficFnCargaUsuarios,
        ficFnPaginaAnterior,
        ficFnPaginaSiguiente
    }
}