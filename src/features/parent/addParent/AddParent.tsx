import { useState } from "react";
import Address from "../../../components/Common/Address";
import Button from "../../../components/UI/Button/Button";
import Dropdown from "../../../components/UI/Dropdown";
import Input from "../../../components/UI/TextInput/TextInput";
import { OCCUPATIONS } from "../../../constants/configs";
import { useAppSelector } from "../../../hooks";
import { AppState } from "../../../store";
import { updateParentAddress } from "../ParentSlice";
// import image from '../../../public/assets/images/school-parent.jpg'
import AddParentStyles from "./AddParent.module.scss";

const AddParent = () => {
  const { address } = useAppSelector((state: AppState) => state.parent);

  return (
    <div>
      <div className={AddParentStyles.add__parent__container}>
        <div>
          <h3>Parents Details</h3>
          <div>
            <Input onChange={() => {}} value="" placeholder="First Name" />
            <Input onChange={() => {}} value="" placeholder="Last Name" />
          </div>
          <div>
            <Input onChange={() => {}} value="" placeholder="Phone" />
          </div>
          <div>
            <Input onChange={() => {}} value="" placeholder="E-Mail" />
          </div>
          <div>
            <Address
              {...address}
              setAddressValue={(key, value) => {
                updateParentAddress({ key, value });
              }}
            />
          </div>
          <div>
            <Dropdown
              onChange={() => {}}
              options={OCCUPATIONS}
              selected={{ label: "", value: "" }}
            />
          </div>
          <div>
            <Input onChange={() => {}} value="" placeholder="Monthly Income" />
          </div>
        </div>
        <div className={AddParentStyles.cover__image}>
          <img src={"/assets/images/school-parent.jpg"} />
        </div>
      </div>
      <Button
        onClick={() => {}}
        classes={AddParentStyles.add__parent__submit}
        label={"Save"}
      />
    </div>
  );
};

export default AddParent;
