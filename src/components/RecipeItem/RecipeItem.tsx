import { useAppDispatch } from "../../hooks/reduxHooks";
import { IRecipe } from "../../models/AppModels";
import { addToFavourites, deleteFromFavourites } from "../../store/favourites/favouritesSlice";
import Button from "../Button/Button";

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
         <img className={styles.img} src={recipe.image} alt={recipe.name} />
         {favourite ? (
            <Button onClick={onDeleteFromFavourites}>Remove from favourites</Button>
         ) : (
            <Button onClick={onAddToFavourites}>Add to favourites</Button>
         )}
      </div>
   );
};

export default RecipeItem;
