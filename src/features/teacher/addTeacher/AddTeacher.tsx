import { useState } from "react";
import { Calendar } from "react-date-range";
import addTeacherStyles from "./addTeacher.module.css";
import {
  DocumentUpload,
  EducationDetails,
  handleChange,
  onClickCheckBox,
  SingleInputCard,
  SubjectCard,
  subjectList,
} from "../TeacherHelperComp";
import Input from "../../../components/UI/TextInput/TextInput";
import Button from "../../../components/UI/Button/Button";

export default function AddTeacher() {
  const [educationDetails, setEduvationDetails] = useState([
    {
      schoolOrCollege: "",
      year: "",
      cource: "",
    },
  ]);

  const [address, setAddress] = useState({
    Line_1: "",
    Line_2: "",
    pincode: "",
  });
  const [dob, setDob] = useState(new Date());
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  const [showCalander, setShowCalander] = useState(false);
  const [specificLang, setSpecificLang] = useState(subjectList);

  const onChangeDob = (e) => {
    setShowCalander(false);
    setDob(e);
  };

  return (
    <div className={addTeacherStyles.form__container}>
      <div className={addTeacherStyles.cover__image}>
        <img
          src="http://kimberlineducation.com/wp-content/uploads/2017/05/article-hero-image-2.jpg"
          height={300}
          width={300}
        />
      </div>
      <div>
        <div className={addTeacherStyles.input__field}>
          <h3>Name :</h3>
          <div>
            <Input
              placeholder="First Name"
              name="firstName"
              onChange={(e) => handleChange(e, setName)}
              value={name.firstName}
            />
          </div>
          <div>
            <Input
              placeholder="Last Name"
              name="lastName"
              onChange={(e) => handleChange(e, setName)}
              value={name.lastName}
            />
          </div>
        </div>
        <SingleInputCard
          title={"Phone :"}
          placeholder={"Phone Number"}
          type={"number"}
          onChange={(data: any) => setPhoneNumber(data)}
          value={phoneNumber}
          maxLength={10}
        />
        <SingleInputCard
          title={"E-Mail :"}
          placeholder={"Email Address"}
          type={"email"}
          onChange={(data: any) => setEmail(data)}
          value={email}
        />
        <div
          className={addTeacherStyles.calanderView}
          onClick={() => setShowCalander(true)}
        >
          <SingleInputCard
            title={"DOB :"}
            placeholder={"Date Of Birth"}
            type={"enum"}
            value={`${dob.getDate()}/${dob.getMonth()}/${dob.getFullYear()}`}
            disabled={true}
            maxLength={10}
          />
          {showCalander && (
            <div className={addTeacherStyles.calander}>
              <Calendar date={dob} onChange={(e) => onChangeDob(e)} />
            </div>
          )}
        </div>
        <div className={addTeacherStyles.input__field}>
          <h3>Address :</h3>
          <div>
            <Input
              placeholder="Line_1"
              onChange={(e) => handleChange(e, setAddress)}
              type={"address"}
            />
            <Input
              placeholder="Line_2"
              onChange={(e) => handleChange(e, setAddress)}
              type={"address"}
            />
            <Input
              placeholder="pincode"
              onChange={(e) => handleChange(e, setAddress)}
              type={"pincode"}
              maxLength={6}
            />
          </div>
        </div>
        <div className={addTeacherStyles.divider} />
        <EducationDetails
          title={"Education :"}
          data={educationDetails}
          addRow={setEduvationDetails}
        />
      </div>
      <div>
        <DocumentUpload title={"ID Card"} />
      </div>
      <SubjectCard
        title={"Subject Specific :"}
        subject={specificLang}
        onChange={(data) =>
          onClickCheckBox({
            data: data,
            prvState: specificLang,
            statUpdate: setSpecificLang,
          })
        }
      />
      <div className={addTeacherStyles.submitBtn}>
        <Button label={"Submit"} />
      </div>
    </div>
  );
}
