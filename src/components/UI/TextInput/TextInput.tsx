import { ChangeEvent, FC } from "react";
import inputStyles from "./TextInput.module.scss";

interface IInputProps {
  placeholder: string;
  name?: string;
  onChange: (e:  ChangeEvent<HTMLInputElement>) => void
  value: string;
  className?: string;
  type?: string;
  onBlur?: () => void;
  onFocus?: () => void;
}

const Input: FC<IInputProps> = ({
  placeholder,
  name,
  onChange,
  value,
  className,
  type = "input",
  onBlur,
  onFocus,
}) => {
  return (
    <div className={`${inputStyles.form__group} ${inputStyles[className]}`}>
      <input
        className={inputStyles.form__field}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        required
        type={type}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <label htmlFor="name" className={inputStyles.form__label}>
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
