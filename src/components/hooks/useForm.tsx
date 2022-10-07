import { useState } from "react";

export const useForm = <T extends object>(formulario: T) => {
    const [state, setstate] = useState(/*{
        email: 'test@test.com',
        password: '123456'
    }*/
        formulario
    )
    const onChange = (value: string, campo: keyof T) => {
    //const onChange = (value: string, campo: string) => {
        //llamado a la función que cambia el useState
        setstate({
            //desestructuramos los valores del useState
            ...state,
            //aqui es como si estuvieramos mandando
            //el atributo email o password. Dicho de otro modo
            //los [] computan es decir compara el valor que trae
            //el parametro "campo" y lo relaciona con el valor del
            //useState. Por ultimo si encontro un atributo que se llame
            //igual le asigna el valor que trae el parametro "value"
            //de la funcion onChange.
            [campo]: value
        });
    }
    return {
        ...state,
        formulario: state,
        onChange
    }
}
