import React from "react";

import styles from "./Button.module.css";

interface Props {
   children: string;
   onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
   type?: "button" | "submit" | "reset";
}

const Button: React.FC<Props> = ({ children, onClick, type }) => {
   return (
      <button type={type || "button"} className={styles.btn} onClick={(e) => onClick(e)}>
         {children}
      </button>
   );
};

export default Button;
