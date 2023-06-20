import { BsFillHeartFill } from "react-icons/bs";

import styles from "./Header.module.css";
import { useAppSelector } from "../../hooks/reduxHooks";
import User from "../User/User";

const Header = () => {
   const { favourites } = useAppSelector((state) => state);

   return (
      <header className={styles.header}>
         <User />
         <BsFillHeartFill />
         <span className={styles.count}>{favourites.length}</span>
      </header>
   );
};

export default Header;
