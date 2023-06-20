import React from "react";

import styles from "./Button.module.css";

interface Props {
   children: string;
   onClick: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
   return (
      <button className={styles.btn} onClick={onClick}>
         {children}
      </button>
   );
};

export default Button;
