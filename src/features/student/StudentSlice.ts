import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IStudent } from "../../interfaces"

const initialState: IStudent = {
    firstName: '',
    lastName: '',
    languagesKnown: '',
    address: {
        doorNo: "109",
        addressLine1: "33rd cross, 4th main",
        addressLine2: "old madiwala bangalore south",
        landMark: "near someshwara temple",
        district: "Bangalore",
        country: "India",
        state: "Karnataka",
        pincode: "560068",
    }
}

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        updateStudentAddress: (state, action: PayloadAction<{ key: string, value: string }>) => {
            state.address[action.payload.key] = action.payload.value
        }
    }
})

export const { updateStudentAddress } = studentSlice.actions

export default studentSlice.reducer;