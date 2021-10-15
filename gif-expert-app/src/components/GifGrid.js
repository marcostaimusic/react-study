import React, { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => {
          return <GifGridItem {...image} key={image.id} />; // * con lo spread operator sull'oggetto passo i valori destrutturati
        })}
      </div>
    </>
  );
};
