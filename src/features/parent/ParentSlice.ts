import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IParent } from "../../interfaces"

const initialState: IParent = {
    firstName: '',
    lastName: '',
    languagesKnown: '',
    phone: 90909090909,
    email: '',
    occupation: 'string',
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

export const parentSlice = createSlice({
    name: 'parent',
    initialState,
    reducers: {
        updateParentAddress: (state, action: PayloadAction<{ key: string, value: string }>) => {
            state.address[action.payload.key] = action.payload.value
        }
    }
})

export const { updateParentAddress } = parentSlice.actions

export default parentSlice.reducer;