import React from 'react'

export const TiposBasicos = () => {
    const FicNombre: string = "Chirstian Alexis";
    const FicApellidos : string = "Pérez Hernández";
    const FicNumControl : number = 706;
    const FicNumControl2 = 1074;
    const FicFechaReg : Date = new Date();
    let FicExperiencia = 20;
    let FicActivo : boolean = true;
    let FicIdNombre : string | number = "Chirstian";
    FicIdNombre = 706;
    return (
        <>
            <h3>Tipos Básicos</h3>  
            {FicIdNombre},
            <br></br>
            {FicNombre},
            <br></br>
            {FicApellidos},
            <br></br>
            {FicNumControl},
            <br></br>
            {FicNumControl2},
            <br></br>
            {FicFechaReg.toString()},
            <br></br>
            {FicExperiencia},
            <br></br>
            {(FicActivo) ? 'Activo' : 'No Activo'}
        </>
    )
}
