import { FormEvent, useContext, useState } from "react"
import { useForm } from "../hooks/useForm"
import { InputForm } from "./input-form"
import { Paciente, PacientesContext } from "../context/PacientesContext"
import { schemaFormAddPaciente } from "../validations/schemas-form-add-paciente"

//{setPacientes} : {setPacientes : Dispatch<SetStateAction<Paciente[]>>}
type FormValues = Omit<Paciente, 'id'>

export const Formulario = () => {

  const { agregarPaciente } = useContext(PacientesContext)

  const [errors, seterrors] = useState<FormValues>({} as FormValues)

  const { FormValues, handleChange, reset } = useForm<FormValues>({
    mascota: "",
    duenio: "",
    email: "",
    raza: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const result = schemaFormAddPaciente.validate(FormValues, { abortEarly: false });

    if(result.error){

      seterrors(result.error.details.reduce((acc, err) => {
        const inputName = err.context?.key as string;
        const message = err.message;
        return{
          ...acc,
          [inputName]:message,
        };
      },{} as FormValues))

      return

    }

    const newPaciente = {
      id: crypto.randomUUID(),
      ...FormValues
    }

    agregarPaciente(newPaciente)
    seterrors({} as FormValues)

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
          error={errors.mascota}
        />
        <InputForm
          name="raza"
          type="text"
          label="Raza"
          placeholder="Raza de la mascota"
          onChange={handleChange}
          value={FormValues.raza}
          error={errors.raza}
        />
        <InputForm
          name="duenio"
          type="text"
          label="Dueño"
          placeholder="Nombre y apellido del dueño"
          onChange={handleChange}
          value={FormValues.duenio}
          error={errors.duenio}
        />
        <InputForm
          name="email"
          type="text"
          label="Email"
          placeholder="Email de contacto"
          onChange={handleChange}
          value={FormValues.email}
          error={errors.email}
        />

        <button className="text-white bg-indigo-700 font-bold uppercase p-3 transition-all w-full hover:bg-indigo-800" type="submit">Agregar pacientes</button>

      </form>

    </div>
  )
}
