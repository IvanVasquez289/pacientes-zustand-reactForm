import {create} from 'zustand'
import { DraftPatient, Patient } from './types'

type PatientState = {
    patients: Patient[];
    addPatient: (data: DraftPatient) => void;
}

const createPatient = (data: DraftPatient): Patient => {
    return {
        ...data,
        id: crypto.randomUUID()
    }
}

export const usePatientStore = create<PatientState>((set) => ({
    patients: [],
    addPatient: (data: DraftPatient) => {
        const patient = createPatient(data)

        set((state)=>({
            patients: [...state.patients, patient]
        }))
    }
}))