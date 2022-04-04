import { useState, useEffect } from "react";
import Tarjeta from "./Tarjeta";

const Body = ({ urlState }) => {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(async () => {
    let response = await fetch(urlState);
    let responseJSON = await response.json();
    if (responseJSON.Response === "False") {
      response = await fetch("../../assets/data.json");
      responseJSON = await response.json();
      setPeliculas(responseJSON.Search);
    } else {
      setPeliculas(responseJSON.Search);
    }
  }, [urlState]);

  return (
    <div className="flex flex-wrap gap-6 justify-around mx-5">
      {peliculas.map((pelicula, index) => {
        return <Tarjeta key={index} pelicula={pelicula} />;
      })}
    </div>
  );
};

export default Body;
