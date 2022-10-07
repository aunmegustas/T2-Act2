import React from 'react'

export const ObjetosLiterales = () => {
    const persona : Persona = {
        nombreCompleto: 'Martha',
        edad: 30,
        direccion: {
            pais: 'Mexico',
            estado: 'Nayarit',
            ciudad: 'Tepic',
            calle: 'Conocido',
            numero: 533
        }
    }
    interface Persona {
        nombreCompleto: string,
        edad: number,
        direccion: {
            pais: string,
            estado: string,
            ciudad: string,
            calle: string,
            numero: number
        }
    }
    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {/* JSON.stringify(persona) */}
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}
