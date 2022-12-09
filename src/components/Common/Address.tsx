import React, { ChangeEvent, FC, useState } from "react";
import Input from "../UI/TextInput/TextInput";
import addressStyles from "./Address.module.css";

interface IAddressProps {
  doorNo: string;
  addressLine1: string;
  addressLine2: string;
  district: string;
  country: string;
  state: string;
  pincode: string;
  setAddressValue: (key: string, value: string) =>  void;
  landMark: string;
}

const Address: FC<IAddressProps> = ({
  doorNo,
  addressLine1,
  addressLine2,
  district,
  country,
  state,
  pincode,
  setAddressValue,
  landMark,
}) => {
  const [no, setNo] = useState("#");

  const addressChangeHandler = (addressField: string, event: ChangeEvent<HTMLInputElement>) => {
    setAddressValue(addressField, event.target.value)
  };

  return (
    <div className={addressStyles.address__container}>
      <div className={addressStyles.no}>
        <Input
          value={doorNo}
          onChange={(e) => addressChangeHandler("doorNo", e)}
          placeholder={"#"}
        />
      </div>
      <div className={addressStyles.address__line1}>
        <Input
          value={addressLine1}
          onChange={(e) => addressChangeHandler("addressLine1", e)}
          placeholder={"Address Line 1"}
        />
      </div>
      <div className={addressStyles.address__line2}>
        <Input
          value={addressLine2}
          onChange={(e) => addressChangeHandler("addressLine2", e)}
          placeholder={"Address Line 2"}
        />
      </div>
      <div className={addressStyles.district}>
        <Input
          value={district}
          onChange={(e) => addressChangeHandler("district", e)}
          placeholder={"District"}
        />
      </div>
      <div className={addressStyles.country}>
        <Input
          value={country}
          onChange={(e) => addressChangeHandler("country", e)}
          placeholder={"Country"}
        />
      </div>
      <div className={addressStyles.state}>
        <Input
          value={state}
          onChange={(e) => addressChangeHandler("state", e)}
          className={addressStyles.state}
          placeholder={"State"}
        />
      </div>
      <div className={addressStyles.pin__code}>
        <Input
          value={pincode}
          onChange={(e) => addressChangeHandler("pincode", e)}
          placeholder={"Pin Code"}
        />
      </div>
      <div className={addressStyles.landMark}>
        <Input
          value={landMark}
          onChange={(e) => addressChangeHandler("landMark", e)}
          placeholder={"Land Mark"}
        />
      </div>
    </div>
  );
};

export default Address;
