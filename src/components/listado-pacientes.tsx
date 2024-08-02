import { useContext } from "react"
import { PacienteCard } from "./paciente-card"
import { PacientesContext } from "../context/PacientesContext"

export const ListadoPacientes = () => {

  const {pacientes} = useContext(PacientesContext)

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
