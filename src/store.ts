import {create} from 'zustand'
import { DraftPatient, Patient } from './types'
import { devtools } from 'zustand/middleware';

type PatientState = {
    patients: Patient[];
    addPatient: (data: DraftPatient) => void;
    deletePatient: (id: Patient['id']) => void;
    activePatient: Patient['id'];
    getPatientById: (id: Patient['id']) => void;
    updatePatient: (patient: Patient) => void;
}

const createPatient = (data: DraftPatient): Patient => {
    return {
        ...data,
        id: crypto.randomUUID()
    }
}

export const usePatientStore = create<PatientState>()(
    devtools((set, get) => ({
        patients: [],
        activePatient: '',
        addPatient: (data: DraftPatient) => {
            const patient = createPatient(data)
    
            set((state)=>({
                patients: [...state.patients, patient]
            }))
        },
        deletePatient: (id) => {
            set((state) => ({
                patients: state.patients.filter((patient) => patient.id !== id)
            }))
        },
        getPatientById: (id) => set({activePatient: id}),
        updatePatient: (patient) => {
            const updtedPatients = get().patients.map(p => p.id === patient.id ? patient : p)
            set({
                patients:updtedPatients,
                activePatient: ''
            })
        }
    }))
)