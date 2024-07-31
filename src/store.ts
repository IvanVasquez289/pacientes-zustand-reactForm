import {create} from 'zustand'
import { DraftPatient, Patient } from './types'

type PatientState = {
    patients: Patient[];
    addPatient: (data: DraftPatient) => void;
    deletePatient: (id: Patient['id']) => void;
    activePatient: Patient['id'];
    getPatientById: (id: Patient['id']) => void;
}

const createPatient = (data: DraftPatient): Patient => {
    return {
        ...data,
        id: crypto.randomUUID()
    }
}

export const usePatientStore = create<PatientState>((set) => ({
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
    getPatientById: (id) => set({activePatient: id})
}))