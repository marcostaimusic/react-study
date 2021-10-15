import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //   const categories = ["one", "two", "three"];
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h1>hello World!</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, index) => {
          return <GifGrid category={category} key={index} />;
        })}
      </ol>
    </>
  );
};
/* <button onClick={handleAdd}>Add category</button> */
