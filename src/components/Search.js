import React, {useState} from "react";
// import TextField from './MakeTextField';
// import Button from './Makebutton';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';


const Search = (props) => {
  const [searchValue,setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    // console.log(e);
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
    <form className="search">
      <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      {/* <TextField>
        value = {searchValue}
        onChange = {handleSearchInputChanges}
      </TextField> */}
      {/* <Button onClick="{callSearchFunction}"/> */}
    </form>
  )
}

export default Search;
