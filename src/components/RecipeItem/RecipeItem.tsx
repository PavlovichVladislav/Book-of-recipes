import { useAppDispatch } from "../../hooks/reduxHooks";
import { IRecipe } from "../../models/AppModels";
import { addToFavourites, deleteFromFavourites } from "../../store/favourites/favouritesSlice";

import styles from "./RecipeItem.module.css";

interface Props {
   recipe: IRecipe;
   favourite: boolean;
}

const RecipeItem: React.FC<Props> = ({ recipe, favourite }) => {
   const dispatch = useAppDispatch();

   const onAddToFavourites = () => {
      dispatch(addToFavourites(recipe));
   };

   const onDeleteFromFavourites = () => {
      dispatch(deleteFromFavourites(recipe.id));
   };

   return (
      <div className={styles.item}>
         <h2 className={styles.title}>{recipe.name}</h2>
         {favourite ? (
            <button className={styles.btn} onClick={onDeleteFromFavourites}>
               Remove from favourites
            </button>
         ) : (
            <button className={styles.btn} onClick={onAddToFavourites}>
               Add to favourites
            </button>
         )}
      </div>
   );
};

export default RecipeItem;
