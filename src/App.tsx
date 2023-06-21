import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import Header from "./components/Header/Header";

import RecipeList from "./components/RecipeList/RecipeList";
import SearchPannel from "./components/SearchPannel/SearchPannel";

function App() {
   return (
      <div className="container">
         <Header />
         <SearchPannel />
         <CreateRecipe />
         <RecipeList />
      </div>
   );
}

export default App;
