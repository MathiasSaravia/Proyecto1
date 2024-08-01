import { FormValues } from "./formulario"

export const ListadoPacientes = ({pacientes} : {pacientes: FormValues[]}) => {
  return (
    <>
    <div>listado-pacientes</div>
    {pacientes.map((paciente, index) => (
      <p key={index}>{paciente.mascota}</p>
    ))}
    </>
    
  )
}
