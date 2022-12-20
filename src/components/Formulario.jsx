import { useState, useEffect } from "react";
import Error from "./Error";

export default function Formulario({ pacientes, setPacientes, paciente,setPaciente }) {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }

  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // validacion formulario 
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay al menos un campo vacio')
      setError(true)
      return;
    }
    setError(false);

    //objeto de paciente
    const objetoPacientes = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,

    }

    if (paciente.id) {
      // editando el registro 
      objetoPacientes.id = paciente.id
      const pacientesAct = pacientes.map(pacienteState => pacienteState.id ===paciente.id ?objetoPacientes :pacienteState )
      setPacientes(pacientesAct) 
      setPaciente({})

    } else {
      objetoPacientes.id = generarId()
      setPacientes([...pacientes, objetoPacientes])

    }


    // reiniciar el formulario 
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5" >
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-center mt-5 text-lg mb-5">Agregar Paciente y {''}
        <span className="text-red-800 font-bold">Administrar</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-9"
      >
        {error && <Error />}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase" >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre"
            className=" border-2 mt-2 w-full p-2 placeholder-gray-600 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase" >
            Nombre propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre"
            className=" border-2 mt-2 w-full p-2 placeholder-gray-600 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 font-bold uppercase" >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Contacto propietario"
            className=" border-2 mt-2 w-full p-2 placeholder-gray-600 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 font-bold uppercase" >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className=" border-2 mt-2 w-full p-2 placeholder-gray-600 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintoma" className="block text-gray-700 font-bold uppercase" >
            Síntomas
          </label>
          <textarea
            id="sintoma"
            className=" border-2 mt-2 w-full p-2 placeholder-gray-600 rounded-md"
            placeholder="Descripción"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input type="submit"
          className="bg-red-900 w-full uppercase font-bold p-2  text-black cursor-pointer transition-all  hover:bg-red-700 rounded-md"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  )
}
