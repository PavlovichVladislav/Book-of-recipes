import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRecipe, IRecipeData } from "../../models/AppModels";

export const api = createApi({
   reducerPath: "api",
   tagTypes: ["Recipe"],
   baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:4200/recipes",
   }),
   endpoints: (builder) => ({
      getRecipes: builder.query<IRecipe[], string>({
         query: (search) => `/?q=${search}`,
         providesTags: () => [
            {
               type: "Recipe",
            },
         ],
      }),
      createRecipe: builder.mutation<null, IRecipeData>({
         query: (recipe) => ({
            body: recipe,
            url: "/",
            method: "POST",
         }),
         invalidatesTags: () => [
            {
               type: "Recipe",
            },
         ],
      }),
   }),
});

export const { useGetRecipesQuery, useCreateRecipeMutation } = api;
