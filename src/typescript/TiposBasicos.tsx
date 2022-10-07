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
    //let FicPasatiempos : string[] = ['futbol', 'squash', 'leer','series y peliculas'];
    //FicPasatiempos.push(706);
    //FicPasatiempos.push(true);
    let FicLibros = [];
    FicLibros.push(706);
    FicLibros.push(true);
    FicLibros.push('El Principito');
    FicIdNombre = 706;
    FicIdNombre = "Frank";
    FicExperiencia = 25;
    return (
        <>
            <h3>Tipos Básicos</h3>  
            Alias: {FicIdNombre},
            <br></br>
            Nombres: {FicNombre},
            <br></br>
            Apellidos: {FicApellidos},
            <br></br>
            No. Control: {FicNumControl},
            <br></br>
            No. Control 2: {FicNumControl2},
            <br></br>
            Fecha de Registro: {FicFechaReg.toString()},
            <br></br>
            Años de Experiencia: {FicExperiencia},
            <br></br>
            Estatus: {(FicActivo) ? 'Activo' : 'No Activo'},
            <br></br>
            Libros: {FicLibros[0]},
            {(FicLibros[1]) ? 'Activo' : 'No Activo'},
            {FicLibros[2]}
        </>
    )
}
