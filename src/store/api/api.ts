import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRecipe } from '../../models/AppModels'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4200/recipes",
    }),
    endpoints: (builder) => ({
        getRecipes: builder.query<IRecipe[], string>({
            query: () => `/`,
        }),
        createRecipe: builder.mutation({
            query: (recipe) => ({
                body: recipe,
                url: '/',
                method: 'POST',
            })
        })
    })
})

export const { useGetRecipesQuery, useCreateRecipeMutation } = api;