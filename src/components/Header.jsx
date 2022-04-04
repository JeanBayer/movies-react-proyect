const Header = ({ setUrlState }) => {
  const changeUrl = (e) => {
  
    let delayDebounceFn = setTimeout(() => {
        setUrlState(
          `https://www.omdbapi.com/?s=${e.target.value}&apikey=76af91cc`
        );
        clearTimeout(delayDebounceFn);
    }, 3000);
  };
  return (
    <header className="w-screen bg-gray-100 py-2 text-gray-800 font-bold mb-3 flex justify-between px-8  sticky top-0">
      <p>Movies</p>
      <input
        type="text"
        className="mr-4  w-40 text-xs py-2 px-2 transition-shadow shadow-md border-opacity-40 focus:outline-none focus:text-pink-700 focus:font-bold bg-gray-100 focus:bg-gray-100 focus:shadow-inner rounded-md"
        placeholder="Type the name"
        onChange={(e) => changeUrl(e)}
      />
    </header>
  );
};

export default Header;
