import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/TextInput/TextInput";
import addTeacherStyles from "./addTeacher/addTeacher.module.css";
import { ChangeEvent, FC } from "react";

const deleteTableRows = (index, addRow, data) => {
  const rows = [...data];
  rows.splice(index, 1);
  addRow(rows);
};
export const subjectList = [
  { item: "English", selected: true },
  { item: "Maths", selected: true },
  { item: "Sicence", selected: true },
  { item: "Social", selected: true },
];

const handleChangeArrObj = ({
  index: index,
  ele: ele,
  setState: setState,
  data: data,
}) => {
  let newArr = [...data];

  switch (ele.target.name) {
    case "schoolOrCollege":
      newArr[index].schoolOrCollege = ele.target.value;
      break;
    case "year":
      newArr[index].year = ele.target.value;
      break;
    case "cource":
      newArr[index].cource = ele.target.value;
      break;
    default:
      break;
  }

  setState(newArr);
};

export const handleChange = (e, setState) => {
  const { name, value } = e.target;
  setState((prevState) => {
    return {
      ...prevState,
      [name]: value,
    };
  });
};

export const EducationDetails = ({ title, data, addRow }) => {
  let maxLength = 3;
  return (
    <div className={addTeacherStyles.input__field}>
      <h3 className={addTeacherStyles.table__h3}>{title}</h3>
      <div>
        {data?.map((item, index) => {
          return (
            <div className={addTeacherStyles.incGroup} key={index}>
              <div>
                <Input
                  placeholder="Year"
                  value={item.schoolOrCollege}
                  onChange={(ele) =>
                    handleChangeArrObj({
                      index: index,
                      ele: ele,
                      setState: addRow,
                      data: data,
                    })
                  }
                  name="schoolOrCollege"
                  type={"enum"}
                />
              </div>
              <div>
                <Input
                  placeholder="year"
                  type={"enum"}
                  onChange={(ele) =>
                    handleChangeArrObj({
                      index: index,
                      ele: ele,
                      setState: addRow,
                      data: data,
                    })
                  }
                  name="year"
                />
              </div>
              <div>
                <Input
                  placeholder="Group"
                  onChange={(ele) =>
                    handleChangeArrObj({
                      index: index,
                      ele: ele,
                      setState: addRow,
                      data: data,
                    })
                  }
                  name="cource"
                  type={"enum"}
                />
              </div>
              <Button
                disabled={index > 3}
                label={`${index === 0 ? "+" : "-"}`}
                onClick={() => {
                  index === 0
                    ? addRow([
                        ...data,
                        {
                          schoolOrCollege: "",
                          year: "",
                          cource: "",
                        },
                      ])
                    : deleteTableRows(index, addRow, data);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const DocumentUpload = ({ title }) => {
  return (
    <div className={addTeacherStyles.input__field}>
      <h3>{title}</h3>
      <div className={addTeacherStyles.id_Front}>
        <img src="" height={150} width={150} />
      </div>
      <div className={addTeacherStyles.id_Back}>
        <img src="" height={150} width={150} />
      </div>
    </div>
  );
};

export const onClickCheckBox = ({
  data: data,
  prvState: prvState,
  statUpdate: statUpdate,
}) => {
  let updatedValue = [...prvState];
  let checkStatus = prvState.filter((el) => el.item === data.item)[0].selected;
  let index = prvState.findIndex((el) => el.item === data.item);

  updatedValue[index].selected = !checkStatus;
  statUpdate(updatedValue);
};

export const SubjectCard = ({ title, subject, onChange }) => {
  return (
    <div className={addTeacherStyles.input__field}>
      <h3>{title}</h3>
      {subject.map((item, index) => {
        return (
          <div key={index} className={addTeacherStyles.sub__container}>
            <input
              type={"checkbox"}
              onClick={() => onChange(item)}
              checked={item.selected}
            />
            <h3>{item.item}</h3>
          </div>
        );
      })}
    </div>
  );
};

interface IInputProps {
  placeholder: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
  type?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  maxLength?: number;
  disabled?: boolean;
  title: string;
}
export const SingleInputCard: FC<IInputProps> = ({
  title,
  placeholder,
  type,
  value,
  disabled,
  onChange,
  maxLength,
}) => {
  return (
    <div className={addTeacherStyles.input__field}>
      <h3>{title}</h3>
      <div>
        <Input
          placeholder={placeholder}
          onChange={(e: any) => onChange(e.target.value)}
          type={type}
          value={value}
          disabled={disabled}
          maxLength={maxLength}
        />
      </div>
    </div>
  );
};
