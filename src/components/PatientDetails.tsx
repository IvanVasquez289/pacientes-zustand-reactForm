import { Patient } from "../types"
import PatientDetailsItem from "./PatientDetailsItem"

type PatientDetailsProps = {
    patient: Patient
}
const PatientDetails = ({patient}: PatientDetailsProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl py-10 px-5 mx-5 mb-5">
        <PatientDetailsItem label="ID" data={patient.id}/>
        <PatientDetailsItem label="Nombre" data={patient.name}/>
        <PatientDetailsItem label="Propietario" data={patient.caretaker}/>
        <PatientDetailsItem label="Email" data={patient.email}/>
        <PatientDetailsItem label="Fecha" data={patient.date.toString()}/>
        <PatientDetailsItem label="Sintomas" data={patient.symptoms}/>

        <div className="flex justify-between">
          <button
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          >
            Editar
          </button>
          <button
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          >
            Editar
          </button>
        </div>
    </div>
  )
}

export default PatientDetails