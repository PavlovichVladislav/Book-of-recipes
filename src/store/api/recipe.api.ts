import { IRecipe } from "../../models/AppModels";
import { api } from "./api";

// export const recipeApi = api.injectEndpoints({
//     endpoints: (builder) => ({
//         getRecipes: builder.query<IRecipe, null>({
//             query: () => `/`,
//         }),
//         createRecipe: builder.mutation({
//             query: (recipe) => ({
//                 body: recipe,
//                 url: '/',
//                 method: 'POST',
//             })
//         })
//     })
// })