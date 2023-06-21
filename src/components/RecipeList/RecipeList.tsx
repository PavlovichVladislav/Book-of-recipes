import { useAppSelector } from "../../hooks/reduxHooks";
import { useGetRecipesQuery } from "../../store/api/api";

import RecipeItem from "../RecipeItem/RecipeItem";

const RecipeList = () => {
   const { favourites } = useAppSelector((state) => state);
   const { user } = useAppSelector((state) => state.user);
   const { searchValue } = useAppSelector(state => state.search);

   const { isLoading, data, error } = useGetRecipesQuery(searchValue, {
      skip: !user
   });

   const isFavourite = (id: number) => {
      if (favourites.some((recipe) => recipe.id === id)) return true;
      return false;
   };

   if (isLoading) return "Загрузка...";

   if (error) return "Ошибка";

   if (!data || data.length === 0) return <div>Рецептов нет :(</div>;

   return (
      <section className="recipe_list">
         {data.map((reciepe) => (
            <RecipeItem key={reciepe.id} recipe={reciepe} favourite={isFavourite(reciepe.id)} />
         ))}
      </section>
   );
};

export default RecipeList;
