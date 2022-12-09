import React, { FC, MouseEvent } from "react";
import buttonStyles from "./Button.module.css";

interface IButtonProps {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement> | void) => void;
  disabled?: boolean;
  classes?: string;
}

const Button: FC<IButtonProps> = ({ label, onClick, disabled, classes }) => {
  return (
    <div className={classes}>
      <button
        disabled={disabled}
        className={`${buttonStyles.button} ${buttonStyles.button__mimas}`}
        onClick={onClick}
      >
        <span>{label}</span>
      </button>
    </div>
  );
};

export default Button;
