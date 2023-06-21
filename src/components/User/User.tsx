import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { getUserById } from "../../store/user/userActions";
import Button from "../Button/Button";

import styles from "./User.module.css";

const User = () => {
   const { user, loading, isAuth } = useAppSelector((state) => state.user);
   const dispatch = useAppDispatch();

   if (loading === "loading") return "Загрузка...";

   if (loading === "error") return "Ошибка!";

   const onAuth = () => {
      dispatch(getUserById(2));
   };

   return (
      <h2 className={styles.userName}>
         {!isAuth && <Button onClick={onAuth}>Авторизоваться</Button>}
         {isAuth && user?.name}
      </h2>
   );
};

export default User;
