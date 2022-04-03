const Tarjeta = ({ pelicula }) => {
  const { Poster, Title, Type, Year } = pelicula;
  return (
    <div>
      <p>{Title}</p>
      <img src={Poster} alt="" />

      <p>{Type}</p>
      <p>{Year}</p>
    </div>
  );
};

export default Tarjeta;
