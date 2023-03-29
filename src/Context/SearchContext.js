import { createContext, useState } from "react";

const SearchContext = createContext({
  searchValue: "",
  handleSearch: (searchVal) => {},
});

const SearchContextProvider = (props) => {
  const [searchedValue, setSearchedValue] = useState("");
  const handleSearchedValue = (searchVal) => {
    setSearchedValue(searchVal);
  };
  const contextValue = {
    searchValue: searchedValue,
    handleSearch: handleSearchedValue,
  };
  return <SearchContext.Provider value={contextValue}>{props.children}</SearchContext.Provider>;
};

export { SearchContextProvider, SearchContext };
