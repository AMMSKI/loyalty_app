import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <Input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search by resturant name"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar