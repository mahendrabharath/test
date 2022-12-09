import { FC, useState } from "react";
import dropDownStyles from "./Dropdown.module.scss";

type Option = { value: string; label: string };
interface IDropdownProps {
  options: Option[];
  selected: Option;
  onChange: (opt: Option) => void;
  className?: string;
}
/* 
options - {value, label}[]
selected -  {value, label}
**/
const Dropdown: FC<IDropdownProps> = ({ options = [], selected, onChange, className }) => {
  const [checked, setChecked] = useState(false);

  const dropdownChange = (e, value) => {
    onChange(value);
    setChecked(false);
  };

  return (
    <div className={dropDownStyles.dropdown_wrapper}>
      <div
        className={`${dropDownStyles.sec_center} ${dropDownStyles[className]}`}
      >
        <input
          className={dropDownStyles.dropdown}
          checked={checked}
          onChange={() => setChecked(!checked)}
          type="checkbox"
          id="dropdown"
          name="dropdown"
        />
        <label className={dropDownStyles.for_dropdown} htmlFor="dropdown">
          {selected && Boolean(selected.label)
            ? selected.label
            : "Select Option"}{" "}
          <i className={`${dropDownStyles.uil} uil-arrow-down`} />
        </label>
        <div className={dropDownStyles.section_dropdown}>
          {options.map(({ value, label }, i) => (
            <a
              key={i}
              className={value == selected.value ? dropDownStyles.active : ""}
              onClick={(e) => dropdownChange(e, { value, label })}
              href="#"
            >
              {label} <i className="uil uil-arrow-right" />
            </a>
          ))}

          {/* <a className={dropDownStyles.active} href="#">Dropdown Link <i className="uil uil-arrow-right" /></a> */}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
