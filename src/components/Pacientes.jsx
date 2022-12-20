import React from 'react'

export default function Pacientes({ paciente, setPaciente, eliminarPaciente }) {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar el paciente?')

        if (respuesta) {
            eliminarPaciente(id)

        }
    }

    return (
        <div className=" bg-white m-3 shadow-md px-5 py-10 rounded-md ">
            <p className="font-bold uppercase text-gray-700">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold uppercase text-gray-700">Dueño: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold uppercase text-gray-700">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold uppercase text-gray-700">Alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold uppercase text-gray-700">Sintomas: {''}
                <span className="font-normal normal-case"> {sintomas}
                </span>
            </p>
            <div className="flex justify-between mt-5 ">
                <button type="button"
                    className='py-2 px-10 bg-indigo-600  hover:bg-indigo-700 text-white rounded-lg font-bold
                    text-center '
                    onClick={() => setPaciente(paciente)}
                >Editar
                </button>
                <button type="button"
                    className='py-2 px-10  bg-red-800  hover:bg-red-900  text-white rounded-lg font-bold
                     text-center '
                    onClick={handleEliminar}
                >Eiminar
                </button>
            </div>
        </div>
    )
}
