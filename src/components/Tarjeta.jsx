import { useState } from "react";

const Tarjeta = ({ pelicula }) => {
  const [verInformacion, setVerInformacion] = useState(false);
  const { Poster, Title, Type, Year } = pelicula;
  return (
    <div
      className="flex flex-col justify-between rounded-md shadow-md shadow-black w-36 h-52 sm:w-48 sm:h-64 md:w-58 md:h-72 lg:w-56 lg:h-80"
      style={{
        backgroundImage: `url(${Poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <p
          className="text-gray-100 text-xl text-center font-bold bg-black bg-opacity-60 rounded-full w-8 h-full ml-5 mt-1  hover:cursor-pointer hover:text-black hover:bg-gray-100 hover:bg-opacity-60 transition-colors duration-500"
          onClick={() => {
            setVerInformacion(!verInformacion);
            setTimeout(() => {
              setVerInformacion(false);
            }, 3000);
          }}
        >
          i
        </p>
      </div>

      {verInformacion && (
        <div className="bg-gray-900 bg-opacity-80 rounded-b-md">
          <div className="flex justify-between mt-1 p-2">
            <p className="font-semibold text-gray-200 text-md ">{Title}</p>
            <p className="text-gray-200 pl-2 text-md font-extralight">{Year}</p>
          </div>

          <div className="flex justify-center mx-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 hover:cursor-pointer rounded-md transition-colors duration-300">
            <p className="text-sky-600 font-medium text-sm">+</p>
            <p className="text-sky-600 pl-2 font-medium text-sm">
              Lista de Reproducción
            </p>
          </div>

          <div className="flex justify-around mx-auto mt-1 mb-2 w-min px-3  hover:bg-gray-800 hover:cursor-pointer text-center text-gray-300 rounded-md transition-colors duration-300">
            <p>{">"}</p>
            <p className="text-xs py-2 font-bold pl-3">Trailer</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tarjeta;
