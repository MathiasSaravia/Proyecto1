import { Dispatch, FormEvent, SetStateAction} from "react"
import { useForm } from "../hooks/useForm"
import { InputForm } from "./input-form"

export interface FormValues {
  mascota: string;
  duenio: string;
  email: string;
  raza: string;
}

export const Formulario = ({setPacientes} : {setPacientes : Dispatch<SetStateAction<FormValues[]>>}) => {

  const {FormValues, handleChange} = useForm<FormValues>({
    mascota:"",
    duenio:"",
    email:"",
    raza:"",
  })
 
  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();
    setPacientes((prev:FormValues[]) => {
      return [...prev, FormValues]
    })
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
      />
      <InputForm 
       name="raza"
       type="text"
       label="Raza"
       placeholder="Raza de la mascota"
       onChange={handleChange}
      />
      <InputForm 
       name="duenio"
       type="text"
       label="Dueño"
       placeholder="Nombre y apellido del dueño"
       onChange={handleChange}
      />
      <InputForm 
       name="email"
       type="text"
       label="Email"
       placeholder="Email de contacto"
       onChange={handleChange}
      />

      <button className="text-white bg-indigo-700 font-bold uppercase p-3 transition-all w-full hover:bg-indigo-800" type="submit">Agregar pacientes</button>

     </form>

    </div>
  )
}
