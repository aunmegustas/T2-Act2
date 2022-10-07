import React from 'react'

export const ObjetosLiterales = () => {
    const persona = {
        nombre: 'Martha',
        edad: 30,
        direccion: {
            pais: 'Mexico',
            estado: 'Nayarit',
            ciudad: 'Tepic',
            direccion: 'Conocido No. 533'
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
