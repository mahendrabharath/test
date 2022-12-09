export interface IAddress { 
    doorNo: string,
    addressLine1: string,
    addressLine2: string,
    landMark: string,
    district: string,
    country: string,
    state: string,
    pincode: string,
}

export interface IStudent {
    firstName: string
    lastName: string
    address: IAddress
    languagesKnown: string
}

export interface IParent {
    firstName: string
    lastName: string
    phone: number
    email: string
    occupation: string
    languagesKnown: string
    address: IAddress
}
