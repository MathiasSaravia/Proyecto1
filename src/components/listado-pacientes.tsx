import { Paciente } from "./formulario"
import { PacienteCard } from "./paciente-card"

export const ListadoPacientes = ({pacientes} : {pacientes: Paciente[]}) => {
  return (

    <div className="md:w-1/2 lg:w-2/5">
     <h2 className="font-bold text-3xl text-center">Listado de <span className="text-indigo-700">Pacientes</span></h2>
     <div className="h-screen overflow-y-scroll mb-10 mt-5">
      {
        pacientes.map(paciente => (
          <PacienteCard paciente = {paciente}/>
        ))
      }
     </div>

    </div>
  )
}
