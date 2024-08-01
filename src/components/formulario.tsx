import { Dispatch, FormEvent, SetStateAction} from "react"
import { useForm } from "../hooks/useForm"
import { InputForm } from "./input-form"

export interface Paciente {
  id: string;
  mascota: string;
  duenio: string;
  email: string;
  raza: string;
}

type FormValues = Omit<Paciente, 'id'>

export const Formulario = ({setPacientes} : {setPacientes : Dispatch<SetStateAction<Paciente[]>>}) => {

  const {FormValues, handleChange , reset} = useForm<FormValues>({
    mascota:"",
    duenio:"",
    email:"",
    raza:"",
  })
 
  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();

    const newPaciente = {
      id: crypto.randomUUID(),
      ...FormValues
    }
  
   setPacientes((prev:Paciente[]) => {
    return [...prev, newPaciente]
   })

   reset()

  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
     <h2 className="font-bold text-3xl text-center">Registrar <span className="text-indigo-700">Nuevo Paciente</span></h2>
     
     <form className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10 mt-5" onSubmit={handleSubmit}>
      <InputForm 
       name="mascota"
       type="text"
       label="Mascota"
       placeholder="Nombre de la mascota"
       onChange={handleChange}
       value={FormValues.mascota}
      />
      <InputForm 
       name="raza"
       type="text"
       label="Raza"
       placeholder="Raza de la mascota"
       onChange={handleChange}
       value={FormValues.raza}
      />
      <InputForm 
       name="duenio"
       type="text"
       label="Dueño"
       placeholder="Nombre y apellido del dueño"
       onChange={handleChange}
       value={FormValues.duenio}
      />
      <InputForm 
       name="email"
       type="text"
       label="Email"
       placeholder="Email de contacto"
       onChange={handleChange}
       value={FormValues.email}
      />

      <button className="text-white bg-indigo-700 font-bold uppercase p-3 transition-all w-full hover:bg-indigo-800" type="submit">Agregar pacientes</button>

     </form>

    </div>
  )
}
