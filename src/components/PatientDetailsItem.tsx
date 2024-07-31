type PatientDetailsItemProps = {
    label: string
    data: string
}

const PatientDetailsItem = ({label, data}: PatientDetailsItemProps) => {
  return (
    <p className="font-bold uppercase text-gray-700 mb-3">
        {label}: {''}
        <span className="font-normal normal-case">{data}</span>
    </p>
  )
}

export default PatientDetailsItem