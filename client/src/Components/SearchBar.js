import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
    
  return (
    <Input 
     key="random1"
     value={keyword}
     placeholder={"search by restaurant name"}
     onChange={(e) => setKeyword(e.target.value)}
     icon="search"
     fluid
    />
  );
}

export default SearchBar