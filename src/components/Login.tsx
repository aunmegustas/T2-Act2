import { useEffect, useReducer } from "react"

const initialState : AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string,
}

type LoginPayLoad = {
    username: string,
    nombre: string
}
type AuthAction = 
| { type: 'logout' }
| { type: 'login', payload: LoginPayLoad }
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch(action.type){
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
            const {nombre, username} = action.payload;
            return {
                validando: false,
                token: 'MITOKEN1234567890',
                //username: action.payload.username,
                //nombre: action.payload.nombre,
                username,
                nombre,
            }
        default:
            return state;
    }
}

export const Login = () => {
    //const [{validando, token}, dispatch] = useReducer(authReducer, initialState)
    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'logout'})
        },2500);
    }, []);

    const Login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'Chirstian Alexis',
                nombre: 'Chris'
            }
        })
    }

    const Logout = () => {
        dispatch({
            type: 'logout'
        })
    }

    // Si se agregara una dependencia
    if(state.validando){
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-warning ficAlertInfo_Div">
                    Valindando Información...
                </div>
            </>
        )
    }
    return (
        <>
            <h3>Login</h3>
            {
                (state.token)
                ?(
                    <div className="alert alert-success ficAlertSuccess_Div">
                        Autenticado como: {state.nombre}
                    </div>
                ):(
                    <div className="alert alert-danger ficAlertDanger_Div">
                        No Autenticado...
                    </div>
                )
            }
            {
                (state.token)
                ?(
                    <button name="ficLogout_Button" className="btn btn-danger" onClick={ Logout }>Logout</button>
                ):(
                    
                    <button name="ficLogin_Button" className="btn btn-primary" onClick={ Login }>Login</button>
                )
            }
        </>
    )
}