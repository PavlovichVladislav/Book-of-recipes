export interface IRecipe {
   id: number;
   name: string;
   image: string;
}

export type IRecipeData = Omit<IRecipe, 'id'>

export interface IUser {
   id: number;
   name: string;
}
