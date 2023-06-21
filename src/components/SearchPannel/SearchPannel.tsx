import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setSearchValue } from "../../store/search/searchSlice";

import styles from "./SearchPannel.module.css";

const SearchPannel = () => {
   const { searchValue } = useAppSelector((state) => state.search);
   const dispatch = useAppDispatch();

   const onChange = (value: string) => {
      dispatch(setSearchValue(value));
   };

   return (
      <input
         className={styles.input}
         type="text"
         value={searchValue}
         placeholder="Что хотите найти?"
         onChange={(e) => onChange(e.target.value)}
      />
   );
};

export default SearchPannel;
