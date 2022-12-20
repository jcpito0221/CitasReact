import { useEffect } from "react"
import Pacientes from "./Pacientes"


function ListadoPacientes({ pacientes, setPaciente, paciente, eliminarPaciente }) {
    useEffect(() => {
        if(pacientes.length > 0) {
            console.log('paciente nuevo')
        }
    }, [pacientes])

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll" >
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className="text-center mt-5 mb-5"> Administra tus  {''}
                        <span>Pacientes y citas</span>
                    </p>
                    {pacientes.map(paciente => (
                        <Pacientes
                            key={paciente.id}  // pasar un key unico para el prop 
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente ={eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay  pacientes</h2>
                    <p className="text-center mt-5 mb-5"> Agrega tus  {''}
                        <span>Pacientes y citas</span>
                    </p>
                </>
            )

            }
        </div>
    )
}

export default ListadoPacientes