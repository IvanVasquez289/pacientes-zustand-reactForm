import { usePatientStore } from "../store";
import PatientDetails from "./PatientDetails";

const PatientList = () => {
  const { patients } = usePatientStore();

  return (
    <div className="md:w-1/2 lg:w-3/5">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
          <div className=" md:h-screen overflow-scroll">
            {patients.map((patient) => (
              <PatientDetails
                key={patient.id}
                patient={patient}
              />
            ))}

          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando Pacientes {""}
            <span className="text-indigo-600 font-bold">Y apareceran aqui</span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientList;
