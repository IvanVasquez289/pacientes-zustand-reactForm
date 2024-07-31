import { usePatientStore } from "../store"

const PatientList = () => {
  const {patients} = usePatientStore()

  console.log(patients)
  return (
    <div>PatientList</div>
  )
}

export default PatientList