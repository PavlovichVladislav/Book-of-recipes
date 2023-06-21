import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import Header from "./components/Header/Header";

import RecipeList from "./components/RecipeList/RecipeList";

function App() {
   return (
      <div className="container">
         <Header />
         <CreateRecipe/>
         <RecipeList/>
      </div>
   );
}

export default App;
