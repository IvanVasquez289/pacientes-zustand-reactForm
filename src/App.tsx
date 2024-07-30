import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"

function App() {
  return (
    <>
     <div className="container mx-auto mt-10">
        <h1 className="text-5xl font-black text-center md:w-2/3 md:mx-auto">
          Seguimiento de pacientes <span className="text-indigo-700">veterinaria</span>
        </h1>

        <div className="mt-10 md:flex">
          <PatientForm/>
          <PatientList/>
        </div>
     </div>
    </>
  )
}

export default App
