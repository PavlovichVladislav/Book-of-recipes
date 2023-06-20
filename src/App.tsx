import RecipeItem from "./components/RecipeItem/RecipeItem";
import { useAppSelector } from "./hooks/reduxHooks";

const recipes = [
   { id: 1, name: "test" },
   { id: 2, name: "test2" },
];

function App() {
   const { favourites } = useAppSelector((state) => state);
   console.log(favourites);
   
   const isFavourite = (id: number) => {
      if (favourites.some((recipe) => recipe.id === id)) return true;
      return false;
   };

   return (
      <div>
         {recipes.map((reciepe) => (
            <RecipeItem key={reciepe.id} recipe={reciepe} favourite={isFavourite(reciepe.id)} />
         ))}
      </div>
   );
}

export default App;
