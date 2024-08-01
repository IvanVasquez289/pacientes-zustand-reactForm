import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer/>
     </div>
    </>
  )
}

export default App
