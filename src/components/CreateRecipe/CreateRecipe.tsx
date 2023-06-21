import React, { useState } from "react";
import Button from "../Button/Button";

import styles from "./CreateRecipe.module.css";
import { useCreateRecipeMutation } from "../../store/api/api";

const CreateRecipe = () => {
   const [name, setName] = useState("");
   const [image, setImage] = useState("");

   const [createRecipe] = useCreateRecipeMutation();

   const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      createRecipe({ name, image }).then(() => {
         setName("");
         setImage("");
      });
   };

   return (
      <form className={styles.form}>
         <p>Create recipe</p>
         <input
            className={styles.input}
            type="text"
            placeholder="Название рецепта"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <input
            className={styles.input}
            type="text"
            placeholder="url изображения"
            value={image}
            onChange={(e) => setImage(e.target.value)}
         />
         <Button onClick={(e) => onSubmit(e)}>Отправить форму</Button>
      </form>
   );
};

export default CreateRecipe;
