import { useState, useEffect } from "react";
import Tarjeta from "./Tarjeta";

const Body = () => {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(async () => {
    const url = "../../assets/data.json";
    const response = await fetch(url);
    const responseJSON = await response.json();
    setPeliculas(responseJSON.Search);
  }, []);

  return (
    <div className="flex justify-center gap-5 flex-wrap m-auto">
      {peliculas.map((pelicula, index) => {
        console.log(pelicula);
        return <Tarjeta key={index} pelicula={pelicula} />;
      })}
    </div>
  );
};

export default Body;
