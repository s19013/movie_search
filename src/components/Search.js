import React, {useState} from "react";
import TextField from './MakeTextField';
import Button from './Makebutton';

const Search = (props) => {
  const [searchValue,setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
    <form className="search">
      <TextField>
        value = {searchValue}
        onChange = {handleSearchInputChanges}
      </TextField>
      <Button onClick={callSearchFunction} type="submit" value="SEARCH"/>
    </form>
  )
}

export default Search;